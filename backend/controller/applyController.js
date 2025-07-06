import fs from 'fs'

const applyFile = './data/application.js'

const getApplyJobs = ()=>{
    if(!fs.existsSync(applyFile)){
        return [];
    }
    return JSON.parse(fs.readFileSync(applyFile,'utf-8'));
}
const saveApplyJobs =(data)=>{
    fs.writeFileSync(applyFile,JSON.stringify(data,null,2))
}

export const createApplication =(req,res)=>{
    const { id,name,email,resume,phone,message } = req.body;

    const applications = getApplyJobs();
    const newApplications = {
        id: applications.length+1,
        jodId:parseInt(id),
        name,
        email,
        resume,
        phone,
        message
    }
    applications.push(newApplications);
    saveApplyJobs(applications);
    res.json({message:'submitted successfully',data:newApplications});
}