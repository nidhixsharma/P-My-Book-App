import React ,{Component} from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import BookDetail from '../components/bookDetail/bookDetail';
import axios from 'axios';

class BookDetailPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            book:{},
            isLoading:true,
        }

    }

    componentDidMount()
    {
        axios.get("https://www.googleapis.com/books/v1/volumes/" +this.props.bookID )
         .then((response) =>
           {               
           this.setState(
               {
                   isLoading:false,
                   book:response.data
               }
           )
        })
    }
   
    render()
    {
        return(
            <div className="has-fixed-footer">
                <Header />
                {this.state.isLoading?<p>Is Loading...</p>:
                <BookDetail book={this.state.book}/>
            }
          <Footer />
            </div>
           
    
        )

    }
    
}
export default BookDetailPage;