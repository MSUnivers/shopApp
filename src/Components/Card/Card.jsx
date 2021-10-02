import React from 'react'
import styled from 'styled-components'
import { FaRegHeart } from "react-icons/fa";

const CardWrapper = styled.div`
border:1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 20%;
padding:2rem;
`
const Image = styled.img`
width:250px;
height:250px;
`;
const Text1 = styled.p`
width:150px;
`;
const Text2 = styled.p`
padding:.4rem;
border-radius:4px;
border:1px solid black;
width:80px;
`;
const Text3 = styled.span`
margin-left: 1rem;
`;
const Text4 = styled(Text3)`
text-decoration:line-through;

`
const Pricewrapper = styled.div`
display:block;

`
const Button = styled.button``
const AddWrapper = styled(Pricewrapper)`
margin-top:1rem;`


export default function Card(props) {
    return (
        <CardWrapper >
            <Image src={props.image} />
            <Text1 >{props.name}</Text1>
            <Text2 >Sale! </Text2>
            <Pricewrapper > <Text4 >$ {props.oldPrice} </Text4> <Text3 >$ {parseInt(props.newPrice)}</Text3></Pricewrapper >
            <AddWrapper >  <Button>Add</Button> <Button> <FaRegHeart/> </Button> </AddWrapper >
        </CardWrapper>
    )
}
