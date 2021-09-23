import React, { useState } from "react";
import CompleteTodos from "./components/CompleteTodos";
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
  const [inProgress, setInProgress] = useState({
    todos: [],
  });
  // 完了のtodoを格納する
  const [complete, setComplete] = useState({
    todos: [],
  });

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
    const newTodos = [...inProgress.todos, newTodo[0]];
    setInProgress({ todos: newTodos });
  };

  //完了へボタンを押した時、進行中のtodoから削除される and ゴミ箱をしても使っている
  const goToCompleteToDelete = (id) => {
    const newInCompleteTodosInProgress = inProgress.todos.filter(
      (todo) => todo.id !== id
    );
    setInProgress({ todos: newInCompleteTodosInProgress });
  };

  //進行中のtodoが完了のtodoに移動
  const goToComplete = (id) => {
    const newTodo = inProgress.todos.filter((todo) => todo.id === id);
    const newTodos = [...complete.todos, newTodo[0]];
    setComplete({ todos: newTodos });
  };
  //戻すボタンを押した時、完了のtodoから削除される and ゴミ箱をしても使っている
  const backInprogressPropsToDelete = (id) => {
    const newCompleteTodos = complete.todos.filter((todo) => todo.id !== id);
    setComplete({ todos: newCompleteTodos });
  };
  //完了のtodoが進行中のtodoに移動
  const backInprogressProps = (id) => {
    const newTodo = complete.todos.filter((todo) => todo.id === id);
    const newTodos = [...inProgress.todos, newTodo[0]];
    setInProgress({ todos: newTodos });
  };

  return (
    <div className="container">
      <h1>Todoアプリ</h1>
      <InputForm onSubmit={handleSubmit} />
      <div className="incompleteTodos">
        <h3>未着手のTodos</h3>
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
        <h3>進行中のTodos</h3>
        {inProgress.todos.map(({ id, text }) => {
          return (
            <IncompleteTodosInProgress
              key={id}
              id={id}
              text={text}
              goToCompleteToDelete={goToCompleteToDelete}
              goToComplete={goToComplete}
            />
          );
        })}
      </div>
      <div className="completeTodos">
        <h3>完了のTodos</h3>
        {complete.todos.map(({ id, text }) => {
          return (
            <CompleteTodos
              key={id}
              id={id}
              text={text}
              backInprogressPropsToDelete={backInprogressPropsToDelete}
              backInprogressProps={backInprogressProps}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
