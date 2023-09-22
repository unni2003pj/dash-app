import shortid from "shortid";
import CardIphone from '../../views/cards/CardIphone';
import CardSms from '../../views/cards/CardSms';
import CardData from '../../views/cards/CardData';
import CardVoice from '../../views/cards/CardVoice';
import CardContractOne from '../../views/cards/CardContractOne';
import CardContractTwo from '../../views/cards/CardContractTwo';
import CardDocumentOne from '../../views/cards/CardDocumentOne';
import CardDocumentTwo from '../../views/cards/CardDocumentTwo';
import CardDocumentThree from '../../views/cards/CardDocumentThree';
import CardLineChart from '../../views/cards/CardLineChart';
import CardGroupChart from '../../views/cards/CardGroupChart';
import CardHeader from "../../views/cards/CardHeader"

export const SIDEBAR_ITEM = "sidebarItem";
export const ROW = "row";
export const COLUMN = "column";
export const COMPONENT = "component";

export const SIDEBAR_ITEMS = [
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Card One",
      content: <CardIphone/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Card Two",
      content: <CardSms/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Card Three",
      content: <CardData/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Card Four",
      content: <CardVoice/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Card Contract One",
      content: <CardContractOne/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Card Contract Two",
      content: <CardContractTwo/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Card Document One",
      content: <CardDocumentOne/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Card Document Two",
      content: <CardDocumentTwo/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Card Document Three",
      content: <CardDocumentThree/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Line Chart",
      content: <CardLineChart/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Group Chart",
      content: <CardGroupChart/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Card Header",
      content: <CardHeader/>
    }
  }
];
