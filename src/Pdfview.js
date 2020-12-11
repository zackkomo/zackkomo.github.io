import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "./App.css";

export default function PdfView(props) {
  const [numPages, setNumPages] = useState(null);
  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
  };
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <Document
      file={pdf}
      options={options}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={index} pageNumber={index + 1} width={450} />
      ))}
    </Document>
  );
}

// options={{ workerSrc: "/pdf.worker.js" }}
