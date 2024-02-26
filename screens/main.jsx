import { CardDivider } from '@rneui/base/dist/Card/Card.Divider';
import { Card } from '@rneui/themed';
import{StyleSheet} from 'react-native';
import { Image } from '@rneui/themed';
import React, { useState } from 'react';
import { View, Text, FlatList,  StatusBar, SectionList, Modal, TouchableOpacity, Button } from 'react-native';


const Main =()=>{

    const [ima, setImg] = useState([
        'https://cdn5.dibujos.net/dibujos/pintados/202309/una-flor-sonriente-naturaleza-flores-12612590.jpg',
        'https://4.bp.blogspot.com/-FfTrEldU-ZM/X0awY2oEn6I/AAAAAAAABec/CbqP0SxDPl4Srgy7C8RnDdN3mxMI9QR1ACK4BGAYYCw/s1600/IMG_5980.jpeg',
        'https://static.wikia.nocookie.net/gothtypes/images/d/d6/Nu_Goth1_by_anydeath_on_instagram.jpg/revision/latest?cb=20220202011533',
        'https://static.wixstatic.com/media/359161_fa5deff96def4c7e8e59c4f9aaaa1248~mv2.png/v1/fill/w_613,h_921,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/359161_fa5deff96def4c7e8e59c4f9aaaa1248~mv2.png',
        'https://www.dzoom.org.es/wp-content/uploads/2019/07/fotografia-flores-primavera-consejos-810x540.jpg',
        'https://static6.depositphotos.com/1151443/638/i/450/depositphotos_6385224-stock-photo-crocus-flowers.jpg',
        'https://www.florespedia.com/Imagenes/flores-bonitas.jpg',
    ]);
      
    const [imagen, setImagenSeleccionada] = useState(null)
    const [modal, setModalVisible] = useState(false);
    
    const abrirModal = (uri) => {
        setImagenSeleccionada(uri)
        setModalVisible(true);
    }

    const cerrarModal = () => {
        setModalVisible(false);
    }
    
    return(
        <View styles={styles.StyleSheet}>
            <CardDivider/>
            <CardDivider/>
            <Text style={styles.texto}>Instagram</Text>
            <View style={styles.conteiner}>

                <SectionList
                    sections={[{ data: ima }]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                    
                        <TouchableOpacity onPress={() =>{abrirModal(item)}}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 5 }}>
                            <Image 
                                style={styles.foto}
                                source={{ uri: item }}
                            />
                            <Text style={{color: 'black', fontSize: 10, marginBottom: 20}}>Usuario</Text>
                            </View>
                        </TouchableOpacity>
                    )}

                horizontal={true}/>
            </View>

            <SectionList
                sections={[{ data: ima }]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.ini}>
                        <View style={styles.imgIni}>
                            <Image style={{ width: 40, height: 40, borderRadius: 50, marginRight: 4 }} source={{ uri: 'https://www.hogarmania.com/archivos/202301/flores-amarillas-nombres-y-fotos-668x400x80xX-1.jpg' }} />
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 13, marginTop: 6 }}> Luz y Leti</Text>
                        </View>
                        <CardDivider/>
                        <CardDivider/>
                        <Card containerStyle={styles.fondo}>
                            <Image style={{ width: 300, height: 400, borderRadius: 4 }} source={{ uri: item }} />
                            <CardDivider style={{ color: 'gray', margin: 3 }} />
                        </Card>
                    </View>
                )}
            horizontal={false }/>

            <CardDivider style={{width:600, backgroundColor:'black'}}>
                <Image style={{ width: 200, height: 200}}  />
                <Image style={{ width: 200, height: 200 }} />
                <Image style={{ width: 200, height: 200 }} />
            </CardDivider>

            <Modal animationType='slide' visible={modal}>
                <View>
                    <View style={styles.cerrarModal}>
                        <Button style={{ alignItems: 'flex-end', justifyContent: 'flex-end'}} color={'green'} title='X' onPress={cerrarModal} />
                    </View>
                    <View style={styles.vistaModal}>
                        <Image style={styles.historiaModal} source={{uri: imagen}}/>
                    </View>
                </View>
            </Modal>
    
        </View>
    );
}

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 10,
        paddingTop: 30,
    },

    conteiner: {
        backgroundColor: 'white',
        width: 380,
        height: 90, 
        marginBottom: 10,
    },

    foto: {
        width: 50,
        height: 50,
        borderColor: '#fff',
        margin: 10,
        borderRadius: 50,
        borderColor: '#E50195',
        borderWidth: 1,
        paddingTop: 2,
    },

    ini: {
        backgroundColor: '#f2f2f200',
        alignItems: 'center',
        justifyContent: 'center',
        width: 380,
        height: 500,
        marginBottom:1,
        position: 'relative', 
    },

    texto: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft:20
    },

    fondo: {
        backgroundColor: 'black',
    },

    imgIni: {
        position: 'absolute', 
        top: 2, 
        left: 1, 
        flexDirection: 'row',
        justifyContent: 'flex-start', 
        alignItems: 'start', 
        marginBottom: 20, 
        marginRight: 60, 
        paddingLeft:20
    },



    //Estilos del Modal
    vistaModal: {
        backgroundColor: 'green',
        borderRadius: 20,
        shadowColor: '#000',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
    },

    cerrarModal: {
        justifyContent: 'flex',
        alignItems: 'flex',
        backgroundColor:'green',
    },

    historiaModal: {
        height: 400,
        width: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },

    
})