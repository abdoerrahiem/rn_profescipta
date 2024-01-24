import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function MovieDetailImageSkeleton() {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item borderRadius={15} height={300} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}
