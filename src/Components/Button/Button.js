import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './Button.Styles';
const Button = ({title, onPress}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textContainer}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
