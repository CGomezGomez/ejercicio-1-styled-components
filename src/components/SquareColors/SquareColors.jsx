import { useState } from "react";
import Button from "../Button/Button";
import { StyledDiv } from "./styles";


const SquareColors = () => {

    const [color , setColor ] = useState(true);

	return (
    <>
    <StyledDiv color={color}> </StyledDiv>
    <Button text="Cambiar Color" handleClick={()=>changeColor(color, setColor)} />
    </>
    
    );
};
const changeColor = ( color , setColor ) => {
    
    setColor(!color);

}

export default SquareColors;