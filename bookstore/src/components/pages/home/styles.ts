import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

.header{
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 2rem 2rem 1rem 2rem;
 width: 100%;
 h1{
 }
 .search {
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(200, 199, 199);
    padding: 0.5rem;
    border-radius: 16px;
    box-shadow: inset 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    input {
        background-color: transparent;
        border: none;
        color: black;
        width: 80%;
        ::placeholder {
        color: black;
      }
    }
 }
 .filter{
    display: flex;
    justifiy-content: center;
    
    select {
        appearance: none;
        background-color: transparent;
        border: none;
        padding: 0 1em 0 0;
        margin-left: 0.5rem;
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        cursor: pointer;
        line-height: inherit;
        z-index: 1;
        &::-ms-expand {
          display: none;
        }
        outline: none;
    }
    
 }
 button{
    display: flex;
    justify-content: space-between;
    border-radius: 16px;
    padding: 0.4rem;
    background-color: transparent;
    cursor: pointer;
    border: none;
    &:hover{
        transform: scale(1.1);
        transition: 0.01s ease-in-out;
    }
    h2{
        font-weight: 300;
        margin-right: 0.2rem;
    }
  }
 }

 .books{
    width: 100%;
    background-color: rgb(200, 199, 199);
    height: 100%;
    box-shadow: inset 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    h2{
        font-size: 3rem;
        display: block;
        margin-top: auto; 
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    }
 }
}
`

export const StyledBook= styled.button`
width: 250px;
height: 250px;
display: flex;
border-radius: 32px;
flex-direction: column;
margin: 1rem;
background-color: white;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
border: none;
justify-content: space-between;
align-items: center;
padding: 1rem;
cursor: pointer;
&:hover{
    transform: scale(1.02);
    transition: 0.01s ease-in-out;
}
.book-info{
    display: flex;
    flex-direction: column;
    align-items:center; 
    justify-content: center;
    width: 100%;
    img{
        display: flex;
    align-items:center; 
    justify-content: center;
    width: 150px;
    height: 150px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    }
    h2 {
        padding: 1rem;
        font-weight:200;
        font-size: large;
    }
}
`