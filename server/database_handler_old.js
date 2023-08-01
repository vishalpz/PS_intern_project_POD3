import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { PineconeClient } from "@pinecone-database/pinecone";
import { Document } from "langchain/document";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { CharacterTextSplitter } from "langchain/text_splitter";
import dotenv from 'dotenv';
dotenv.config();

// Example: https://js.langchain.com/docs/modules/indexes/document_loaders/examples/file_loaders/pdf
export default async function handler(req, res) {
    console.log("Inside the PDF handler");
    // Enter your code here
    /** STEP ONE: LOAD DOCUMENT */
    const bookPath = "/Users/arynevgi/Desktop/LangChainCourse/openai-javascript-course/data/document_loaders/naval-ravikant-book.pdf";
    const loader = new PDFLoader(bookPath);

    const docs = await loader.load();

    console.log(docs);

    if (docs.length === 0) {
      console.log("No docs found!");
      return;
    };

    // Chunk it

    const splitter = new CharacterTextSplitter({
      separator: " ",
      chunkSize: 250,
      chunkOverlap: 10,
    });

    const splitDocs = await splitter.splitDocuments(docs);

    // Reduce the size of the metadata

    const reduceDocs = splitDocs.map( (doc) => { 
      const reducedMetadata = { ...doc.metadata};
      delete reducedMetadata.pdf;
      return new Document({
        pageContent: doc.pageContent,
        metadata: reducedMetadata
      });
    });

    console.log(reduceDocs[0]);
    console.log(splitDocs.length);
    /** STEP TWO: UPLOAD TO DATABASE */
    const client = new PineconeClient();

    console.log(process.env.PINECONE_API_KEY);
    await client.init({
      apiKey: process.env.PINECONE_API_KEY,
      environment: process.env.PINECONE_ENVIRONMENT
    });
    console.log('after init');
    const pineconeIndex = client.Index(process.env.PINECONE_INDEX);
    console.log('after index');
    // upload documents to Pinecone

    await PineconeStore.fromDocuments(reduceDocs, new OpenAIEmbeddings(), {
      pineconeIndex
    });

    console.log("Uploaded");

    return res.status(200).json({ result: docs });
}
