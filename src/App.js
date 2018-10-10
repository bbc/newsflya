import React, { Component } from 'react';
import axios from 'axios';
import { FlexyFlipCard } from 'flexy-flipcards';


import logo from './logo.svg';
import './App.css';
// import '@kennethormandy/react-flipcard/src/Flipcard.css';


// const STORYLINES = 'http://34.247.162.226:8026/v1/api/storylines/';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    // this.showBack = this.showBack.bind(this);
  }

  componentDidMount() {
    // axios.get(STORYLINES, (err, data) => {
    //   console.log(err, data);
    // });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            NEWS FLYA
          </p>
        </header>
        <nav>
          <fieldset>
            <legend>Topics</legend>
            <select>
              <option selected>Topic 1</option>
            </select>
          </fieldset>
          <div>
            <ol>
              <li><a>Article 1</a></li>
              <li><a>Article 2</a></li>
              <li><a>Article 3</a></li>
              <li><a>Article 4</a></li>
              <li><a>Article 5</a></li>
            </ol>
          </div>
        </nav>
        <article>
        <h3>Lorem Ipsum</h3>
        <FlexyFlipCard
          frontBackgroundColor="white"
          backBackgroundColor="lightyellow"
        >
          <div ref="flipper">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac venenatis tellus, ac placerat lectus. In justo turpis, lobortis sed nisi vel, fermentum auctor nisi. Proin augue est, condimentum eget accumsan sed, tempus ut felis. Sed semper ante ultricies est pulvinar eleifend. Sed eros nibh, pellentesque in mollis ac, accumsan sed libero. Cras imperdiet sodales eleifend. Nam tristique pretium nisl ac elementum. Maecenas sit amet nibh nibh. Donec eu dui at urna condimentum consectetur eu eu ligula. Quisque feugiat odio at arcu rutrum luctus. Donec venenatis ullamcorper felis, vitae maximus sem scelerisque vitae. Quisque porta sed est eu bibendum. Nunc ut risus eu risus ullamcorper cursus. Duis pretium est dapibus, scelerisque enim sed, consectetur ligula. Etiam vehicula sit amet ligula ut tempor. Ut hendrerit nibh turpis, at viverra neque auctor sit amet.
            </p>
          </div>
          <div ref="flipper">
            <p>
            Duis elementum vehicula erat, at venenatis tortor auctor non. Vestibulum quis tempus purus. Nullam nec sapien molestie, euismod orci ut, tempor metus. Suspendisse erat neque, vehicula at tortor in, fringilla ullamcorper felis. Mauris ex diam, blandit at lobortis et, tristique eu erat. Vivamus eget porta ipsum. Aliquam quis eros in nulla porta vestibulum. Curabitur at orci ornare, maximus sapien sed, finibus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. In vehicula magna non pellentesque iaculis. Aliquam eu sollicitudin mauris, in hendrerit erat. Aliquam ut hendrerit lorem. Donec ultrices magna ex. Duis nec maximus elit, at convallis diam. Aenean convallis commodo libero sit amet efficitur.
            </p>
          </div>
        </FlexyFlipCard>
        <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi commodo venenatis lobortis. Nam at dolor gravida neque hendrerit efficitur. Nullam risus lectus, auctor vitae eleifend at, consectetur a purus. Proin iaculis suscipit ullamcorper. Duis a nibh nec nisi vestibulum maximus. Curabitur rutrum viverra tortor eget posuere. Quisque ex enim, sodales a sagittis vitae, ultricies in ipsum. Nam in aliquet tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent a aliquet nisl. Nulla ac sem metus. Maecenas semper bibendum lorem, sed fermentum nunc elementum ac. Phasellus commodo massa ipsum, vel mollis ligula ornare et. Nulla ut purus eu odio iaculis eleifend eget in mauris.
        </p>
        </article>
      </div>
    );
  }
}

export default App;
