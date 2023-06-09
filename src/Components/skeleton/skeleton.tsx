import Skeleton from '@mui/material/Skeleton';

type SkeletonProps = {
  width: number;
  height: number;
};

export function SkeletonNFT({ width, height }: SkeletonProps) {
  return (
    <Skeleton
      animation={'pulse'}
      sx={{
        bgcolor: `linear-gradient(
      155.14deg,
      rgba(255, 255, 255, 0) -2.13%,
      rgba(255, 255, 255, 0.15) 136.58%
    )`,
        borderRadius: '20px',
      }}
      variant="rectangular"
      width={width}
      height={height}
    />
  );
}
