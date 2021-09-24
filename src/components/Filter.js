import React from "react";

const Filter = (props) => {
  const { filter, onChange } = props;

  const handleChange = (e) => {
    onChange(e.currentTarget.value);
  };
  return (
    <select filter={filter} onChange={handleChange}>
      <option value="all">全て</option>
      <option value="incomplete">未着手</option>
      <option value="progress">進行中</option>
      <option value="complete">完了</option>
    </select>
  );
};

export default Filter;
