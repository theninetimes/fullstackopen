/* eslint-disable react/prop-types */
const PersonForm = ({ submit, newPerson, setNewPerson }) => {
  return (
    <form onSubmit={submit}>
        <div>
          name: <input
            value={newPerson.name}
            onChange={e => setNewPerson({...newPerson, name: e.target.value})}/>
          number: <input
            value={newPerson.number}
            onChange={e => setNewPerson({...newPerson, number: e.target.value})}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm;