import React, { useEffect, useState } from 'react'
import Card from '../Card/Card.jsx'
import styled from 'styled-components'

const Wrapper = styled.div`

display:flex;
justify-content:center;
flex-direction:column;
flex-wrap: wrap;
gap:1rem;
margin:3rem;
`
const CardsWrapper = styled(Wrapper)`
flex-direction:row;
`

const Select = styled.select`
width:10%;`
const Option = styled.option`
`


export default function Container() {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [sortType, setSortType] = useState('Default sorting');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(result => {
                setData(result);
                setSortedData(result);
            })
    }, [])



    useEffect(() => {
        function sorting(type) {
            let toSort = [...data];
            let sorted = [];

            switch (type) {
                case 'price':
                    sorted = toSort.sort((a, b) => b.price - a.price);
                    break;
                case 'rate':
                    sorted = toSort.sort((a, b) => b.rating.rate - a.rating.rate);
                    break;
                default:
                    sorted = toSort;
                    break
            }

            setSortedData(sorted);

        }
        sorting(sortType);
    },[sortType]);





    function getPriceAfterSale(price) {
        return price - (price * (10 / 100))
    }


    return (
        <Wrapper>
            <Select onChange={(e) => setSortType(e.target.value)} >
                <Option value="Default sorting">Default sorting</Option>
                <Option value="price">price</Option>
                <Option value="rate">rate</Option>

            </Select>


            <CardsWrapper>
                {
                    sortedData.map(object =>
                        <Card image={object.image} name={object.title} oldPrice={object.price} newPrice={getPriceAfterSale(object.price)} />
                    )
                }</CardsWrapper>
        </Wrapper>
    )
}
