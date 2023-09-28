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
      type: <CardIphone/>,
      content: <CardIphone/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardSms/>,
      content: <CardSms/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardData/>,
      content: <CardData/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardVoice/>,
      content: <CardVoice/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardContractOne/>,
      content: <CardContractOne/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardContractTwo/>,
      content: <CardContractTwo/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardDocumentOne/>,
      content: <CardDocumentOne/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardDocumentTwo/>,
      content: <CardDocumentTwo/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardDocumentThree/>,
      content: <CardDocumentThree/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardLineChart/>,
      content: <CardLineChart/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardGroupChart/>,
      content: <CardGroupChart/>
    }
  }, 
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardStatOne/>,
      content: <CardStatOne/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardStatTwo/>,
      content: <CardStatTwo/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardStatThree/>,
      content: <CardStatThree/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardStatFour/>,
      content: <CardStatFour/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardBarChart/>,
      content: <CardBarChart/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardTable/>,
      content: <CardTable/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardGaugeChart/>,
      content: <CardGaugeChart/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardRingChart/>,
      content: <CardRingChart/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardNetwork/>,
      content: <CardNetwork/>
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      type: <CardSocial/>,
      content: <CardSocial/>
    }
  }
];
