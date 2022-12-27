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

export const postCart = async (product, setData, postToast) => {
    try {
        await axios.post('/api/user/cart', {product} , {headers: {authorization: localStorage.getItem("token")}}).then((response) => {
            if(response.status === 201) {
                getCart(setData)
                postToast("success", "item added to cart");
            }
        })
    } catch (error) {
        console.log(error);
        if(error.response.status === 500) {
            postToast("warning", "please sign in ");
        }
    };
};

export const getCart = async (setData) => {
    try {
        await axios.get('/api/user/cart' , {headers: {authorization: localStorage.getItem("token")}}).then((response) => {
             setData({type:"CART", cart:response.data.cart})
        })
    } catch (error) {
        console.log(error);
    };
};

export const deleteCart = async (productId,setData, postToast) => {
    try {
        await axios.delete(`/api/user/cart/${productId}`,{headers: {authorization: localStorage.getItem("token")}}).then((response) => {
          if(response.status === 200) {
            getCart(setData);
            postToast("success", "item removed from cart");
          }
        })
    } catch (error) {
        console.log(error);
    };
};

export const incDecQuantity = async (cartId, type, setData) => {
         try {
             await axios.post(
               `/api/user/cart/${cartId}`,
               {
                 action: {
                   type: type,// increment or decrement
                 },
               },
               {
                 headers: {
                   authorization: localStorage.getItem("token")
                 },
               }
             ).then((response) => {
                if(response.status === 200) {
                    getCart(setData)
                }
             })
     } catch (error) {
         console.log(error)
     };
 };