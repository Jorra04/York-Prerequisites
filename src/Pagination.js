import React from 'react';
import "./Pagination.css"
const Pagination = ({ postsPerPage, totalPosts, paginate , currentPage}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i ++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <a href={() => false} onClick={() => paginate(number)} className="page-link" id={(currentPage === number) ? 'active' : ''}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;