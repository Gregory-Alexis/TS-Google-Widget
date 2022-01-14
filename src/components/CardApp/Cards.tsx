import GoogleFontLoader from "react-google-font-loader";

interface Props {
  family: string;
  variants: string;
  category: string;
  text: string;
  range: number;
}

const Cards: React.FC<Props> = ({
  family,
  variants,
  category,
  text,
  range,
}) => {
  return (
    <>
      <li className="border-gray-200 border shadow-card p-3 py-5 my-5 rounded ">
        <GoogleFontLoader fonts={[{ font: `${family}` }]} />
        <div className="flex justify-between font-medium">
          <h1 className="text-sm">{family}</h1>
          <p>
            <small>{variants.length} variant(s)</small>
          </p>
        </div>
        <p>
          <small className="bg-black text-white uppercase rounded px-2 py-1">
            {category}
          </small>
        </p>
        <p
          className="pt-5 pb-5 break-words"
          style={{ fontSize: `${range}px`, fontFamily: `${family}` }}
        >
          <span className="w-48">{text}</span>
        </p>
        <a
          href={`https://fonts.google.com/specimen/${family}`}
          aria-label={`Police ${family}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Voir la police sur Google Fonts
        </a>
      </li>
    </>
  );
};

export default Cards;
