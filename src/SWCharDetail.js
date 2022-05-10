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
    window.location.href = swChar.wiki;
  }

  return (
    <>
      <Link to='/'>Home</Link>
      <div className='swChar-detail' onClick={handleCharClick}>
        <div className='char-data'>
          <h2>{swChar.name}</h2>
          <p>Species: {swChar.species}</p>
          <p> Born in {swChar.born} BBY</p>
          <p> Born on {swChar.homeworld}</p>
          <img className='char-img' src={swChar.image}/>
          <p>Cybernetics: {swChar.cybernetics}</p>
          <p>Affiliation(s): {swChar.affiliations__001}, {swChar.affiliations__002}, {swChar.affiliations__003}, {swChar.affiliations__004}, {swChar.affiliations__005}, {swChar.affiliations__006}, {swChar.affiliations__007}, {swChar.affiliations__008}, {swChar.affiliations__009}, {swChar.affiliations__010}</p>
        </div>
      </div>  
    </>
  );
}