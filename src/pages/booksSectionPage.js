import React, {Component} from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import BooksSection from '../components/booksSection/booksSection';
import axios from 'axios';
class BooksSectionPage extends  Component{
    
    constructor(props)
    {
        super(props);
        this.state ={
            books:[],
            isLoading: true,
        }
    }

    componentDidMount()
        {
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.props.categoryName + "&key=AIzaSyDcOTy04r2yYYDBymT2m_f5EYCX5WKUbyU")
                .then((response)=>
                {
                  this.setState(
                  {
                      books:response.data.items,
                      isLoading : false,

                  }
                )
        })
    }
    
    componentDidUpdate(previousProps)
    {
if(previousProps.categoryName !==this.props.categoryName)
{
    this.setState(
        {
            isLoading:true,
        })
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.props.categoryName + "&key=AIzaSyDcOTy04r2yYYDBymT2m_f5EYCX5WKUbyU")
        .then((response) => {
            this.setState(
                {
                    books: response.data.items,
                    isLoading: false,

                }
            )
        })


}
    }
    render()
    {            
        
        return (
                <div className="has-fixed-footer">
                    <Header />
                    {this.state.isLoading?<p>Loading..</p>
                    :
                    <BooksSection title={this.props.categoryName} books={this.state.books} />}
                    <Footer />
                </div>


            )
        }
       
}


BooksSectionPage.defaultProps =
{
    categoryName:"HTML",
}
export default BooksSectionPage;