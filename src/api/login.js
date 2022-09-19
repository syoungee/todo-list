import axios from 'axios';

/** 
  login api - id와 password를 서버로 전송
  POST /users/login
  constructor sunyoung
*/
export const login = async (data) => {
  try {
    const response = await axios.post(process.env.REACT_APP_API_URL + ':' + process.env.REACT_APP_PORT + '/users/login', data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

/**
  signUp api - id와 password를 서버로 전송
  POST /users/create
  constructor sunyoung
*/
export const signUp = async (data) => {
  console.log('signUp함수 실행');
  try {
    console.log(process.env.APP_API_URL);
    const response = await axios.post(process.env.REACT_APP_API_URL + ':' + process.env.REACT_APP_PORT + '/users/create', data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
