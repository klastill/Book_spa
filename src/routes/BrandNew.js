import axios from 'axios';
import React from 'react';
import Books from '../components/Books';
import './List.css';

class BrandNew extends React.Component {
  state = {
    isLoading: true,
    books: []
  };
  getBestList = async () => {
    const listURL = "https://cors-anywhere.herokuapp.com/http://www.aladin.co.kr/ttb/api/ItemList.aspx?";
    const ttb = "ttbkey=ttbgyb05011150001";
    let query = "&SearchTarget=Book&QueryType=ItemNewSpecial&MaxResults=50&Cover=Big&&output=js&Version=20131101&start=1";
    let url = listURL + ttb + query;
    const {data: {item}} = await axios.get(url);
    this.setState({books: item, isLoading: false});
  }
  componentDidMount() {
    this.getBestList();
  }
  render() {
    const {isLoading, books} = this.state;
    return (
      <section className="container ">
        {isLoading ?
        (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="books">
            {books.map(book => {
              return <Books key={book.isbn} cover={book.cover} title={book.title} author={book.author} link={book.link} description={book.description} />;
            })}
          </div>
        )}
      </section>
    )};
}

export default BrandNew;
