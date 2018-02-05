import React, { Component } from 'react'
import Styles from '../../styles'
import { View, Image, Animated } from 'react-native'
import Utils from '../../helpers/utils';

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
    }
}

export default PhotoListViewItem;