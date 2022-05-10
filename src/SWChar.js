import { Link } from 'react-router-dom';

export default function SWChar({ swChar }) {
  return (
    <Link to={`/StarWarsChars/${swChar.id}`}>
      <div className='sw-char'>
        <img className='swchar-img' src={swChar.image}/>
        <p>{swChar.name}</p>
        <p>{swChar.homeworld}</p>
        <p>{swChar.species}</p>
      </div>
    </Link>
  );
}