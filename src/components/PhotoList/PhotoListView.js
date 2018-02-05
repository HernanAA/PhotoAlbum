import React, { Component } from 'react'
import { View, TouchableWithoutFeedback, FlatList, Text, ImageBackground, Animated } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Styles from '../../styles'
import { PhotoListViewItem } from './PhotoListViewItem'
import { Spinner, Header } from '../common';

class PhotoListView extends Component {

    constructor(props) {
        super(props)
        this.state = ({ animatePress: new Animated.Value(1) })
    }

    onAlbumPress(item) {
        // this.props.photoFetch(item._id);
        // Actions.photos();
    }

    onAlbumPressIn() {
        Animated.timing(this.state.animatePress, {
            toValue: 0.8,
            duration: 200
        }).start()
    }
    onAlbumPressOut() {
        Animated.timing(this.state.animatePress, {
            toValue: 1,
            duration: 200
        }).start()
    }

    renderItem({ item }) {
        return (<PhotoListViewItem item={item} image={item.thumbnailUrl} />)

        return (
            <TouchableWithoutFeedback
                onPress={this.onAlbumPress.bind(this, item)}
                onPressIn={this.onAlbumPressIn.bind(this)}
                onPressOut={this.onAlbumPressOut.bind(this)}
                style={{}}>
                <Animated.View style={{ transform: [{ scale: this.state.animatePress }] }}>
                    <PhotoListViewItem item={item} image={item.thumbnailUrl} />
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }

    onFilterChanged(text) {
        this.props.albumFilterChanged({ text });
    }
    onFilterPressed() {
        this.props.albumFilterPressed();
    }

    render() {
        const title = <Header
            headerText={this.props.selectedAlbum.title.substring(0, 16) + '...'}
            backButton={true}
            searchButton={false}
        />;

        return (
            <ImageBackground source={require('./../../images/background.jpg')} style={styles.screen}>
                {title}
                <View style={styles.container}>
                    <View style={styles.listContainer}>
                        <FlatList
                            style={{ flex: 1, flexDirection: 'column' }}
                            numColumns={4}
                            data={this.props.albumPhotos}
                            keyExtractor={(item, index) => item.id}
                            renderItem={this.renderItem.bind(this)}
                        />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

export default PhotoListView;

const styles = {
    screen: {
        flex: 1
    },
    container: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
    },
    errorContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
}