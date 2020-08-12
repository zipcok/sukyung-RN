/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  Container, Content, Footer, FooterTab, Button, Icon,
  Header, Left, Body, Right, Title, Card, CardItem } from 'native-base';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        
        <Header >
          <Left>
            <Button transparent>
              {/* <Icon name='menu'/> */}
              <Text>메뉴</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent>
              {/* <Icon name='menu' /> */}
              <Text>프로필사진</Text>
            </Button>
          </Right>
        </Header>
        <Content>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                오늘의 <Text style={styles.highlight}> 홈트프렌즈</Text></Text>
              <Text style={styles.sectionDescription}>
                2020-07-20 16:00 업데이트
              </Text>
            </View>

            <View style={styles.sectionContainer}>
            <ImageBackground source={require('./images/home_today_1st.png')} style={styles.image}>
              <Text style={styles.text}>Inside</Text>
            </ImageBackground>



            {/* <Card style={{flex: 0}}>
            <CardItem>
                <Body >
                  <Text >현재 1위</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source='home_today_1st.png' style={{height: 200, width: 200, flex: 1}}/>
                  <Text> Park88 </Text>
                  <Text note>1030점</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}}>
                    <Icon name="logo-github" />
                    <Text>1,926 stars</Text>
                  </Button>
                </Left>
              </CardItem>
          </Card> */}
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
        </Content>

        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>홈</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>운동하기</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>홈트프렌즈</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>운동보고서</Text>
            </Button>
          </FooterTab>
        </Footer>

      
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

  image: {
    width: 143.333,
    height: 239.333,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default App;
