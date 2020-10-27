import React from 'react';
import {View, Text, Button} from 'react-native';

const First = (props) => {
  return (
    <View>
      <Text style={{fontSize: 30}}>First</Text>
      <Button
        title="Go"
        onPress={() =>
          props.navigation.navigate('SecondPage', {userName: 'Oguzhan'})
        }
      />
    </View>
  );
};

export {First};
