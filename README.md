# <h1 align="center">**Google Font**</h1>

![](https://img.shields.io/badge/React-17.0.2-blue)
![](https://img.shields.io/badge/TypeScript-v4.5.2-blue)

## Description

Site listant les 10 polices d'écriture de **Google Font** les plus `populaire`, `récentes` et les plus `tendance`

- [Installation](https://github.com/Westindiess/TS-Google-Widget#installation)
- [Fetch data](https://github.com/Westindiess/TS-Google-Widget#app)
- [Formulaire](https://github.com/Westindiess/TS-Google-Widget#formulaires)
  - [InputText](https://github.com/Westindiess/TS-Google-Widget#inputText)
  - [SelectMenu](https://github.com/Westindiess/TS-Google-Widget#selectmenu)
  - [SelectRange](https://github.com/Westindiess/TS-Google-Widget#selectrange)
- [Cards](https://github.com/Westindiess/TS-Google-Widget#cards)

## Installation

```
npm install

npm start
```

## App

Fetch des données avec axios.

```javascript
// App.tsx

  const [data, setData] = useState<[]>([]);
  const [police, setPolice] = useState<string>("popularity");
  const [text, setText] = useState<string>("TypeScript is the way to go !!!");
  const [range, setRange] = useState<number>(20);

    const fetchData = async () => {

      try {
        const result = await axios.get(
          `https://webfonts.googleapis.com/v1/webfonts?sort=${police}&key=${process.env.REACT_APP_FONT_WIDGET}`
        );
        setData(result.data.items.slice(0, 10));
        // Affichera les 10 premiers éléments
      } catch (error: any) {
        console.log(error.message);
      }

    };

    fetchData();
  }, [police]);

```

## Formulaires

### InputText

```js
// InputText.tsx

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const InputText: React.FC<Props> = ({ text, setText }) => {

  const textHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setText((e.target as HTMLInputElement).value);
  };

  return (
    <div className="pt-8">
      <h1 className="pb-2 font-bold">Tapez votre texte</h1>
      <textarea
        className="w-full border-gray-400 border rounded p-2"
        onChange={(e) => textHandler(e)}
        value={text}
      />
    </div>
  );
};

```

Saisie du text de votre choix et visualisation avec les différentes polices.

### SelectMenu

```js
// SelectMenu.tsx

interface Props {
  setPolice: React.Dispatch<React.SetStateAction<string>>;
}

const SelectMenu: React.FC<Props> = ({ setPolice }) => {

  const policeHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setPolice((e.target as HTMLInputElement).value);
  };

  return (
    <form>
      <h1 className="font-bold pb-2">Afficher les polices</h1>
      <select
        className="rounded w-full border p-2 border-gray-400"
        onChange={(e) => policeHandler(e)}
      >
        <option value="popularity">Les plus populaires</option>
        <option value="date">Les plus récentes</option>
        <option value="trending">Les plus tendances</option>
      </select>
    </form>
  );
};

```

Tri des polices entre les plus `populaires`, `récentes` et `tendances`.

### SelectRange

```js
// SelectRange.tsx

interface Props {
  range: number;
  setRange: React.Dispatch<React.SetStateAction<number>>;
}

const SelectRange: React.FC<Props> = ({ range, setRange }) => {

  const rangeHandler = (e: React.FormEvent) => {
    setRange(Number((e.target as HTMLInputElement).value));
  };

  return (
    <div className="pt-8">
      <h1 className="font-bold pb-2">Taille de police</h1>
      <input
        type="range"
        className="w-full"
        min="8"
        max="48"
        step="1"
        value={range}
        onChange={(e) => rangeHandler(e)}
      />
    </div>
  );
};

```

Change la taille des polices _en px_

## Cards

### CardApp

Itération sur le tableau de donnée

```js
// CardApp.tsx

interface Props {
  data: [];
  text: string;
  range: number;
}

const CardApp: React.FC<Props> = ({ data, range, text }) => {
  return (
    <ul className="md:grid md:grid-cols-2 md:gap-3 xl:ml-20 xl:w-6/12">
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
```

### Cards

Affichage des éléments dans les cards

```js
// Cards.tsx

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
      <li className="border-gray-200 border shadow-card p-3 py-5 my-5  rounded ">
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
```
