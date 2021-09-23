import React from 'react'

const IncompleteTodosInProgress = (props) => {
  const { text} = props
  return (
    <div className="incompleteTodo">
    <input type="checkbox" />
    {text}
    <button>完了へ</button>
    <button>ゴミ箱へ</button>
  </div>
  )
}

export default IncompleteTodosInProgress
