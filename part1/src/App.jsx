/* eslint-disable react/prop-types */
import Note from './components/Note'
import { useState } from 'react';

const App = (props) => {
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState(props.notes);

  const submit = (e) => {
    e.preventDefault();
    const note = {
      id: notes.length + 1,
      content: content,
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(note));
    setContent('');
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={submit}>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}/>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App