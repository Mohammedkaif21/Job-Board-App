import { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router'


export const PostJob = ()=>{
    const navigate = useNavigate();
    const [jobDetails,setJobDetails] = useState({
        title:"",
        company:"",
        experience:"",
        location:"",
        description:"",
        skillRequired:""
    })
    const handleInput = (e)=>{
        const { name,value } = e.target;
        setJobDetails((prev)=>({
            ...prev,
            [name]: value,
        }));

    }
    const submitData = async(e)=>{
        
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/jobs',jobDetails);
            alert("Job posted successfully")
            navigate('/')
        }catch(err){
            console.log(err);
            alert("Something went wrong")
        }
    }

    return (
        <div className="container my-5">
             <h2 className="mb-5 text-center">Post a New Job</h2>
             <form className="col-md-8 m-auto border p-5 rounded shadow" onSubmit={submitData}>
                <div className='mb-3'>
                    <label className='form-label'>Job Title</label>
                    <input type="text" placeholder='Enter Title' className="form-control" name="title" value={jobDetails.title} onChange={handleInput} required/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Company Name</label>
                    <input type="text" placeholder='Enter Company Name' className="form-control" name="company" value={jobDetails.company} onChange={handleInput} required/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Experience</label>
                    <input type="text" placeholder='Enter Experience' className="form-control" name="experience" value={jobDetails.experience} onChange={handleInput} required/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Location</label>
                    <input type="text" placeholder='Enter Company Location' className="form-control" name="location" value={jobDetails.location} onChange={handleInput} required/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea type="text" placeholder='Enter Description' className="form-control" rows="2" name="description" value={jobDetails.description} onChange={handleInput}></textarea>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Skill-required</label>
                    <textarea type="text" placeholder='Enter Skill Requirment' className="form-control" rows="2" name="skillRequired" value={jobDetails.skillRequired} onChange={handleInput}></textarea>
                </div>
                <button type="button" className="btn btn-success me-4 mt-4" onClick={()=> navigate(-1)}>Back</button>
                <button type='submit' className='btn btn-success mt-4'>Post Job</button>
             </form>
        </div>
    )
}