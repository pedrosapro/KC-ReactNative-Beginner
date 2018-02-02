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

        this.props.updateHeroeOnSelect(heroe)
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
        const selected = this.props.selected? this.props.selected: ''
        const name = selected.name? selected.name : ''
        return (
            <View>
                <Text>{'Héroe seleccionado: ' + name}</Text>
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
        selected: state.heroes.selected,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchHeroesList: () => {
            console.log("mapDispatchToProps")
            dispatch(HeroesActions.fetchHeroesList())
        },

        updateHeroeOnSelect: (heroe) => {
            dispatch(HeroesActions.updateHeroeOnSelect(heroe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList)
