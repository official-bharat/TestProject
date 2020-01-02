import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-community/async-storage';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_App: false,
      loading: false
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('first_time').then((value) => {
      this.setState({ show_App: !!value, loading: false });
    });
  }

  _onDone = () => {
    AsyncStorage.setItem('first_time', 'true').then(() => {
      this.setState({ show_App: true });
      this.props.navigation.navigate('Login');
    });
  };

  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    AsyncStorage.setItem('first_time', 'true').then(() => {
      this.setState({ show_App: true });
      this.props.navigation.navigate('Login');
    });
  };
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };
  render() {
    return (
        this.state.show_App ? 
        this.props.navigation.navigate('Login')
        :
      <AppIntroSlider
        slides={slides}
        onDone={this._onDone}
        showSkipButton={true}
        onSkip={this._onSkip}
      />
    )
  }
}

const styles = StyleSheet.create({
  mainapp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    tintColor: "black"
  },
});
const slides = [
  {
    key: 's1',
    title: 'Submit Your Application',
    text: 'We need your basic information for find someone ',
    image: {
      uri:
        'https://imgur.com/7ClQj9M.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#F7CA6B',
  },
  {
    key: 's2',
    title: ' Found match',
    text: 'Good new we Found someone who matching you',
    image: {
      uri:
        'https://imgur.com/BVQ79rh.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#F7CA6B',
  },
  {
    key: 's3',
    title: 'Just Dating ',
    text: 'let hangout and enjoy together with special place and special deal',
    image: {
      uri: 'https://imgur.com/RPI8wie.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#F7CA6B',
  },
  {
    key: 's4',
    title: 'Got new Love',
    text: ' Your not lonly anymore',
    image: {
      uri: 'https://imgur.com/f1GhQo1.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#F7CA6B',
  }
];