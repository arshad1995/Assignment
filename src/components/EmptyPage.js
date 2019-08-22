import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const EmptyPage = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text style={{ fontSize: 20 }}>Click Here To Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyPage;
