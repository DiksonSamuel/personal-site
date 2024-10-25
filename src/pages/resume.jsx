import React from "react";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import Header from "../components/header";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const Resume = () => {
  return (
    <div className="flex flex-col flex-1 bg-gradient-to-r from-purple-1 to-purple-2 min-h-screen">
      <Header />
      <div className="flex flex-col flex-1 items-center justify-center p-4">
        <div className="max-w-screen"> {/* Responsive container */}
          <Document file={`/DiksonSamuelResume2024.pdf`}>
            <Page
              renderMode="canvas"
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={window.innerWidth > 768 ? window.innerWidth * 0.6 : window.innerWidth * 0.8}  // Adjusts width based on screen size
              height={window.innerHeight * 0.9}
            />
          </Document>
        </div>
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

// const PDFWrapper = ({ data, onDocumentLoadSuccess, pageNumber }) => {
//   const [pdfWidth, setPdfWidth] = useState(null);
//   const pdfWrapper = useRef();

//   const setPdfSize = () => {
//     if (pdfWrapper.current) {
//       const containerWidth = pdfWrapper.current.getBoundingClientRect().width;
//       setPdfWidth(containerWidth); // Adjust based on container width
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('resize', throttle(setPdfSize, 300)); // Throttle resize event for performance
//     setPdfSize();
//     return () => {
//       window.removeEventListener('resize', throttle(setPdfSize, 300));
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         width: '100vw',
//       }}
//     >
//       <div
//         ref={pdfWrapper}
//         style={{
//           width: '90vw', // Make the PDF take 90% of the viewport width
//           height: 'auto',
//         }}
//       >
//         <Document
//           file={data}
//           onLoadSuccess={onDocumentLoadSuccess}
//           loading="Loading PDF..."
//         >
//           <Page
//             pageNumber={pageNumber}
//             width={pdfWidth} // Make the PDF responsive by width
//             renderTextLayer={false}
//             renderAnnotationLayer={false}
//           />
//         </Document>
//       </div>
//     </div>
//   );
// };

export default Resume;
