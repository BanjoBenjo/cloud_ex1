import Header from "./components/Header";
import Entries from "./components/Entries";
import AddEntry from "./components/AddEntry";
import { useState, useEffect } from 'react'


function App() {
  const [showAddEntry, setShowAddEntry] = useState(false)
  const [entries, setEntries] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const getUrl = '/api/entries'
  const postUrl = '/api/save'
  const deleteUrl = (id) => `api/delete/${id}`

  const getEntries = () => {
    fetch(getUrl)
      .then(rspn => rspn.json())
      .then(json => {
        setEntries(json);
        setIsLoaded(true);
      })
  }

  useEffect(() => {
    getEntries();
    }, []);


  const addEntry = (entry) => {
    setIsLoaded(false);

    fetch(postUrl, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      getEntries();
  }

  const deleteEntry = (id) => {
    setIsLoaded(false);

    fetch(deleteUrl(id), { method: 'DELETE' })
        .then(() => getEntries() );
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddEntry(!showAddEntry)}/>
      {showAddEntry && <AddEntry onAdd={addEntry}/>}
      { isLoaded ? <Entries entries={entries} onDelete={deleteEntry}/> : 'Loading ...'}
    </div>
  );
}

export default App;
