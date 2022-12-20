import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
const MachineLScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.menuItem}>
                <View style={styles.iconContainer}>
                    <Image
                        source={require('../assets/MachineList.png')}
                        style={styles.logoStyle}
                    />
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.btnText}>server </Text>
                    <Text style={styles.btnSubText}>192.168.10.225</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Image
                            source={require('../assets/DeleteLogo.png')}
                            style={styles.logoStyleDelete}
                        // onPress={}
                        />
                    </TouchableOpacity>
                </View>

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
        width: 60,
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
    },
    logoStyleDelete: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
})

export default MachineLScreen