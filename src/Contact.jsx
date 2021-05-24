import React, { useState } from 'react';

const Contact = () => {

    const[name, setName] = useState({
        fname: "",
        phone: "",
        email: "",
        msg: "",
    });

    const inputEvent = (event) => {
        const {name, value} = event.target;

        setName((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        });
    };
    const formSubmit = (e) =>{
        e.preventDefault();
    };
    const getData = () =>{
        alert(`Full Name : ${name.fname} Phone Number : ${name.phone} Email : ${name.email} Massege : ${name.msg}`);
    }

    return (
        <>
        <div className="container-fluid contact">
            <div className="row">
                <div className="col-10 m-auto">
                    <div className="my-5 text-center"><h1>Contact Us</h1></div>
                    <div className="col-md-6 col-10 m-auto">
                    <from onSubmit={formSubmit}>
                        <div className="row">
                            <div class="mb-3">                            
                            <input type="text" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name="fname"
                            value={name.fname}
                            onChange={inputEvent}
                            placeholder="Enter your Name"
                            />
                            </div>
                            <div class="mb-3">                          
                            <input type="phone" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name="phone"
                            value={name.phone}
                            onChange={inputEvent}
                            placeholder="Mobile Number"
                            />
                            </div>
                            <div class="mb-3">                          
                            <input type="email" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name="email"
                            value={name.email}
                            onChange={inputEvent}
                            placeholder="Email@example.com"                                
                            />
                            </div>                            
                            <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Massege</label>
                            <textarea class="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3"
                            name="msg"
                            value={name.msg}
                            onChange={inputEvent} ></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit" onClick={getData}>Submit</button>
                            </div>
                        </div>
                        </from>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}
export default Contact;