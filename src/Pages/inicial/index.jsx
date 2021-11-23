import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCounter, subCounter } from "../../store/modules/counter/actions";


function Inicial(){

    const dispatch = useDispatch();
    const contador = useSelector((state) => state.counter)

    const subtrair = () =>{
        if(contador>0)
            dispatch(subCounter(1))
    }
    const somar = () =>{
        dispatch(addCounter(1))
    }

    return (
        <div>
            <h2>Valor atual: {contador}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </div>
    )
}

export default Inicial;