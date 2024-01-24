import React from 'react';
import DefaultView from '~components/DefaultView';
import {RootStackScreenProps} from '~navigation/interface';

export default function MovieDetail({
  route,
}: RootStackScreenProps<'MovieDetail'>) {
  const id = route.params.id;

  return <DefaultView></DefaultView>;
}
