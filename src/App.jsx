import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Square from './components/Square'

function App({xisnext,onplay,squares,history}) {
 
   function declarewinner(squares){
    let lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [2,5,8],
        [1,4,7],
        [0,4,8],  
        [2,4,6]

    ];
    for(let i = 0;i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(squares[a] && (squares[a] === squares[b]) &&( squares[a] === squares[c]))
            {
                return squares[a];
            }
    }
   }
   function onReset(){
    onplay(history[0]);
  

   }
   function handleClick( i){
      if (squares[i] || declarewinner(squares)){
         return;
      }
      const nextsquares  = [...squares];
      if(xisnext){nextsquares[i] = 'X';}
      else{nextsquares[i] = 'O';}
       onplay(nextsquares);
   }
   let winner = declarewinner(squares);
   let status;
   if (winner) {
     status = 'Winner: ' + winner;
   } else {
     status = 'Next player: ' + (xisnext ? 'X' : 'O');
   }
   
   return (
    <>
      <div className="status">{status}</div>
    <div className='row'>
   
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className='row'>
    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className='row'>
    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
    <button className='reset' onClick={onReset}>RESET </button>
   
   
   </>
    
   )
}
function Game(){
  const [history,setHistory] = useState([Array(9).fill(null)]);
  const [xisnext,setXisnext] = useState(true);
  const currentsquares = history[history.length-1];
  function handleplay(nextsquares){
    if(nextsquares == history[0]){
      setHistory([Array(9).fill(null)]);
      setXisnext(true);

    }
    else{
      setHistory([...history,nextsquares]);
      setXisnext(!xisnext);
    }
  

  }
  return (
    <div className="game">
      <div className="game-board">
        <App xisnext={xisnext} squares = {currentsquares} onplay = {handleplay} history={history}></App>
   
      </div>
      <div className="game-info">
        <ol>  </ol>
      </div>
    </div>
  );

}

export default Game
