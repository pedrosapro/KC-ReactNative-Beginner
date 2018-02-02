
import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import { Action, Scene, Router} from 'react-native-router-flux'

import * as webservices from './webservices/webservices'
import {Colors} from './commons'

import HeroesList from './sections/heroes/HeroesList'
import HeroDetail from './sections/hero/HeroDetail'

/****************** REDUX *******************/
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from './redux/reducers' // Nuestros reducers
const reducer = combineReducers(reducers) // Combinamos nuestros reducers
const store = createStore( // Creamos el store con:
  reducer, // Nuestros reducer
  applyMiddleware(thunk) // Nuestro middleware redux-thunk
)
/*******************************************/


export default class App extends Component {

  componentWillMount() {
    webservices.configureAxios()
    StatusBar.setBarStyle('light-content') // iOS StatusBar light style

  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene
              key={'HeroesList'}
              component={HeroesList}
              hideNavBar
            />
            <Scene
              key={'HeroDetail'}
              component={HeroDetail}
              navigationBarStyle={styles.navBar}
              navBarButtonColor={'white'}
            />
          </Scene>
        </Router>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  navBar: {
      backgroundColor: Colors.navBar,
  },
});
