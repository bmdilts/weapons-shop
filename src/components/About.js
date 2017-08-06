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
        <div>
          <div className='contact'>
            <div className='basicInfo'>
              <p>KravenOak's Weaponry, Armory, Shieldery, and Haberdashery...</p>
              <p>Feodor KravenOak, a dwarf among dwarfes!</p>
            </div>
            <img src="/data/Swords on Anvil.jpg"/>
          </div>
        </div>
      </div>
    );
  }

}
