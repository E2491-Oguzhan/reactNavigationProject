import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

const Post = (props) => {
  const postData = props.route.params.selectedPost;
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold', padding: 5}}>
        {postData.userName}
      </Text>
      <Image
        style={{
          height: Dimensions.get('window').height / 2,
          margin: 5,
        }}
        source={{uri: postData.img}}
      />
      <Text style={{padding: 5}}>{postData.description}</Text>
    </View>
  );
};

export {Post};
