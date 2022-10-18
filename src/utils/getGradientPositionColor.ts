type TGradientpositionProps = {
  color1: string;
  color2: string;
  ratio: number;
};

export const getGradientPositionColor = ({
  color1,
  color2,
  ratio,
}: TGradientpositionProps): string => {
  const hex = (x: number) => {
    return x.toString(16).padStart(2, '0');
  };

  const r = Math.ceil(
    parseInt(color1.substring(0, 2), 16) * ratio +
      parseInt(color2.substring(0, 2), 16) * (1 - ratio)
  );
  const g = Math.ceil(
    parseInt(color1.substring(2, 4), 16) * ratio +
      parseInt(color2.substring(2, 4), 16) * (1 - ratio)
  );
  const b = Math.ceil(
    parseInt(color1.substring(4, 6), 16) * ratio +
      parseInt(color2.substring(4, 6), 16) * (1 - ratio)
  );

  return `#${hex(r) + hex(g) + hex(b)}`;
};
