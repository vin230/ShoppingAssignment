import React from 'react';
import { Text, View , Image, FlatList} from 'react-native';

const DATA=[
  {
    image:require('../assets/Image4.jpg'),
    key:4
  },

]
const HelloWorldApp = () => {
  const renderItem = ({ item }) => (
    <View style={{margin:5}}>
    <Image style={{height:300, width:180}} source={item.image}/>
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        numColumns={2}
      />
    </View>
  )
}
export default HelloWorldApp;