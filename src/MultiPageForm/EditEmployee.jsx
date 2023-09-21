import React, { useEffect, useState } from 'react';

const EditEmployee = (props) => {
   const [data, setData] = useState({
    firstName: "",
    lastName: ""
   })

   let inputChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
   }

   useEffect(() => {
      setData(props.data[props.index]);
   }, [props.index])

   let submitData=(e)=>{
    e.preventDefault();
    let t = [...props.data];
    if (props.index < 0) {
        t.push(data);
    }else{
        t[props.index] = data;
    }
    props.setData(-1);
    props.setData(t);
   }   

    return <form className='container mt-5' onSubmit={submitData}>
        <h1 className='mb-4'>CRUD OPERATION:</h1>
    <div class="mb-3">
      <label class="form-label">First Name</label>
      <input type="text" class="form-control" id="exampleInputEmail1" name='firstName' onChange={inputChange} value={data?.firstName}/>
    </div>
    <div class="mb-3">
      <label class="form-label">Last Name</label>
      <input type="text" class="form-control" name='lastName' onChange={inputChange} value={data?.lastName}/>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
}


export default EditEmployee;