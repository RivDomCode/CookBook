import { useEffect, useState } from "react"
import { getRecipes } from "../helpers/getRecipes";

export const useFetch = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getRecipes(category)
            .then((recipes) => setState({
                data: recipes,
                loading: false
            }));
    }, [category]);

    return state
}