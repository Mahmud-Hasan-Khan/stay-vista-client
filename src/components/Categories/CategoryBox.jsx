
import queryString from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon, selected }) => {
    // console.log(selected);

    const [params, setParams] = useSearchParams()
    const navigate = useNavigate()

    const handleClick = () => {
        // console.log(label );
        let currentQuery = {}
        if (params) {
            currentQuery = queryString.parse(params.toString())

            const updatedQuery = { ...currentQuery, category: label }

            const url = queryString.stringifyUrl({
                url: '/',
                query: updatedQuery
            })
            navigate(url)
        }
    }

    params.get('category')

    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 transition cursor-pointer ${selected ? 'border-b-neutral-800 text-neutral-800' : ''}  `}>
            <Icon size={26} ></Icon>
            <div className="text-sm font-medium">{label}</div>
        </div>
    );
};

export default CategoryBox;