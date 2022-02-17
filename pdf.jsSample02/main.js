// main.js

window.onload = () => {
  let pdfUrl = "./samples/compressed.tracemonkey-pldi-09.pdf";
  let pdfContainer = document.getElementById("viewerContainer");
  pdfViewer = new pdfjsViewer.PDFViewer({
    container: pdfContainer,
  });
  let loadingTask = pdfjsLib.getDocument({
    url: pdfUrl,
  });
  loadingTask.promise.then((pdfDocument) => {
    pdfDocument.getData().then((data) => {
      pdfFactory = new pdfAnnotate.AnnotationFactory(data);
    });
    pdfViewer.setDocument(pdfDocument);
    setTimeout(() => {
      pdfViewer.currentScaleValue = "page-width";
    }, 1500);
  });

  // let once = false;
  // let pdfFactory = undefined;
  // let pdfViewer = undefined;
  // let coordinates = [];

  // let __x_1 = 0;
  // let __y_1 = 0;
  // let doCircle = false;
  // let doSquare = false;
  // document.getElementById("content").value = "Test Content";
  // document.getElementById("author").value = "Test Author";

  // 직사각형 그리기
  document.getElementById("area").addEventListener("click", (e) => {
    console.log("click area");
    let coordinates = [43, 722, 143, 670];
    pdfFactory.createSquareAnnotation(
      pdfViewer.currentPageNumber - 1,
      coordinates.slice(),
      null,
      null
    );
  });

  document.getElementById("download").addEventListener("click", (e) => {
    console.log("click download");
    pdfFactory.download();
  });
};
