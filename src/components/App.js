import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  Image,
  Dimensions
} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './NewsCard/NewsCard';

import news_banner_data from './news_banner_data.json';

function App() {

  const renderNews = ({item}) => <NewsCard news={item}/>;

  const keyExtractorfuc = (item,index) => item.u_id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}> News</Text>
        <FlatList 
        data={news_data}
        ListHeaderComponent={()=>(
          <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          >{news_banner_data.map(bannerNews => (
          <Image 
          style={styles.banner_image} 
          source={{uri:bannerNews.imageUrl}}
          />
          ))}
          </ScrollView>
        )}
        keyExtractor={keyExtractorfuc}
        renderItem={renderNews}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#212529",
  },
  banner_image:{
    height:Dimensions.get('window').height/5,
    width:Dimensions.get('window').width/2,
    borderRadius:10,
    margin:5
  },
  headerText:{
    fontWeight:'bold',
    fontSize:48,
    color:'#f8f9fa'
  }
})

export default App;
