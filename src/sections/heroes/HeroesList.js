import React, { Component } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import axios from 'axios'

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

        axios.get(fetchUrl).then( response => {

            console.log(response)
            if(response.data){
                this.setState({list: response.data.data.results})
            }
            else 
                reject( response )

        }).catch( error => {
            reject( error )
        });


    }

    renderItem(item) {
        return (
            <View style={{ height: 200, backgroundColor: 'grey', marginVertical: 10 }}>
                <Text>{item.name}</Text>
                <Button
                    title='Selecciona Heroe'
                    onPress={() => this.setState({ selected: item.name })}
                />
            </View>
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