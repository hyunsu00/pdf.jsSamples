// main.js

// let pdfjsLib = window["pdfjs-dist/build/pdf"];
// workerSrc 속성 지정
pdfjsLib.GlobalWorkerOptions.workerSrc = "./external/pdfjs-dist/build/pdf.worker.js";

// let PDFAnnotate = window.PDFAnnotate;
let PDFJSAnnotate = PDFAnnotate["default"];
const UI = PDFJSAnnotate.UI;
PDFJSAnnotate.setStoreAdapter(new PDFJSAnnotate.LocalStoreAdapter());
// pdf 파일 경로 설정
let url = "./samples/compressed.tracemonkey-pldi-09.pdf";
const RENDER_OPTIONS = {
  documentId: url,
  pdfDocument: null,
  scale: 1,
  rotate: 0,
};

let toolType;
function setActiveToolbarItem(type) {
  switch (toolType) {
    case "cursor":
      UI.disableEdit();
      break;
    case "eraser":
      UI.disableEraser();
      break;
    case "draw":
      UI.disablePen();
      break;
    case "arrow":
      UI.disableArrow();
      break;
    case "text":
      UI.disableText();
      break;
    case "point":
      UI.disablePoint();
      break;
    case "area":
    case "highlight":
    case "strikeout":
      UI.disableRect();
      break;
    case "circle":
    case "emptycircle":
    case "fillcircle":
      UI.disableCircle();
      break;
  }

  toolType = type;

  switch (type) {
    case "cursor":
      UI.enableEdit();
      break;
    case "eraser":
      UI.enableEraser();
      break;
    case "draw":
      UI.enablePen();
      break;
    case "arrow":
      UI.enableArrow();
      break;
    case "text":
      UI.enableText();
      break;
    case "point":
      UI.enablePoint();
      break;
    case "area":
    case "highlight":
    case "strikeout":
      UI.enableRect(type);
      break;
    case "circle":
    case "emptycircle":
    case "fillcircle":
      UI.enableCircle(type);
      break;
  }
}

window.onload = () => {
  // PDF 비동기 다운로드
  const VIEWER = document.getElementById("viewer");
  let loadingTask = pdfjsLib.getDocument(RENDER_OPTIONS.documentId);
  loadingTask.promise.then(
    function (pdf) {
      console.log("PDF 파일 로드됨");

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

  // 선택
  document.getElementById("cursor").addEventListener("click", (e) => {
    console.log("click cursor");
    setActiveToolbarItem("cursor");
  });

  // 직사각형 그리기
  document.getElementById("area").addEventListener("click", (e) => {
    console.log("click area");
    UI.disableRect();
    setActiveToolbarItem("area");
  });

  // 강조
  document.getElementById("highlight").addEventListener("click", (e) => {
    console.log("click highlight");
    UI.disableRect();
    setActiveToolbarItem("highlight");
  });

  // 자유형 그리기
  document.getElementById("draw").addEventListener("click", (e) => {
    console.log("click draw");
    UI.disableRect();
    setActiveToolbarItem("draw");

    let penSize = 10;
    let penColor = "#E71F63";
    UI.setPen(penSize, penColor);
  });

  // 취소선
  document.getElementById("strikeout").addEventListener("click", (e) => {
    console.log("click strikeout");
    setActiveToolbarItem("strikeout");
  });

  // 스티커 노트
  document.getElementById("point").addEventListener("click", (e) => {
    console.log("click point");
    setActiveToolbarItem("point");
  });

  // 텍스트
  document.getElementById("text").addEventListener("click", (e) => {
    console.log("click text");
    setActiveToolbarItem("text");

    let textSize = 48;
    let textColor = "#E71F63";
    UI.setText(textSize, textColor);
  });

  //
  //
  //
  // 주석표시
  document.getElementById("visible").addEventListener("click", (e) => {
    alert("주석표시 기능 구현이 되어있지 않음");

    console.log("click visible");
  });
  // 선 그리기
  document.getElementById("line").addEventListener("click", (e) => {
    alert("선 그리기 기능 구현이 되어있지 않음");

    console.log("click line");
  });
  // 화살표 그리기
  document.getElementById("arrow").addEventListener("click", (e) => {
    alert("화살표 그리기는 그려지지 않는 버그가 있음");

    console.log("click arrow");
    setActiveToolbarItem("arrow");
    let arrowSize = 10;
    let arrowColor = "#E71F63";
    UI.setArrow(arrowSize, arrowColor);
  });
  // 타원 그리기
  document.getElementById("circle").addEventListener("click", (e) => {
    alert("타원 그리기는 사이즈 변경이 안됨");

    console.log("click circle");
    setActiveToolbarItem("circle");
  });
  // 밑줄
  document.getElementById("underline").addEventListener("click", (e) => {
    alert("밑줄 기능 구현이 되어있지 않음");

    console.log("click underline");
  });
};
