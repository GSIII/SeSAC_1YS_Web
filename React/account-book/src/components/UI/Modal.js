import React, { useState } from 'react';
import styled from 'styled-components';

const User = {
  name: 'sesac',
  pw: 'sesac',
};

export default function Modal({ onClose }) {
  const handleClose = () => {
    onClose?.();
  };
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');

  const handleEmail = (e) => {
    setName(e.target.value);
  };
  const handlePw = (e) => {
    setPw(e.target.value);
  };
  const onClickConfirmButton = () => {
    if (name === User.name && pw === User.pw) {
      alert(`${name}님 반갑습니다.`);
      handleClose();
    } else {
      alert('등록되지 않은 회원입니다.');
    }
  };

  return (
    <>
      <Overlay>
        <ModalWrap>
          {/* <CloseButton onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </CloseButton> */}
          <Contents>
            <label>이름</label>
            <input
              className="input"
              type="text"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={handleEmail}
            />

            <label>비밀번호</label>
            <input
              className="input"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={pw}
              onChange={handlePw}
            />

            <button onClick={onClickConfirmButton} className="bottomButton">
              로그인
            </button>
            <Button onClick={handleClose}>닫기</Button>
          </Contents>
        </ModalWrap>
      </Overlay>
    </>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// const CloseButton = styled.div`
//   float: right;
//   width: 40px;
//   height: 40px;
//   margin: 20px;
//   cursor: pointer;
//   i {
//     color: #5d5d5d;
//     font-size: 30px;
//   }
// `;

const Contents = styled.div`
  margin: 50px 30px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  font-size: 15px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  /* &:hover {
    background-color: #898989;
  } */
`;
