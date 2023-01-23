import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import AppContext from '../screen/AppContext'

const Basket = () => {

    const { konter, setKonter } = useContext(AppContext);
    const [price, setPrice] = useState(50000);

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <View style={styles.image}>
                    <Text>Image</Text>
                </View>
                <View style={styles.text}>
                    <Text style={styles.textHeader}>Bali</Text>
                    <Text style={styles.textContain}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
                    <Text style={{ color: 'black', marginTop: 10 }}>Harga : {price}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => setKonter(konter + 1)} >
                        <Text style={{ color: 'white', fontWeight: 'bold' }} >Wishlist</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.quantity}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={styles.textHead}>Harga</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{price}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={styles.textHead}>Jumlah Item: </Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{konter}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={styles.textHead}>Summary</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{ konter * price}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <View style={[styles.boxItem]}><Button title="Kurang" onPress={() => setKonter(konter - 1)} /></View>
                    
                    <View style={[styles.boxItem]}><Button title="Tambah" onPress={() => setKonter(konter + 1)} /></View>
                </View>

            </View>
        </View>
    )
}

export default Basket

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', flexDirection: 'column', padding: 32 },
    box: { marginTop: 32, alignItems: 'center', flexDirection: 'row', },
    item: {
        backgroundColor: 'yellow',
        height: 180,
        flexDirection: 'row',
        borderRadius: 10
    },

    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 10,

    },
    text: {
        flex: 1.5,
        padding: 10
    },
    button: { backgroundColor: '#00A884', paddingVertical: 16, borderRadius: 5, marginTop: 15, justifyContent: 'center', alignItems: 'center' },

    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    quantity: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10,

    },
    harga: {
        flexDirection: 'row',
        justifyContent: '',

    },
})