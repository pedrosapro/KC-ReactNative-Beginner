import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

export default class HeroesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: ['Adam destiny','3D-Man','Abbobination','Abbys']
        }
    }

    renderItem(item) {
        return(
        <View style = {{ height: 200, backgroundColor: 'grey', marginVertical: 10 }}>
            <Text>{ item }</Text>
        </View>
        )
    }

    render() {
        return(
            <View>
            <FlatList
                data={this.state.list}
                renderItem={ ({item}) => this.renderItem(item) }
            />
        </View>
        )
    }
}