import React from 'react';


export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className='about'>
          <div className='pitch'>
            <p className='purple'>KravenOak's Weaponry, Armory, Shieldery, and Haberdashery...</p>
            <p>Feodor KravenOak, a dwarf among dwarves!  With over 100 years of experience, KravenOak can hammer anything your soldiers, warriors, and armies need.</p>
            <p>Specializing in all the things!  Swords! Maces! Pikes! Shields! Armors!  Rock, Ore and Steel are hammered into submission and painted into glorious battle implements!</p>
            <p>Fight and Win with KravenOak's!</p>
          </div>
          <img src="/data/Swords on Anvil.jpg"/>
        </div>
      </div>
    );
  }

}
