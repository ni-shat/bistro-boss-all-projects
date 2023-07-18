
import { Helmet } from 'react-helmet-async';
import Banner from '../banner/Banner';
import Category from '../category/Category';
import Featured from '../featured/Featured';
import PopularMenu from '../popular-menu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;