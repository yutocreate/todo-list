import React, { useState } from "react";
import CompleteTodo from "./components/CompleteTodo";
import EditForm from "./components/EditForm";
import IncompleteTodo from "./components/IncompleteTodo";
import IncompleteTodoInProgress from "./components/IncompleteTodoInProgress";
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
      editing: false,
      completed: true,
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
  //編集ボタンをクリック時の挙動
  const letsEdit = (id, editing) => {
    const newTodos = state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editing: editing };
      }
      return todo;
    });
    setState({ todos: newTodos });
  };

  //完了のチェックボックスを外す
  const changeComplete = (id, completed) => {
    const newTodos = complete.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: completed };
      }
      return todo;
    });
    setComplete({ todos: newTodos });
  };
  //編集モードのキャンセル
  const onChangeCancel = (id, editing) => {
    const newTodos = state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editing: editing };
      }
      return todo;
    });
    setState({ todos: newTodos });
  };

  const updateTodo = (id ,editing, text) => {
    const newTodos = state.todos.map((todo) => {
      if(todo.id === id){
        return {
          ...todo, text: text, editing: editing 
        }
      }
      return todo
    })
    setState({todos: newTodos})
  }

  return (
    <div className="container">
      <h1>Todoアプリ</h1>
      <InputForm onSubmit={handleSubmit} />
      <div className="incompleteTodos">
        <h3>未着手のTodos</h3>
        {state.todos.map(({ id, text, editing }) => {
          return (
            <div key={id}>
              {editing ? (
                <EditForm
                  key={text}
                  id={id}
                  text={text}
                  editing={editing}
                  onChangeCancel={onChangeCancel}
                  updateTodo ={updateTodo}
                />
              ) : (
                <IncompleteTodo
                  key={id}
                  id={id}
                  text={text}
                  editing={editing}
                  goToInProgressToDelete={goToInProgressDelete}
                  goToInProgress={goToInProgress}
                  letsEdit={letsEdit}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="incompleteTodosInProgress">
        <h3>進行中のTodos</h3>
        {inProgress.todos.map(({ id, text }) => {
          return (
            <IncompleteTodoInProgress
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
        {complete.todos.map(({ id, text, completed }) => {
          return (
            <CompleteTodo
              key={id}
              id={id}
              text={text}
              completed={completed}
              backInprogressPropsToDelete={backInprogressPropsToDelete}
              backInprogressProps={backInprogressProps}
              onChange={changeComplete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
