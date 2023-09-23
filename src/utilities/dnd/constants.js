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
import CardStatOne from "../../views/cards/CardStatOne";
import CardStatThree from "../../views/cards/CardStatThree";
import CardStatFour from "../../views/cards/CardStatFour";
import CardStatTwo from "../../views/cards/CardStatTwo";
import CardBarChart from "../../views/cards/CardBarChart";
import CardTable from "../../views/cards/CardTable";
import CardRingChart from "../../views/cards/CardRingChart";
import CardGaugeChart from "../../views/cards/CardGaugeChart";
import CardNetwork from "../../views/cards/CardNetwork";
import CardSocial from "../../views/cards/CardSocial";

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
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Card Header",
      content: <CardHeader/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Card Stat One",
      content: <CardStatOne/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Card Stat Two",
      content: <CardStatTwo/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Card Stat Three",
      content: <CardStatThree/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Card Stat Four",
      content: <CardStatFour/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Bar Chart",
      content: <CardBarChart/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Table",
      content: <CardTable/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Gauge Chart",
      content: <CardGaugeChart/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Ring Chart",
      content: <CardRingChart/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Network Chart",
      content: <CardNetwork/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: "Card Social",
      content: <CardSocial/>
    }
  }
];
