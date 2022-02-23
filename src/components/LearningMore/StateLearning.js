import React from 'react';
import {useState} from 'react';


const orders = [100, 200, 300];


function StateLearning() {
    
    const [counter, setcounter] = useState(()=>{
        const total = orders.reduce((total, cur) => total + cur);
        console.log(total);
        return total;
    });


    const handleCounterIncrese = () => {
        setcounter(counter + 1);
    }

    const handleCounterDecrease = () => {
        setcounter(counter - 1);
    }

    const handleResetCounter = () => {
        setcounter(0);
    }

    // SetState với Callback
    const handlesetStateCallback = () => {
        setcounter( prevState => prevState + 1);
        setcounter( prevState => prevState + 1);
        setcounter( prevState => prevState + 1);
    }

    // Chuyền Callback vào trong initialState thì nó sẽ chỉ lấy ra giá trị return để tính toán thôi.
    const handlesetInitialStateCallback = () => {
        setcounter(counter + 1);
    }

    const [info, setInfo] = useState ({
        name: 'Nguyen Van A',
        age: 18,
        address: 'HCM, VN'
    })

    const handleUpdate = () => {
        setInfo (prev => ({
            ...prev,
            bio: "Love purple"
        }));

    }

    return (
    <div className="App">
        <h2>{counter}</h2>
        <button className="btn btn-reset" onClick={handleCounterIncrese}>Increase</button>
        <button className="btn btn-reset" onClick={handleCounterDecrease}>Decrease</button>
        <button className="btn btn-reset" onClick={handleResetCounter}>Reset</button>
        <button className="btn btn-reset" onClick={handlesetStateCallback}>setState + Callback</button>
        <button className="btn btn-reset" onClick={handlesetInitialStateCallback}>initial + Callback</button>
    <div className="App" style={{padding: 20}}>
        <h1>{JSON.stringify(info)}</h1>
        <button onClick={handleUpdate}>Update</button>

    </div>
    </div>
  )
}

export default StateLearning;
