import React from 'react';
import ReactDOM from 'react-dom';


 const SlotM=(props)=>{
 // let x='😄';
 // let y='😄';
  //let z='🫡';
  let x=props.x;
  let y=props.y;
  let z=props.z;

  if((x===y) && (y===z)){
    return(
      <>
        <div className='slot'>
          <h1>
            
            {x}{y}{z}
          </h1>
          <h1>This is Matching</h1>
          <hr/>
        </div>
      </>
    );
  }else{
    return(
      <>
        <div className='slot'>
          <h1>
            
            {x}{y}{z}
          </h1>
          <h1>This is not Matching</h1>
          <hr/>
        </div>
      </>
    );
  }
}
const App=()=>{
  return <>
    <h1 className="heading">
    🎰 Welcome to<span style={{ fontWeight: "bold"}}>Slot Machine game</span>🎰
    </h1>
    <div className='slot_m'>
    <SlotM x="😄" y="😄" z="😄"/>
    <SlotM x="🫡" y="😄" z="😄"/>
    <SlotM x="😄" y="😎" z="😄"/>
    <SlotM x="🍒" y="🍒" z="🍒"/>
   
    </div>
   
  </>
}
export default App;