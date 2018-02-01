
import React, { Component } from 'react';
import { Action, Scene, Router} from 'react-native-router-flux'

import HeroesList from './src/sections/heroes/HeroesList'


export default class App extends Component{
  render() {
    return (
      <Router>
       <Scene key="root">
       <Scene
            key= {'HeroesList'}
            component={ HeroesList }
            />
       </Scene>
    </Router>
      
    );
  }
}
