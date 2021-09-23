import React,{useState} from 'react'

const InputForm = (props) => {
  const {onSubmit} = props
  const [state,setState] = useState({
    input:""
  })

  //InputFormが送信された時
const submit = (e) => {
  if(state.input === "") return;
  e.preventDefault()
  onSubmit(state.input)
  setState({input: ""})
}

//InputFormのテキストを変更した時
const change = (e) => {
  setState({input: e.target.value})
}

  return (
    <form className="inputForm" onSubmit={submit}>
    <input type="text" placeholder="やるべきことを追加" value={state.input} onChange={change}/>
    <button>追加</button>
  </form>
  )
}

export default InputForm
