import React, { useState } from 'react'

function AddItemList() {
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([])
    function addActivity() {
        setListData((listdata) => {
            const updatedList = [...listData, activity]
            console.log(listData);
            console.log(updatedList);
            setActivity('')
            return updatedList
        })
        
    }

    function removeActivity(i){
        const updatedListData = listData.filter((elem, id) => {
            return i!= id;
        })
        setListData(updatedListData);
    }


  return (    
        <>
        <div className='container'>
            <div className='header'><b>Item </b></div>
            <input className='inputStyle' type='text' placeholder='Add Item' value={activity}
            onChange={(e) => setActivity(e.target.value)}/>
            <button onClick={addActivity} className='btn'><b>Add</b></button>
            <p className='list-heading'><b>Your Items</b></p>
            {listData!=[] && listData.map((data, i) => {
                return(
                    <p key={i}> 
                        <div className='listData'>{data}</div>
                        <span className='btn-position'><button onClick={() => removeActivity(i)}>Remove</button></span>
                    </p>
                )
            })}

        </div>
    </>
  )
}

export default AddItemList