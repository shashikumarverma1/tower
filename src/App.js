import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [arr, setArr]=useState(['1324','1342','1243'])
  const handaleclick=(i)=>{
    console.log(i , arr[i])
    setArr([...arr , '1234' ])
  }
  return (
    <div style={{color:"white"}} className='app'>
    <div style={{display:'flex', justifyContent:'center' , marginTop:'10vh'}}>
      <div style={{width:'25vw' , height:'80vh' , backgroundColor:'#202020'}}>
       <div style={{display:'flex' , width:"100%" , justifyContent:'center'}}>
       <div style={{textAlign:'center'}}>hard</div>
        <div>medium</div>
        <div>easy</div>
       </div>
       <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // width: '100%',
            // height: '100%'
            // color: '#141414',
            backgroundColor:"red"
    // backgroundColor: 'linear-gradient(225deg, #77FFA8 0%, #FFE081 33%, #FFAD8E 68%, #A592FF 100%)'
       }}>play</div>
      <div>
        <div>
        <button>-</button>
        <button>min</button>
        </div>
        <div>
          <p>1.93</p>
          <p>$0.001 stake</p>
        </div>
       <div>
       <button>+</button>
        <button>max</button>
       </div>
      </div>
      </div>
      <div style={{width:'40vw' , height:'80vh' , backgroundColor:'grey' , display:'flex' , justifyContent:'center' ,paddingTop:'20px' }}>
      <div style={{backgroundColor:'#202020' , width:'90%' , height:'80%' , }}>
    <div style={{display:'flex' , justifyContent:'center'}}>
   
    </div>
   {
    arr.slice(0,4).map((e, i)=>{
      return (
        <div style={{display:'flex' ,justifyContent:'center' }}>
   <button style={(i+1) %3===0 ?  grad1 : (i+1) %4===0 ? greenbox : blackbox1}
   onClick={()=>handaleclick(i)}
   >1</button>
<button style={(i+1)%3===0 ? grad2 : (i+1) %4===0 ? greenbox : blackbox1}  onClick={()=>handaleclick(i)}>2</button>
<button style={(i+1)%3===0 ? grad3 : (i+1) %4===0 ? greenbox : blackbox1}  onClick={()=>handaleclick(i)}>3</button>
<button style={(i+1)%3===0 ? grad4 : (i+1) %4===0 ? greenbox : blackbox1}  onClick={()=>handaleclick(i)}>4</button>

   </div>
      )
    })
   }
 
  
      </div>

      </div>
    </div>
    </div>
  );
}

export default App;

var grad1={    cursor: 'pointer',
width:100, height:100,
borderWidth: 0,
borderColor: 'transparent',
backgroundSize: '400% 100%',
backgroundPosition: '0% 0%',
backgroundImage: 'linear-gradient(225deg, rgb(119, 255, 168) 0%, rgb(255, 224, 129) 32.81%, rgb(255, 173, 142) 68.22%, rgb(165, 146, 255) 100%)',
margin:5
}
var grad2={
  width:100,
  height:100,
      cursor: 'pointer',
      borderWidth: 0,
      borderColor: 'transparent',
      backgroundSize: '400% 100%',
      backgroundPosition: '25% 25%',
      backgroundImage: 'linear-gradient(225deg, rgb(119, 255, 168) 0%, rgb(255, 224, 129) 32.81%, rgb(255, 173, 142) 68.22%, rgb(165, 146, 255) 100%)',
      margin:5
}
var grad3={
  width:100,
  height:100,
  cursor: 'pointer' ,
  borderWidth: 0,
  borderColor: 'transparent',
  backgroundSize: '400% 100%',
  backgroundPosition: '50% 50%',
  backgroundImage: 'linear-gradient(225deg, rgb(119, 255, 168) 0%, rgb(255, 224, 129) 32.81%, rgb(255, 173, 142) 68.22%, rgb(165, 146, 255) 100%)',
  margin:5
}
var grad4={
  width:100,
  height:100,
  cursor: 'pointer',
  borderWidth: 0,
  borderColor: 'transparent',
  backgroundSize: '400% 100%',
  backgroundPosition: '75% 75%',
  backgroundImage: 'linear-gradient(225deg, rgb(119, 255, 168) 0%, rgb(255, 224, 129) 32.81%, rgb(255, 173, 142) 68.22%, rgb(165, 146, 255) 100%)',
  margin:5
}
var blackbox1={
  width:100,
  height:100,
  opacity: 0.5,
  cursor: 'default',
  borderWidth: 2,
  borderColor: 'transparent',
  backgroundColor: 'rgb(68, 68, 68)',
  backgroundSize: '400% 100%' ,
  backgroundPosition: '0% 0%',
  margin:5
}
var greenbox={
  width:100,
  height:100,
  cursor: 'default',
  borderWidth: 2,
  borderColor: 'rgb(44, 63, 52)',
  backgroundSize: '400% 100%',
  backgroundPosition: '25% 25%',
  opacity: 1,
  backgroundColor: 'rgb(44, 63, 52)',
  margin:5
}

 {/* <div>
{ !true ?   <img src="https://bch.games/static/media/sad_face@1x.4c521d5eccd18704a7a2.webp" alt='image'/> :
   <img src="https://bch.games/static/media/normal_face@2x.fbade48a571320928d6a.webp" alt='iamge'/>}
</div> */}