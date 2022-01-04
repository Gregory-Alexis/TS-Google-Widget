import { useEffect, useState } from "react";
import axios from "axios";
import SelectApp from "./components/SelectApp/SelectApp";
import CardApp from "./components/CardApp/CardApp";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  const [data, setData] = useState<[]>([]);
  const [police, setPolice] = useState<string>("popularity");
  const [text, setText] = useState<string>("TypeScript is the way to go !!!");
  const [range, setRange] = useState<number>(20);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://webfonts.googleapis.com/v1/webfonts?sort=${police}&key=${process.env.REACT_APP_FONT_WIDGET}`
        );
        setData(result.data.items.slice(0, 10));
        console.log(result.data.items.slice(0, 10));
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [police]);
  return (
    <div style={{ fontFamily: "Roboto" }}>
      <Header />
      <div className="p-5 md:p-10 xl:flex xl:justify-center">
        <SelectApp
          setPolice={setPolice}
          text={text}
          setText={setText}
          range={range}
          setRange={setRange}
        />
        <CardApp data={data} text={text} range={range} />
      </div>
    </div>
  );
};

export default App;
