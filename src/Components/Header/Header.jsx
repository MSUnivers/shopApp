import React from 'react'
import styled from 'styled-components'
import 'font-awesome/css/font-awesome.min.css';
import { FaShoppingCart } from "react-icons/fa";

const search={border: '1px solid grey' ,padding: '0.5rem', borderRadius: '8px'}
const Text1 = styled.h2`
font-size:1rem;
`
const Text2 = styled(Text1)`
font-size:0.8rem;
font-weight: normal;
`
const TextField = styled.input`
border: none;
outline: none;
`
const Wrapper = styled.div`

display:flex;
justify-content:space-around;
align-items:center;
`
const Nav = styled.nav`
background:violet;
width: 100%;
height: 5rem;
display:flex;
justify-content:space-around;
align-items:center;

`
const Ul = styled.ul`
display:flex;
flex-direction: row;
justify-content:space-around;
align-items:center;
width:500px;`

const List = styled.li`
list-style: none;
`



export default function Header() {
    return (
        <div>
            <Wrapper>
                <div>
                    <Text1>Woo Dev</Text1>
                    <Text2>Bla bla commerce Tuto</Text2>
                </div>
                <div style={search}>
                    <button type="submit" style={{border:'none', background: 'transparent'}}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search fa-w-16 fa-fw"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" className=""></path></svg></button>
                    
                <TextField placeholder='Search products...' />
                </div>
                </Wrapper>
                
            <Nav>
                
                <Ul>
                    <List>Home</List>
                    <List>Forum</List>
                    <List>My account</List>

                </Ul>
                <FaShoppingCart/>
            </Nav>

        </div>
    )
}
