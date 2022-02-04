import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import ReactMarkdown from 'react-markdown'; 
import { Answer, ArrowIcon, ArrowWrap, CloseArrow, FaqWrap, Text } from "./FAQStyles";

const FAQItem = ({ data: { question }}) => {
    console.log({question});
    const answerRef = useRef(null);
    const [closed, setClosed] = useState(true);
    const [height, setHeight] = useState(0);

    const open = useCallback(() => {
        setClosed((c) => {
            setHeight(c ? answerRef.current.scrollHeight : 0);
            return !c;
        });
    }, [setClosed, setHeight, answerRef]);

    return(
        <FaqWrap>
            <div className="content">
                <h4>{question.faqAccordionItemQuestion}</h4>
                    <Answer closed={closed} height={height} ref={answerRef}>
                         <Text>{question.faqAccordionItemAnswer}</Text>
                     </Answer>
            </div>
            <ArrowWrap onClick={open}>
                <ArrowIcon closed={closed} alt="expand icon" />
                <CloseArrow closed={closed} alt="expand icon" />
            </ArrowWrap>
        </FaqWrap>
    )
}
export default FAQItem;