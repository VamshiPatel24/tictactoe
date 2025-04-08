import React,{useState} from "react";
import './App.css'   
function App(){
   const[player,setPlayer]=useState('X');
   const[text,setText]=useState();
   const[click,setClick]=useState(0);
   const[game,setGame]=useState(true)
   const disableClick=(id)=>{
    document.getElementById(id).style.pointerEvents='none'
   }
   const checkWinner=()=>{
    const values=[];
    for(let i=1;i<=9;i++){
      values[i]=document.getElementById(`cell${i}`).innerHTML;
     }
     if(player==values[1]&&player==values[2]&&player==values[3]){
      document.getElementById('cell1').className='win';
      document.getElementById('cell2').className='win';
      document.getElementById('cell3').className='win';
      setText(player+" is winner")
       setGame(false)
     }
     else if(player==values[4]&&player==values[5]&&player==values[6]){
      document.getElementById('cell4').className='win';
      document.getElementById('cell5').className='win';
      document.getElementById('cell6').className='win';
      setText(player+" is winner")
      setGame(false)
     }
     else if(player==values[7]&&player==values[8]&&player==values[9]){
      document.getElementById('cell7').className='win';
      document.getElementById('cell8').className='win';
      document.getElementById('cell9').className='win';
      setText(player+" is winner")
      setGame(false)
    }
     else if(player==values[1]&&player==values[4]&&player==values[7]){
      document.getElementById('cell1').className='win';
      document.getElementById('cell4').className='win';
      document.getElementById('cell7').className='win';
      setText(player+" is winner")
      setGame(false)
    }
     else if(player==values[2]&&player==values[5]&&player==values[8]){
      document.getElementById('cell5').className='win';
      document.getElementById('cell2').className='win';
      document.getElementById('cell8').className='win';
      setText(player+" is winner") 
      setGame(false)
    }
     else if(player==values[3]&&player==values[6]&&player==values[9]){
      document.getElementById('cell6').className='win';
      document.getElementById('cell9').className='win';
      document.getElementById('cell3').className='win';
      setText(player+" is winner")
      setGame(false)
    }
     else if(player==values[1]&&player==values[5]&&player==values[9]){
      document.getElementById('cell1').className='win';
      document.getElementById('cell5').className='win';
      document.getElementById('cell9').className='win';
      setText(player+" is winner")
      setGame(false)
    }
     else if(player==values[3]&&player==values[5]&&player==values[7]){
      document.getElementById('cell5').className='win';
      document.getElementById('cell7').className='win';
      document.getElementById('cell3').className='win';
      setText(player+" is winner")
      setGame(false)
    }
    else if(click>=8){
     setText('Game Drawn')
     setGame(false)
    }
   }
    const fillBox=(ids)=>{
      if(game){
       if(player=='X'){
        document.getElementById(ids).innerHTML=player;
        disableClick(ids)
        setClick(click+1);
        checkWinner();
        setPlayer('O');
       }
       else{
       document.getElementById(ids).innerHTML=player;
       disableClick(ids)
        setClick(click+1)
       checkWinner();
       setPlayer('X');
    }
  }}
  return(
    <>
       <div className="main">
              <div className="game">
                   <div className="cell" id="cell1"  onClick={()=>{fillBox('cell1')}}></div>
                   <div className="cell" id="cell2" onClick={()=>{fillBox('cell2')}}></div>
                   <div className="cell" id="cell3" onClick={()=>{fillBox('cell3')}}></div>
                   <div className="cell" id="cell4" onClick={()=>{fillBox('cell4')}}></div>
                   <div className="cell" id="cell5" onClick={()=>{fillBox('cell5')}}></div>
                   <div className="cell" id="cell6" onClick={()=>{fillBox('cell6')}}></div>
                   <div className="cell" id="cell7" onClick={()=>{fillBox('cell7')}}></div>
                   <div className="cell" id="cell8" onClick={()=>{fillBox('cell8')}}></div>
                   <div className="cell" id="cell9" onClick={()=>{fillBox('cell9')}}></div>
              </div>
                 <h2 id="winner">{text}</h2>
                 <button id='btn'onClick={()=>{window.location='/'}}>Restart</button>
       </div>
    </>
  )
}
export default App