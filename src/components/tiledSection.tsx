interface TiledSectionProps {
  tileSrc: string;
  tileSize?: number;
  scale?: number;
  className?: string;
  children?: React.ReactNode;
}

export const TiledSection: React.FC<TiledSectionProps> = ({
  tileSrc,
  tileSize = 60,
  scale = 1,
  className = "",
  children,
}) => {
  const size = tileSize * scale;

  return (
    <div
      className={`bg-repeat [image-rendering:pixelated] ${className}`}
      style={{
        backgroundImage: `url(${tileSrc})`,
        backgroundSize: `${size}px ${size}px`,
      }}
    >
      {children}
    </div>
  );
};
