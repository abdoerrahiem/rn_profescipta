import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function NowShowingSkeleton() {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item paddingHorizontal={16}>
        <SkeletonPlaceholder.Item
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          marginBottom={10}>
          <SkeletonPlaceholder.Item borderRadius={15} width={125} height={20} />
          <SkeletonPlaceholder.Item borderRadius={15} width={80} height={25} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item flexDirection="row">
          {[1, 2, 3].map(item => {
            return (
              <SkeletonPlaceholder.Item key={item} marginRight={8}>
                <SkeletonPlaceholder.Item
                  borderRadius={10}
                  height={180}
                  marginBottom={10}
                  width={140}
                />
                <SkeletonPlaceholder.Item
                  borderRadius={15}
                  width={125}
                  height={15}
                  marginBottom={5}
                />
                <SkeletonPlaceholder.Item
                  borderRadius={15}
                  width={110}
                  height={15}
                  marginBottom={10}
                />
                <SkeletonPlaceholder.Item
                  borderRadius={15}
                  width={80}
                  height={15}
                  marginBottom={5}
                />
              </SkeletonPlaceholder.Item>
            );
          })}
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}
