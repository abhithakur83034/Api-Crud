import React, { useEffect, useState } from "react";
import {Link,useParams} from 'react-router-dom';


export default function Edit(){
    const {id} = useParams()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [mobile,setMobile] = useState('')
    const [password,setPassword] = useState('')

    let url = 'http://localhost:5000/users/'+id

    useEffect(()=>{
        fetch (url).then((response)=>{
            return response.json()
        }).then((data)=>{
                setName(data.name)
                setEmail(data.email)
                setMobile(data.mobile)
                setPassword(data.password)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    let hSubmit=(e)=>{
        e.preventDefault()
 
        let newObj = {name,email,mobile,password}
 
        let promise = fetch(url,{
         headers:{
             'Content-Type':'application/json'
         },
         method:"PUT",
         body:JSON.stringify(newObj)
        })
        promise.then((response)=>{
         if(response.ok){
             alert('data updated successfully...')
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
        <h1>Update Your Data Here.....</h1>
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
                    <input type="submit" value="UPDATE"  className="btn btn-outline-info" />
                        <br />
                        <br />
                    <div className="btn btn-outline-info">
                        <Link to="/">Show</Link>
                    </div>

                </div>
                <div className="col-sm-4 bg-white" ></div>
            </div>
        </div>

        </form>

        </>
    )
}