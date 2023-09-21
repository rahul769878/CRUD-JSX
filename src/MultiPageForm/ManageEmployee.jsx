import React, { useState } from 'react';
import DisplayEmployee from './DisplayEmployee';
import EditEmployee from './EditEmployee';

const ManageEmployee = () => {
   const [data, setData] = useState([]);
   const [index, setIndex] = useState(-1);

   let deleteItem=(index)=>{
     let t = [...data];
     t.splice(index,1);
     setData(t);
   }

    return <div>
        <EditEmployee data={data} setData={setData}  index={index}/>
        <DisplayEmployee data={data} deleteItem={deleteItem} index={index} setIndex={setIndex}/>
    </div>;
}


export default ManageEmployee;