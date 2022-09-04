//自分流のコード
import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addIncompTodo(inputText);
};

const addIncompTodo = (text) => {
  // liタグを生成
  const li = document.createElement("li");
  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";
  // pタグを生成
  const p = document.createElement("p");
  p.className = "list-note";
  p.innerText = text;
  //ボタン（完了）を生成
  const compBtn = document.createElement("button");
  compBtn.innerText = "完了";
  compBtn.addEventListener("click", () => {
    const completeText = compBtn.previousSibling.textContent;
    addCompTodo(completeText);
    const resetTarget = compBtn.parentNode.parentNode;
    document.getElementById("incomp-list").removeChild(resetTarget);
  });
  //ボタン（削除）を生成
  const delBtn = document.createElement("button");
  delBtn.innerText = "削除";
  delBtn.addEventListener("click", () => {
    const delTarget = delBtn.parentNode.parentNode;
    document.getElementById("incomp-list").removeChild(delTarget);
  });
  //
  // 子要素に入れる
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(compBtn);
  div.appendChild(delBtn);
  // domに追加
  document.getElementById("incomp-list").appendChild(li);
};

const addCompTodo = (text) => {
  // liタグを生成
  const li = document.createElement("li");
  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";
  // pタグを生成
  const p = document.createElement("p");
  p.className = "list-note";
  p.innerText = text;
  // ボタン（戻す）生成
  const returnBtn = document.createElement("button");
  returnBtn.innerText = "戻す";
  returnBtn.addEventListener("click", () => {
    const returnText = returnBtn.previousSibling.textContent;
    addIncompTodo(returnText);
    const resetTarget = returnBtn.parentNode.parentNode;
    document.getElementById("comp-list").removeChild(resetTarget);
  });
  // 子要素に追加
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(returnBtn);
  // domに追加
  document.getElementById("comp-list").appendChild(li);
};

//
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// import "./styles.css";

// const onClickAdd = () => {
//   // テキストボックスの値を取得し初期化する
//   const inputText = document.getElementById("add-text").value;
//   document.getElementById("add-text").value = "";
//   createIncompList(inputText);
// };
// //未完了TODOから指定の要素を削除
// const deleteFromIncompleteList = (target) => {
//   document.getElementById("incomp-list").removeChild(target);
// };
// //未完了リストに追加する関数
// const createIncompList = (text) => {
//   // liタグを生成
//   const li = document.createElement("li");
//   // divタグを生成
//   const div = document.createElement("div");
//   div.className = "list-row";
//   // pタグを生成
//   const p = document.createElement("p");
//   p.className = "list-note";
//   p.innerText = text;
//   //ボタン（完了）を生成
//   const compBtn = document.createElement("button");
//   compBtn.innerText = "完了";
//   compBtn.addEventListener("click", () => {
//     //押された完了ボタンの親タグ（div）を未完了リストから削除
//     deleteFromIncompleteList(compBtn.parentNode.parentNode);

//     //完了リストに追加する要素
//     const addTarget = compBtn.parentNode.parentNode;

//     //todo内容テキストを取得
//     const text = addTarget.firstElementChild.firstElementChild.innerText;
//     //div以下を初期化
//     addTarget.firstChild.textContent = null;
//     //pタグを生成
//     const p = document.createElement("p");
//     p.className = "list-note";
//     p.innerText = text;
//     // ボタン（戻す）の生成
//     const backBtn = document.createElement("button");
//     backBtn.innerText = "戻す";
//     backBtn.addEventListener("click", () => {
//       const deleteTarget = backBtn.parentNode.parentNode;
//       document.getElementById("comp-list").removeChild(deleteTarget);
//       // テキスト取得
//       const text = backBtn.previousSibling.innerText;
//       // console.log(text);
//     });
//     // divタグの子要素に各要素を設定
//     addTarget.firstElementChild.appendChild(p);
//     addTarget.firstElementChild.appendChild(backBtn);
//     //完了リストに追加
//     document.getElementById("comp-list").appendChild(addTarget);
//     const delBtn = document.createElement("button");
//     delBtn.innerText = "削除";
//     delBtn.addEventListener("click", () => {
//       deleteFromIncompleteList(delBtn.parentNode.parentNode);
//     });
//     //
//     // 子要素に入れる
//     li.appendChild(div);
//     div.appendChild(p);
//     div.appendChild(compBtn);
//     div.appendChild(delBtn);
//     // domに追加
//     document.getElementById("incomp-list").appendChild(li);
// };
// document
//   .getElementById("add-button")
//   .addEventListener("click", () => onClickAdd());
