import "./web/viewer.js";
import "./lib/pdf-annotate.js";

let PDFJSAnnotate = PDFAnnotate["default"];
const UI = PDFJSAnnotate.UI;
PDFJSAnnotate.setStoreAdapter(new PDFJSAnnotate.LocalStoreAdapter());

// 직사각형 그리기
document.getElementById("area").addEventListener("click", (e) => {
  console.log("click area");
  UI.enableRect("area");
});
