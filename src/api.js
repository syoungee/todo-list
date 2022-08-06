import axios from "axios";

// Auth APIS

/*
  login
  POST /users/login
  Parameter
  email: string
  password: string
*/
export const login = async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/users/login", data);
    console.log(response); // message, token
  } catch (error) {
    console.error(error);
  }
};

/*
  signUp
  POST /users/create
  Parameter
  email: string
  password: string
*/
export const signUp = async (data) => {
  console.log("signUp함수 실행");
  try {
    const response = await axios.post("http://localhost:8080/users/create", data);
    console.log(response); // message, token
  } catch (error) {
    console.error(error);
  }
};

// TODO APIS(CRUD) - 인증이 필요합니다

export const getTodos = async (authToken) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: authToken,
  };
  try {
    const response = await axios.get("localhost:8080/todos", {
      headers: headers, // headers에 headers 객체 전달
    });
    console.log(response); // data
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getTodoById = async (authToken) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: authToken,
  };
  try {
    const response = await axios.get("localhost:8080/getTodoById/:id", {
      headers: headers, // headers에 headers 객체 전달
    });
    console.log(response); // data
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createTodo = async (authToken) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: authToken,
  };
  try {
    const response = await axios.post("localhost:8080/todos", {
      headers: headers, // headers에 headers 객체 전달
    });
    console.log(response); // data
  } catch (error) {
    console.error(error);
  }
};

export const updateTodo = async (data, authToken) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: authToken,
  };
  try {
    const response = await axios.put("localhost:8080/todos/:id", data, {
      headers: headers, // headers에 headers 객체 전달
    });
    console.log(response); // data
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async (data, authToken) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: authToken,
  };

  try {
    const response = await axios.delete("localhost:8080/todos/:id", {
      headers: headers, // headers에 headers 객체 전달
    });
    console.log(response); // data
  } catch (error) {
    console.error(error);
  }
};
