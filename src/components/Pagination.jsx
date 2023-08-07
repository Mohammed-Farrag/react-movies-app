import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap';

const PaginationSection = ({ getMoviePage, totalPages, currentPage }) => {

    let [stsize, setStSize] = useState(1);
    let [endSize, setEndSize] = useState(10);
    let [active, setActive] = useState(currentPage)
    let items = [];

    const setMoviePage = (e) => {
        setActive(+e.target.innerText)
        let pg = e.target.innerText;
        getMoviePage(pg)
    }
    const c = (e) => {
        return console.log(e)
    }
    useEffect(() => {
    },[])
        for (let number = stsize; number <= endSize; number++) {
            items.push(
               
                <Pagination.Item key={number} active={number === active} onClick={(e) => setMoviePage(e)}>
                    {number}
                </Pagination.Item>
                               
            )
        }
    
 

    const getPrevPage = () => {

        if(active == stsize){
            setEndSize(--endSize);
            setStSize(--stsize);
            setActive(--active)
        }else{
            setActive(--active)

        }
        
        getMoviePage(active)
    } 
    const getNextPage = () => {
        if(active == endSize){
            setEndSize(++endSize);
            setStSize(++stsize);
            setActive(++active)
        }else{
            setActive(++active)

        }
        getMoviePage(active)
    } 
    
    const getFirstPage = () => {
        setActive(1)

        getMoviePage(1)
    } 
    const getLastPage = () => {
        setActive(totalPages)
        getMoviePage(totalPages)
    } 
    


    return (
        <div>

            <Pagination>
                <Pagination.First disabled={active == 1} onClick={getFirstPage} />
                <Pagination.Prev disabled={active == 1} onClick={getPrevPage} />
                {items}
                <Pagination.Next disabled={active == totalPages} onClick={getNextPage} />
                <Pagination.Last disabled={active == totalPages} onClick={getLastPage} />
                </Pagination>

        </div>
    )
}

export default PaginationSection