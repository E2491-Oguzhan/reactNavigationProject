import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const PostCard = (props) => {
  return (
    <TouchableWithoutFeedback onPress={() => props.onSelect()}>
      <View>
        <Image style={styles.image} source={{uri: props.post.img}} />
        <View style={styles.footerContainer}>
          <Text style={styles.title}>{props.post.userName}</Text>
          <Text numberOfLines={3} style={styles.desc}>
            {props.post.description}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').height / 3,
    margin: 5,
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  footerContainer: {
    padding: 5,
  },
  desc: {
    lineHeight: 25,
  },
});
