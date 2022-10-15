import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ACCENTCOLOR, PRIMARYCOLOR, SECONDARYCOLOR} from '../constants/constant';

const FlatListComponent = ({data}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageThumbnail} source={{uri: data.imageUrl}} />
      <Text numberOfLines={1} style={styles.title}>
        {data.Ingredient}
      </Text>
      <Text numberOfLines={2} style={styles.short_Text}>
        {data.short_text}
      </Text>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    backgroundColor: ACCENTCOLOR,
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    alignItems: "center"
  },
  imageThumbnail: {
    width: '80%',
    borderRadius: 5,
    height: 100,
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '700',
    width: '80%',
    color: PRIMARYCOLOR,
    fontSize: 13.6,
  },
  short_Text: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '500',
    width: '80%',
    color: SECONDARYCOLOR,
    fontSize: 11,
  },
});

export default FlatListComponent;
