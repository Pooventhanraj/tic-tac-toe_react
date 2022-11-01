import React from "react"
import ReactDOM from 'react-dom';
import  "../src/index.css"
import { useState } from "react";


const Game= () =>{
  return(
    <div className="game">TIC_TAC_TOE
    <Board/>
    </div>
  )
};



const Board= () =>{

const initialSquare = Array(9).fill(null);

const[squares ,setSquares] = useState(initialSquare);

const [xIsNext,setIsNext] = useState(true);


const handleClickEvent = (i)=>{
 const newSquares = [...squares];

 const isWinnerDeclared = Boolean(calculateWinner(newSquares));
 const isSquaresFilled = Boolean(newSquares[i]);

 if(isWinnerDeclared || isSquaresFilled)
 {
  return;
 }
 newSquares[i]=xIsNext ? "X" : "O";
 setSquares(newSquares);
 setIsNext(!xIsNext);
}
  const renderSquare = (i) =>{
    return ( 
      <Square value={squares[i]}
      onClick ={()=>handleClickEvent(i)}
      />
    )
  }

const winner = calculateWinner(squares);
const status = winner ? `winner is : ${winner}` : `${xIsNext ? "X" : "O"}'s turn`


  return(
    <div className="board">{status}
    <div className="board-row">
    {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
    </div>
    <div className="board-row">
    {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
    </div>
    <div className="board-row">
    {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
    </div>
 
    </div>
  )
};

const Square= (props) =>{

  return(
    <button className="square"
    onClick={props.onClick}
    >{props.value} 
    </button>
  )

};

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
) ;


function calculateWinner(squares)
{

  console.log(squares)
  const lines =[
    [0,1,2] , [3,4,5] , [6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for(let line of lines)
  {
    const [a,b,c] = line;
    console.log(a);
    console.log(b);
    console.log(c);

    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
    {
      console.log(squares[a])
      return squares[a];
    }

  }
  
  return null;
}