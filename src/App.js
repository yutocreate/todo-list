import React, { useState } from "react";
import IncompleteTodos from "./components/IncompleteTodos";
import IncompleteTodosInProgress from "./components/IncompleteTodosInProgress";
import InputForm from "./components/InputForm";

let nowId = 0;
const App = () => {
  //todosという配列の中にtodoリスト１つ１つを格納していくand 未着手のtodoを格納する
  const [state, setState] = useState({
    todos: [],
  });
  //進行中のtodoを格納する
  const [InProgress, setInProgress] = useState({
    todos: [],
  });
  // 完了のtodoを格納する
  // const [complete, setComplete] = useState({
  //   todos: [],
  // });

  //分割代入でアクセスできるように！
  // const { todos } = state;
  // console.log(todos)

  //todoに追加するタイミングでプロパティを持たせ、今後活用しやすくする
  const handleSubmit = (todoText) => {
    const newTodo = {
      id: nowId,
      text: todoText,
    };
    const newTodos = [...state.todos, newTodo];
    setState({ todos: newTodos });
    nowId++;
  };

  //進行中へボタンを押したときに未着手のTodoから削除される and ゴミ箱としても使っている
  const goToInProgressDelete = (id) => {
    const newIncompleteTodos = state.todos.filter((todo) => todo.id !== id);
    //削除したあとの配列を取得、反映
    setState({ todos: newIncompleteTodos });
  };

  //未着手のtodoが進行中のTodoに移動
  const goToInProgress = (id) => {
    //newtodoは配列の中に１つのオブジェクト
    const newTodo = state.todos.filter((todo) => todo.id === id);
    //newTodosは配列の中に複数のオブジェクト
    const newTodos = [...InProgress.todos, newTodo[0]];
    setInProgress({ todos: newTodos });
  };

  return (
    <div className="container">
      <h1>Todoアプリ</h1>
      <InputForm onSubmit={handleSubmit} />
      <div className="incompleteTodos">
        <h3>未着手のTodo</h3>
        {state.todos.map(({ id, text }) => {
          return (
            <IncompleteTodos
              key={id}
              id={id}
              text={text}
              goToInProgressToDelete={goToInProgressDelete}
              goToInProgress={goToInProgress}
            />
          );
        })}
      </div>

      <div className="incompleteTodosInProgress">
        <h3>進行中のTodo</h3>
        {InProgress.todos.map(({ id, text }) => {
          return <IncompleteTodosInProgress key={id} id={id} text={text} />;
        })}
      </div>

      <div className="completeTodos">
        <h3>完了のTodo</h3>
        <div className="incompleteTodo">
          <input type="checkbox" />
          いい
          <button>戻る</button>
          <button>ゴミ箱へ</button>
        </div>
        <div className="incompleteTodo">
          <input type="checkbox" />
          うう
          <button>戻る</button>
          <button>ゴミ箱へ</button>
        </div>
      </div>
    </div>
  );
};

export default App;
