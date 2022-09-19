import axios from 'axios';

export const getTodos = async () => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  };
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL + ':' + process.env.REACT_APP_PORT + '/todos', { headers: headers });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getTodoById = async (id) => {
  const headers = {
    'Content-Type': 'application/json',
    authorization: localStorage.getItem('token'),
  };
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL + ':' + process.env.REACT_APP_PORT + `/todos/${id}`, { headers: headers });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createTodo = async (data) => {
  const headers = {
    'Content-Type': 'application/json',
    authorization: localStorage.getItem('token'),
  };
  try {
    const response = await axios.post(process.env.REACT_APP_API_URL + ':' + process.env.REACT_APP_PORT + '/todos', data, { headers: headers });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const updateTodo = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('token'),
    };
    const body = {
      title: data.title,
      content: data.content,
    };
    const response = await axios.put(process.env.REACT_APP_API_URL + ':' + process.env.REACT_APP_PORT + `/todos/${data.id}`, body, { headers: headers });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('token'),
    };
    const response = await axios.delete(process.env.APP_API_URL + `/todos/${id}`, { headers: headers });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
