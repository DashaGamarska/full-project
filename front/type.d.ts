interface IProductDescriptionDict {
  price: string;
  quantity: string;
  topNotes: string;
  baseNotes: string;
  volume: string;
  containerVolume: string;
  matchsticks: string;
  wick: string;
  wax: string;
  color: string;
  aroma: string;
  aromaToChoose: string;
  volumeLabel: string;
}

interface IFilterItem {
  name: string;
  values: string[];
}

//=================================================
//    Context
//=================================================

//  ParamsCandleContext

interface ParamCandleI {
  nameOption: string;
  imageOption: StaticImageData | null;
  indexOption: number | null;
}

interface ConfigurationParamsCandleI {
  container: ParamCandleI;
  wax: ParamCandleI;
  aroma: ParamCandleI;
  wick: ParamCandleI;
  color: { nameOption: string; colorOption: null | string; indexOption: null | number };
}

interface ParamsCandleContextI {
  configurationParamsCandle: ConfigurationParamsCandleI;
}

interface toggleParamCandleArguments {
  param: string;
  nameOption: string;
  imageOption: StaticImageData | null;
  colorOption: string | null;
  indexOption: number;
}

interface ParamsCandleActionContextI {
  toggleParamCandle: (args: toggleParamCandleArguments) => void;
  cleanParamsCandle: () => void;
}

interface ParamsCandleContextProps {
  children: React.ReactNode;
}

/*
  |==============================
  | General dictionary types
  |==============================
*/

type generalI = {
  buttons: { [key: string]: string };
  titles: { [key: string]: string };
  messages: { [key: string]: string };
};

interface IToastMessages {
  notAllParam: string;
  itemAdded: string;
  itemDeleted: string;
  successSubscription: string;
  failedRequest: string;
  aromaNeeded: string;
}

/*
  |==============================
  | API 
  |==============================
*/

type ServerLocale = 'UA' | 'EN';

interface ApiRequest {
  id: string;
  currentLang: 'UA' | 'EN';
  slug: string;
}

interface CartApiRequest {
  lang: ServerLocale;
  ids: string[];
}

interface DecorationsApiResponse {
  decorations: DecorationsDetailsI[];
}

/*
  |==============================
  | Boxes
  |==============================
*/

interface IBoxKit {
  container: string;
  wax: string;
  wick: string;
  aromaToChoose: string;
  matchsticks: string;
}

interface BoxDetailsI {
  id: string;
  images: string[];
  title: string;
  name: string;
  price: number;
  components: ComponentI[];
  description: string;
  slug: string;
  volume: string;
  text: string;
  kit: IBoxKit;
}

/*
  |==============================
  | Candles
  |==============================
*/

interface DecorationDetailsI {
  id: string;
  images: string[];
  description: string;
  price: number;
  slug: string;
  name: string;
}

/*
  |==============================
  | Cart
  |==============================
*/

interface IHandleDeleteParams {
  id: string;
  isEmbroidery?: boolean;
}

interface ICartEmbroidery {
  id: string;
  quantity: number;
  price: number;
}

interface ICartDecoration {
  id: string;
  quantity: number;
  price: number;
}

interface ICartProducts {
  embroidery: ICartEmbroidery[];
  decorations: ICartDecoration[];
}

interface ICartBoxProduct extends BoxDetailsI {
  quantity: number;
}

interface ICartCandleProduct extends CandleDetailsI {
  quantity: number;
}

type ICartProduct = ICartDecorationProduct | ICartEmbroideryProduct;


interface DictSearchI {
  search: string,
  noResults: string
}