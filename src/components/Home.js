import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from '../styles/HomeStyles';

import Header from './Header';
import { DASHBOARD, TEXT } from './constants';

class Home extends Component {
  componentDidMount() {
    this.props.getNewsList('the-times-of-india');
  }

  renderFollowersList = ({ item }) => {
    return (
      <View style={styles.followerView}>
        <Image source={{ uri: item.image }} style={styles.followerImages} />
        <Text style={styles.followerName}>{item.name}</Text>
      </View>
    );
  };

  renderFollowingList = ({ item }) => {
    return (
      <View style={styles.followerView}>
        <Image source={{ uri: item.image }} style={styles.followeringImages} />
        <Text style={styles.followerName}>{item.name}</Text>
      </View>
    );
  };

  render() {
    return (
      <View sytle={styles.container}>
        <View>
          <ImageBackground
            source={{
              uri: TEXT.IMAGE,
            }}
            style={styles.backgroundImage}
          >
            <Header
              onClick={() => this.props.navigation.navigate(TEXT.EMPTY_PAGE)}
            />
            <View style={styles.topView}>
              <Image
                source={{
                  uri: TEXT.IMAGE,
                }}
                style={styles.profileImage}
              />
              <Text style={styles.profileName}>{TEXT.PROFILE_NAME}</Text>
            </View>
          </ImageBackground>

          <View style={styles.textView}>
            <View style={styles.followers}>
              <Text>{TEXT.FOLLOWER_TEXT}</Text>
              <Text style={styles.followerNumber}>{TEXT.FOLLOWER_NUM}</Text>
            </View>
            <View style={styles.following}>
              <Text>{TEXT.FOLLOWING_TEXT}</Text>
              <Text style={styles.followingNumber}>{TEXT.FOLLOWING_NUM}</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={this.props.news}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.urlToImage }}
              style={styles.categoriesListImages}
            />
          )}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.categoriesList}
        />
        <Text style={styles.recentlyText}>{TEXT.RECENTLY2}</Text>
        <FlatList
          data={DASHBOARD.categoriesData}
          renderItem={this.renderFollowersList}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
        />
        <Text style={styles.recentlyText}>{TEXT.RECENTLY1}</Text>
        {this.props.loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <FlatList
            data={DASHBOARD.categoriesData}
            renderItem={this.renderFollowingList}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
          />
        )}
      </View>
    );
  }
}

export default Home;
