import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export default function Get() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://663b290ffee6744a6ea08b0a.mockapi.io/student')
        .then(res => setData(res.data))
    },[])
  const remove = async(value) => {
    const id = value
    console.log(id)
    const api = `https://663b290ffee6744a6ea08b0a.mockapi.io/student/${id}`
    console.log(api)
    await axios.delete(api)
    await axios.get('https://663b290ffee6744a6ea08b0a.mockapi.io/student')
    .then(res => setData(res.data))
  }
  const nav = useNavigate()
  const change = (value) => {
    const id =value
    console.log(id)
    nav(`/update/${id}`)
  }
  return (
    <div>
        {/* <table className='table table-stripped table-hover'>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Date of birth</th>
                    <th>Subject</th>
                    <th>Address</th>
                    <th>Action</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
               
                {data.map((items, index) => (
                <tr key={index} >
                    <td>{index+1} </td>
                    <td>{items.Student} </td>
                    <td>{items.sex} </td>
                    <td>{items.dateofbirth}</td>
                    <td>{items.subject} </td>
                    <td>{items.Address} </td>
                    
                    
                    <td>
                        <button className='btn btn-primary'>Edit</button>
                    </td>
                    <td>
                        <button  className='btn btn-danger'>Delete</button>
                    </td>
                </tr>   
                ))}
            </tbody>
        </table> */}
        <table className='table table-stripped table-hover'>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>Phone</th>
                    
                    <th>Action</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
               
                {data.map((items, index) => (
                <tr key={index} >
                    <td>{index+1} </td>
                    <td>{items.name} </td>
                    <td>{items.email} </td>
                    <td>{items.phone}</td>
                  
                    <td>
                      <a href="/post">  <button className='btn btn-primary' onClick={()=>change(items.id)} >update</button></a>
                    </td>
                    <td>
                        <button  className='btn btn-danger'  onClick={()=> remove(items.id)}>Delete</button>
                    </td>
                </tr>   
                ))}
            </tbody>
        </table>

    </div>
  )
}

export function Post(){
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const obj = {
        name: name,
        email: mail,
        phone: phone
    }
    const nav = useNavigate()
    const Add = () =>{
        axios.post('https://663b290ffee6744a6ea08b0a.mockapi.io/student', obj)
        nav('/')
        
    }
    return(
        <div className='container-lg bg-info'>
            <div className=''>
                
            <label htmlFor=""  className='form-label'>Name</label><br/>
            <input type="text" className='form-input' onChange={(e) => setName(e.target.value)}/><br/>
            <label htmlFor="" className='form-label'>eMail</label><br/>
            <input type='mail' className='form-input' onChange={(e)=> setMail(e.target.value)} /><br/>
            <label htmlFor="" className='form-label'>Phone</label><br/>
            <input type='number' className='form-input' onChange={(e)=> setPhone(e.target.value)} /><br/>
            <button className='btn btn-success' onClick={Add}>
                Submit
            </button>
            
            </div>
        </div>
    )
}
export const Update = () => {
        const [name, setName] = useState('')
        const [mail, setMail] = useState('')
        const [phone, setPhone] = useState('') 
        const {id} = useParams()
        console.log(id)
        const api = `https://663b290ffee6744a6ea08b0a.mockapi.io/student/${id}`
        useEffect(() => {
            axios.get(api)
            .then(res => {
                console.log(res.data)
                setName(res.data.name)
                setMail(res.data.email)
                setPhone(res.data.phone)
            })
        },[]) 
        const obj = {
            name: name,
            email: mail,
            phone: phone
        }
        const nav = useNavigate()
        console.log(name, phone, mail)   
        const update = async() => {
           await axios.put(api,obj)
           await nav('/')
        }
    return(
        <div className='container-lg bg-warning'>
            <div className=''>
                
            <label htmlFor=""  className='form-label'>Name</label><br/>
            <input type="text" className='form-input' onChange={(e) => setName(e.target.value)} value={name}/><br/>
            <label htmlFor="" className='form-label'>eMail</label><br/>
            <input type='mail' className='form-input' onChange={(e)=> setMail(e.target.value)} value={mail} /><br/>
            <label htmlFor="" className='form-label'>Phone</label><br/>
            <input type='number' className='form-input' onChange={(e)=> setPhone(e.target.value)} value={phone} /><br/>
            <button className='btn btn-success' onClick={update} >
                Submit
            </button>
            
            </div>
        </div>
    )
}
       
