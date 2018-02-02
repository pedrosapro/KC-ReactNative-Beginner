import React, { Component } from 'react'
import { View, Text, FlatList, Button } from 'react-native'

import * as webservices from '../../webservices/webservices'

// Redux
import { connect } from 'react-redux'

import HeroesCell from './HeroesCell'

class HeroesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],
            selected: null
        }
    }

    componentWillMount() {

        webservices.configureAxios()
        
        webservices.fetchCharacters(webservices.constants.FETCH_CHARACTERS_URL)
       .then(response => {
             console.log(response)
            if (response.data) {
                console.log(response.data.results)
                this.setState({ list: response.data.results })
            }
            else {

            }


        }).catch(error => {
            console.log("Error: " + error)

        });


    }

    onSelect(heroe) {
        console.log("onSeeeeeelect")
        this.setState({selected: heroe.name})
    }



    renderItem(item) {
        return (
            <HeroesCell
                item = {item}
                onSelect = { (v) => this.onSelect(v) }
            />
        )
    }

    render() {
        const nombre = this.state.selected ? this.state.selected : ''
        return (
            <View>
                <Text>{'Héroe seleccionado: ' + nombre}</Text>
                <FlatList
                    data={this.state.list}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList)
