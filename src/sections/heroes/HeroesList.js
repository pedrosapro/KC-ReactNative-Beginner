import React, { Component } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import axios from 'axios'

import HeroesCell from './HeroesCell'

export default class HeroesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],
            selected: null
        }
    }

    componentWillMount() {
        //mock
        //this.setState({list: ['Adam destiny', '3D-Man', 'Abbobination', 'Abbys'] })

        // AXIOS SETUP
        axios.defaults.baseURL = 'https://gateway.marvel.com/v1/public/'
        axios.defaults.headers.post['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Referer'] = 'http://dccomics.com'

        const fetchUrl = '/characters?apikey=3416d75bb54553bf672d77b8ef93275d'

        axios.get(fetchUrl).then(response => {

            console.log(response)
            if (response.data) {
                this.setState({ list: response.data.data.results })
            }
            else
                reject(response)

        }).catch(error => {
            reject(error)
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