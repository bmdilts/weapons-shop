import React from 'react';
import {NavLink, Link} from 'react-router-dom'

export default class BaseLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const dwarvenQuotes = ['Drinking contests with humans are unbearable. They drink, they collapse, and we have to drag them back to their homes. The next day they never remember losing', 'The stones will sing if you let them', 'The best place to hide something precious is in your beard.', 'Nothing a hammer can’t solve', 'You can kill a dwarf, but you can never vanquish one', 'I swear by my forge', 'Guard your life, guard your gold, guard your beard. In that order.', 'The smallest pebble was once the biggest stone, the biggest stone was once bigger.', 'Leave iron to rest before you hammer it', 'Her beard is winking at me', 'A pebble will stay dry inside, no matter how long it is submerged in a pool of water.', 'Never turn down an ale, who knows if it may be your last', 'We can’t bring a troll to the fire, but we can bring the fire to the troll', 'Nothing evens a race like an axe to the kneecaps', 'Never injure your pride by substituting your axe for a smithies hammer.', 'Discussion gathers no gems.', 'All trees are felled at ground level', 'Better to delve to deeply than never to delve at all.', 'Not every stone is a gem, not every rock holds value, but even the lowest rock can hide a geode.', 'May your beard grow long and your axe stay sharp', 'May your forge burn hot and your ale run cold.']
    const quote = dwarvenQuotes[Math.floor(Math.random() * dwarvenQuotes.length)]
    return (
      <div className='nav'>
        <ul className="navbar nav-pills nav-justified navbar-inverse">
          <li><img src='data/dwarf_ram_shield.png' style={{height: '6em'}}/></li>
          <li><NavLink activeStyle={{
            color: "blue",
            backgroundColor: "slategrey",
            padding: '.5em'
          }} exact to='/'>Home</NavLink></li>
          <li><NavLink className="nav-item nav-link" activeStyle={{
            color: "blue",
            backgroundColor: "slategrey",
            padding: '.5em'
          }} to='/About'>About</NavLink></li>
          <li><NavLink className="nav-item nav-link" activeStyle={{
            color: "blue",
            backgroundColor: "slategrey",
            padding: '.5em'
          }} to='/Shop'>Shop</NavLink></li>
          <li><NavLink className="nav-item nav-link" activeStyle={{
            color: "blue",
            backgroundColor: "slategrey",
            padding: '.5em'
          }} to='/ContactUs'>Contact Us</NavLink></li>
        </ul>

        {this.props.children}

        <div className='footer'></div>
          <ul className="navbar nav-pills nav-justified navbar-inverse">
            <li>{quote}</li>
          </ul>
        </div>
    );
  }
}
