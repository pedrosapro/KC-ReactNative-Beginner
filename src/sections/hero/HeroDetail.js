import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Colors } from '../../commons'

// Redux
import { connect } from 'react-redux'

class HeroDetail extends Component {

    componentWillMount() {
    }

    render() {
        hero = this.props.hero
        const image = { uri: hero.thumbnail.path + '.' + hero.thumbnail.extension }
         nodescription = "No description"
        description = hero.description==''? nodescription : hero.description
        return (
            <View style={styles.container}>

                <Image source={image} style={styles.image} />

                <Text style={styles.description}> {description} </Text>

            </View>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        hero: state.heroes.selected
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    image: {
        flex: 1
    },
    description: {
        flex: 1,
        fontFamily: "Helvetica Neue",
        fontSize: 18,
        padding: 10
    }

})