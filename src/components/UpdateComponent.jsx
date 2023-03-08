import React, { Component } from 'react'
import BookService from '../services/BookService';

class UpdateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            bookName: '',
            authorName: '',
            price: '',
            img:''
        }
        this.changebookNameHandler = this.changebookNameHandler.bind(this);
        this.changeauthorNameHandler = this.changeauthorNameHandler.bind(this);
        this.updateBook = this.updateBook.bind(this);
    }

    componentDidMount(){
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

    updateBook = (e) => {
        e.preventDefault();
        let book = {bookName: this.state.bookName, authorName: this.state.authorName, price: this.state.price, img: this.state.img};
        console.log('book => ' + JSON.stringify(book));
        console.log('id => ' + JSON.stringify(this.state.id));
        BookService.updateBook(book, this.state.id).then( res => {
            this.props.history.push('/books');
        });
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

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 cardshadow3">
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Book Name: </label>
                                            <input placeholder="Book Name" name="bookName" className="form-control" 
                                                value={this.state.bookName} onChange={this.changebookNameHandler}/>
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
                                            <input placeholder="Img Url" name="Img" className="form-control" 
                                                value={this.state.img} onChange={this.changeImgHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateBook}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateComponent
