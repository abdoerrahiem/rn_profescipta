import React, {useEffect} from 'react';
import DefaultView from '~components/DefaultView';
import DefaultScrollView from '~components/DefaultScrollView';
import DefaultHeader from '~components/Header/DefaultHeader';
import {StyleSheet} from 'react-native';
import Gap from '~components/Gap';
import DefaultFlatList from '~components/DefaultFlatList';
import CardNowShowing from '~components/Card/CardNowShowing';
import CardDefault from '~components/Card/CardDefault';
import HomeTopHeader from '~components/Header/HomeTopHeader';
import NowShowingSkeleton from '~components/Skeleton/NowShowingSkeleton';
import HomeDefaultSkeleton from '~components/Skeleton/HomeDefaultSkeleton';
import {useDispatch, useSelector} from 'react-redux';
import {RootDispatch, RootState} from '~store';
import {
  getGenres,
  getNowShowing,
  getPopular,
  getTopRated,
  getUpcoming,
} from '~services/movie';
import ShowIf from '~components/ShowIf';

export default function Home() {
  const dispatch = useDispatch<RootDispatch>();
  const {
    nowShowing,
    nowShowingLoading,
    popular,
    popularLoading,
    topRated,
    topRatedLoading,
    upcoming,
    upcomingLoading,
  } = useSelector((state: RootState) => state.movieReducer);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getNowShowing(1));
    dispatch(getPopular(1));
    dispatch(getTopRated(1));
    dispatch(getUpcoming(1));
  }, [dispatch]);

  const onRefresh = () => {
    dispatch(getNowShowing(1));
    dispatch(getPopular(1));
    dispatch(getTopRated(1));
    dispatch(getUpcoming(1));
  };

  return (
    <DefaultView>
      <DefaultHeader
        title="MyMovies"
        iconLeftName="menu"
        iconLeftPress={() => {}}
        iconRightName="bell-outline"
      />
      <DefaultScrollView onRefresh={onRefresh} refreshing={nowShowingLoading}>
        <ShowIf condition={nowShowingLoading}>
          <NowShowingSkeleton />
        </ShowIf>
        <ShowIf condition={!nowShowingLoading && nowShowing.length > 0}>
          <HomeTopHeader title="Now Showing" />
          <Gap height={10} />
          <DefaultFlatList
            contentContainerStyle={styles.nowShowingContainer}
            data={[...nowShowing].slice(0, 5)}
            horizontal={true}
            renderItem={({item}) => <CardNowShowing item={item} />}
          />
        </ShowIf>

        <Gap height={20} />
        <ShowIf condition={popularLoading}>
          <HomeDefaultSkeleton />
        </ShowIf>
        <ShowIf condition={!popularLoading && popular.length > 0}>
          <HomeTopHeader title="Popular" />
          <Gap height={10} />
          {[...popular].slice(0, 3).map(item => (
            <CardDefault key={item.id} item={item} />
          ))}
        </ShowIf>

        <Gap height={20} />
        <ShowIf condition={topRatedLoading}>
          <HomeDefaultSkeleton />
        </ShowIf>
        <ShowIf condition={!topRatedLoading && topRated.length > 0}>
          <HomeTopHeader title="Top Rated" />
          <Gap height={10} />
          {[...topRated].slice(0, 3).map(item => (
            <CardDefault key={item.id} item={item} />
          ))}
        </ShowIf>

        <Gap height={20} />
        <ShowIf condition={upcomingLoading}>
          <HomeDefaultSkeleton />
        </ShowIf>
        <ShowIf condition={!upcomingLoading && upcoming.length > 0}>
          <HomeTopHeader title="Upcoming" />
          <Gap height={10} />
          {[...upcoming].slice(0, 3).map(item => (
            <CardDefault key={item.id} item={item} />
          ))}
        </ShowIf>
      </DefaultScrollView>
    </DefaultView>
  );
}

const styles = StyleSheet.create({
  nowShowingContainer: {
    paddingHorizontal: 12,
  },
});
