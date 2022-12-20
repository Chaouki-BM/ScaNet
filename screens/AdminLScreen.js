import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const AdminLScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.menuItem}>
                <View style={styles.iconContainer}>
                    <Image
                        source={require('../assets/AdminList.png')}
                        style={styles.logoStyle}
                    />
                </View>

                <Text style={styles.btnText}>chaouki ben miled</Text>

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
        justifyContent: 'flex-start',
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
        marginRight: 20
    },
    btnText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
    },
    logoStyle: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    nameContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

});


export default AdminLScreen