import { useState } from 'react'
import axios from 'axios'

export const PostJob = ()=>{
    const [jobDetails,setJobDetails] = useState({
        title:"",
        company:"",
        location:"",
        description:"",
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
                    <input type="text" className="form-control" name="title" value={jobDetails.title} onChange={handleInput} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Company Name</label>
                    <input type="text" className="form-control" name="company" value={jobDetails.company} onChange={handleInput} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Location</label>
                    <input type="text" className="form-control" name="location" value={jobDetails.location} onChange={handleInput} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea type="text" className="form-control" rows="4" name="description" value={jobDetails.description} onChange={handleInput}></textarea>
                </div>
                <button type='submit' className='btn btn-success w-100'>Post Job</button>
             </form>
        </div>
    )
}