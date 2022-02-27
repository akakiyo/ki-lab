import { useState } from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const ExpnadIcon = () => {
  return <Triangle />;
};
const AccordionWrapper = ({ children }) => {
  const title = children.find((item) => item.key === "title");
  const body = children.find((item) => item.key === "body");

  return (
    <Wrapper>
      <Accordion id="accordion">
        {/* expandIconにコンポーネントを入れることでaccoridonの状態によって図形が反転する */}
        <AccordionSummary id="panel1a-header" expandIcon={<ExpnadIcon />}>
          {title}
        </AccordionSummary>
        <AccordionDetails id="panel1a-body">{body}</AccordionDetails>
      </Accordion>
    </Wrapper>
  );
};

//styled-componentではimportしてきたコンポーネントを継承できなかったので
//idで指定してスタイリングを行なった。
const Wrapper = styled.span`
  #accordion {
    box-shadow: none;
  }

  #panel1a-header {
    background: #666;
    cursor: pointer;
    border-bottom: 1px solid #fff;
    word-wrap: break-word;

    padding: 0px 10px 0px 10px;
    color: #fff;
    font-size: 15px;
    margin-bottom: 15px;
  }

  #panel1a-body {
    color: #666666;
    font-size: 11pt;
    word-wrap: break-word;
    display: block;
    padding: 8px 17px 13px;
    width: 94%;
    margin-left: 13px;
  }
`;
const Triangle = styled.div`
  content: "";
  position: relative;
  border: 8px solid transparent;
  border-top-color: #fff;
`;

export default AccordionWrapper;
