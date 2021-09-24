import React, {useState} from 'react'

const EditForm = (props) => {
  const [state,setState] = useState({text: props.text})

  const handleCancel = () => {
    const {id, editing, onChangeCancel} = props
    onChangeCancel(id, !editing)
  }

  const changeText = (e) => {
    setState({text: e.target.value})
  }

  const updateTodo = () => {
    const{ id, updateTodo ,editing} = props
    updateTodo(id, !editing, state.text)
  }

  return (
    <>
      <input type="text" value={state.text} onChange={changeText} ></input>
      <button onClick={handleCancel} >キャンセル</button>
      <button onClick={updateTodo} >更新</button>
    </>
  )
}

export default EditForm
