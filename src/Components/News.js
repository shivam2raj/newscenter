import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes  from "prop-types";

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
    }

    static propTypes = {

    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  // Fetch APi--

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f9ccd5dd31f24f82b9db56f81b98e577&pageSize=${this.props.pageSize}&page=1&category=${this.props.category}`;
      this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
     });
  }

   handlePrevClick = async () => {
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f9ccd5dd31f24f82b9db56f81b98e577&pageSize=${this.props.pageSize}&page=${this.state.page - 1}&category=${this.props.category}`;
    this.setState({loading: true});
    let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({ 
    articles: parsedData.articles,
    page: this.state.page - 1,
    loading: false
   });


  }

   handleNextClick = async () => {

    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
   {
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f9ccd5dd31f24f82b9db56f81b98e577&pageSize=${this.props.pageSize}&page=${this.state.page + 1}&category=${this.props.category}`;
    this.setState({loading: true});
    let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({
     articles: parsedData.articles,
     page: this.state.page + 1,
     loading: false
     });
    }
  }
  

  // async handlePageClick (pageNo) {

    
  //   let url =
  //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f9ccd5dd31f24f82b9db56f81b98e577&pageSize=${this.props.pageSize}&page=${pageNo}&category=${this.props.category}`;
  //   this.setState({loading: true});
  //   let data = await fetch(url);
  // let parsedData = await data.json();
  // this.setState({
  //    articles: parsedData.articles,
  //    page: this.pageNo,
  //    loading: false
  //    });
    
  // }

  

  



  render() {
    return (
      <div>
      {this.state.loading &&  <Spinner /> }
        <div className="my-4 mx-4">
    <h1 className="text-3xl font-bold my-4">
            NewsCenter - Top HeadLines
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {!this.state.loading && this.state.articles?.map((element) => {
              return (
                <div key={element.url} className="my-4">
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between">
          <button disabled={this.state.page<=1} onClick={this.handlePrevClick} className="w-28 ml-20 p-2 my-2 bg-black hover:bg-black/60 transition-all text-white font-bold rounded-md disabled:opacity-50">
            &larr; Previous
          </button>

        
          <span className=" ml-20 p-2 my-2 bg-black text-white font-bold rounded-md disabled:opacity-50">
           Page {this.state.page}
          </span>

          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick} className="w-28 mr-20 p-2 my-2 bg-black hover:bg-black/60 transition-all text-white font-bold rounded-md disabled:opacity-50">
            Next &rarr;
          </button>

        </div>

        {/* <nav className="flex items-center space-x-32 justify-center">
  <button disabled={this.state.page<=1} onClick={this.handlePrevClick} className="text-gray-500 hover:text-black hover:border border-black disabled:hover:text-gray-500 p-2 px-2 inline-flex items-center gap-2 rounded-md disabled:border-none" >
    Previous
  </button>
  <button className="text-gray-500 hover:text-blue-600 p-3 inline-flex items-center text-sm font-medium rounded-full" onClick={this.handlePageClick(1)} aria-current="page">1</button>
  <button className="text-gray-500 hover:text-blue-600 p-3 inline-flex items-center text-sm font-medium rounded-full" onClick={this.handlePageClick(2)}>2</button>
  <button className="text-gray-500 :hover:text-blue-600 p-3 inline-flex items-center text-sm font-medium rounded-full" onClick={this.handlePageClick(3)}>3</button>
  <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick} className="text-gray-500 hover:text-black hover:border border-black disabled:hover:text-gray-500 p-2 px-6 inline-flex items-center gap-2 rounded-md disabled:border-none" >
    Next
  </button>
</nav> */}

      </div>
    );
  }
}

export default News
