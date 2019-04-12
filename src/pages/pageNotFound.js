import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

let PageNotFound =(props)=>
{
    return(
        <div className ="has-fixed-footer">
            <Header />
            <section id="page-not-found">
                <div className="container">
                    <p>Page Not Found..</p>
                </div>
            </section>
            <Footer />
        </div>
        

    )
}
export default PageNotFound;