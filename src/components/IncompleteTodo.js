import React from "react";

const IncompleteTodo = (props) => {
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

  const editNow = () => {
    const { id, editing, letsEdit } = props;
    letsEdit(id, !editing);
  };

  return (
    <>
      {text}
      <button onClick={letsInProgress}>進行中へ</button>
      <button onClick={editNow}>編集</button>
      <button onClick={deleteIncompleteTodo}>ゴミ箱へ</button>
    </>
  );
};

export default IncompleteTodo;
