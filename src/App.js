
import './App.css';
import { useState } from 'react';

function App() {
  const [arr, setArr] = useState(['1001', '1010', '0110'])

  const [classes3, setClasses3] = useState('grad1')
  const [stakeValue, setStakeValue] = useState('0.000000010')
  const [gameLevel, setGameLevel] = useState('0011')
  const [gameOverMassage, setGameOverMassage] = useState('')
  const [show, setShow] = useState(false)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
  const handaleclick = (num) => {
    console.log(num)
    if(show){
      alert("play again")
    }
    if(num == 1){
      setShow(true)
    
      console.log("u loose")
      setGameOverMassage('Game over')
    }else{
      let digits = gameLevel.split('');
      let shuffledDigits = shuffleArray(digits).join('');
      // console.log(shuffledDigits);
      setArr([shuffledDigits , ...arr  ])
    }
  }
const Play_Game=()=>{
  setShow(false)
  setGameOverMassage('')
  // EASY
  if(gameLevel=='0001'){setArr(['0100' , '0010', '0100'])}
  // HARD
  if(gameLevel=='0111'){ setArr(['1011' , '1101', '0111'])}
  // MEDIUM
  if(gameLevel=='0011'){ setArr(['1001', '1010', '0110'])}
  
}

  return (
    <div style={{ color: "white" }} className='app'>
      <div
        
        style={{height:100, width:1200, 
        '@media (max-width: 786px)': {
        
            backgroundColor: 'aqua', // Change background color for screens less than 786px
          
        },
        '@media (min-width: 806px)': {
        
          backgroundColor: 'red', // Change background color for screens less than 786px
        
      },
        
        }}></div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10vh',

      
       }}>
        
        <div style={{ width: '30vw', height: '83vh', backgroundColor: '#202020' ,
      
      }}>
        <div style={{ display: 'flex', width: "90%", justifyContent: "space-around", textAlign: "center", margin:20 , backgroundColor:"#141414" , 

      }}>
            <p style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              textTransform: 'uppercase',
              backgroundColor: "#141414",
              color: gameLevel === '0111' ? "#ffffde" :'#999999',
              cursor:'pointer'
             
            }} onClick={() =>{
              setArr(['1011' , '1101', '0111'])
              setGameLevel('0111')}}>HARD</p>
              {/* 😊 😡 */}
            <p style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              textTransform: 'uppercase',
              backgroundColor: "#141414",
              color: gameLevel === '0011' ? "#ffffde" :'#999999',
              cursor:'pointer'
              
            }} onClick={() => {
              setArr(['1001', '1010', '0110'])
              setGameLevel('0011')}}>MEDIUM</p>
            <p style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              textTransform: 'uppercase',
              backgroundColor: "#141414",
              color: gameLevel === '0001' ? "#ffffde" :'#999999' ,
              cursor:'pointer'
            
            }} 
            onClick={() => {
              setArr(['0100' , '0010', '0100'])
              setGameLevel('0001')}}
            
              >EASY</p>
          </div>
          <div style={{
         display:"flex",
         justifyContent:"center",
         alignItems:"center", 
         marginTop:-10,
         cursor:'pointer'
          }}>
            <h5 style={{   position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin:10,
            width: '90%',
            height: 60,
            // paddingTop:20,
            // paddingBottom:20,
            borderRadius:7,
            fontSize:22,
            // color: 'red',
            backgroundColor: "red",
            cursor:'pointer'
            // backgroundColor: 'linear-gradient(225deg, #77FFA8 0%, #FFE081 33%, #FFAD8E 68%, #A592FF 100%)'
          }}
          onClick={Play_Game}
            >
              PLAY
            </h5>
          </div>
        <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: 5, border: "3px solid rgb(68, 68, 68)", height: 60, borderRadius: 6, alignItems: "center", margin: 5 , width:'90%' }}>
            <div>
              <div><button style={button} onClick={() => setStakeValue(0.000001)}>-</button></div>
              <div><button style={button} onClick={() => {
                setStakeValue('0.00000001')
              }}>MIN</button></div>
            </div>
            <div>
              <p style={{ color: "#ffffff", fontWeight: "700", lineHeight: .5, textAlign: "center" }}>{stakeValue}</p>
              <p style={{ color: "rgb(153, 153, 153)", fontWeight: "700", lineHeight: .5, textAlign: "center" }}>$0.001 STAKE</p>
            </div>
            <div>
              <div> <button style={button} onClick={() => {
                setStakeValue('0.00000110')
              }}>+</button></div>
              <div> <button style={button} onClick={() => setStakeValue('0.00000110')}>MAX</button></div>
            </div>
          </div>
        </div>
        </div>
        <div style={{ width: '40vw', height: '80vh', backgroundColor: 'grey', display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <div style={{ backgroundColor: '#202020', width: '90%', height: '80%', }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

            </div>
            {
              arr.slice(0,4).map((e, i) => {
                return (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button style={(i + 1) % 3 === 0 ? grad1 : (i + 1) % 4 === 0 ? greenbox : blackbox1}
                      onClick={() => handaleclick(arr[i][0])}
                    >{(((i + 1) % 3 ===0) && show) && (arr[i][0] == 0 ? '😊' : '😡') }{(i + 1) % 4 ===0 && (arr[i][0] == 0 ? '😊' : '😡' ) }</button>
                    <button style={(i + 1) % 3 === 0 ? grad2 : (i + 1) % 4 === 0 ? greenbox : blackbox1} onClick={() => handaleclick(arr[i][1])}>{(((i + 1) % 3 ===0) && show) && (arr[i][1] == 0 ? '😊' : '😡')  }{(i + 1) % 4 ===0 && (arr[i][1] == 0 ? '😊' : '😡' ) }</button>
                    <button style={(i + 1) % 3 === 0 ? grad3 : (i + 1) % 4 === 0 ? greenbox : blackbox1} onClick={() => handaleclick(arr[i][2])}>{(((i + 1) % 3 ===0) && show) && (arr[i][2] == 0 ? '😊' : '😡')  }{(i + 1) % 4 ===0 && (arr[i][2] == 0 ? '😊' : '😡' ) }</button>
                    <button style={(i + 1) % 3 === 0 ? grad4 : (i + 1) % 4 === 0 ? greenbox : blackbox1} 
                    onClick={() => handaleclick(arr[i][3])}
                    >{(((i + 1) % 3 ===0) && show) && (arr[i][3] == 0 ? '😊' : '😡')  }{(i + 1) % 4 ===0 && (arr[i][3] == 0 ? '😊' : '😡' ) }</button>

                  </div>
                )
              })
            }

 <h1 style={{textAlign:"center"}}>{gameOverMassage}</h1>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

var grad1 = {
  cursor: 'pointer',
  width: 100, height: 100,
  borderWidth: 0,
  borderColor: 'transparent',
  backgroundSize: '400% 100%',
  backgroundPosition: '0% 0%',
  backgroundImage: 'linear-gradient(225deg, rgb(119, 255, 168) 0%, rgb(255, 224, 129) 32.81%, rgb(255, 173, 142) 68.22%, rgb(165, 146, 255) 100%)',
  margin: 5
}
var grad2 = {
  width: 100,
  height: 100,
  cursor: 'pointer',
  borderWidth: 0,
  borderColor: 'transparent',
  backgroundSize: '400% 100%',
  backgroundPosition: '25% 25%',
  backgroundImage: 'linear-gradient(225deg, rgb(119, 255, 168) 0%, rgb(255, 224, 129) 32.81%, rgb(255, 173, 142) 68.22%, rgb(165, 146, 255) 100%)',
  margin: 5
}
var grad3 = {
  width: 100,
  height: 100,
  cursor: 'pointer',
  borderWidth: 0,
  borderColor: 'transparent',
  backgroundSize: '400% 100%',
  backgroundPosition: '50% 50%',
  backgroundImage: 'linear-gradient(225deg, rgb(119, 255, 168) 0%, rgb(255, 224, 129) 32.81%, rgb(255, 173, 142) 68.22%, rgb(165, 146, 255) 100%)',
  margin: 5
}
var grad4 = {
  width: 100,
  height: 100,
  cursor: 'pointer',
  borderWidth: 0,
  borderColor: 'transparent',
  backgroundSize: '400% 100%',
  backgroundPosition: '75% 75%',
  backgroundImage: 'linear-gradient(225deg, rgb(119, 255, 168) 0%, rgb(255, 224, 129) 32.81%, rgb(255, 173, 142) 68.22%, rgb(165, 146, 255) 100%)',
  margin: 5
}
var blackbox1 = {
  width: 100,
  height: 100,
  opacity: 0.5,
  cursor: 'default',
  borderWidth: 2,
  borderColor: 'transparent',
  backgroundColor: 'rgb(68, 68, 68)',
  backgroundSize: '400% 100%',
  backgroundPosition: '0% 0%',
  margin: 5
}
var greenbox = {
  width: 100,
  height: 100,
  cursor: 'default',
  borderWidth: 2,
  borderColor: 'rgb(44, 63, 52)',
  backgroundSize: '400% 100%',
  backgroundPosition: '25% 25%',
  opacity: 1,
  backgroundColor: 'rgb(44, 63, 52)',
  margin: 5
}

const hardButton = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  textTransform: 'uppercase',
  backgroundColor: "#141414",
  color: "#999999",
  //  alignItems:"center"
}
var button = {
  backgroundColor: '#444444',
  color: "#bcbcbc",
  paddingRight: 12,
  paddingLeft: 12,
  // fontSize:12,
  width: 66,
  height: 31,
  display: "inline-block",
  fontSize: 16
  // width:'100%'

}