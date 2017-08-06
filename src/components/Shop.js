import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Weapons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='shop'>
        <Link to='/Weapons'>
          <div className='shop-cat' id='weapons-cat'>
            <p>Weapons</p>
          </div>
        </Link>
        <Link to='/Shields'>
          <div className='shop-cat' id='shields-cat'>
            <p>Shields</p>
          </div>
        </Link>
        <Link to='/Armor'>
          <div className='shop-cat' id='armor-cat'>
            <p>Armor</p>
          </div>
        </Link>
      </div>
    );
  }
}
