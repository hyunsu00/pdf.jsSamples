const path = require("path");
const webpack = require("webpack");

module.exports = {
  // 모드
  // development -> 개발모드
  // production -> 배포모드(기본값)
  // none -> 기본 최적화 옵션 해제
  mode: "none",
  // Entry 설정 (입력 파일 경로)
  // 기본엔트리 : index.js -> 사용자 기본 엔트리파일 변경
  entry: "./web/viewer.js",
  // Output 설정 (출력 디렉터리와 파일 이름)
  // 기본경로 : dist/main.js -> 사용자 경로 및 출력파일 이름 변경
  output: {
    filename: "viewer.js",
    path: path.resolve(__dirname, "dist/web/"),
    // 브라우저와 Node.js 모두에서 UMD 빌드를 사용할 수 있도록 하려면 output.globalObject옵션 'this' 설정
    // 기본값 : self (브라우저)
    // https://webpack.js.org/configuration/output/#outputglobalobject
    globalObject: "this",
  },
  plugins: [
    // 웹팩의 빌드 진행율을 표시해주는 플러그인
    new webpack.ProgressPlugin(),
  ],
  resolve: {
    alias: {
      "pdfjs-lib": path.resolve(__dirname, "web/pdfjs"),
    },
  },
  // 소스 맵
  // https://webpack.kr/configuration/devtool/#devtool
  // (none) -> 최대 성능을 갖춘 프로덕션 빌드를 위해 추천하는 옵션
  // inline-source-map -> 단일 파일을 내보낼 때 선택
  // source-map -> 고품질 소스맵을 포함한 프로덕션 빌드를 위해 추천하는 옵션
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        loader: path.resolve(__dirname, "external/webpack/pdfjsdev-loader.js"),
        options: {
          rootPath: path.resolve(__dirname, "src/pdf.js"),
          saveComments: false,
          defines: {
            PRODUCTION: true,
            SKIP_BABEL: true,
            TESTING: false,
            GENERIC: true,
            MOZCENTRAL: false,
            CHROME: false,
            MINIFIED: false,
            COMPONENTS: false,
            LIB: false,
            IMAGE_DECODERS: false,
            BUNDLE_VERSION: "2.12.313",
            BUNDLE_BUILD: "a2ae56f",
            DEFAULT_PREFERENCES: {
              annotationMode: 2,
              cursorToolOnLoad: 0,
              defaultZoomValue: "",
              disablePageLabels: false,
              enablePermissions: false,
              enablePrintAutoRotate: true,
              enableScripting: true,
              externalLinkTarget: 0,
              historyUpdateUrl: false,
              ignoreDestinationZoom: false,
              pdfBugEnabled: false,
              renderer: "canvas",
              sidebarViewOnLoad: -1,
              scrollModeOnLoad: -1,
              spreadModeOnLoad: -1,
              textLayerMode: 1,
              useOnlyCssZoom: false,
              viewerCssTheme: 0,
              viewOnLoad: 0,
              disableAutoFetch: false,
              disableFontFace: false,
              disableRange: false,
              disableStream: false,
              enableXfa: true,
            },
          },
        },
      },
    ],
  },
};
