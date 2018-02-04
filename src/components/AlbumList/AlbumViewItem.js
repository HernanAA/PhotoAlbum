import React, { Component } from 'react'
import Styles from '../../styles'
import { View, Image, Text } from 'react-native'
import Utils from '../../helpers/utils';
import { Stars } from '../common';

const AlbumViewItem = ({ item, image }) => {
    return (
        <View key={item.id} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
            </View >

            <View style={styles.bottomContainer}>
                <View style={styles.line}>
                    <Text style={styles.title}>{item.title.substring(0,17)}...</Text>
                </View>
            </View>
        </View >
    )
}

const styles = {
    container: {
        height: 240,
        width: Utils.getWindowDimensions().width / 2 - 10,
        marginBottom: 10,
        flexDirection: 'column',
        backgroundColor: Styles.colors.white,
        borderRadius: 3,
        elevation: 2,
        paddingHorizontal: 20,
    },
    imageContainer: {
        flex: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderColor: Styles.colors.lighterGray,
        borderWidth: 1,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    bottomContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        height:40,
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 3,
    },
    title: {
        fontSize: 16,
        color: Styles.colors.black,
        fontWeight: '500',
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
}

export { AlbumViewItem }