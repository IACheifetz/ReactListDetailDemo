import { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { getStarWarsCharById } from './services/fetch-utils';

export default function SWCharDetail() {
  const [swChar, setSwChar] = useState({});
  const match = useRouteMatch();

  useEffect(() => {
    async function fetch() {
      const char = await getStarWarsCharById(match.params.id);
      setSwChar(char);
    }
    fetch();
  }, [match.params.id]);

  function handleCharClick() {
    window.location.href = swChar.link;
  }

  return (
    <>
      <Link to='/'>Home</Link>
      <div className='swChar-detail' onClick={handleCharClick}>
        <div className='char-data'>
          <p>{swChar.species}</p>
          <p>{swChar.name}</p>
          <p> Born in {swChar.born}</p>
          <img className='char-img' src={swChar.image}/>
          <p>Color: {swChar.cybernetics}</p>
          <p>Release Date: {swChar.affiliations_001}</p>
          <p>Retirement Date: {swChar.affiliations_002}</p>
        </div>
      </div>  
    </>
  );
}