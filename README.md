# React Native + TypeScript + Expo 練習プロジェクト

## 開発環境

- Windows10 HOME
- node v14.16.0
- npm 6.14.11
- tsc Version 4.2.4

## 環境構築

1. テンプレートからプロジェクトを生成

   `expo init -t expo-template-blank-typescript`

   [expo 公式](https://docs.expo.io/guides/typescript/)

2. 画面遷移を簡単に出来る react-navigation をインストール

   `npm install @react-navigation/native`

   [react-navigation 公式](https://reactnavigation.org/docs/getting-started)

3. react-navigation と expo との依存関係をインストール

   `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

   [react-navigation 公式](https://reactnavigation.org/docs/getting-started)

4. スタックナビゲータライブラリのインストール

   `npm install @react-navigation/stack`

5. ディレクトリ構成・エントリーポイントの変更
   package.json の main: に指定されているパスがエントリーポイントを指定しているファイルになるので
   `"main": "node_modules/expo/AppEntry.js",`

   main に指定するファイルを適当な名前で作り、AppEntry.js の内容をコピーする。

   コピーしたら`import App from "./app/App";`のように任意のエントリーポイントを指定

## 実機で動作確認

    npm install
    npm start

    勝手にブラウザが立ち上がるのでQRコードをスマホに入れてるExpo goで読み取る
