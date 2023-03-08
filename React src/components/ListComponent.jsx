import React, { Component } from 'react'
import BookService from '../services/BookService'
import { BsFillTrashFill,BsPencilFill,BsFillEyeFill,BsFillPlusCircleFill } from "react-icons/bs";

class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                books: []
        }
        this.addbook = this.addbook.bind(this);
        this.editbook = this.editbook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }

    deleteBook(id){
        BookService.deleteBook(id).then( res => {
            this.setState({books: this.state.books.filter(book => book.id !== id)});
        });
    }
    viewbook(id){
        this.props.history.push(`/view/${id}`);
    }
    editbook(id){
        this.props.history.push(`/edit/${id}`);
    }

    componentDidMount(){
        BookService.getBooks().then((res) => {
            this.setState({ books: res.data});
        });
    }

    addbook(){
        this.props.history.push('/add/_add');
    }

    render() {
        return (
            <div>
                 <div className = "row mt-4">
                    <button className="btn btn-primary pt-2 pb-2 float-right" onClick={this.addbook}><BsFillPlusCircleFill/>  Add </button>
                 </div>
                 <br></br>
                 <div className = "card p-5 row cardshadow3">
                        <table className = "table table-bordered">

                            <thead>
                                <tr>
                                    <th className='text-center'> BookFrontPic</th>
                                    <th className='text-center'> Book Name</th>
                                    <th className='text-center'> Author Name</th>
                                    <th className='text-center'> Price</th>
                                    <th className='text-center'> View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.books.map(
                                        book => 
                                        <tr key = {book.id}>
                                             <td className='text-center'><img src={book.img} className="BookFrontPic-image" alt="dynamic" /></td>
                                             <td> {book.bookName} </td>   
                                             <td> {book.authorName}</td>
                                             <td> {book.price}</td>
                                             <td className='text-center'>
                                                 <button onClick={ () => this.viewbook(book.id)} className="btn-hover btn-hover-x color-1"><BsFillEyeFill/></button>
                                                 <button onClick={ () => this.editbook(book.id)} className="ml-2 btn-hover btn-hover-x color-7"><BsPencilFill/></button>
                                                 <button onClick={ () => this.deleteBook(book.id)} className="ml-2 btn-hover btn-hover-x color-11"><BsFillTrashFill/> </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListComponent
