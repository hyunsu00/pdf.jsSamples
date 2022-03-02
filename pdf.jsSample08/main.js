import "./web/viewer.js";
import "./lib/pdf-annotate-render.js";
import "./lib/pdf-annotate-writer.js";

let AnnotateRender = PDFAnnotateRender["default"];
const UI = AnnotateRender.UI;
AnnotateRender.setStoreAdapter(new AnnotateRender.LocalStoreAdapter());

let toolType = undefined;
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

  toolType = type;
}

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

//
//
//
// 다운로드
document.getElementById("download").addEventListener("click", (e) => {
  console.log("click download");

  // !!! 수정필요 !!!
  // let pdfDocument = PDFViewerApplication.pdfDocument;
  // pdfDocument.getData().then((data) => {
  //   let pdfAnnotateWriter = new PDFAnnotateWriter.AnnotationFactory(data);
  //   const pagesCount = PDFViewerApplication.pagesCount;
  //   for (let i = 1; i <= pagesCount; i++) {
  //     pdfDocument.getPage(i).then(function (page) {
  //       let pageHeight = page.view[3];
  //       AnnotateRender.getAnnotations("./compressed.tracemonkey-pldi-09.pdf", page._pageIndex + 1).then(function (annotations) {
  //         for (let j = 0; j < annotations.annotations.length; j++) {
  //           let annotation = annotations.annotations[j];
  //           let x_y = [annotation.x * 0.75, pageHeight - annotation.y * 0.75];
  //           let coordinates = [x_y[0], x_y[1], x_y[0] + annotation.width * 0.75, x_y[1] - annotation.height * 0.75];
  //           pdfAnnotateWriter.createSquareAnnotation(page._pageIndex, coordinates.slice(), null, null);
  //         }
  //       });
  //     });
  //   }
  //   pdfAnnotateWriter.download();
  // });

  // 임시
  let pdfDocument = PDFViewerApplication.pdfDocument;
  let pageNumber = 1;
  pdfDocument.getPage(pageNumber).then(function (page) {
    let pageHeight = page.view[3];
    pdfDocument.getData().then((data) => {
      let pdfAnnotateWriter = new PDFAnnotateWriter.AnnotationFactory(data);
      AnnotateRender.getAnnotations("./compressed.tracemonkey-pldi-09.pdf", pageNumber).then(function (annotations) {
        for (let i = 0; i < annotations.annotations.length; i++) {
          let annotation = annotations.annotations[i];
          let x_y = [annotation.x * 0.75, pageHeight - annotation.y * 0.75];
          let coordinates = [x_y[0], x_y[1], x_y[0] + annotation.width * 0.75, x_y[1] - annotation.height * 0.75];
          pdfAnnotateWriter.createSquareAnnotation(pageNumber - 1, coordinates.slice(), null, null);
        }
        pdfAnnotateWriter.download();
      });
    });
  });
});
