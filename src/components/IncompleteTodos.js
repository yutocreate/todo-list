import React from "react";

const IncompleteTodos = (props) => {
  const { text } = props;

  const letsInProgress = () => {
    const { id, goToInProgressToDelete, goToInProgress } = props;
    goToInProgressToDelete(id);
    goToInProgress(id);
  };

  const deleteIncompleteTodo = () => {
    const { id, goToInProgressToDelete } = props;
    goToInProgressToDelete(id);
  };

  return (
    <div>
      <input type="checkbox" />
      {text}
      <button onClick={letsInProgress}>進行中へ</button>
      <button>編集</button>
      <button onClick={deleteIncompleteTodo}>ゴミ箱へ</button>
    </div>
  );
};

export default IncompleteTodos;
