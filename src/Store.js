import { makeAutoObservable } from "mobx";

class Store {
  body = "H5Game"; //body顯示的頁面
  dialogsOpen = false; //dialogs是否開啟
  gameDialogsInfo = {
    title: "Modal title",
    tags: [],
    text: "Test Text",
    page: <div></div>,
  };
}

export const store = makeAutoObservable(new Store());
window["store"] = store;
