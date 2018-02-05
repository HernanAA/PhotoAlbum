import React, { Component } from 'react'
import { View, TouchableWithoutFeedback, FlatList, ImageBackground, Animated } from 'react-native'
import  PhotoListViewItem  from './PhotoListViewItem'
import { Header } from '../common';

class PhotoListView extends Component {
    constructor(props) {
        super(props)
        this.state = ({ 
            animatePress: new Animated.Value(1) })
    }

    onPhotoPressIn() {
        Animated.timing(this.state.animatePress, {
            toValue: 0.8,
            duration: 200
        }).start()
    }

    onPhotoPressOut() {
        Animated.timing(this.state.animatePress, {
            toValue: 1,
            duration: 200
        }).start()
    }
    
    renderItem({ item, index }) {
        return (
            <TouchableWithoutFeedback
                onPressIn={this.onPhotoPressIn.bind(this)}
                onPressOut={this.onPhotoPressOut.bind(this)}>

                <Animated.View style={{
                    transform: [
                        {
                            scale: this.state.animatePress
                        }
                    ]
                }}>
                    <PhotoListViewItem item={item} image={item.thumbnailUrl} index={index} />
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
                            numColumns={2}
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