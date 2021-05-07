import {useLocation} from "react-router-dom";
import {useCallback} from "react";

const usePathGetter = () => {
    const location = useLocation();

    const getPath = useCallback(
        (path = '') => `${location.pathname}${path}`,
        [location.pathname]
    );
    const getPathWithSlash = useCallback(
        (path = '') => `${location.pathname}/${path}`,
        [location.pathname]
    );

    return { getPath, getPathWithSlash };
}

export default usePathGetter;