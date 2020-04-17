import React, {Component} from 'react';
import axios from 'axios';

class QuoteApp extends Component{
    constructor(props)
    {
        super(props)
        this.wrapperRef = React.createRef();
        this.getNewQuote = this.getNewQuote.bind(this);
        this.state = {
            quote: '',
            author: '',
            clicked: true
        }
    }

    componentDidMount()
    {
        this.getQuote();  
    }

    getQuote() {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        axios.get(url).then(
            res=> {
                console.log(res)
                let data = res.data.quotes;
                let quoteNum = Math.floor(Math.random()*data.length);
                let randomQuote = data[quoteNum];
                
                this.setState({
                    quote: randomQuote['quote'],
                    author: randomQuote['author'], 
                })
            }) 
        }
    
    getNewQuote = () => {
         this.getQuote()
         this.setState({
            clicked: !this.state.clicked
         })
    }

    render()
    {
        const {quote,author,clicked} = this.state;
       
        return(
            <div id="wrapper" className="center" ref={this.wrapperRef}>
              <div id="quote-box" className={clicked ? "card" : "bounce-in-top"}>
                 <div id="text" className="quote">
                     <span><i className="fa fa-quote-left"/></span>&nbsp;
                     {quote}
                     &nbsp;<span> <i className="fa fa-quote-right"/></span>
                 </div>
                 <div id="author">~ {author}</div>
                 <div id="buttons">
                    <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${quote} ${author}`} target='_blank' title="Post this quote on twitter!">
                     <span><i className="fab fa-twitter twitter-icon" /></span>
                    </a>
                    <button id="new-quote" onClick={this.getNewQuote}> New Quote </button>
                  </div>
              </div>
            </div>
        )
    }
}

export default QuoteApp;