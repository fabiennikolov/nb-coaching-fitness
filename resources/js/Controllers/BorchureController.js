import React, { useState, useCallback, useRef } from "react";

const BorchureController = () => {
    const flipBook = useRef(null);

    const [currentPage, setCurrentPage] = useState(0);
    const [allPages, setAllPages ] = useState(0)

    const onFlip = useCallback((e) => {
        setCurrentPage(e.data);
    }, []);

    const handleNextPage = () => {
      if (flipBook.current) {
        flipBook.current.pageFlip().flipNext();
      }
    };
  
    const handlePreviousPage = () => {
      if (flipBook.current) {
        flipBook.current.pageFlip().flipPrev();
      }
    };
  return {currentPage, allPages, handlePreviousPage, handleNextPage, onFlip, flipBook}
}

export default BorchureController