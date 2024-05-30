import axios from 'axios';

const API_URL = 'http://localhost:3000/api/articles';

const getArticles = () => {
  return axios.get(API_URL);
};

const getArticle = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const createArticle = (article) => {
  return axios.post(API_URL, article);
};

const updateArticle = (id, article) => {
  return axios.put(`${API_URL}/${id}`, article);
};

const deleteArticle = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export { getArticles, getArticle, createArticle, updateArticle, deleteArticle };
