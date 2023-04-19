import { useEffect } from "react";

const useFixedBody = (shouldBeFixed: boolean) => {
  useEffect(() => {
    if (shouldBeFixed) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [shouldBeFixed]);
};

export default useFixedBody;
