import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default class HeroesCell extends Component {

    static defaultsProps = {
        onSelect: () => {},
        item: {}
    }

    render() {
        const { item, onSelect } = this.props

        return (
            <TouchableOpacity onPress={ () => onSelect(item) } > 
                <View style={{ height: 200, backgroundColor: 'grey', marginVertical: 10 }}>
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}