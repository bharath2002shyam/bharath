import React from 'react'
import ReactPaginate from 'react-paginate';

const Paginaion = ({ info , setpageNumber, pageNumber }) => {
 
  return (
    <>
    <ReactPaginate 
    className='pagination justify-content-center gap-4 my-4'
    nextLabel="Next"
    nextClassName='btn btn-secondary'
    previousLabel="Prev"
    previousClassName='btn btn-secondary'
    pageCount={info?.pages}
    pageClassName='page-item'
    pageLinkClassName='page-link'
    onPageChange={(data)=>{
        setpageNumber(data.selected + 1)
    }}
    activeClassName='active'
    forcePage={pageNumber === 1 ? 0: pageNumber -1}
    />

    
    
    </>
  )
}

export default Paginaion