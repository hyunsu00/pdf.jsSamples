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
  entry: "./src/pdf.worker.js",
  // Output 설정 (출력 디렉터리와 파일 이름)
  // 기본경로 : dist/main.js -> 사용자 경로 및 출력파일 이름 변경
  output: {
    filename: "pdf.worker.js",
    path: path.resolve(__dirname, "dist"),
    // library : 엔트리 포인트의 export를 내보내는 라이브러리 설정
    // https://webpack.kr/configuration/output/#outputlibrary
    library: "pdfjs-dist/build/pdf.worker",
    // libraryTarget : 라이브러리를 내보내는 방식을 설정
    // https://webpack.kr/configuration/output/#outputlibrarytarget
    // 'this', 'window', 'global', 'commonjs', 'module', 'commonjs2',
    // 'amd', 'amd-require', 'umd'
    libraryTarget: "umd",
    // libraryTarget: "umd"를 사용할 때 output.umdNamedDefine을 true로 설정하면 UMD 빌드의 AMD 모듈 이름이 지정됩니다.
    // 그렇지 않으면 익명의 define이 사용됩니다.
    // https://webpack.kr/configuration/output/#outputumdnameddefine
    umdNamedDefine: true,
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
      pdfjs: path.resolve(__dirname, "src"),
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
            DEFAULT_PREFERENCES: {},
          },
        },
      },
    ],
  },
};
