import React, { Component } from 'react'
import NewsItem from './NewsItem'
// Hindi #28---->12:00mint

export default class News extends Component {

  constructor(){
    super();
    console.log('iam constructor')
    this.state={
      articles:[],
      loading:false
    }
  }

  async componentDidMount(){
    let uurl="your api key";
     let data=await fetch(uurl);
 let parseddata= await data.json();
 this.setState({articles:parseddata.articles});
  }

  prevone = async()=>{
console.log("prev")
let uurl="your api key";

let data=await fetch(uurl);
let parseddata= await data.json()
console.log("prev1")


this.setState({
 page:this.state.page-1,

 articles:parseddata.articles

})
 }

  nextone = async()=>{
 console.log("nextp")
 let uurl="your api key";
let data=await fetch(uurl);
 let parseddata= await data.json()
 console.log("next")
 this.setState({
  page:this.state.page+1
,
  articles:parseddata.articles

 })
  }

  
  render() {
    return (
      <div className='container my-3'>
        <h1>News-API: </h1>
        <div className='row my-3' >
       {this.state.articles.map((element)=>{

          return <div className='col-md-4 my-3' key={element.url}>
          <NewsItem title={element.title.slice(1,45)} description ={element.description.slice(1,45)} imageUrl={element.urlToImage}/>

          </div>
          
       })
      }
      </div>
      <div className=' d-flex justify-content-between container '>
        <button disabled={this.state.page<=1} className=' btn btn-dark' onClick={this.prevone}>&larr; back</button>
        <button className=' btn btn-dark'  onClick={this.nextone}>next &rarr; </button>

      </div>
      </div>
    
 ) ;}
//  if(this.state.page+1>1)

    
}