import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import file from '/Screenshot.png'
import axios from 'axios'
import { MdOutlineCancel } from "react-icons/md";
import { ApplyJob } from "./ApplyJob";

const Home = ()=>{
    const [jobs,setJobs] = useState([]);
    const [search,setSearch] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:5000/jobs")
        .then(res => setJobs(res.data))
        .catch(err=> console.error("failed to fetch jobs",err));
    },[]);
    const result = jobs.filter(n=>n.title.toLowerCase().includes(search.toLowerCase()));
    if (result.length < 0) return ;
    return (
        <div className="m-0">
            <div className="container-fluid">
                <div className="row justify-content-center">
                </div>
                <div className="position-relative">
                    <img src={file} alt="file" className="img-flui w-100"/>
                    <div className="position-relative banner-quote">
                        
                    </div>
                </div>
                <div className="col-md-10 d-flex gap-2 my-4 m-auto position-relative">
                    <input type="text" className="form-control fs-5 ps-4" placeholder="Search by title or company..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    <MdOutlineCancel onClick={()=> setSearch("")} className="position-absolute fs-2 cancel-btn"/>
                </div>
            </div>
            <div className="container my-5">
                <h2 className="mb-4 text-center">Latest Job Listings</h2>
                <div className="row">   
                    {result.length === 0 ?(
                        <p className="container mt-4 text-center">Job not Found</p>
                    ):(
                    result.map(job => (
                    <div className="col-md-4 mb-4" key={job.id}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body align-items-baseline">
                                <h5 className="card-title">{job.title}</h5>
                                <h6 className="card-subtitle my-2 text-muted">{job.company}</h6>
                                <p className="card-text mb-1">{job.location}</p>
                                <p className="card-text ">{job.description.substring(0,30)}....</p>
                                <div className="">
                                    <Link to={`/jobs/${job.id}`} className="btn btn-outline-primary me-3 ">View Details</Link>
                                    <Link to={`/apply-job/${job.id}`} className="btn btn-outline-primary">Apply Now</Link>
                                </div>   
                            </div>
                        </div>
                    </div>)
                    ))}
                </div>
            </div>        
        </div>    
    )
}
export default Home