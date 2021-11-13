// import React, { useState } from "react";
// import "./styles.css";

// import Modal from "react-modal";

// Modal.setAppElement("#root");

// export default function Modal() {
//   const [isOpen, setIsOpen] = useState(false);

//   function toggleModal() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <div className="App">
//       <button onClick={toggleModal}>Open modal</button>

//       <Modal
//         isOpen={isOpen}
//         onRequestClose={toggleModal}
//         contentLabel="My dialog"
//       >
//         <div>My modal dialog.</div>
//         <button onClick={toggleModal}>Close modal</button>
//       </Modal>
//     </div>
//   );
// }

// import React from "react"
// import styled from "styled-components"

// const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh; 
//     padding:  16px 32px;
//     border-radius: 4px;
//     border: none;
//     background: #141414;
//     color: #fff;
//     font-size: 24px;
//     cursor: pointer;
// `

// const Button = styled.button`
//     min-width: 100px;
// `

// function Modal () {

//     return(
//         <>
//         <div>
//             <Container>
//                 <Button>It's a Modal!</Button>
//             </Container>
//         </div>
//         </>
//     )
// }

// export default Modal;

// import React from 'react'
// import styled from "styled-components"

// const background = styled.div`
//     width: 800px;
//     height:500px;
//     background: #fff;
//     color: #000;
//     display: grid;
//     box-shadow:0 5px 16px rgba(0, 0, 0, 0.2);
//     grid-template-columns: 1fr 1fr;
//     position: relative;
//     z-index: 10;
//     border-radius: 10px;

// `

// const ModalImg = styled.img`
//     width: 100%;
//     height: 100%;
//     border-radius: 10px 0 0 10px;
//     background: #000;

// `
// const ModalContent = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     line-height: 1.8;
//     color: #141414;
// `


// const ModalWrapper = styled


// export const Modal = (showModal, setShowModal) => {
//     return (
//         <div>
//             {showModal} ? <div> <Modal/> : null </div>

//         </div>
//     )
// }

