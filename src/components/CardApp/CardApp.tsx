import Cards from "./Cards";

interface Props {
  data: [];
  text: string;
  range: number;
}

const CardApp: React.FC<Props> = ({ data, range, text }) => {
  return (
    <ul className="md:grid md:grid-cols-2 md:gap-3 xl:w-6/12 xl:ml-20 ">
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
