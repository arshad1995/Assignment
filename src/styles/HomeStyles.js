import { StyleSheet, Dimensions } from 'react-native';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: 250,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
  },
  topView: {
    flexDirection: 'row',
    paddingLeft: 25,
    position: 'absolute',
    bottom: -40,
  },
  profileView: {
    flexDirection: 'row',
  },
  profileName: {
    color: 'white',
    flex: 1,
    marginLeft: 15,
    marginTop: 10,
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 6,
  },
  followers: {
    flex: 1,
    alignItems: 'flex-end',
  },
  following: {
    flex: 1,
    alignItems: 'center',
  },
  followingNumber: {
    fontSize: 20,
  },
  followerNumber: {
    fontSize: 20,
  },
  categoriesList: {
    marginHorizontal: 10,
  },
  followerName: {
    textAlign: 'center',
    marginLeft: 20,
  },
  recentlyText: {
    fontSize: 18,
    marginLeft: 20,
  },
  followerImages: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 20,
  },
  followeringImages: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 20,
  },
  followerView: {
    marginVertical: 8,
  },
  loadingContainer: {
    marginTop: Dimensions.get('window').height / 3,
  },
  categoriesListImages: {
    width: 90,
    height: 80,
    borderRadius: 10,
    margin: 6,
  },
});

export default HomeStyles;
