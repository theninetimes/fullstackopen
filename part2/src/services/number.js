import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons';

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
    .delete(`${baseUrl}/${+id}`)
}
export default { getAll, createPerson, deleteOne }