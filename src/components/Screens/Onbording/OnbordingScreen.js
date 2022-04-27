import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import WelcomeScreen from '../WelcomeScreen';

import Firstscreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

const OnbordingScreen = () => {
  const [index, setIndex] = useState(1);
  const RenderElement = () => {
    if (index === 1) {
      return <Firstscreen />;
    } else if (index === 2) {
      return <SecondScreen />;
    } else if (index === 3) {
      return <ThirdScreen />;
    } else {
      return <WelcomeScreen />;
    }
  };
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <View style={{height: '100%'}}>
        <RenderElement />

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setIndex(index + 3)}
            style={[styles.skipbtn]}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: 'white',
              }}>
              SKIP
            </Text>
          </TouchableOpacity>
          {/* <View> */}
          {/* <View style={{flexDirection: 'row', marginTop: 20}}>
              {RenderElement.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.indicator,
                    currentSlideIndex == index && {
                      backgroundColor: 'white',
                      width: 25,
                    },
                  ]}
                />
              ))}
            </View>
          </View> */}

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setIndex(index + 1)}
            style={[styles.btn]}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: 'black',
              }}>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  skipbtn: {
    width: 'auto',
    alignSelf: 'flex-end',
    left: 310,
  },
  btn: {
    height: 45,
    borderRadius: 5,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    top: 650,
    backgroundColor: 'green',
    borderWidth: 1,
    left: 150,
    width: 150,
  },
});

export default OnbordingScreen;
