type ContoursProps = {
  phase?: number;
  className?: string;
};

export function Contours({ phase = 0, className = "" }: ContoursProps) {
  const paths = Array.from({ length: 9 }, (_, i) => {
    const y = 190 + i * 38;
    return `M -50 ${y} C 200 ${y - 90 + i * 6 + phase * 10}, 380 ${y + 80 - i * 4}, 620 ${y + 10} S 1000 ${y - 70 + i * 5 - phase * 8}, 1250 ${y + 20}`;
  });

  return (
    <svg
      className={`contours ${className}`}
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

const mosaicLayout = [
  "..#.....",
  ".##..o..",
  "..#.##..",
  "o....#..",
  "..o..o..",
];

type TileMosaicProps = {
  className?: string;
};

export function TileMosaic({ className = "" }: TileMosaicProps) {
  return (
    <div className={`tile-mosaic ${className}`} aria-hidden="true">
      {mosaicLayout.flatMap((row, rowIndex) =>
        row.split("").map((cell, colIndex) => {
          const key = `${rowIndex}-${colIndex}`;
          if (cell === "#") {
            return <span key={key} className="tile-peach" />;
          }
          if (cell === "o") {
            return <span key={key} className="tile-sage" />;
          }
          return <span key={key} className="tile-empty" />;
        }),
      )}
    </div>
  );
}
