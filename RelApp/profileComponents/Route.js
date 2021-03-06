import {View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native";
import React, {useState} from "react";
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import {getAddressByRouteId} from '../databaseServices/AddressService';
import {getRouteComments} from '../databaseServices/CommentService';
import RouteCommentsModal from '../routesComponents/routeComments/RouteCommentsModal';
import {deleteRoute} from '../databaseServices/RouteService';
import {MainColors} from '../components/stylingComponents';

export function Route(props)
{
    const [modalVisible, setModalVisible] = useState(false);
    const [comments, setComments] = useState([]);

    async function handleEditRouteBtn() {
        try {
            let data = await getAddressByRouteId(props.data.id);
            const route = {route: props.data, address: data}
            props.navigation.navigate("CreateRoute", {route})
        } catch (err) {
            console.log(err);
        }     
    }

    async function handleCommentsBtn() {
        try {
            let data = await getRouteComments(props.data.id);
            setComments(data);
            changeModalVisible();
        } catch (err) {
        }     
    }

    async function handleDeleteRouteBtn() {
        try {
            await deleteRoute(props.data.id);
        } catch (err) {
        }     
    }

    const changeModalVisible = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <View style={styles.customView}>
            {modalVisible === true &&
                <View style={{width:"100%"}}>
                    <RouteCommentsModal
                        modalVisible={true}
                        stopShowingModal={()=>changeModalVisible()}
                        comments = {comments}
                     />
                </View>
            }
            <View style={styles.mainView}>
                <View style={styles.headerView}>
                    <Text style={styles.textStyle}>{props.data.title}</Text>
                </View>
                <TouchableOpacity  onPress={() => handleDeleteRouteBtn()}>
                    <MaterialCommunityIcons
                        name={"delete-outline"}
                        size={38}
                        color={MainColors.iconGrey}
                    />
                </TouchableOpacity>
            </View>
            
            <View style={styles.secondView}>
                <View style={styles.descriptionView}>
                    <Text style={{color: MainColors.textDarkGrey}}> {props.data.description} </Text>
                </View>
                <View style={{flexDirection:'column', marginVertical: 10}}>
                    <TouchableOpacity  onPress={() => handleCommentsBtn()}>
                            <Ionicons
                                name={"md-chatboxes"}
                                size={38}
                                color={MainColors.iconGrey}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => handleEditRouteBtn()}>
                            <MaterialCommunityIcons
                                name={"square-edit-outline"}
                                size={38}
                                color={MainColors.iconGrey}
                            />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    customView: {
        width: 330,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: MainColors.borders,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    mainView:{
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    secondView: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    descriptionView: {
        width: '85%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerView: {
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle:{
        fontWeight: 'bold',
        color: MainColors.textDarkGrey,
        fontSize: 20,
    },
})