import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";


const FoodCard = ({ item }) => {

  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [ , refetch] = useCart();
  console.log(location)

  const { _id, name, image, price, recipe } = item;

  const handleAddToCart = item => {
    console.log(item);
    if (user && user.email) {
      const cartItem = { menuItemId: _id, name, image, price, email: user.email }
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Food added on the cart!',
              showConfirmButton: false,
              timer: 1500
            })
            refetch();
          }
        })
    }
    else {
      Swal.fire({
        title: 'Please login to order the food!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login' , {state: {from: location}});
        }
      })
    }
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="image" /></figure>
      <div className="card-body text-center flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p className="bg-slate-900 text-white absolute top-2 right-4 px-1">$ {price}</p>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;