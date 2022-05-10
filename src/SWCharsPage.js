import { useEffect, useState } from 'react';
import './App.css';
import { getStarWarsChars } from './services/fetch-utils';
import SWCharList from './SWCharList';

function App() {
  const [swChars, setsSwChars] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 40;
  
  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const chars = await getStarWarsChars(from, to);

      setsSwChars(chars);
    }

    fetch();
  }, [page]); 

  return (
    <>
      <h2>Current Page {page}</h2>
      <div className='buttons'>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
        <button onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
      <SWCharList swChars={swChars}/>
    </>
  );
}

export default App;