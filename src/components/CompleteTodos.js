import React from "react";

const CompleteTodos = (props) => {
  const { text } = props;

  const backInProgress = () => {
    const {id, backInprogressPropsToDelete, backInprogressProps} = props
    backInprogressPropsToDelete(id)
    backInprogressProps(id)
  }

  const deleteComplete = () => {
    const {id, backInprogressPropsToDelete} = props
    backInprogressPropsToDelete(id)
  }

  return (
    <div className="completeTodo">
      <input type="checkbox" checked="true" />
      {text}
      <button onClick={backInProgress} >戻す</button>
      <button onClick={deleteComplete} >ゴミ箱へ</button>
    </div>
  );
};

export default CompleteTodos;
