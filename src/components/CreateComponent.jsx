import React, { Component } from 'react'
import BookService from '../services/BookService';
import { BsCheckCircleFill,BsFillXCircleFill } from "react-icons/bs";

class CreateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            bookName: '',
            authorName: '',
            price: '',
            img: ''
        }
        this.changebookNameHandler = this.changebookNameHandler.bind(this);
        this.changeauthorNameHandler = this.changeauthorNameHandler.bind(this);
        this.saveOrupdateBook = this.saveOrupdateBook.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            BookService.getBookById(this.state.id).then( (res) =>{
                let book = res.data;
                this.setState({
                    bookName: book.bookName,
                    authorName: book.authorName,
                    price : book.price,
                    img : book.img
                });
            });
        }        
    }
    saveOrupdateBook = (e) => {
        e.preventDefault();
        let book = {bookName: this.state.bookName, authorName: this.state.authorName, price: this.state.price, img: this.state.img};
        console.log('book => ' + JSON.stringify(book));

        // step 5
        if(this.state.id === '_add'){
            BookService.createBooks(book).then(res =>{
                this.props.history.push('/books');
            });
        }else{
            BookService.updateBook(book, this.state.id).then( res => {
                this.props.history.push('/books');
            });
        }
    }
    
    changebookNameHandler= (event) => {
        this.setState({bookName: event.target.value});
    }

    changeauthorNameHandler= (event) => {
        this.setState({authorName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({price: event.target.value});
    }
    changeImgHandler= (event) => {
        this.setState({img: event.target.value});
    }

    cancel(){
        this.props.history.push('/books');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center p-4 m-2 text-info">Add</h3>
        }else{
            return <h3 className="text-center p-4 m-2 text-info">Update</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 cardshadow3">
                                
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Book Name: </label>
                                            <input placeholder="Book Name" name="bookName" className="form-control" 
                                                value={this.state.bookName} onChange={this.changebookNameHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Author Name: </label>
                                            <input placeholder="Author Name" name="authorName" className="form-control" 
                                                value={this.state.authorName} onChange={this.changeauthorNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Img Url: </label>
                                            <input placeholder="Img Url" name="img" className="form-control" 
                                                value={this.state.img} onChange={this.changeImgHandler}/>
                                        </div>
                                        <div className='btn-group'>
                                        <button className="btn btn-success w-auto" onClick={this.saveOrupdateBook}><BsCheckCircleFill/> Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}><BsFillXCircleFill/> Cancel</button>
                                        </div> 
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateComponent
