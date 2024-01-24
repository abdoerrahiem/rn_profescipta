import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {useDispatch} from 'react-redux';
import ButtonIcon from '~components/ButtonIcon';
import DefaultScrollView from '~components/DefaultScrollView';
import DefaultText from '~components/DefaultText';
import DefaultView from '~components/DefaultView';
import Gap from '~components/Gap';
import {navigationRef} from '~navigation/RootNavigation';
import {RootStackScreenProps} from '~navigation/interface';
import {getMovieDetails} from '~services/movie';
import {RootDispatch} from '~store';
import {colors} from '~utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Chip from '~components/Chip';
import HomeTopHeader from '~components/Header/HomeTopHeader';
import DefaultFlatList from '~components/DefaultFlatList';
import CardCast from '~components/Card/CardCast';

export default function MovieDetail({
  route,
}: RootStackScreenProps<'MovieDetail'>) {
  const id = route.params.id;

  const dispatch = useDispatch<RootDispatch>();

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, []);

  return (
    <DefaultView translucent={true} barStyle="light-content">
      <DefaultScrollView>
        <Image
          className="w-full h-[250px]"
          source={{
            uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          resizeMode="cover"
        />
        <View className="absolute self-center top-24">
          <ButtonIcon
            iconName="play"
            iconColor={colors.black}
            containerClassName="bg-white w-[40px] h-[40px] self-center"
          />
          <Gap height={5} />
          <DefaultText
            title="Watch Trailer"
            titleClassName="text-white font-inter-medium"
          />
        </View>
        <ButtonIcon
          iconName="arrow-left"
          containerClassName="w-[40px] h-[40px] absolute left-3 top-10"
          onPress={() => navigationRef.goBack()}
        />
        <ButtonIcon
          iconName="dots-horizontal"
          containerClassName="w-[40px] h-[40px] absolute right-3 top-10"
        />
        <View className="bg-white px-4 py-5 rounded-t-2xl -top-10">
          <DefaultText
            title={'Spiderman - Lorem ipsum test 123 testing test lah'}
            titleClassName="font-inter-semibold text-base"
          />
          <Gap height={10} />
          <View className="flex-row items-center">
            <Icon name="star" color={colors.yellow} size={14} />
            <Gap width={5} />
            <DefaultText
              title={`5.7/10 IMDB`}
              titleClassName="text-xs text-neutral-400"
            />
          </View>
          <Gap height={10} />
          <View className="flex-row flex-wrap">
            <Chip key={'1'} title={'Horror'} />
            <Chip key={'2'} title={'Horror'} />
            <Chip key={'3'} title={'Horror'} />
          </View>
          <Gap height={20} />
          <View className="flex-row">
            <View className="flex-1">
              <DefaultText title="Length" titleClassName="text-neutral-400" />
              <Gap height={2.5} />
              <DefaultText title="2h 28m" titleClassName="font-inter-medium" />
            </View>
            <View className="flex-1">
              <DefaultText title="Language" titleClassName="text-neutral-400" />
              <Gap height={2.5} />
              <DefaultText title="English" titleClassName="font-inter-medium" />
            </View>
            <View className="flex-1">
              <DefaultText title="Rating" titleClassName="text-neutral-400" />
              <Gap height={2.5} />
              <DefaultText title="21+" titleClassName="font-inter-medium" />
            </View>
          </View>
          <Gap height={20} />
          <DefaultText
            title="Description"
            titleClassName="font-inter-semibold text-base"
          />
          <Gap height={5} />
          <DefaultText
            title={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            }
            titleClassName="leading-5 text-neutral-400"
          />
          <Gap height={20} />
          <HomeTopHeader title="Cast" containerClassName="px-0" />
          <Gap height={10} />
          <DefaultFlatList
            data={[1, 2, 3]}
            horizontal={true}
            renderItem={() => <CardCast />}
          />
        </View>
      </DefaultScrollView>
    </DefaultView>
  );
}
