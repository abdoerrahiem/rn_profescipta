import React, {useEffect} from 'react';
import {Image, Linking, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ButtonIcon from '~components/ButtonIcon';
import DefaultScrollView from '~components/DefaultScrollView';
import DefaultText from '~components/DefaultText';
import DefaultView from '~components/DefaultView';
import Gap from '~components/Gap';
import {navigationRef} from '~navigation/RootNavigation';
import {RootStackScreenProps} from '~navigation/interface';
import {getMovieDetails} from '~services/movie';
import {RootDispatch, RootState} from '~store';
import {colors} from '~utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Chip from '~components/Chip';
import HomeTopHeader from '~components/Header/HomeTopHeader';
import DefaultFlatList from '~components/DefaultFlatList';
import CardCast from '~components/Card/CardCast';
import MovieDetailImageSkeleton from '~components/Skeleton/MovieDetailImageSkeleton';
import MovieDetailSkeleton from '~components/Skeleton/MovieDetailSkeleton';
import ShowIf from '~components/ShowIf';
import {BASE_IMAGE_URL} from '~utils/constant';

export default function MovieDetail({
  route,
}: RootStackScreenProps<'MovieDetail'>) {
  const id = route.params.id;

  const dispatch = useDispatch<RootDispatch>();
  const {movieDetails, movieDetailsLoading} = useSelector(
    (state: RootState) => state.movieReducer,
  );

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, []);

  const onWatchTrailer = () => {
    if (movieDetails !== null) {
      const key =
        movieDetails.videos.results.find(
          item => item.site.toLowerCase() === 'youtube',
        )?.key ?? '';
      const url = `https://www.youtube.com/watch?v=${key}`;
      Linking.openURL(url);
    }
  };

  return (
    <DefaultView translucent={true} barStyle="light-content">
      <DefaultScrollView onRefresh={() => dispatch(getMovieDetails(id))}>
        <ButtonIcon
          iconName="arrow-left"
          containerClassName="w-[40px] h-[40px] absolute left-3 top-10 z-10"
          onPress={() => navigationRef.goBack()}
        />
        <ButtonIcon
          iconName="dots-horizontal"
          containerClassName="w-[40px] h-[40px] absolute right-3 top-10 z-10"
        />

        <ShowIf condition={movieDetailsLoading}>
          <MovieDetailImageSkeleton />
        </ShowIf>
        <ShowIf condition={!movieDetailsLoading && movieDetails !== null}>
          <View className="absolute self-center top-28 z-10">
            <ButtonIcon
              iconName="play"
              iconColor={colors.black}
              containerClassName="bg-white w-[40px] h-[40px] self-center"
              onPress={onWatchTrailer}
            />
            <Gap height={5} />
            <DefaultText
              title="Watch Trailer"
              titleClassName="text-white font-inter-medium"
            />
          </View>
          <Image
            className="w-full h-[300px] bg-neutral-100"
            source={{
              uri: BASE_IMAGE_URL + movieDetails?.poster_path,
            }}
            resizeMode="cover"
          />
        </ShowIf>

        <View className="bg-white px-4 py-5 rounded-t-2xl -top-10">
          <ShowIf condition={movieDetailsLoading}>
            <MovieDetailSkeleton />
          </ShowIf>
          <ShowIf condition={!movieDetailsLoading && movieDetails !== null}>
            <DefaultText
              title={movieDetails?.title}
              titleClassName="font-inter-semibold text-base"
            />
            <Gap height={10} />
            <View className="flex-row items-center">
              <Icon name="star" color={colors.yellow} size={14} />
              <Gap width={5} />
              <DefaultText
                title={`${movieDetails?.vote_average?.toFixed(1)}/10 IMDB`}
                titleClassName="text-xs text-neutral-400"
              />
            </View>
            <Gap height={10} />
            <View className="flex-row flex-wrap">
              {movieDetails?.genres?.map(item => (
                <Chip key={item.id} title={item.name} />
              ))}
            </View>
            <Gap height={20} />
            <View className="flex-row">
              <View className="flex-1">
                <DefaultText title="Length" titleClassName="text-neutral-400" />
                <Gap height={2.5} />
                <DefaultText
                  title={movieDetails?.runtime}
                  titleClassName="font-inter-medium"
                />
              </View>
              <View className="flex-1">
                <DefaultText
                  title="Language"
                  titleClassName="text-neutral-400"
                />
                <Gap height={2.5} />
                <DefaultText
                  title={movieDetails?.spoken_languages[0]?.name}
                  titleClassName="font-inter-medium"
                />
              </View>
              <View className="flex-1">
                <DefaultText title="Rating" titleClassName="text-neutral-400" />
                <Gap height={2.5} />
                <DefaultText
                  title={
                    movieDetails?.release_dates?.results?.find(
                      item => item?.release_dates[0]?.certification?.length > 2,
                    )?.release_dates[0]?.certification
                  }
                  titleClassName="font-inter-medium"
                />
              </View>
            </View>
            <Gap height={20} />
            <DefaultText
              title="Description"
              titleClassName="font-inter-semibold text-base"
            />
            <Gap height={5} />
            <DefaultText
              title={movieDetails?.overview}
              titleClassName="leading-5 text-neutral-400"
            />
            <Gap height={20} />
            <HomeTopHeader title="Cast" containerClassName="px-0" />
            <Gap height={10} />
            <DefaultFlatList
              data={movieDetails?.credits?.cast?.slice(0, 3) ?? []}
              horizontal={true}
              renderItem={({item}) => (
                <CardCast
                  name={item.name}
                  imageUrl={BASE_IMAGE_URL + item.profile_path}
                />
              )}
            />
          </ShowIf>
        </View>
      </DefaultScrollView>
    </DefaultView>
  );
}
