import Header from "./components/Header";
import Entries from "./components/Entries";
import AddEntry from "./components/AddEntry";
import { useState } from 'react'


function App() {
  const [showAddEntry, setShowAddEntry] = useState(false)
  const [entries, setEntries] = useState([
    {
      id: 1,
      text: 'First Entry'
    },
    {
      id: 2,
      text: 'Second Entry'
    },
    {
      id: 3,
      text: 'Third Entry'
    }
  ])

const addEntry = (entry) => {
  let id = 1

  if (entries.length > 0) {
     id = entries[entries.length - 1].id + 1
  }

  const newEntry = {id, ...entry}
  setEntries([...entries, newEntry])
}

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id ))
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddEntry(!showAddEntry)}/>
      {showAddEntry && <AddEntry onAdd={addEntry}/>}
      {entries.length > 0 ? <Entries entries={entries} onDelete={deleteEntry}/> : 'No Entries'}
    </div>
  );
}

export default App;
