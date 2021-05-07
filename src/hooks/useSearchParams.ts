import {useLocation} from "react-router-dom";

const useSearchParams = () => {
    const {search} = useLocation();
    const searchParams = new URLSearchParams(search);

    return searchParams
}

export default useSearchParams;