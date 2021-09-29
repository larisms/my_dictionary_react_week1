import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {addList} from "./redux/modules/contents"
import { addListFB } from "./redux/modules/contents";

const Contents = (props) => {
    const history = useHistory();
    const new_word = useRef(null);
    const new_expln = useRef(null);
    const new_exmp = useRef(null);


    const dispatch = useDispatch();


    // const addDictionary = () => {
    //     dispatch(addList())
    // };

    return (
        <div>
            <Header>
            <MainTitle>[ My Dictionary ]</MainTitle>
            <Hr/>
            </Header>
            <InputWrap>
                <Title>새로운 단어 추가</Title>
                <InputBox>
                    <Subtitle>단어</Subtitle>
                    <Input type="text" placeholder="단어를 입력해주세요" ref={new_word}></Input>
                </InputBox>
                <InputBox>
                    <Subtitle>설명</Subtitle>
                    <Textarea type="text" placeholder="설명을 입력해주세요" ref={new_expln}></Textarea>
                </InputBox>
                <InputBox>
                    <Subtitle>예시</Subtitle>
                    <Textarea type="text" placeholder="예시를 입력해주세요" ref={new_exmp}></Textarea>
                </InputBox>
                <InputButton onClick={() => {
                    dispatch(addListFB({
                        word: new_word.current.value,
                        expln: new_expln.current.value,
                        exmp: new_exmp.current.value, 
                    }));
                    history.push("/")
                }}>등록하기</InputButton>
                <CancelButton onClick={()=> {
                    history.push("/");
                }}>취소</CancelButton>
            </InputWrap>
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


const MainTitle = styled.h1`
font-family: 'Roboto', sans-serif;
// text-shadow: 1px 1px 1px gray;
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


const Title = styled.h3`
font-family: 'Roboto', sans-serif;
text-transform: uppercase;
letter-spacing: 1.5px;
font-weight: 700;
color: #000000a6;
font-size: 16px;
text-align: center;
margin: 20px auto 0 auto;

`;


const Subtitle = styled.p`
font-size: 12px;
`;


const InputWrap = styled.div`
// max-width: 340px;
// border: 1px solid #ddd;
// border-radius: 10px;
// margin: 20px auto;
// box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;


const InputBox = styled.div`
max-width: 280px;
min-height: 10vh;
border: 1px solid #ddd;
border-radius: 10px;
padding: 16px;
margin: 20px auto;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
// background-color: black;
`;

const Input = styled.input`
font-family: 'Roboto', sans-serif;
width: 230px;
display: block;
margin: auto;
padding: 10px 20px;
border: 2px solid #ddd;
border-radius: 10px;
word-break: break-word;
// margin: 0 auto;
&: focus {
    outline: none;
    box-shadow: 0 0 0px 2px #087f5b; 
}
`;


const Textarea = styled.textarea`
font-family: 'Roboto', sans-serif;
width: 230px;
height: 50px;
resize: none;
display: block;
margin: auto;
padding: 10px 20px;
border: 2px solid #ddd;
border-radius: 10px;
word-break: break-word;
&: focus {
    outline: none;
    box-shadow: 0 0 0px 2px #087f5b; 
}
`;



const InputButton = styled.button`
display: block;
margin: 30px auto 10px auto;
width: 200px;
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
    transform: translateY(-4px);
}
`;


const CancelButton = styled.button`
display: block;
margin: 10px auto 20px auto;
width: 200px;
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
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
transition: all 0.5s ease 0s;
cursor: pointer;
outline: none;
  
&:hover {
    background-color: #710000eb;
    box-shadow: 0px 15px 20px #e0e0e0;
    color: #fff;
    transform: translateY(-4px);
}
`;

export default Contents;