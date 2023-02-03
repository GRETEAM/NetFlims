import { useState } from "react";

const scroll = () => {
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", infiniteCheck);

    return () => {
      window.removeEventListener("scroll", infiniteCheck);
    };
  }, []);

  const infiniteCheck = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollHeight - scrollTop === clientHeight) {
      setPageIndex((pageIndex) => pageIndex + 1);
      console.log("Index de la page :", pageIndex);
      console.log("Index de la page :", setPageIndex);
    }
  };
};

export default scroll;

