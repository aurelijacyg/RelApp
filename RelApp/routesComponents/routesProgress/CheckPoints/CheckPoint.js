import {View, Text, StyleSheet} from "react-native";
import React from "react";

export default function RouteStatistics({coordinates, type, visited})
{
    return (
        <View style={Styles.customView}>
            <View style={Styles.mainView}>
                <Text style={Styles.textStyle} >{type} </Text>
            </View>
            <View style={Styles.secondView}>
                <View>
                    <Text>Coords: {coordinates}</Text>
                    <Text>Visited: {visited.toString()}</Text>
                </View>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    customView: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#FFDEAD',
        marginBottom:5
    },
    mainView:{
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding:3
    },
    secondView: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        padding:1
    },
    textStyle:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
})
