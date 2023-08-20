import {Dimensions, StyleSheet} from 'react-native';


export default StyleSheet.create({
  container: {
    backgroundColor: '#495057',
    margin: 10,
    borderRadius: 10,
    marginTop:13,
    marginBottom:13
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color:'#f8f9fa'
  },
  description: {
    marginTop: 3,
    color:'#ced4da'
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
    color:'#e9ecef',
    marginBottom: 3,
  },
  inner_container: {
    padding: 5,
  },
});
