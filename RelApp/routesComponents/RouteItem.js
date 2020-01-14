import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {IconsComponent, Space} from "../components/stylingComponents";

export function RouteItem(props)
{
    const [text, setText] = useState("")
    const [favorite, isFavorite] = useState(false)

    const selectIconName = () =>
    {
        if(favorite) return 'md-star'
        else return 'md-star-outline'
    }

    return (
        <View style={RouteItemStyles.customView}>
            <View style={RouteItemStyles.mainView}>
                <TouchableOpacity   onPress={()=>{
                    props.callback()
                }}>
                    <Text style={RouteItemStyles.textStyle} >Route I</Text>
                </TouchableOpacity>
            </View>
            <View style={RouteItemStyles.secondView}>
                <View style={RouteItemStyles.descriptionView}>
                    <Text>labas</Text>
                </View>
                <IconsComponent name = {selectIconName()} style={RouteItemStyles.iconView} callback = {()=>{
                    isFavorite(!favorite);
                    console.log("TouchableOpacity")
                }}/>
            </View>
        </View>
    )
}

export const RouteItemStyles = StyleSheet.create({
    customView: {
        flex: 1,
        width: '95%',
        flexDirection: 'column',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#F0E6E6',
    },
    mainView:{
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondView: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
    },

    descriptionView: {
        width: '85%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconView:{
        width: '15%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
})
