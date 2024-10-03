import { usePage } from "@inertiajs/react";
import { useState, useCallback, useRef, useEffect } from "react";

const BrochureController = () => {
  const flipBook = useRef(null);
  const { auth } = usePage().props;

  const [currentPage, setCurrentPage] = useState(0);
  const [collables, setIsCollapsed] = useState(false)


  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    currentPage,
    flipBook,
    onFlip,
    collables,
    auth
  };
};

export default BrochureController;
