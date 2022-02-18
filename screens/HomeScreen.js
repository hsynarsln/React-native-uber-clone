import { GOOGLE_MAPS_APIKEY } from '@env';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full mt-5 p-5`}>
      <View>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain'
          }}
          source={{
            uri: 'https://seekvectorlogo.net/wp-content/uploads/2019/07/uber-technologies-inc-vector-logo.png'
          }}
        />

        <GooglePlacesAutocomplete
          placeholder='Where From?'
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          styles={{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            }
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={'search'}
          minLength={2}
          enablePoweredByContainer={false}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: 'blue'
  }
});
