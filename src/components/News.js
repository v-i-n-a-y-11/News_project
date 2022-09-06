import React, { useState, useEffect } from 'react'
import BufferingSpinner from './BufferingSpinner';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setarticles] = useState([])
    const [pageloading, setpageloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalresults, settotalresults] = useState(0)
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateData = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=505b240b1e8248d1bce3a4e14f0ae0f1&page=${page}&pagesize=${props.pagesize}`;
        setpageloading(true);
        props.setProgress(30);
        let data = await fetch(url);
        let parseddata = await data.json()
        props.setProgress(60);
        setarticles(parseddata.articles)
        settotalresults(parseddata.totalResults)
        setpageloading(false)
        props.setProgress(100);
    }
    useEffect(() => {
        
        document.title = `${capitalizeFirstLetter(props.category)}-DailyNews`;
        updateData();
        // eslint-disable-next-line
    }, [])
    // const handlePrev = async() => {
    //     this.setState({page:page-1})
    //     this.updateData();
    // }
    // const handleNext = async() => {
    //     this.setState({page:page+1})
    //     this.updateData();
    // }
    const fetchMoreData = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=505b240b1e8248d1bce3a4e14f0ae0f1&page=${page+1}&pagesize=${props.pagesize}`;
        setpageloading(true);
        setpage(page+1);
        props.setProgress(30);
        let data = await fetch(url);
        let parseddata = await data.json()
        props.setProgress(60);
        setarticles( articles.concat(parseddata.articles))
        settotalresults(parseddata.totalResults)
        setpageloading(false)
        props.setProgress(100);
    };

        return (
            <>
              <h1 className='text-center' style={{marginTop:'70px',marginBottom:'40px',color:props.mode==='light'?'black':'white'}}>DailyNews-Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {pageloading && <BufferingSpinner mode={props.mode} />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalresults}
                    loader={<BufferingSpinner  mode={props.mode}/>}
                ><div className="container">
                        <div className="row ">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} mode={props.mode}/>
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>


                {/* <div className="container d-flex justify-content-between my-3">
                    <button type="button" disabled={page<=1} className="btn btn-dark" onClick={this.handlePrev}>&#8592;Previous page</button>
                    <button type="button" disabled={page+1>Math.ceil(totalresults/pagesize)} className="btn btn-dark" onClick={this.handleNext}>Next page&#8594;</button>
                </div> */}
            </>
        )
    
}
News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}
News.defaultProps = {
    country: "in",
    pagesize: '6',
    category: 'general'
}
export default News
