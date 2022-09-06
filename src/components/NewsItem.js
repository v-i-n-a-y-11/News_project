import React from 'react'

const NewsItem=(props)=>{
    let {title,description,imageurl,url,author,date,source,mode}=props;
        return (
            <div>
                <div className="card" >
                    <div style={{display:'flex',position:'absolute',left:'0',justifyContent:'flex-end'}}>
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={imageurl?imageurl:" https://cdn.cnn.com/cnnnext/dam/assets/210420124249-us-capitol-dome-0413-super-tease.jpg"} className="card-img-top" alt="..."/>
                        <div className={`card-body `} style={{background:props.mode==='light'?'white':'#0b5ca1',color:props.mode==='light'?'black':'white'}}>
                            <h5 className="card-title">{title?title:""}</h5>
                            <p className="card-text">{description?description:""}.</p>
                            <p className="card-text"><small className={`text-${props.mode==='light'?'dark':'light'}`}>By <strong>{!author?"Unknown":author}</strong> on <strong>{new Date(date).toGMTString()}</strong></small></p>
                            <a href={url?url: "https://cdn.cnn.com/cnnnext/dam/assets/210420124249-us-capitol-dome-0413-super-tease.jpg"} className={`btn btn-${props.mode==='light'?'dark':'success'} `}>Read More..</a>
                        </div>
                </div>
            </div>
        )   
}

export default NewsItem
