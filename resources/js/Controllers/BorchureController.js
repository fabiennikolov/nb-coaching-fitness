import { usePage } from "@inertiajs/react";
import { useState, useCallback, useRef, useEffect } from "react";

const BrochureController = (paramsId) => {
  const flipBook = useRef(null);
  const { auth } = usePage().props;

  const [currentPage, setCurrentPage] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 768);
  const [isSinglePage, setIsSinglePage] = useState(window.innerWidth <= 789);

  const updatePageMode = useCallback(() => {
    setIsSinglePage(window.innerWidth <= 789);
    setIsCollapsed(window.innerWidth <= 768);
  }, []);

  if (paramsId != 1 && paramsId != 2) {
    return window.history.back();
  }

  const brochureLength = paramsId == 1 ? 16 : 28;


  useEffect(() => {
    updatePageMode();
    window.addEventListener("resize", updatePageMode);

    return () => {
      window.removeEventListener("resize", updatePageMode);
    };
  }, [updatePageMode]);

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  // const handleNextPage = () => {
  //   flipBook.current?.pageFlip().flipNext();
  // };

  // const handlePreviousPage = () => {
  //   flipBook.current?.pageFlip().flipPrev();
  // };

  return {
    currentPage,
    flipBook,
    onFlip,
    isCollapsed,
    auth,
    isSinglePage,
    brochureLength
  };
};

export default BrochureController;
