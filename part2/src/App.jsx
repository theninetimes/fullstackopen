import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phone from './services/number'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({name: '', number: ''});
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    phone
      .getAll()
      .then(res => setPersons(res));
  }, [])
  let result = keyword
  ? persons.filter(person => person.name.toLowerCase().includes(keyword))
  : persons;

  const submit = (e) => {
    e.preventDefault();
    if (persons.some(person => person.name === newPerson.name)) {
      alert(`${newPerson.name} is already added to phonebook`)
    } else {
      const tem = {
        name: newPerson.name,
        number: newPerson.number,
        id: persons.length+1
      };
      setPersons(persons.concat(tem));
      setNewPerson({name: '', number: ''});
      phone.createPerson(tem);
    }
  }

  const handleSearch = (e) => {
    setKeyword(e.target.value);
    // result = persons.filter(person => person.name.toLocaleLowerCase().includes(e.target.value));
  }

  const deleteOne = (id) => {
    phone.deleteOne(id);
    setPersons(persons => persons.filter(person => person.id !== id))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter keyword={keyword} handleSearch={handleSearch}/>
      <h2>add a new</h2>
      <PersonForm submit={submit} newPerson={newPerson} setNewPerson={setNewPerson}/>
      <h2>Numbers</h2>
      <Persons result={result} deleteOne={deleteOne}/>
    </div>
  )
}

export default App