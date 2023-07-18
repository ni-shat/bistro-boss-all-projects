import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../menu-category/MenuCategory";


const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle heading={"Don't miss"} subHeading={"Today's offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={dessert} title={"Dessert"} img={dessertImg}></MenuCategory>
            <MenuCategory items={soup} title={"Soup"} img={soupImg}></MenuCategory>
            <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"Salad"} img={saladImg}></MenuCategory>
        </div>
    );
};

export default Menu;