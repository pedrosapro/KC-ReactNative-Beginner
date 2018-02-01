import React, { Component } from 'react'
import { View, Text, FlatList, Button } from 'react-native'

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
        this.setState({list: ['Adam destiny', '3D-Man', 'Abbobination', 'Abbys'] })
    }

    renderItem(item) {
        return (
            <View style={{ height: 200, backgroundColor: 'grey', marginVertical: 10 }}>
                <Text>{item}</Text>
                <Button
                    title='Selecciona Heroe'
                    onPress={() => this.setState({ selected: item })}
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
                />
            </View>
        )
    }
}