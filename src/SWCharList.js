import SWChar from './SWChar.js';

export default function SWCharList({ swChars }) {
  return (
    <div className='swChars'>
      {
        swChars.map(swChar => <SWChar key={`${swChar.id} ${swChar.name}`} swChar={swChar} />)
      }
    </div>);
}