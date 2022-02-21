import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';

const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png'
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png'
  },
  {
    id: 'Uber-LUX-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1569012915/assets/4f/599c47-7f5c-4544-a5d2-926babc8e113/original/Lux.png'
  }
];

const RideOptionsCard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={tw`flex flex-row flex-start`}>
        <TouchableOpacity onPress={() => navigation.navigate('NavigateCard')} style={tw`top-3 left-5 p-3 w-15 rounded-full`}>
          <Icon name='chevron-left' type='font-awesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 px-20 text-xl`}>Select a Ride</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item: { id, title, multiplier, image } }) => (
          <TouchableOpacity style={tw`flex-row justify-between items-center px-10`}>
            <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={{ uri: image }} />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>Travel time...</Text>
            </View>
            <Text style={tw`text-xl`}>$99</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
