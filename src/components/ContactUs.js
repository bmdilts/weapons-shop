import React from 'react';

export default class Class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className='contact'>
          <div className='basicInfo'>
            <p>KravenOak's Weaponry, Armory, Shieldery, and Haberdashery...</p>
            <p>99 Dragonscale Road, Suite 4400</p>
            <p>Level 3, Erebor</p>
          </div>
          <img src="/data/middleearthmap.jpg"/>
        </div>
        <img className="pin" src='/data/map-pin.png'/>
      </div>
    );
  }

}
