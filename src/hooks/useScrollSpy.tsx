import { useEffect, useState } from "react";

const useScrollSpy = (ids: string[]) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 100; // adjust for header offset
      let currentId = "";

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollY) {
          currentId = id;
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handler);
    handler(); // run once on mount
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);

  return activeId;
};

export default useScrollSpy;
