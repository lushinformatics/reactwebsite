import React from 'react';
import Card from './Card';
import Cdata from './Cdata';

const Services = () => {
    return (
        <>
        <div className="container-fluid my-5">           
            <div className="row">
                <div className="col-10 m-auto">
                    <div className="row gy-4">
                        <div className="my-3 text-center"> 
                        <h2>Services</h2> 
                        </div>                       
                        {
                            Cdata.map((val, ind)=>{
                                return <Card
                                    id={ind}
                                    key={ind}
                                    title={val.title}
                                    imgSrc={val.imgSrc}
                                />
                            })
                        }                      

                    </div>
                </div>
            </div>
        </div>
        </>
    );

}
export default Services;