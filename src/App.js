import React, { useState } from "react";
import "./index.scss";
import { Counter } from "./components/Counter/Counter";
import { Modal } from "./components/Modal/Modal";
import { Quiz } from "./components/Quiz/Quiz";
import { Userslist } from "./components/Users/Userslist";

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(undefined);
  const [correct, setCorrect] = useState(0);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      {/* {<Counter count={count} setCount={setCount}/>} */}

      {/* Modal */}
      {/* <button onClick = {()=>setOpen(true)} className='openModalBtn'>✨ Open Modal</button>
      <Modal open={open} setOpen={setOpen}>
        <h2>Modal</h2>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        <button> Test
        </button></Modal> */}

      {/* або спосіб №2 - рендер за умовою */}
      {/* {open && <Modal open={open} setOpen={setOpen}/>} */}

      {/* <Quiz
        step={step}
        setStep={setStep}
        correct={correct}
        setCorrect={setCorrect}
      /> */}

      <Userslist
        users={users}
        setUsers={setUsers}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default App;
