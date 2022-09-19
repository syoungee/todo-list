import { useState, MouseEvent } from 'react';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import './Welcome.css';

// Main page(/auth)
// welcome, register, login 3가지 카드로 구분된다
// 회원 가입, 로그인 순으로 접근하기
const Main = () => {
  const [isShow, setIsShow] = useState<string>('welcome');

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (!isShow) return;
    setIsShow(e.currentTarget.getAttribute('data-target') as string);
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.classList.remove('is-show');
    });
    document.body.className = '';
  };

  return (
    <div className="card-wrap">
      <Welcome isShow={isShow} setIsShow={setIsShow} handleClick={handleClick} />
      <Register isShow={isShow} setIsShow={setIsShow} handleClick={handleClick} />
      <Login isShow={isShow} setIsShow={setIsShow} handleClick={handleClick} />
    </div>
  );
};

export default Main;
