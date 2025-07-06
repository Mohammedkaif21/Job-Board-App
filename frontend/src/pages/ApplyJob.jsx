import { useState } from "react";


export const ApplyJob =()=>{
    const [count,setCount] = useState(0)

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Apply for Job</h2>
            <form className="col-md-8 m-auto border p-4 rounded shadow">
                <div className="mb-4">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" />
                </div>
                <div className="mb-4">
                    <label className="form-label">Email</label>
                    <input type="text" name="email" className="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Resume</label>
                    <input class="form-control" type="file"/>
                </div>

                <div className="mb-4">
                    <label className="form-label">Cover Letter</label>
                    <textarea className="form-control" name="message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit Application</button>
            </form>
        </div>
    )
}