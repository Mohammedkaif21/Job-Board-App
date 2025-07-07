import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import axios from 'axios'

const JobDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [job, setJobs] = useState(null);

    useEffect(() => {
        
        axios.get(`http://localhost:5000/jobs/${id}`)
            .then(res => setJobs(res.data))
            .catch(err => {
                console.log(err);
                setJobs(undefined);
            });
    }, [id]);
    if (!job) return <p className="container mt-4 text-danger text-center">Job not Found</p>;

    return (
        <div className="container">
            <div className="card-body my-5">
                <h2 className="card-title">{job.title}</h2>
                <h4 className="card-subtitle mb-2 text-muted">{job.company}</h4>
                <p className="card-text pt-2">Experience: {job.experience}</p>
                <p className="card-text">Lacation: {job.location}</p>
                <p className="card-text ">Description: {job.description}</p>
                <p className="card-text">Skill Required: {job.skillRequired}</p>
                <button onClick={() => navigate(`/apply-job/${job.id}`)} className="btn btn-success w-25">Apply Now</button>
            </div>
        </div>
    )
};
export default JobDetails;
