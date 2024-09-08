import { inputsContainer } from "@/Constants/StaticData";
import { usePage } from "@inertiajs/react";
import React, { useState, useCallback, useRef, useEffect } from "react";

const BorchureController = () => {
  const flipBook = useRef(null);

  const { auth } = usePage().props


  const [collables, setIsCollapsed] = useState(false)
  const [currentPage, setCurrentPage] = useState(0);
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const [ data, setData ] = useState({
    name: '',
    url : "",
    description: ""
  })

  const inputs = inputsContainer(data)

  const handleChange = e => {
    const { name, value } = e.target
    setData((state) => ({
      ...state,
      [name] : value
    }))
  }

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

  const closeModal = () => {
    setConfirmingUserDeletion(false);

    reset();
  };

  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };

  useEffect(() => {
    setIsCollapsed(window.innerWidth <= 768);

    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { currentPage, handlePreviousPage, handleNextPage, onFlip, flipBook, collables, closeModal, confirmUserDeletion, confirmingUserDeletion, handleChange, inputsContainer, inputs, auth}
}

export default BorchureController