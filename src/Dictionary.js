import React, { useRef } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteListFB } from "./redux/modules/contents";
// import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc,} from "firebase/firestore";
// import {db} from "./firebase";
// import { loadlistFB } from "./redux/modules/contents";

const Dictionary = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const my_dictionary = useSelector((state) => state.contents.list);
    const scrollRef = useRef();


    // console.log(my_dictionary);
    // console.log(my_dictionary[0].id);





    return (
        <div>
            <Header>
                <Title>[ My Dictionary ]</Title>
                <Hr />
                <Button onClick={() => {
                    history.push("/contents");
                }}>단어추가하기</Button>
            </Header>
            <Wrap>
                <p ref={scrollRef}></p>
                {my_dictionary.map((list) => {
                    return (
                        <WordCard>
                            <Subtitle>단어</Subtitle>
                            <Word>{list.word}</Word>
                            <Subtitle>설명</Subtitle>
                            <Word>{list.expln}</Word>
                            <Subtitle>예시</Subtitle>
                            <Example>{list.exmp}</Example>
                            <div style={{ textAlign: "right" }}>
                                <DelButton onClick={() => {
                                    window.alert("삭제되었습니다");

                                    dispatch(deleteListFB(list.id));

                                    // window.location.reload()
                                }}>삭제하기</DelButton>
                            </div>
                        </WordCard>
                    )
                })}
            </Wrap>
            <TopBtnDiv>
            <TopButton onClick={() => {
                scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start',inline: 'nearest' });;
            }}>top</TopButton>
            </TopBtnDiv>
            
        </div>
    )
}

const Header = styled.div`
width: 330px;
margin: auto;
// border : 1px solid #bdd3fb61;
// border-radius: 10px;
// background: #bdd3fb61;
`;


const Title = styled.h1`
font-family: 'Roboto', sans-serif;
text-transform: uppercase;
letter-spacing: 2.5px;
font-weight: 500;
font-size: 27px;
color: #000000a6;
text-align: center;
`;


const Hr = styled.hr`
height: 1.5px;
width: 300px;
border: none;
background-color: #c5c5c5;
`;


const Button = styled.button`
display: block;
margin: 20px auto 0 auto;
width: 240px;
height: 30px;
font-family: 'Roboto', sans-serif;
font-size: 11px;
text-transform: uppercase;
letter-spacing: 2px;
font-weight: 500;
color: #000;
background-color: #087f5b2e;
border: none;
border-radius: 45px;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
transition: all 0.5s ease 0s;
cursor: pointer;
outline: none;
  
  &:hover {
    background-color: #087f5b;
    box-shadow: 0px 15px 20px #e0e0e0;
    color: #fff;
    transform: translateY(-3px);
  }
`;


const Wrap = styled.div`
// border: 2px solid #ddd;
max-width: 340px;
height: 590px;
max-height:70vh;
margin: 10px auto 20px auto;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
// overflow: overlay;
overflow-x: hidden;
overflow-y: auto;


&::-webkit-scrollbar {
    width: 6px;
    background: none;
}

&::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    opacity: .4;
    border-radius: 10px;
}

&::-webkit-scrollbar-track {
    background: none;
}
`;


const Subtitle = styled.p`
font-family: 'Roboto', sans-serif;
text-transform: uppercase;
letter-spacing: 1px;
font-weight: 500;
font-size: 10px;
`;

const WordCard = styled.div`
max-width: 280px;
border: 1px solid #ddd;
border-radius: 10px;
margin: 20px auto;
padding: 20px;
white-space: pre-wrap;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
flex-direction: column;
`;

const Word = styled.p`
font-family: 'Roboto', sans-serif;
text-transform: uppercase;
letter-spacing: 1px;
font-weight: 400;
font-size: 13px;
`;


const Example = styled.p`
font-family: 'Roboto', sans-serif;
text-transform: uppercase;
letter-spacing: 1px;
font-weight: 400;
font-size: 13px;
color: #087f5b;
white-space: pre-wrap;
`;

const DelButton = styled.button`
// display: block;
// float: right;
width: 100px;
  height: 30px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  color: #000;
  background-color: #7100002e;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease 0s;
  cursor: pointer;
  outline: none;
  
  &:hover {
    background-color: #710000eb;
    box-shadow: 0px 15px 20px #e0e0e0;
    color: #fff;
    transform: translateY(-3px);
  }
`;


const TopBtnDiv = styled.div`
width: 300px;
margin: auto;
`;


const TopButton = styled.button`
display: block;
float: right;
width: 100px;
  height: 30px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease 0s;
  cursor: pointer;
  outline: none;
  
  &:hover {
    background-color: #087f5b;
    box-shadow: 0px 15px 20px #e0e0e0;
    color: #fff;
    transform: translateY(-3px);
  }
`;


export default Dictionary;