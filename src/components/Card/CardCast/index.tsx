import {Image, View} from 'react-native';
import React, {memo} from 'react';
import DefaultText from '~components/DefaultText';
import Gap from '~components/Gap';

interface CardCastProps {
  imageUrl: string;
  name: string;
}

const CardCast = ({imageUrl, name}: CardCastProps) => {
  return (
    <View className="mr-[5px] w-[100px]">
      <Image
        className="bg-neutral-100 w-[100px] h-[100px] rounded-md"
        source={{
          uri: imageUrl,
        }}
        resizeMode="cover"
      />
      <Gap height={5} />
      <DefaultText title={name} />
    </View>
  );
};

export default memo(CardCast);
