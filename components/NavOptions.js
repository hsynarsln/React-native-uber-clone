import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { selectOrigin } from '../slices/navSlice';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png',
    screen: 'MapScreen'
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://toppng.com/uploads/preview/uber-eats-icon-logo-11609380423inqgltu4pe.png',
    screen: 'EatsScreen'
  }
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 h-60`} disabled={!origin}>
          <View style={tw`${!origin && 'opacity-20'}`}>
            <Image style={{ width: 120, height: 120, resizeMode: 'contain' }} source={{ uri: item.image }} />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          </View>
          <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name='arrowright' type='antdesign' color='#fff' />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
