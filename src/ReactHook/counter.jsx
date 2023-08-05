import React from 'react'
import { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    const[timer,updatedTimer]=useState();
    const[disabledAutoInc,setDisabledAutoInc]=useState(false);
    const[disabledAutoDec,setDisabledAutoDec]=useState(false);
   //let interval = 0;

    let incFunc = () => {
        setCount(count + 1)
    }

    let decFunc = () => {
        // let value = count;
        (count === 0) ? setCount(0) : setCount(count - 1);
    }
    let resetFunc=()=>{
        setCount(0);
    }
    let autoIncFunc=()=>{
        clearInterval(timer);
        const timeId =setInterval(function(){
            setCount((c)=> c + 1);
        },500);
        updatedTimer(timeId);
        setDisabledAutoInc(true);
        //setDisabled(true);
    }
    let autoDecFunc = () => {
        clearInterval(timer);

        /*const timeId = setInterval(function(){ setCount((c)=> c > 0 ? c - 1 : 0),500)
                setCount((c)=> c > 0 ? c-1 : 0),
        500);*/
        const timeId = setInterval(() => setCount((c)=> c > 0 ? c - 1 : 0),500);
        console.log('nn',count);
        //(count > 0) ? setCount((c)=> c - 1) : setCount(0),500);
       
        updatedTimer(timeId)
        //console.log('tttt',timeId);
        //setDisabled(true);
        setDisabledAutoDec(true);
    }
    let stopFunc = ()=>{
        clearInterval(timer);
        setDisabledAutoInc(false);
        setDisabledAutoDec(false);
    }
    //console.log(!disabledAutoInc && !disabledAutoDec );
    return (
        <div className='main-div'>
            <h1 className='nav-div'>counter</h1>
            <h1 className='count_div' >{count}</h1>
            <div className='btn_div'>
                <button className='dec_div'  onClick={decFunc}>Decrement</button>
                <button className='res_div' onClick={resetFunc} >Reset</button>
                <button className='inc_div' onClick={incFunc}>Increment</button>
                <button className='autoInc_div' disabled={disabledAutoInc || disabledAutoDec} onClick={autoIncFunc} >AutoInc</button>
                <button className='stop_div' disabled={!disabledAutoInc && !disabledAutoDec } onClick={stopFunc} >Stop</button>
                <button className='autoDec_div' disabled={disabledAutoInc || disabledAutoDec} onClick={autoDecFunc}>AutoDec</button>
                    </div>

        </div>
    )
}

export default Counter