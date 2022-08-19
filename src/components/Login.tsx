import { AxiosResponse } from 'axios';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/api.js';
import './Welcome.css';

interface UserInfo {
  email: string;
  password: string;
}

const Login = (props: any) => {
  const navigate = useNavigate();
  const { isShow, handleClick } = props;
  const [userInfo, setUserInfo] = useState<UserInfo>({ email: '', password: '' });
  const [btnOn, setBtnOn] = useState<boolean>(false);

  // set email & password
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserInfo({ ...userInfo, [e.target.type]: e.target.value });
    if (canRegister(userInfo)) setBtnOn(true);
    else setBtnOn(false);
  };

  // validation check - 버튼 활성화 on(컬러)/off(회색)
  const canRegister = (userInfo: UserInfo): boolean => {
    if (!userInfo.email || !userInfo.password) return false;
    // 이메일 관련 정규식
    const regEmail = /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    // 이메일 형식 체크 & 비밀번호는 8자 이상
    if (regEmail.test(userInfo.email) === true && userInfo.password.length >= 8) {
      return true;
    }
    return false;
  };

  // register button click!
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e?.preventDefault();
    login(userInfo).then((res: AxiosResponse<any, any> | undefined): void => {
      console.log(res?.status, res?.data.message);
      if (res?.status === 200) {
        localStorage.setItem('token', res?.data.token);
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/todo');
      } else {
        console.log(res?.status, res?.data.message);
      }
    });
  };

  return (
    <div className={`card border-0 shadow card--login ${isShow === 'login' ? 'is-show' : ''} `} id="login">
      <div className="card-body">
        <h2 className="card-title">Welcome Back!</h2>
        <p>
          To keep connected with us
          <br />
          please login with your personal info
        </p>
        <p>use your account</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input className="form-control" onChange={onChange} type="email" placeholder="Email" required={true} />
          </div>
          <div className="form-group">
            <input className="form-control" onChange={onChange} type="password" placeholder="Password" required={true} />
          </div>
          <button type="submit" disabled={!btnOn} className={`btn btn-lg ${btnOn ? 'btn-on' : 'btn-off'}`} id="login">
            LOGIN
          </button>
        </form>
      </div>
      <button className="btn btn-back js-btn fas fa-angle-left" onClick={(e) => handleClick(e)} data-target="welcome"></button>
    </div>
  );
};

export default Login;
