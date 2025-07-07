import axios from "axios";
import { useState } from "react";
import { useParams,useNavigate } from "react-router";

export const ApplyJob =()=>{
    const {id} = useParams();
    const navigate = useNavigate();
    const [applyData,setApplyData] = useState({
        name:"",
        email:"",
        resume:"",
        phone:"",
        message:""
    })
    const changeData = (e)=>{
        const { name,value } = e.target;
        setApplyData((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const submitData = async(e) =>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/apply",{
                id,
                ...applyData
            })
            alert("applied successfully")
            navigate('/');
            setApplyData({
                name:"",
                email:"",
                resume:"",
                phone:"",
                message:""
            })
        }catch(err){
            console.log(err);
            alert("fail to apply")
        }
    }

    return (
        <div className="container my-5  pt-4">
            <h2 className="text-center mb-4">Apply for Job</h2>
            <form className="col-md-8 m-auto border p-4 rounded shadow" onSubmit={submitData}>
                <div className="mb-4">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" placeholder="Enter Full Name" className="form-control" value={applyData.name} onChange={changeData} required/>
                </div>
                <div className="mb-4">
                    <label className="form-label">Email</label>
                    <input type="text" name="email" placeholder="Enter Email" className="form-control" value={applyData.email} onChange={changeData} required/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Resume</label>
                    <input type="text" placeholder="Enter Resume Url" class="form-control" name="resume" value={applyData.resume} onChange={changeData} required/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Phone no</label>
                    <input type="text" placeholder="Enter Phone No" class="form-control" name="phone" value={applyData.phone} onChange={changeData} required/>
                </div>
                <div className="mb-4">
                    <label className="form-label">Cover Letter</label>
                    <textarea className="form-control" placeholder="Enter Message" name="message" value={applyData.message} onChange={changeData} ></textarea>
                </div>
                <button type="button" className="btn btn-success ms-1 me-4 " onClick={()=> navigate(-1)}>Back</button>
                <button type="submit" className="btn btn-success ">Submit</button>
            </form>
        </div>
    )
}