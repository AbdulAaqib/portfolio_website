import Spline from '@splinetool/react-spline';

interface Props {
  scene: string;
}

export default function SplineWrapper({ scene }: Props) {
  return (
    <div className="w-full h-full">
      <Spline scene={scene} />
    </div>
  );
} 