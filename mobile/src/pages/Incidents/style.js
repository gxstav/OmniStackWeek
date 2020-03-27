import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 15,
    color: '#737380'
  },
  headerTextBold: {
    fontWeight: 'bold'
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131A',
    fontWeight: 'bold'
  },
  hint: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },
  incidents: {
    marginTop: 32
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16
  },
  incidentData: {
    fontSize: 14,
    color: '#41414D',
    fontWeight: 'bold'
  },
  incidentValue: {
    marginTop: 8,
    marginBottom: 24,
    fontSize: 15,
    color: '#737380'
  },
  incidentDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  incidentDetailText: {
    color: '#E02041',
    fontSize: 15,
    fontWeight: 'bold'
  }

})