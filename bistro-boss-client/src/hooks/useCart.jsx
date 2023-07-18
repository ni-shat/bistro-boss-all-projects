import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import { useQuery } from "@tanstack/react-query";



const useCart = () => {

    const { user, loading } = useContext(AuthContext);
    // if(loading){
    //     return <progress className="progress w-56"></progress>
    // }

    console.log("user ins useCart",user)

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch];

}

export default useCart;