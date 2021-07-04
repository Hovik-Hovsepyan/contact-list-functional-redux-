import './ContactSearch.css';

const ContactSearch = ({ onSearch }) => {
    return (
        <div className="search">
            <input type="text" className="searchInp" onChange={(e) => onSearch(e.target.value)} />
        </div>
    )
};

export default ContactSearch;
