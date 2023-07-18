import MenuItem from "../../shared/menu-item/MenuItem";
import Cover from "../../../components/Cover";
import { Link } from "react-router-dom";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className="my-10">
            {
                title && <Cover img={img} title={title}></Cover>
            }
             <div className="grid md:grid-cols-2 gap-10 my-10">
                {
                    items.map(item => <MenuItem
                        key={item._id} 
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 text-black">Order now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;