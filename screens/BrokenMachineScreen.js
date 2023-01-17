import React, { useEffect, useState } from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
const BrokenMachineScreen = () => {
    const [Brokens, setBrokens] = useState([]);
    useEffect(() => {
        loadData();
    }, []);
    const loadData = async () => {
        await axios.get('http://192.168.1.11:5000/Machine/BrokenMachine')
            .then(function (response) {
                // handle success
                setBrokens(response.data.result)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }


    const handelfixerror = async (broken) => {
        await axios.patch(`http://192.168.1.11:5000/Machine/FixBroken/${broken._id}`)
            .then(function (response) {
                // handle success
                console.log(response.data.success)
                if (response.data.success) {
                    loadData();
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error.message);
            })
            .finally(function () {
                // always executed
            });


    }

    return (
        <View style={styles.container}>
            {Brokens.map((broken, index) => {
                return (
                    <View style={styles.menuItem} key={index}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={require('../assets/Warning.png')}
                                style={styles.logoStyle}
                            />
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.btnText}>{broken.NameMachine} </Text>
                            <Text style={styles.btnSubText}>{broken.IpMachine}</Text>
                        </View>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => handelfixerror(broken)}>
                                <Image
                                    source={require('../assets/Checked.png')}
                                    style={styles.logoStyleDelete}

                                />
                            </TouchableOpacity>
                        </View>

                    </View>
                )
            })}

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
        width: '95%',
        height: 80,
        borderRadius: 10,
        backgroundColor: '#84A9FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 10,

        marginVertical: 10,
    },
    iconContainer: {
        width: 65,
        height: 50,
        borderRadius: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        marginRight: 5,
    },
    btnText: {
        fontSize: 20,
        fontWeight: '600',
        fontWeight: "bold",
        color: 'black'
    },
    btnSubText: {
        fontSize: 18,
        fontWeight: '400',
        color: 'black'
    },
    btnContainer: {
        flexDirection: 'row',
    },
    button: {
        margin: 3,
    },
    logoStyle: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginBottom: 5

    },
    logoStyleDelete: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
})
export default BrokenMachineScreen