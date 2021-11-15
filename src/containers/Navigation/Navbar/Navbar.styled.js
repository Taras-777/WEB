import styled from "styled-components";

export const NavbarStyled = styled.nav`
  height: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: inherit;
  width: 60%;

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }

  li {
    display: inline-block;
    padding: 5px 5px 10px 5px;
    position: relative;
    font-weight: bold;
    margin: 10px 30px;
    font-size: 1.5rem;
    border: 1px solid inherit;
    border-radius: 25px;
    cursor: pointer;
    min-width: 30%;

    a {
      color: black;
    }
  }

  li:hover {
    background-color: rgb(248, 157, 0);
  }

  li.chosen {
    background-color: rgb(241, 146, 55);
  }
`;
