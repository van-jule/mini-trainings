import React, { useState } from "react";
import "./index.scss";
import { Counter } from "./components/Counter/Counter";
import { Modal } from "./components/Modal/Modal";
import { Quiz } from "./components/Quiz/Quiz";
import { UsersList } from "./components/Users/UsersList";
import { CurrencyConvertor } from "./components/CurrencyConvertor/CurrencyConvertor";
import PhotosApp from "./components/PhotosApp/PhotosApp";

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      {/* {<Counter/>} */}

      {/* Modal */}
      {/* <button onClick = {()=>setOpenModal(true)} className='openModalBtn'>✨ Open Modal</button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <h2>Modal</h2>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        <button> Test
        </button></Modal> */}

      {/* або спосіб №2 - рендер за умовою */}
      {/* {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}/>} */}

      {/* <Quiz/> */}

      {/* <UsersList /> */}

      {/* <CurrencyConvertor /> */}

      <PhotosApp />
    </div>
  );
}

export default App;
