import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
    

`
const Title = styled.h1`
    margin:20px;

`

const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;


`

const Filter = styled.div`
    margin:20px;
    /* padding:10px; */
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}


`

const FilterText = styled.span`
    
    font-size:20px;
    font-weight:600;
    margin-right:20px;
    ${mobile({ marginRight: "0px" })}
`


const Select  = styled.select`
    
    padding:10px;
    margin-right:20px;
    ${mobile({ margin: "10px 0px"})}
    
`

const Options = styled.option`
    /* padding:10px; */
    
`


const ProductList = () => {
    const location = useLocation() //hook
    //this will give values from url 
    //use useLocation hook
    const cat = location.pathname.split("/")[2];    const [filters,setFilters] = useState({}); //firsly will empty state after changing we can change empty object
    const [sort,setSort] = useState("newest");


    const handleFilters = (e)=>{
        const value = e.target.value;
        setFilters({
            ...filters, //spread operator
            [e.target.name] : value,
        })

    }
    
    console.log(filters)
    const handleSort=(e)=>{
        const value = e.target.value;
        setSort(value);
    }
    console.log(sort)

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Options disabled>
                        Color
                    </Options>
                    <Options value="white">
                        White
                    </Options>
                    <Options value="black">
                        Black
                    </Options>
                    <Options value="red">
                        Red
                    </Options>
                    <Options value="blue">
                        Blue
                    </Options>
                    <Options value="yellow">
                        Yellow
                    </Options>
                    <Options value="green">
                        Green
                    </Options>
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Options disabled>
                        Size
                    </Options>
                    <Options>
                        XS
                    </Options>
                    <Options>
                        S
                    </Options>
                    <Options>
                        M
                    </Options>
                    <Options>
                        L
                    </Options>
                    <Options>
                        XL
                    </Options>
                    <Options>
                        2XL
                    </Options>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={handleSort}>
                    <Options value="newest">
                        Newest
                    </Options>
                    <Options value="asc">
                        Price (asc)
                    </Options>
                    <Options value="desc">
                        Price (desc)
                    </Options>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList