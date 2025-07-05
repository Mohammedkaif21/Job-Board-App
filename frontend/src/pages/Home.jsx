import { useState } from "react";
import { Link } from "react-router";
import file from '../assets/file.svg'

const Home = ()=>{
    const [count,serCount] = useState(0);
    const dummyJob =[
        {
            id:1,
            title: 'Frontend Developer',
            company: 'Matellio',
            location: 'Jaipur, India',
            description: 'React, Angular, Bootstrap, Css'
        },
        {
            id: 2,
            title: 'Full Stack Intern',
            company: 'Microlent',
            location: 'Jodhpur, India',
            description: 'React, Node, PostgreSQL',
        },
        {
            id: 3,
            title: 'Backend Developer',
            company: 'TechPoint',
            location: 'Jodhpur, India',
            description: 'Node.js, Express, MongoDB',
        },
        {
            id: 4,
            title: 'Php Developer',
            company: 'TechPoint',
            location: 'Jodhpur, India',
            description: 'Php, Laravel',
        },
        {
            id: 5,
            title: 'QA',
            company: 'Matellio',
            location: 'Jodhpur, India',
            description: 'Unit testing, Smoke Testing',
        }
    ]
    return (
        <div className="m-0">
            <div className="container-fluid">
                <div className="row justify-content-center">
                </div>
                <div>
                    <img src={file} alt="file" className="img-fluid"/>
                </div>
                <div className="col-md-10 d-flex gap-2 my-4 m-auto">
                    <input type="text" className="form-control fs-5 ps-4" placeholder="Search by title or company..."/>
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>
            <div className="container my-5">
                <h2 className="mb-4 text-center">Latest Job Listings</h2>
                <div className="row">   
                    {dummyJob.map((job) => (
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