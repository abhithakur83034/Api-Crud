import React, { useState } from "react";
import {Link} from 'react-router-dom';

export default function Create(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [mobile,setMobile] = useState('')
    const [password,setPassword] = useState('')

    let hSubmit=(e)=>{
       e.preventDefault()


       let url='http://localhost:5000/users'
       let newObj = {name,email,mobile,password}

       let promise = fetch(url,{
        headers:{
            'Content-Type':'application/json'
        },
        method:"POST",
        body:JSON.stringify(newObj)
       })
       promise.then((response)=>{
        if(response.ok){
            alert('data added successfully...')
        }
       }).then((data)=>{
        setName('')
        setEmail('')
        setMobile('')
        setPassword('')
       }).catch((error)=>{
        console.log(error)
       })
    }

    return(
        <>
        <h1>Create Your Data Here</h1>
        <hr />


        
        <form onSubmit={hSubmit}>

        <div className="container">
            <div className="row">
                <div className="col-sm-4 bg-white" ></div>
                <div className="col-sm-4 bg-light" >
                    <p>NAME : <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} className="form-control"/></p>
                    <p>EMAIL : <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} className="form-control"/></p>
                    <p>MOBILE : <input type="number" onChange={(e)=>{setMobile(e.target.value)}} value={mobile} className="form-control"/></p>
                    <p>PASSWORD : <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} className="form-control"/></p>
                    <input type="submit" value="SAVE"  className="btn btn-outline-info" />
                        <br />
                        <br />
                    <div className="btn btn-outline-info">
                        <Link to="Show">SHOW</Link>
                    </div>

                </div>
                <div className="col-sm-4 bg-white" ></div>
            </div>
        </div>

        </form>



        </>

    )
}