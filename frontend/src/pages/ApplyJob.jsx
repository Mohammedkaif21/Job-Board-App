import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";


export const ApplyJob =()=>{
    const {id} = useParams();
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
        <div className="container my-5">
            <h2 className="text-center mb-4">Apply for Job</h2>
            <form className="col-md-8 m-auto border p-4 rounded shadow" onSubmit={submitData}>
                <div className="mb-4">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" value={applyData.name} onChange={changeData}/>
                </div>
                <div className="mb-4">
                    <label className="form-label">Email</label>
                    <input type="text" name="email" className="form-control" value={applyData.email} onChange={changeData}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Resume</label>
                    <input type="file" class="form-control" name="resume" value={applyData.resume} onChange={changeData}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Phone no</label>
                    <input type="text" class="form-control" name="phone" value={applyData.phone} onChange={changeData}/>
                </div>
                <div className="mb-4">
                    <label className="form-label">Cover Letter</label>
                    <textarea className="form-control" name="message" value={applyData.message} onChange={changeData}></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit Application</button>
            </form>
        </div>
    )
}