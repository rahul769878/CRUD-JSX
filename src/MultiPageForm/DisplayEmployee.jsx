import React from 'react';

const DisplayEmployee = (props) => {
    return  <table className='container mt-5'>
      {props.data.map((item,index)=>{
        return <tr>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
           <td><button type="button" class="btn btn-danger" onClick={()=>{props.deleteItem(index)}}>Delete</button></td>
            <td><button type="button" class="btn btn-success" onClick={()=>{props.setIndex(index)}}>Edit</button></td>
        </tr>
      })}
    </table>
}



export default DisplayEmployee;