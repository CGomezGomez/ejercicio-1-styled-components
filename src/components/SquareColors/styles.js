import styled from "styled-components";

const StyledDiv = styled.div`

    background-color: ${props=>(props.color ? 'red' : 'green')};
    width: 200px;
    height: 200px;

`;

export { StyledDiv };