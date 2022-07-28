import styled from 'styled-components';

export const Button=styled.button`
  background:#ffd322;
  color:black;
  border:nome;
  border-radius:0;
  font-size:1.5em;
  padding:10px;
  cursor:pointer;
  box-shadow:#333 3px 3px;
  font-family:Simpsons-Font, serife;

  &:hover &:active{
    background-color: #d4ae7d;
  }

  &:focus {
    outline: none;
  }

`;