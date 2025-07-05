import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import file from '../assets/file.svg'
import axios from 'axios'

const Home = ()=>{
    const [jobs,setJobs] = useState([]);
    const [search,setSearch] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:5000/jobs")
        .then(res => setJobs(res.data))
        .catch(err=> console.error("failed to fetch jobs",err));
    },[]);
    const result = jobs.filter(n=>n.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="m-0">
            <div className="container-fluid">
                <div className="row justify-content-center">
                </div>
                <div>
                    <img src={file} alt="file" className="img-fluid"/>
                </div>
                <div className="col-md-10 d-flex gap-2 my-4 m-auto">
                    <input type="text" className="form-control fs-5 ps-4" placeholder="Search by title or company..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    {/* <button className="btn btn-primary" onClick={handleSearch}>Search</button> */}
                </div>
            </div>
            <div className="container my-5">
                <h2 className="mb-4 text-center">Latest Job Listings</h2>
                <div className="row">   
                    {result.map(job => (
                    <div className="col-md-4 mb-4" key={job.id}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{job.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
                                <p className="card-text">{job.location}</p>
                                <p className="card-text small">{job.description}</p>
                                <Link to={`/jobs/${job.id}`} className="btn btn-outline-primary w-100">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>        
        </div>    
    )
}
export default Home