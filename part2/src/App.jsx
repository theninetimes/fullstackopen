import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phone from './services/number'
import Notification from './components/notification'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({name: '', number: ''});
  const [keyword, setKeyword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [style, setStyle] = useState({
    color: "red",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  })

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
      if (window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        const tem = {
          name: newPerson.name,
          number: newPerson.number,
        }
        phone.update(persons.find(person => person.name === newPerson.name).id, tem)
          .catch(() => {
            setErrMsg(`${newPerson.name} has been removed from server`);
            setTimeout(() => {
              setErrMsg('')
            }, 5000);
          })
      }
    } else {
      const tem = {
        name: newPerson.name,
        number: newPerson.number,
        id: persons.length+1+''
      };
      setPersons(persons.concat(tem));
      setNewPerson({name: '', number: ''});
      phone.createPerson(tem)
        .then(() => {
          setStyle({...style, color: 'green'})
          setErrMsg(`added ${newPerson.name}`);
          setTimeout(() => {
            setErrMsg('')
          }, 5000);
        })
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
      <Notification message={errMsg} style={style}/>
      <Filter keyword={keyword} handleSearch={handleSearch}/>
      <h2>add a new</h2>
      <PersonForm submit={submit} newPerson={newPerson} setNewPerson={setNewPerson}/>
      <h2>Numbers</h2>
      <Persons result={result} deleteOne={deleteOne}/>
    </div>
  )
}

export default App