import axios from 'axios';
import React from 'react';
import Books from '../components/Books';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    book: {}
  };
  getBestList = async () => {
    const listURL = "/ttb/api/ItemList.aspx?";
    const ttb = "ttbkey=ttbgyb05011150001";
    let query = "&SearchTarget=Book&QueryType=BestSeller&MaxResults=50&Cover=Big&&output=js&Version=20131101&start=1";
    let url = listURL + ttb + query;
    const {data: {item}} = await axios.get(url);
    const today = new Date();
    const date = today.getDate();
    let rn = date * 11;
    while (rn > 49) {
      rn = Math.floor(rn * 3 / 5);
    }
    this.setState({book: item[rn], isLoading: false});
  }
  componentDidMount() {
    this.getBestList();
  }
  render() {
    const {isLoading, book} = this.state;
    return (
      <section className="container ">
        {isLoading ?
        (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
        <div className="main">
          <span><h1>오늘의 추천 도서</h1></span>
          <div className="recommend">
            <Books key={book.isbn} cover={book.cover} title={book.title} author={book.author} link={book.link} description={book.description} />
          </div>
        </div>
          
        )}
      </section>
    )};
}

export default Home;
