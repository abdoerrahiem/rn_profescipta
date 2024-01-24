import {Image, View} from 'react-native';
import React from 'react';
import DefaultText from '~components/DefaultText';
import Gap from '~components/Gap';

export default function CardCast() {
  return (
    <View className="mr-[5px] w-[100px]">
      <Image
        className="bg-neutral-100 w-[100px] h-[100px] rounded-md"
        source={{
          uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        resizeMode="cover"
      />
      <Gap height={5} />
      <DefaultText title="Abdur Rahim" />
    </View>
  );
}
