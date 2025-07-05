import fs from 'fs'

const jobFile= './data/job.json';

const getJobs = ()=>{
    if(!fs.existsSync(jobFile)){
        return [];
    }
    return JSON.parse(fs.readFileSync(jobFile,'utf-8'));
}
const saveJobs = (jobs)=>{
    fs.writeFileSync(jobFile,JSON.stringify(jobs,null,2))
}

export const createJobs = (req,res)=>{
    const jobs = getJobs();
    let newId
    if(jobs.length > 0){
        const data = jobs[jobs.length-1]
        newId = data.id+1;
    }else{
    newId = 1;
    }
    const newJob = {id:newId,...req.body};
    jobs.push(newJob);
    saveJobs(jobs);
    res.json(newJob);
};

export const getAllJobs = (req, res) => {
  const jobs = getJobs();
  res.json(jobs);
};

export const getJobById = (req,res)=>{
    const jobs = getJobs();
    const jobList = jobs.find(e => e.id===parseInt(req.params.id));
    if(jobList){
        res.json(jobList);
    }else{
        res.status(404).json({message:'Job not Found'})
    }
}

