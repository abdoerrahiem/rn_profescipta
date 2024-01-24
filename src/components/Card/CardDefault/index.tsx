import {Image, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import DefaultText from '~components/DefaultText';
import Gap from '~components/Gap';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '~utils/colors';
import Chip from '~components/Chip';
import {MovieItem} from '~store/movie';
import {BASE_IMAGE_URL} from '~utils/constant';
import {useSelector} from 'react-redux';
import {RootState} from '~store';
import {navigationRef} from '~navigation/RootNavigation';

interface CardDefaultProps {
  item: MovieItem;
}

const CardDefault = ({item}: CardDefaultProps) => {
  const {genres} = useSelector((state: RootState) => state.movieReducer);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="mx-4 mb-3 flex-row"
      onPress={() =>
        navigationRef.navigate('MovieDetail', {
          id: item.id,
        })
      }>
      <Image
        className="w-[100] h-[130px] rounded-md bg-neutral-100"
        source={{
          uri: BASE_IMAGE_URL + item.poster_path,
        }}
        resizeMode="cover"
      />
      <Gap width={10} />
      <View className="flex-1">
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
        <Gap height={15} />
        <View className="flex-row flex-wrap">
          {item.genre_ids.map(genre => {
            const foundGenre = genres.find(e => e.id === genre);
            if (foundGenre) {
              return <Chip key={genre} title={foundGenre!.name} />;
            }
          })}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(CardDefault);
