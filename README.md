# セッションのはじめに
* npm run dev でアプリを動かす
* ngrok http PORT でアプリを共有する
* VS CodeでLiveShareをする
* npm run test でテストをウォッチする

## VRTについて
* Playwright の Component Testsを用いて実験中
  * https://playwright.dev/docs/test-components
* Watchモードはない
* テストを実行したい時
  * npm run test-ct
    * 失敗したときには VRT の結果レポートが見れるブラウザが自動的に立ち上がる
  * あるいは  VS Code の Extensionから
    * VRTの結果レポートをみるには npx playwright show-report でブラウザを立ち上げる
* スクリーンショットをアップデートしたい時
  * npm run test-ct -- --update-snapshots