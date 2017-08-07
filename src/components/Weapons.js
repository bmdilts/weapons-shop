import React from 'react';
import { Carousel } from 'react-bootstrap'

export default class Weapons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='weapons'>
        <Carousel className='cont'>
          <Carousel.Item>
            <div className="item-box">
                <img alt="Aged leather wrapped bow" src="/data/Weapons/Aged leather wrapped bow.jpg" />
                <Carousel.Caption>
                  <h2>Aged leather wrapped bow</h2>
                  <button><span>Buy Now!</span></button>
                </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item-box">
                <img alt="Arrows" src="/data/Weapons/arrows.jpeg"/>
                <Carousel.Caption>
                  <h2>Arrows</h2>
                  <button><span>Buy Now!</span></button>
                </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item-box">
                <img alt="Bone Sword" src="/data/Weapons/bone sword.png"/>
                <Carousel.Caption>
                  <h2 style={{color: 'white'}}>Bone Sword</h2>
                  <button><span>Buy Now!</span></button>
                </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item-box">
                <img alt="Claymore Helm Pike Combo" src="/data/Weapons/Claymore Helm Pike Combo.jpg" />
                <Carousel.Caption>
                  <h2 style={{color: 'white'}}>Claymore Helm Pike Combo</h2>
                  <button><span>Buy Now!</span></button>
                </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item-box">
                <img alt="Crossbow" src="/data/Weapons/Crossbow.jpg" />
                <Carousel.Caption>
                  <h2>Crossbow</h2>
                  <button><span>Buy Now!</span></button>
                </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item-box">
                <img alt="Crusader Sword" src="/data/Weapons/crusader sword.png" />
                <Carousel.Caption>
                  <h2 style={{color: 'white'}}>Crusader Sword</h2>
                  <button><span>Buy Now!</span></button>
                </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item-box">
                <img alt="Dark Elf Sword" src="/data/Weapons/dark_angel_2_larp_sword.png" />
                <Carousel.Caption>
                  <h2 style={{color: 'white'}}>Dark Elf Sword</h2>
                  <button><span>Buy Now!</span></button>
                </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item-box">
                <img alt="Double Bladed Hand Axe" src="/data/Weapons/Dbl bladed hand axe.jpg" />
                <Carousel.Caption>
                  <h2 style={{color: 'white'}}>Double Bladed Hand Axe</h2>
                  <button><span>Buy Now!</span></button>
                </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item-box">
                <img alt="Scicle Sword" src="/data/Weapons/egyptian scicle sword.jpg" />
                <Carousel.Caption>
                  <h2>Scicle Sword</h2>
                  <button><span>Buy Now!</span></button>
                </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item-box">
                <img alt="Aged leather wrapped bow" src="/data/Weapons/Aged leather wrapped bow.jpg" />
                <Carousel.Caption>
                  <h2>Aged leather wrapped bow</h2>
                  <button><span>Buy Now!</span></button>
                </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item-box">
                <img alt="Aged leather wrapped bow" src="/data/Weapons/Aged leather wrapped bow.jpg" />
                <Carousel.Caption>
                  <h2>Aged leather wrapped bow</h2>
                  <button><span>Buy Now!</span></button>
                </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item-box">
                <img alt="Aged leather wrapped bow" src="/data/Weapons/Aged leather wrapped bow.jpg" />
                <Carousel.Caption>
                  <h2>Aged leather wrapped bow</h2>
                  <button><span>Buy Now!</span></button>
                </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="item-box">
                <img alt="Aged leather wrapped bow" src="/data/Weapons/Aged leather wrapped bow.jpg" />
                <Carousel.Caption>
                  <h2>Aged leather wrapped bow</h2>
                  <button><span>Buy Now!</span></button>
                </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>

      </div>
    )
  }
}
