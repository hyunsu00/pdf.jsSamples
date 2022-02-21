// main.js
let PDFJSAnnotate = PDFAnnotate["default"];
const UI = PDFJSAnnotate.UI;
let localStoreAdapter = new PDFJSAnnotate.LocalStoreAdapter();
let MyStoreAdapter = new PDFJSAnnotate.StoreAdapter({
  getAnnotations(documentId, pageNumber) {
    return localStoreAdapter.getAnnotations(documentId, pageNumber);
  },
  getAnnotation(documentId, annotationId) {
    return localStoreAdapter.getAnnotation(documentId, annotationId);
  },
  addAnnotation(documentId, pageNumber, annotation) {
    // annotation.x = 312;
    // annotation.y = 460;
    // annotation.width = 250;
    // annotation.height = 170;

    let x_y = [annotation.x, 800 - annotation.y];
    let coordinates = [x_y[0], x_y[1], x_y[0] + annotation.width, x_y[1] - annotation.height];
    pdfFactory.createSquareAnnotation(pageNumber - 1, coordinates.slice(), null, null);
    return localStoreAdapter.addAnnotation(documentId, pageNumber, annotation);
  },
  editAnnotation(documentId, pageNumber, annotation) {
    return localStoreAdapter.editAnnotation(documentId, pageNumber, annotation);
  },
  deleteAnnotation(documentId, annotationId) {
    return localStoreAdapter.deleteAnnotation(documentId, annotationId);
  },
  getComments(documentId, annotationId) {
    return localStoreAdapter.getComments(documentId, annotationId);
  },
  addComment(documentId, annotationId, content) {
    return localStoreAdapter.addComment(documentId, annotationId, content);
  },
  deleteComment(documentId, commentId) {
    return deleteComment(documentId, commentId);
  },
});
PDFJSAnnotate.setStoreAdapter(MyStoreAdapter);

//PDFJSAnnotate.setStoreAdapter(new PDFJSAnnotate.LocalStoreAdapter());
// pdf 파일 경로 설정
let url = "./samples/compressed.tracemonkey-pldi-09.pdf";
const RENDER_OPTIONS = {
  documentId: url,
  pdfDocument: null,
  scale: 1.0,
  rotate: 0,
};

window.onload = () => {
  // PDF 비동기 다운로드
  const VIEWER = document.getElementById("viewer");
  let loadingTask = pdfjsLib.getDocument(RENDER_OPTIONS.documentId);
  loadingTask.promise.then(
    function (pdf) {
      console.log("PDF 파일 로드됨");

      pdf.getData().then((data) => {
        pdfFactory = new pdfAnnotate.AnnotationFactory(data);
      });

      // 첫 페이지 가져오기
      let pageNumber = 1;
      pdf.getPage(pageNumber).then(function (page) {
        console.log("PDF 파일 페이지 로드됨");

        RENDER_OPTIONS.pdfDocument = pdf;
        VIEWER.appendChild(UI.createPage(1));
        UI.renderPage(1, RENDER_OPTIONS);
      });
    },
    function (reason) {
      // PDF 로딩 오류
      console.error(reason);
    }
  );

  function handleAnnotationClick(target) {
    console.log("click handleAnnotationClick");
  }

  function handleAnnotationBlur(target) {
    console.log("click handleAnnotationBlur");
  }

  UI.addEventListener("annotation:click", handleAnnotationClick);
  UI.addEventListener("annotation:blur", handleAnnotationBlur);

  // 직사각형 그리기
  document.getElementById("area").addEventListener("click", (e) => {
    console.log("click area");
    UI.enableRect("area");
  });

  document.getElementById("download").addEventListener("click", (e) => {
    console.log("click download");
    pdfFactory.download();
  });
};
