import axios from 'axios';

const BOOK_API_URL = "http://localhost:8080"  ;

class BookService {

    getBooks(){
        return axios.get(BOOK_API_URL);
    }

    createBooks(book){
        return axios.post(BOOK_API_URL, book);
    }

    getBookById(bookId){
        return axios.get(BOOK_API_URL + '/' + bookId);
    }
 
    updateBook(book, bookId){
        return axios.put(BOOK_API_URL + '/' + bookId, book);
    }

    deleteBook(bookId){
        return axios.delete(BOOK_API_URL + '/' + bookId);
    }
}

export default new BookService()