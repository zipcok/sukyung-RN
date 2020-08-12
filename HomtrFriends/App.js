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

import Rank from './components/home/SectionList';

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
            {/* 오늘의 홈트프렌즈 타이틀 */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                오늘의 <Text style={styles.highlight}> 홈트프렌즈</Text></Text>
              <Text style={styles.sectionDescription}>
                2020-07-20 16:00 업데이트
              </Text>
            </View>

            {/* 홈트프렌즈 순위 */}
            <ScrollView horizontal>
              <View style={styles.sectionContainer}>
                <ImageBackground source={require('./images/home_today_1st.png')} style={styles.image}>
                  <Text style={styles.text}>Inside</Text>
                </ImageBackground>
              </View>
              <View style={styles.sectionContainer}>
                <ImageBackground source={require('./images/home_today_1st.png')} style={styles.image}>
                  <Text style={styles.text}>Inside</Text>
                </ImageBackground>
              </View>
              <View style={styles.sectionContainer}>
                <ImageBackground source={require('./images/home_today_1st.png')} style={styles.image}>
                  <Text style={styles.text}>Inside</Text>
                </ImageBackground>
              </View>
            </ScrollView>

            {/* 이런 운동 어때요? 타이틀 */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                이런 운동<Text style={styles.highlight}> 어때요?</Text></Text>
              <Text style={styles.sectionDescription}>
                수잔 님을 위한 오늘의 추천 운동
              </Text>
            </View>

            {/* 이런 운동 어때요? 카드 스크롤뷰 */}
            <ScrollView horizontal>
              <View style={styles.sectionContainer}>
                <Card>
                  <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>NativeBase</Text>
                  </CardItem>
                  <CardItem button onPress={() => alert("This is Card Body")}>
                    <Body>
                      <Text>
                        Click on any carditem
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem footer button onPress={() => alert("This is Card Footer")}>
                    <Text>GeekyAnts</Text>
                  </CardItem>
                </Card>
              </View>

              <View style={styles.sectionContainer}>
                <Card>
                  <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>NativeBase</Text>
                  </CardItem>
                  <CardItem button onPress={() => alert("This is Card Body")}>
                    <Body>
                      <Text>
                        Click on any carditem
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem footer button onPress={() => alert("This is Card Footer")}>
                    <Text>GeekyAnts</Text>
                  </CardItem>
                </Card>
              </View>

              <View style={styles.sectionContainer}>
                <Card>
                  <CardItem header button onPress={() => alert("This is Card Header")}>
                    <Text>NativeBase</Text>
                  </CardItem>
                  <CardItem button onPress={() => alert("This is Card Body")}>
                    <Body>
                      <Text>
                        Click on any carditem
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem footer button onPress={() => alert("This is Card Footer")}>
                    <Text>GeekyAnts</Text>
                  </CardItem>
                </Card>
              </View>
            </ScrollView>
          

            {/* 최초 코드 */}
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
