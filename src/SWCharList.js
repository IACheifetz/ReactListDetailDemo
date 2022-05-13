import SWChar from './SWChar.js';
import React from 'react';

// export default function SWCharList({ swChars }) {
//   return (
//     <div className='swChars'>
//       {
//         swChars.map(swChar => <SWChar key={`${swChar.id} ${swChar.name}`} swChar={swChar} />)
//       }
//     </div>);
// }

export default class SwClassCharList extends React.Component {
  render() {
    return (
      <div className='swChars'>
        {
          this.props.swChars.map(swChar => <SWChar key={`${swChar.id} ${swChar.name}`} swChar={swChar} />)
        }
      </div>);
  }
}