import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import Styles from '../../styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

const Header = (props) => {
  alert(props.searching);
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity
          style={styles.navBarLeftButton}
          activeOpacity={0.2}
          onPress={() => { Actions.pop() }}>
          <Icon name='arrow-back' size={20} color={Styles.colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{props.headerText}</Text>
      </View>
      <View style={styles.filterContainer}>
        <TextInput style={styles.inputText}
          onChangeText={props.onFilterChanged}
          underlineColorAndroid={'transparent'}>
        </TextInput>
        <TouchableOpacity
          style={styles.searchIconContainer}
          activeOpacity={0.1}
          onPress={() => { props.onSearchChanged() }}>
          <Icon name='search' size={25} color={Styles.colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: 'rgba(47,163,218,.4)',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    paddingLeft: 20,
    flexDirection: 'row',
    elevation: 1
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  navBarLeftButton: {
    marginRight: 20,
  },
  headerText: {
    fontSize: 27,
    fontWeight: '400',
    textShadowOffset: { width: 0, height: 1 },
    color: Styles.colors.white,
  },
  filterContainer: {
    flex: 1.3,
    backgroundColor: 'rgba(47,163,218,.1)',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    paddingLeft: 20,
    flexDirection: 'row',
    borderRadius: 4
  },
  inputText: {
    flex: 1,
    fontSize: 19,
    color: 'gray',
    //backgroundColor: 'rgba(47,163,218,.9)',
    borderRadius: 10
  },
  searchIconContainer: {
    marginRight: 15,
  },
};

export { Header };
