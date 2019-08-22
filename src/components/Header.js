import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from '../styles/HeaderStyles';

import { HEADER_CONTENT } from './constants';

const Header = ({ onClick }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onClick}>
        <Image
          source={{
            uri: HEADER_CONTENT.BACK_ARROW,
          }}
          style={styles.backArrow}
        />
      </TouchableOpacity>
      <Text style={styles.name}>{HEADER_CONTENT.NAME}</Text>
      <TouchableOpacity>
        <Image
          source={{
            uri: HEADER_CONTENT.MENU,
          }}
          style={styles.menu}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
