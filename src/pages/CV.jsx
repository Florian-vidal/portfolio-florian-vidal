import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configuration du worker PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function CVpdf() {
  return (
    <div className="cv-container">
      <h2>Mon CV</h2>

      {/* Bouton de téléchargement */}
      <a href="/cv.pdf" download="CV_Florian_Vidal.pdf" className="btn-download">
        Télécharger mon CV
      </a>

      {/* Affichage direct de la première page du CV */}
      <Document file="/cv.pdf" className="cv">
        <Page pageNumber={1} width={600} />
      </Document>
    </div>
  );
}

export default CVpdf;
