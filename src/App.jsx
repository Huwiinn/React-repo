import "./App.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";
import { Footer } from "./components/Footer/Footer";
import { v4 as uuid } from "uuid";

function App() {
  // console.log(uuid());
  const CreateTodo = useSelector((state) => state);
  const number = useSelector((state) => state.CreateTodo.number);
  console.log("출력이 잘 됩니다 : ", number);

  const [todos, setTodos] = useState(initialState);

  // React.useEffect(() => {
  //   //
  // }, []);

  return (
    <div className="container">
      <Header>My TodoList</Header>

      {/* Todo 생성 Form */}
      <Input setTodos={setTodos} />

      {/* Todo active, done section */}
      <div className="TodoList_container">
        <TodoList isActive={true} todos={todos} setTodos={setTodos} />
        <TodoList isActive={false} todos={todos} setTodos={setTodos} />
      </div>

      <Footer />
    </div>
  );
}

export default App;

// 기본 설정값
const initialState = [
  {
    title: "리액트 숙련과제",
    contents: "리덕스...리듀스...",
    isDone: false,
    id: uuid(),
  },
  {
    title: "자바스크립트",
    contents: "중급강좌",
    isDone: true,
    id: uuid(),
  },
  {
    title: "투미새되기",
    contents: "이번주는 TodoList에 미쳐버리기",
    isDone: false,
    id: uuid(),
  },
];
