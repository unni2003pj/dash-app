import { COMPONENT, ROW, COLUMN } from "./constants";
import { IconAdd } from "../Iconsheet";
import {COMPONENT, ROW, COLUMN } from "./constants";
import CardStatOne from "../../views/cards/CardStatOne";
import CardStatTwo from "../../views/cards/CardStatTwo";
import CardStatThree from "../../views/cards/CardStatThree";
import CardStatFour from "../../views/cards/CardStatFour";
import CardBarChart from "../../views/cards/CardBarChart";
import CardTable from "../../views/cards/CardTable";
import CardGaugeChart from "../../views/cards/CardGaugeChart";
import CardRingChart from "../../views/cards/CardRingChart";
import CardNetwork from "../../views/cards/CardNetwork";
import CardSocial from "../../views/cards/CardSocial";

const initialData = {
  layout: [
    {
      type: ROW,
      id: "row0",
      children: [
        {
          type: COLUMN,
          id: "column0",
          children: [
            {
              type: COMPONENT,
              id: "component0"
            }
          ]
        },
        {
          type: COLUMN,
          id: "column1",
          children: [
            {
              type: COMPONENT,
              id: "component1"
            }
          ]
        },
        {
          type: COLUMN,
          id: "column2",
          children: [
            {
              type: COMPONENT,
              id: "component2"
            }
          ]
        },
        {
          type: COLUMN,
          id: "column3",
          children: [
            {
              type: COMPONENT,
              id: "component3"
            }
          ]
        }
      ]
    },
    {
      type: ROW,
      id: "row1",
      children: [
        {
          type: COLUMN,
          id: "column4",
          children: [
            {
              type: COMPONENT,
              id: "component4"
            },
            {
              type: COMPONENT,
              id: "component5"
            }
          ]
        },
        {
          type: COLUMN,
          id: "column5",
          children: [
            {
              type: COMPONENT,
              id: "component6"
            },
            {
              type: COMPONENT,
              id: "component8"
            }
          ]
        },
        {
          type: COLUMN,
          id: "column6",
          children: [
            {
              type: COMPONENT,
              id: "component7"
            },
            {
              type: COMPONENT,
              id: "component9"
            }
          ]
        }

      ]
    }

  ],
  components: {
    component0: { id: "component0", type: "input", content: <CardStatOne /> },
    component1: { id: "component1", type: "image", content: <CardStatTwo /> },
    component2: { id: "component2", type: "email", content: <CardStatThree /> },
    component3: { id: "component3", type: "name", content: <CardStatFour /> },
    component4: { id: "component4", type: "phone", content: <CardBarChart /> },
    component5: { id: "component5", type: "phone", content: <CardTable /> },
    component6: { id: "component6", type: "phone", content: <CardGaugeChart /> },
    component7: { id: "component7", type: "phone", content: <CardRingChart /> },
    component8: { id: "component8", type: "phone", content: <CardNetwork /> },
    component9: { id: "component9", type: "phone", content: <CardSocial /> },
    addContentComponent: { id: "addContentComponent", type: "new button", content: <div className="widget-add-container"><button type="primary" className="addWidjetBtn" onClick={() => { localStorage.setItem('openWidjet', true) }}><IconAdd color="#FFFFFF" /> Add Widget</button></div> }
  }
};

export default initialData;
