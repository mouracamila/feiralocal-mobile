import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:24,
    paddingTop: Constants.statusBarHeight +20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  title: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    color: '#13131a',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },

  announcementList: {
    marginTop: 10,
  },

  announcement:{
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 2,
  },

  announcementProperty: {
    fontSize: 16,
    color: '#41414d',
    fontWeight: 'bold',
  },

  announcementValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },
  
  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsButtonText: {
    color: '#518F57',
    fontSize: 15,
    fontWeight: 'bold',
  },


});