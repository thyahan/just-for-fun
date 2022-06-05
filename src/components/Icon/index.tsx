import React from "react";
import Image from "next/image";

interface Props {
  alt?: string;
  className?: string;
  name: string;
  width?: number;
  height?: number;
}

const Icon = (props: Props) => {
  const { className, alt, name, width = 32, height = 32 } = props;

  return <Image className={className} alt={alt} width={width} height={height} src={`/icon/${name}.svg`} />;
};

export default Icon;
