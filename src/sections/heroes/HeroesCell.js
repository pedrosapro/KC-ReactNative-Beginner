import React, { Component } from 'react'
import { Platform, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'


export default class HeroesCell extends Component {

    static defaultsProps = {
        onSelect: () => { },
        item: {}
    }

    render() {
        const { item, onSelect } = this.props

        const image = {uri: item.thumbnail.path +'.'+ item.thumbnail.extension}
        console.log(image)

        return (
            <TouchableOpacity style={styles.container} onPress={() => onSelect(item)} >
                <Image source={ image } style={styles.image} resizeMode={'stretch'} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        margin: 10,
        width: Dimensions.get('window').width / 2 - 20, //857/600
        height: (Dimensions.get('window').width / 2 - 20) * (857/600),

        ...Platform.select({
            ios: {
              shadowColor: 'rgba(255,255,255,0.1)',
              shadowOpacity: 1,
              shadowOffset: { height: 4, width: 4 },
              shadowRadius: 2,
            },
            android: {
              elevation: 4,
            },
        })
    },

    image: {
        width: Dimensions.get('window').width / 2 - 20, //857/600
        height: (Dimensions.get('window').width / 2 - 20) * (857/600),
    }
})