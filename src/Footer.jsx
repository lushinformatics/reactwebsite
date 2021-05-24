import React from 'react';

const Footer = () =>{
    const year = new Date().getFullYear();
    return (
        <>
            
            <footer className="w-100 bg_color text-center py-2">                
                    <p>CopyRight @ {year}, All Rights Reserved by  
                    <span className="text-primary"> Lush Informatics Pvt. Ltd.</span></p>
                
            </footer>
        </>
    );
}
export default Footer;