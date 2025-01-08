/* eslint-disable react/prop-types */
const Persons = ({ result, deleteOne }) => {
  const handleClick = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      deleteOne(person.id)
    }
  }

  return (
    <ul>
        {
          result?.map((person) => {
            return <li key={person.id}>
              {person.name}&nbsp;
              {person.number}&nbsp;
              <button onClick={() => handleClick(person)}>delete</button>
            </li>
          })
        }
      </ul>
  )
}

export default Persons;