import React from "react";

const IncompleteTodoInProgress = (props) => {
  const { text } = props;

  const goToIncomplete = () => {
    const { id, goToCompleteToDelete, goToComplete } = props;
    goToCompleteToDelete(id);
    goToComplete(id);
  };

  const deleteIncompletetoodsInOrogress = () => {
    const { id, goToCompleteToDelete } = props;
    goToCompleteToDelete(id);
  };

  return (
    <div className="incompleteTodo">
      {text}
      <button onClick={goToIncomplete}>完了へ</button>
      <button onClick={deleteIncompletetoodsInOrogress}>ゴミ箱へ</button>
    </div>
  );
};

export default IncompleteTodoInProgress;
