import {Image, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import DefaultText from '~components/DefaultText';
import Gap from '~components/Gap';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '~utils/colors';
import {MovieItem} from '~store/movie';
import {BASE_IMAGE_URL} from '~utils/constant';
import {navigationRef} from '~navigation/RootNavigation';

interface CardNowShowingProps {
  item: MovieItem;
}

const CardNowShowing = ({item}: CardNowShowingProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="mx-1 w-[140px]"
      onPress={() =>
        navigationRef.navigate('MovieDetail', {
          id: item.id,
        })
      }>
      <Image
        className="w-full h-[180px] rounded-md bg-neutral-100"
        source={{
          uri: BASE_IMAGE_URL + item.poster_path,
        }}
        resizeMode="cover"
      />
      <Gap height={5} />
      <DefaultText
        title={item.title}
        titleClassName="font-inter-medium text-base leading-5"
        titleProps={{numberOfLines: 2}}
      />
      <Gap height={5} />
      <View className="flex-row items-center">
        <Icon name="star" color={colors.yellow} size={14} />
        <Gap width={5} />
        <DefaultText
          title={`${item.vote_average.toFixed(1)}/10 IMDB`}
          titleClassName="text-xs text-neutral-400"
        />
      </View>
    </TouchableOpacity>
  );
};

export default memo(CardNowShowing);
