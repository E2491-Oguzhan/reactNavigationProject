import React from 'react';
import {View, Text, Button} from 'react-native';

const Second = (props) => {
  const selectedUser = props.route.params.userName;
  return (
    <View>
      <Text style={{fontSize: 30}}>SecondPage</Text>
      <Text style={{fontSize: 20}}>{selectedUser}</Text>

      <Button title="Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

export {Second};
