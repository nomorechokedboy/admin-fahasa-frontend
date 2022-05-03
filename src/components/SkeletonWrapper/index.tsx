import { Skeleton, SkeletonProps } from '@mantine/core';
import { ReactNode } from 'react';

interface SkeletonWrapperProps extends SkeletonProps {
  children: ReactNode;
}

export default function SkeletonWrapper({
  children,
  ...skeletonProps
}: SkeletonWrapperProps) {
  return <Skeleton {...skeletonProps}>{children}</Skeleton>;
}
