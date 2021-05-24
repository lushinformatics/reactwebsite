import React from 'react';
import { NavLink } from 'react-router-dom';


const Comman = (props) => {
    return (
        <>
        <section className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 m-auto">
                    <div className="row">
                        <div className="col-lg-6 pt-5 lt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>{props.title} <br></br> <strong className="brand-name">{props.brandname}</strong></h1>
                            <h2 className="my-3"> {props.disc}</h2>
                            <div className="mt-3">
                                <NavLink to={props.butLink} class="btn button_started" >{props.buttonCon}</NavLink>
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 header-img mt-sm-5 mt-lg-0">
                            <img src={props.imgSrc} className="img-fluid animation" alt="Get Started" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    );

}
export default Comman;
