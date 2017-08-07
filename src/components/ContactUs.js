import React from 'react';

export default class Class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='contact'>
          <div className='basicInfo'>
            <p className='purple'>KravenOak's Weaponry, Armory, Shieldery, and Haberdashery...</p>
            <p>99 Dragonscale Road, Suite 4400</p>
            <p>Level 3, Erebor</p>
            <br/>
            <form>
              <fieldset>
                <p>Send us a raven!</p>
                <div style={{color: 'black'}}>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Email'/>
                <textarea placeholder='Type your message here!'/>
                <input type='submit'>Send</input>
                </div>
              </fieldset>
            </form>
          </div>
          <img src="/data/middleearthmap.jpg"/>
        </div>
        <img className="pin" src='/data/map-pin.png'/>
      </div>
    );
  }

}
