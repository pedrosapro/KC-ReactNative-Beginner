
import React, { Component } from 'react';
import { Action, Scene, Router} from 'react-native-router-flux'

import * as webservices from './webservices/webservices'


import HeroesList from './sections/heroes/HeroesList'

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
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene
              key={'HeroesList'}
              component={HeroesList}
            />
          </Scene>
        </Router>
      </Provider>

    );
  }
}
