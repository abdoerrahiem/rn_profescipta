import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function HomeDefaultSkeleton() {
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

        {[1, 2, 3].map(item => {
          return (
            <SkeletonPlaceholder.Item
              key={item}
              marginBottom={10}
              flexDirection="row">
              <SkeletonPlaceholder.Item
                borderRadius={6}
                height={130}
                marginBottom={10}
                width={100}
              />
              <SkeletonPlaceholder.Item paddingHorizontal={10} flex={1}>
                <SkeletonPlaceholder.Item
                  borderRadius={15}
                  height={15}
                  marginBottom={5}
                />
                <SkeletonPlaceholder.Item
                  borderRadius={15}
                  height={15}
                  width={120}
                  marginBottom={10}
                />
                <SkeletonPlaceholder.Item
                  borderRadius={15}
                  height={15}
                  width={100}
                  marginBottom={10}
                />
                <SkeletonPlaceholder.Item flexDirection="row" marginBottom={10}>
                  <SkeletonPlaceholder.Item
                    borderRadius={15}
                    height={20}
                    width={50}
                    marginRight={5}
                  />
                  <SkeletonPlaceholder.Item
                    borderRadius={15}
                    height={20}
                    width={50}
                  />
                </SkeletonPlaceholder.Item>
                <SkeletonPlaceholder.Item
                  borderRadius={15}
                  height={15}
                  width={70}
                  marginBottom={10}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
          );
        })}
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}
