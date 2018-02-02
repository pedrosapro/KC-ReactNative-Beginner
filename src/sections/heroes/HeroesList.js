import React, { Component } from 'react'
import { View, Text, FlatList, Button } from 'react-native'

// Redux
import { connect } from 'react-redux'
import * as HeroesActions from '../../redux/actions/heroes'
import { Actions } from 'react-native-router-flux'


import HeroesCell from './HeroesCell'

class HeroesList extends Component {

    componentWillMount() {

        this.props.fetchHeroesList()
       
    }

    onSelect(heroe) {
        console.log("onSeeeeeelect")
        this.setState({ selected: heroe.name })
    }



    renderItem(item) {
        return (
            <HeroesCell
                item={item}
                onSelect={(v) => this.onSelect(v)}
            />
        )
    }

    render() {
        const nombre = this.props.selected ? this.props.selected : ''
        return (
            <View>
                <Text>{'Héroe seleccionado: ' + nombre}</Text>
                <FlatList
                    data={this.props.list}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps")
    return {
        list: state.heroes.list,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchHeroesList: () => {
            console.log("mapDispatchToProps")
            dispatch(HeroesActions.fetchHeroesList())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList)
