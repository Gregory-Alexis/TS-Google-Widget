import Cards from "./Cards";

interface Props {
  data: [];
  text: string;
  range: number;
}

const CardApp: React.FC<Props> = ({ data, range, text }) => {
  return (
    <ul className="md:ml-10 xl:ml-20 lg:grid lg:grid-cols-2 lg:gap-5">
      {data.map((el: any) => (
        <Cards
          key={el.family}
          family={el.family}
          variants={el.variants}
          category={el.category}
          text={text}
          range={range}
        />
      ))}
    </ul>
  );
};

export default CardApp;
