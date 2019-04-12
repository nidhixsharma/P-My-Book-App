import React, { Component } from 'react';
import BooksSectionPage from'./pages/booksSectionPage';
import PageNotFound from'../src/pages/pageNotFound';
import BookDetailPage from'./pages/bookDetailPage';
import {BrowserRouter ,Switch,Route} from 'react-router-dom';

class App extends Component {
    render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component ={BooksSectionPage} />
        <Route path ="/book/category/:categoryName" exact  render ={(props)=>{
        // let categoryName = props.match.params.categoryName;
        let {categoryName} = props.match.params;
        return <BooksSectionPage categoryName={categoryName} />
        }}/>
        <Route path ="/book/:bookID"  render={(props)=>
        {
          let {bookID} = props.match.params;
          return <BookDetailPage bookID={bookID} />
        }} />
        <Route component ={PageNotFound}/>
        </Switch>
        </BrowserRouter>
        );
    }
}

export default App;
