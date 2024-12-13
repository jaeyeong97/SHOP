import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const focusableElements = document.querySelectorAll("[tabindex]");
        focusableElements.forEach((el) => {
            el.tabIndex = 0;
        });

        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
