import axios from "axios";
import { useState, useEffect } from "react";
import  Table  from "react-bootstrap/Table";

const Display=()=>{
    const [mydata, setMydata]= useState([]);
    const loadData=()=>{
        let api="http://localhost:3000/student";
        axios.get(api).then((res)=>{
            console.log(res.data);
            setMydata(res.data)
        })
    }
    useEffect(()=>{
        loadData();
    }, [])
    const ans=mydata.map((key)=>{
return(
    <>
        <tr>
                 
  
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
        </tr>
    </>
)
    })
    return(
        <>
        <center>

<h4 style={{marginTop:"30px"}}> Display Data</h4>
<Table striped bordered hover>
    <thead>
    <tr>
        <th>Rollno</th>
        <th>Name</th>
        <th>City</th>
        <th>Fees</th>
        </tr>
    </thead>
    <tbody>
        {ans}
    </tbody>
</Table>
        </center>
        </>
    )
}
export default Display;