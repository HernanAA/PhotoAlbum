import React, { Component } from 'react'
import Styles from '../../styles'
import { View, Image, Text, Animated } from 'react-native'
import Utils from '../../helpers/utils';
import { Stars } from '../common';

class PhotoListViewItem extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            animateItem: new Animated.Value(0)
        })
    }

    componentWillMount() {
        Animated.timing(this.state.animateItem, {
            toValue: 1,
            duration: 900,
            delay:this.props.index*50
        }).start()
    }

    render() {
        return (
            <Animated.View style={{
                transform: [
                    {
                        translateY: this.state.animateItem.interpolate({
                            inputRange: [0, 1],
                            outputRange: [900, 1]
                        })
                    }
                    , {
                        translateX: this.state.animateItem.interpolate({
                            inputRange: [0, 1],
                            outputRange: [400, 1]
                        })
                    }
                ]
            }}>
                <View key={this.props.item.id} style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: this.props.image }} style={styles.image} />
                    </View >
                </View >
            </Animated.View>
        )
    }
}

const styles = {
    container: {
        height: 150,
        width: Utils.getWindowDimensions().width / 2 - 10,
        marginVertical: 3,
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 230,.5)',
        marginHorizontal: 5,
        borderRadius: 5,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 5,
        borderColor: Styles.colors.lighterGray,
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
        height: 54,
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 3,
    },
    title: {
        fontSize: 12,
        color: Styles.colors.black,
        fontWeight: '500',
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
}

export default PhotoListViewItem;