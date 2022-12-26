import axios from "axios"

export const getCategories = async (setData) => {
    try {
        await axios.get('/api/categories').then((response) => {
            setData({type:"CATEGORY", category: response.data.categories});
        });
    } catch (error) {
        console.log(error)
    };
};

export const getProducts = async (setData) => {
    try {
        await axios.get('/api/products').then((response) => {
            setData({type:"PRODUCTS", products: response.data.products});
        });
    } catch (error) {
        console.log(error);
    };
};