import React, { Component } from 'react'
import BookService from '../services/BookService'
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
class ViewComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            book: {}
        }
    }

    componentDidMount(){
        BookService.getBookById(this.state.id).then( res => {
            this.setState({book: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3 cardshadow3 mt-5">
                    <h3 className = "text-center mt-3 text-primary"> View  Details</h3>
                    <div className = "card-body">
                        <div className="row">
                                <div className="col-5">
                                <img src={this.state.book.img} className="BookFrontPic-image-x ml-5" alt="dynamic" />
                                </div>
                                <div className="col-7">

                                        <div className = "row">
                                            <label>Book Name : </label>
                                            <div className='ml-2'> { this.state.book.bookName }</div>
                                        </div>
                                        <div className = "row">
                                            <label>Author Name : </label>
                                            <div className='ml-2'> { this.state.book.authorName }</div>
                                        </div>
                                        <div className = "row">
                                            <label>Price : </label>
                                            <div className='ml-2'> { this.state.book.price }</div>
                                        </div>
                                </div>
                        </div>
 
                    </div>
                    
                    <Link to='/' className='btn btn-primary mt-2 mb-4'><BsFillArrowLeftCircleFill/> Back</Link>

                </div>
            </div>
        )
    }
}

export default ViewComponent
