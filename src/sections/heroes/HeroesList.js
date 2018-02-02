import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native'

import { Colors } from '../../commons'


// Redux
import { connect } from 'react-redux'
import * as HeroesActions from '../../redux/actions/heroes'
import { Actions } from 'react-native-router-flux'


import HeroesCell from './HeroesCell'

class HeroesList extends Component {

    componentWillMount() {
        this.props.fetchHeroesList()
    }

    renderFooter() {
        return <ActivityIndicator
            animating={this.props.isFetching}
            size="large"
            color="grey"
            style={{ marginVertical: 20 }}
        />
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
            <View style={styles.container}>
                <FlatList
                    data={this.props.list}
                    ListFooterComponent={() => this.renderFooter()}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={(item, index) => item.id}
                    extraData={this.props.list}
                    numColumns={2}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps")
    return {
        list: state.heroes.list,
        isFetching: state.heroes.isFetching,
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
            Actions.HeroDetail({ title: heroe.name })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingBottom: 20,
        paddingTop: 60,

    },

})
