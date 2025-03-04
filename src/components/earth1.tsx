import Earth1Svg from "../assets/icons/earth.svg?react";
export default function Earth1({
  width = 24,
  height = 24,
}: {
  width?: number;
  height?: number;
}) {
  return <Earth1Svg width={width} height={height} />;
}
