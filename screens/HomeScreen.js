import React from 'react'
import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, } from 'react-native'
import { Button, Card, Modal, Text, Input } from '@ui-kitten/components';
import axios from 'axios';
const HomeScreen = ({ navigation }) => {
    const handePressAdminList = () => {
        navigation.navigate('Admin List');
    };
    const handePressMachinesList = () => {
        navigation.navigate('Machines');
    };
    // const handePressAddMachines = () => {
    //   navigation.navigate('Add Machine');
    //};
    const handePressBrokenMachines = () => {
        navigation.navigate('Broken Machine');
    };
    const [MachineInfo, setMachineInfo] = useState({

        NameMachine: '',
        IpMachine: '',
    });

    const handleAdd = () => {
        //console.log(loginInfo);
        // axios({
        //     method: 'post',
        //     url: 'http://192.168.1.15:5000/user/login',
        //     data: loginInfo
        // }).then((res) => {
        //     console.log(res.config.result)
        // }).catch((e) => {
        //     console.log(e)
        // });

        axios.post('http://192.168.1.11:5000/Machine/AddMachine', MachineInfo)
            .then(function (response) {
                // handle success
                success = response.data.success;
                console.log(response.data.success);
                if (success) {
                    navigation.navigate('home');
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        setVisible(false)
    };

    const [visible, setVisible] = React.useState(false);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menuItem} onPress={handePressAdminList}>
                <View style={styles.iconContainer}>
                    <Image
                        source={require('../assets/AdminList.png')}
                        style={styles.logoStyle}
                    />
                </View>
                <Text style={styles.btnText}>Admin List</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={handePressMachinesList}>
                <View style={styles.iconContainer}>
                    <Image
                        source={require('../assets/MachineList.png')}
                        style={styles.logoStyle}
                    />
                </View>
                <Text style={styles.btnText}>Machines List</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => setVisible(true)}>
                <View style={styles.iconContainer}>
                    <Image
                        source={require('../assets/AddMachine.png')}
                        style={styles.logoStyle}
                    />
                </View>
                <Text style={styles.btnText}>Add Machines</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={handePressBrokenMachines}>
                <View style={styles.iconContainer}>
                    <Image
                        source={require('../assets/BrokenMachine.png')}
                        style={styles.logoStyle}
                    />
                </View>
                <Text style={styles.btnText}>Offline Machines</Text>

            </TouchableOpacity>
            {/* <View style={styles.container1}> */}
            <View >

                <Modal
                    visible={visible}
                    backdropStyle={styles.backdrop}
                    onBackdropPress={() => setVisible(false)}>
                    <Card disabled={true}>
                        <Text style={styles.textstyle}>Add Machine</Text>
                        <Input
                            secureTextEntry={false}
                            style={styles.inputStyle}
                            placeholder="Name of machine"
                            size="large"
                            value={MachineInfo.NameMachine}
                            onChangeText={val => {
                                setMachineInfo({ ...MachineInfo, NameMachine: val });
                            }}
                        />
                        <Input
                            secureTextEntry={false}
                            style={styles.inputStyle}
                            placeholder="Ip address of machine"
                            size="large"
                            value={MachineInfo.IpMachine}
                            onChangeText={val => {
                                setMachineInfo({ ...MachineInfo, IpMachine: val });
                            }}
                        />
                        <Button style={styles.addBtn} onPress={handleAdd}>
                            ADD
                        </Button>
                    </Card>
                </Modal>

            </View>



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ECF1FE',
        padding: 10,

    },
    menuItem: {
        width: "100%",
        height: 80,
        borderRadius: 10,
        backgroundColor: "#84A9FF",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 18,
        marginVertical: 20,


    },
    btnText: {
        fontSize: 28,
        fontWeight: "bold",
        color: 'black'

    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        marginRight: 20,
    },
    logoStyle: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    // container1: {
    //     minHeight: 192,
    // },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    inputStyle: {
        minWidth: 250,
        marginVertical: 10,
    },
    addBtn: {
        backgroundColor: '#0031F8',
        borderColor: '#0031F8',
    },
    textstyle: {
        color: 'black',
        fontSize: 30,
        fontWeight: '600',
    }
})
export default HomeScreen