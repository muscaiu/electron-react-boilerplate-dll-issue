// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        
        <iframe id="game_frame" name="game_frame"
          src="http://2flashgames.eu/flashgames.de/games/all-in-one-mahjong/Mahjong_mochi.swf"
          height="100%" width="100%">
        </iframe>

        <object type="application/x-shockwave-flash"
          data="http://2flashgames.eu/flashgames.de/games/all-in-one-mahjong/Mahjong_mochi.swf"
          width="100%" height="100%">
        </object>

      </div>
    );
  }
}
