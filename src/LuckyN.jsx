import { useState } from "react";
import { sum,getRolls } from "./funcs";
import Dice from "./Dice.jsx";


export default function LuckyN(props){
	const {numDice,goal,Addblock} = props
	const[dice,setDice] =useState(getRolls(numDice))
	const isWinner = sum(dice)===goal
	const useit = ()=>(setDice(getRolls(numDice)))
	return(
		<section>
		<div>
			<h1>the {goal} dice winner {isWinner && "you Win !"} </h1>
			<Dice val={dice} Addblock={Addblock} />
			<button onClick={useit}>Click here</button>
		</div>
		

		</section>
	)
}