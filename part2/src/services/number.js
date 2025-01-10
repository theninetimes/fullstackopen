import axios from 'axios'
// const baseUrl = 'http://localhost:3001/api/persons';
// const baseUrl = 'https://theninetimes.onrender.com/api/persons';
const baseUrl = '/api/persons';

const getAll = () => {
  return axios
    .get(baseUrl)
    .then(res => res.data)
}

const createPerson = (tem) => {
  return axios
    .post(baseUrl, tem)
    .then(res => res.data)
}

const deleteOne = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`)
}

const update = (id, tem) => {
  return axios
    .put(`${baseUrl}/${id}`, tem)
}
export default { getAll, createPerson, deleteOne, update }