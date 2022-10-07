import React,{ createContext, useState, useContext, useEffect } from "react";
import ItemContext from './ItemContext' ;
import AuthContext from "./Authcontext";

const CartContext = createContext();

export function CartProvider({ children }){
    const [count, setCount] = useState(0)
    const { user  } = useContext(AuthContext);
    const {click} = useContext(ItemContext)
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
      }
    const csrftoken = getCookie('csrftoken');

    useEffect(() => {
        const addToCart = (user) => {
            fetch('/api/cartCount/',{
                method: 'POST',
                headers: {
                    'X-CSRFToken': csrftoken
                },
                body: user
            })
            .then((response) => response.json())
            .then((data) =>{
                console.log(data)
                setCount(data.count)
            })
        };
        console.log(click)
        addToCart()
    },[click])
    // }, [click])

    
    

    return(
        <CartContext.Provider value={{count}} >{children}</CartContext.Provider>
    );
}

export default CartContext;