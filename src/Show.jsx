import React, { useEffect, useState } from "react";
import {Link,useNavigate} from 'react-router-dom';


export default function Show(){
    const navigate = useNavigate()
    const [data,setData] = useState([])


    useEffect(()=>{
        let url = 'http://localhost:5000/users'
        fetch (url).then((response)=>{
            return response.json()
        }).then((data)=>{
                setData(data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    let hDel=(id)=>{
        let url = 'http://localhost:5000/users/'+id
        if(window.confirm("are you sure want to delete the data"))
        {
            let promise=fetch(url,{
                method:"DELETE"
            })
            promise.then((response)=>{
                if(response.ok){
                    alert('data deleted successfully....')
                }
            }).then((data)=>{
                window.location.reload()
            }).catch((error)=>{
                console.log(error)
            })
        }
    }

   let hEdit = (id)=>{
    navigate("/Edit/"+id)
   }
    return(
        <>



            <h1>Show Your Data Here....</h1>
            <hr />

            <table className="table table=borderd">
                <tr>
                <th>I'D</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>MOBILE</th>
                <th>PASSWORD</th>
                <th>ACTION</th>
                </tr>
                {data.map((data,index)=>{
                    return(
                        <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.mobile}</td>
                                <td>{data.password}</td>
                                <td className="btn btn-outline-success"onClick={()=>{hEdit(data.id)}} >Edit</td>
                                <td  className="btn btn-outline-success" onClick={()=>{hDel(data.id)}}>Delete</td>
                        </tr>
                    )
                })}
            </table>



                    {/* <select >
                        {data.map((data,index)=>{
                            return(
                                <option> {data.id} </option>
                            )
                        })}
                    </select> */}



            <div className="btn btn-outline-info">
                        <Link to="/">Add Data</Link>
                    </div>
        </>
    )
}