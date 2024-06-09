import { useCallback, useRef } from "react";

export const useDebounce = (delay = 300, notDelayOnFirstTime = true) => {
    
    const isFirstTime = useRef(notDelayOnFirstTime);
    const debauncing = useRef<NodeJS.Timeout>();

    const debaunce = useCallback((func: () => void) => {
        if (isFirstTime.current) {
            isFirstTime.current = false;
            func();
        } else {
            if (debauncing.current) {
                clearTimeout(debauncing.current);
            }
        }
        debauncing.current = setTimeout(() => func(), delay);
    }, [delay])

    return { debaunce };
};