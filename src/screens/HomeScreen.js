import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import FlatListComponent from '../components/FlatListComponent';
import {PRIMARYCOLOR, WHITE, ACCENTCOLOR} from '../constants/constant';
import {test} from '../data/test';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [filterDataSource, setFilterDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    setFilterDataSource(test);
    setMasterDataSource(test);
  }, []);

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.Ingredient
          ? item.Ingredient.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterDataSource(newData);
      setSearch(text);
    } else {
      setFilterDataSource(masterDataSource);
      setSearch(text);
    }
  };
  const renderItem = ({item}) => {
    return (
      <>
        <FlatListComponent data={item} />
      </>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>SEARCH</Text>
      </View>
      <View
        style={{borderWidth: 2, borderColor: PRIMARYCOLOR, marginVertical: 5}}
      />
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search here"
        />
      </View>
      <View style={{backgroundColor: ACCENTCOLOR}}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Fruits</Text>
        </View>
        <View>
          <FlatList
            data={filterDataSource}
            renderItem={renderItem}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: WHITE,
    height: '100%',
    width: '100%',
  },
  headerText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 19,
    color: PRIMARYCOLOR,
  },
  searchInputContainer: {
    marginHorizontal: 20,
    width: '90%',
    height: 70,
  },
  headerView: {
    marginHorizontal: 20,
  },

  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderRadius: 5,
    fontSize: 13,
    borderColor: ACCENTCOLOR,
    backgroundColor: ACCENTCOLOR,
  },
});

export default HomeScreen;
