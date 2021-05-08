/**
 * エントリーポイントを自分で設定する
 * node_modules/expo/AppEntry.jsの内容をコピーして
 * import App from "./src/App";のようにAppをインポートして
 * registerRootComponent(App);に指定
 * package.jsonのmain: にこのファイルを指定する
 */
import registerRootComponent from "expo/build/launch/registerRootComponent";

import App from "./src/App";

registerRootComponent(App);
