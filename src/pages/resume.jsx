import React from "react";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import Header from "../components/header";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  return (
    <div className="flex flex-col flex-1 bg-gradient-to-r from-purple-1 to-purple-2 min-h-screen">
      <Header />
      <div className="flex flex-col flex-1 items-center justify-center p-4">
        <Document file="/DiksonSamuelResume2024.pdf">
          <Page
            renderMode="canvas"
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="w-full max-w-md" // Responsive max width for the PDF
          />
        </Document>
        <a
          href="/DiksonSamuelResume2024.pdf" // Path to your PDF file
          download // This attribute triggers the download
          className="mt-4 bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
