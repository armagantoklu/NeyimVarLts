import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.Styles';

const SearchBar = ({placeholder, onChangeText}) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
      placeholderTextColor={'white'}
        style={styles.TextInputContainer}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};
export default SearchBar;
