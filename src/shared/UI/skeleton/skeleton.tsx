import clsx from 'clsx';
import { CSSProperties } from 'react';

import styles from './skeleton.module.css';

interface SkeletonProps {
  width?: CSSProperties['width'];
  height: CSSProperties['height'];
  margin?: CSSProperties['margin'];
  borderRadius: CSSProperties['borderRadius'];
  className?: string;
}

export const Skeleton = ({
  borderRadius,
  height,
  className,
  margin,
  width
}: SkeletonProps) => (
  <div
    className={clsx(styles.skeleton, className)}
    style={{ height, width, margin, borderRadius }}
  />
);
