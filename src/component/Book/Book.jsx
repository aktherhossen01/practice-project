import PropTypes from 'prop-types';

const Book = ({books}) => {
    const {title}= books
    console.log('i love');
    return (
        <div className='bg-red-50 p-4 m-4 rounded-lg'>
           <h2>{title}</h2> 
        </div>
    );
};
Book.propTypes={
    book:PropTypes.object.isRequired
}
export default Book;