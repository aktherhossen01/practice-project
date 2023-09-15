import Book from "../Book/Book";
import PropTypes from 'prop-types';

const Bookmarks = ({book}) => {
    console.log(book);
    return (
        <div className="w-1/3">
            <div className="text-3xl">Book mark</div>
            {book.map((books,idx)=><Book key={idx} books={books}></Book>)}
        </div>
    );
};
Bookmarks.propTypes={
    book:PropTypes.array
}
export default Bookmarks;