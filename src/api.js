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
    return response;
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
    return response;
  } catch (error) {
    console.error(error);
  }
};

// TODO APIS(CRUD) - 인증 필요

export const getTodos = async () => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };
  try {
    const response = await axios.get("http://localhost:8080/todos", { headers: headers });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getTodoById = async (id) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: localStorage.getItem("token"),
  };
  try {
    const response = await axios.get(`http://localhost:8080/todos/${id}`, { headers: headers });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createTodo = async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/todos", data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const updateTodo = async (data) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    };
    const body = {
      title: data.title,
      content: data.content,
    };
    const response = await axios.put(`http://localhost:8080/todos/${data.id}`, body , { headers: headers });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async (data) => {
  try {
    const response = await axios.delete("http://localhost:8080/todos/:id", data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
