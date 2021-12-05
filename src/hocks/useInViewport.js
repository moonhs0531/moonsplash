import {useEffect, useRef, useState} from "react";

export const useInViewport = (options = {}) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting)
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if(ref.current){
            observer.observe(ref.current);
        }

        return () => {
            if(ref.current){
                observer.unobserve(ref.current);
            }
        }

    }, [ref]);

    return [ref, isInView]
}
