import React from "react";

const CompleteTodo = (props) => {
  const { text, completed } = props;

  const backInProgress = () => {
    const {id, backInprogressPropsToDelete, backInprogressProps} = props
    backInprogressPropsToDelete(id)
    backInprogressProps(id)
  }

  const deleteComplete = () => {
    const {id, backInprogressPropsToDelete} = props
    backInprogressPropsToDelete(id)
  }

  const handleComplete = () => {
    const {id, onChange, completed} = props
    onChange(id, !completed)
  }
  return (
    <div className="completeTodo">
      <input type="checkbox" checked={completed} onChange={handleComplete}/>
      {text}
      <button onClick={backInProgress} >戻す</button>
      <button onClick={deleteComplete} >ゴミ箱へ</button>
    </div>
  );
};

export default CompleteTodo;
