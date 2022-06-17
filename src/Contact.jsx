import React,{useState} from "react";

const Contact = ()=>{
    const [data, setData] = useState({
        fullname:"",
        Phone:"",
        email:"",
        msg:"",
    });
    const formSubmit = (ev)=>{
        ev.preventDefault();
        alert(
            `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`
        );
    }
    const InputEvent = (e)=>{
        const {name,value} = e.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            };
        });
    }
    return <>
        <div className="my-5">
            <h1 className="text-center"> Contact US </h1>
        </div>
        <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
                <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" name="fullname" value={data.fullname} onChange={InputEvent} />
                    </div><div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Phone</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Mobile number" name="phone" value={data.phone} onChange={InputEvent}/>
                    </div><div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={data.email} onChange={InputEvent}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-outline-primary" type="submit">Submit form</button>
                    </div>
            </form>
            </div>
            </div>
        </div>
    </>
}
export default Contact;