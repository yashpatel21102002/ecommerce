import {  Search, ShoppingCartOutlined } from "@mui/icons-material"
import { Badge } from "@mui/material"
import styled from "styled-components"
import {mobile} from '../responsive'
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom"

const Container = styled.div`
    height:60px;
    background-color:white;
    ${mobile({height:"50px"})}
  

`
const Wrapper = styled.div`
  padding:10px 20px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  ${mobile({padding:"10px 0px"})}

  
  
`

const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
`
const Language = styled.span`
  font-size:14px;
  cursor:pointer;
  ${mobile({display:"none"})}

  

`
const SearchContainer =styled.div`
  display:flex;
  border:1px solid lightgray;
  align-items:center;
  margin-left:25px;
  padding:5px;
  
  
  

`

const Input = styled.input`
  border:none;
  outline:none;
  ${mobile({width:"50px"})}



`

const Center = styled.div`
  flex:1;
  text-align:center
`
const Logo = styled.h1`
  
  font-weight:bold;
  ${mobile({fontSize:"24px"})}


`

const Right = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:end;
  ${mobile({flex:2,justifyContent:"center"})}



`
const MenuItem = styled.div`
  
  font-size:14px;
  cursor:pointer;
  margin-left:25px;
  ${mobile({fontSize:"12px",marginLeft:"10px"})}


  

`


const Navbar = () => {
  /* const cart = useSelector(state=>state.cart); */
  /* console.log(cart); */
  const quantity = useSelector(state=>state.cart.quantity)
  console.log(quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{color:'gray' , fontSize:'20px'}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>NILE.</Logo>
        </Center>
        <Right>
        <MenuItem>
          REGISTER
        </MenuItem>
        <MenuItem>
          SIGN IN
        </MenuItem>
        <Link to="/cart">
        
        <MenuItem>
        <Badge badgeContent={quantity} color="primary">
        <ShoppingCartOutlined />
        </Badge>
        </MenuItem>
        </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar