import React, { useState } from 'react';
import Cover from '../../../components/Cover';
import img from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard';
import OrderTab from '../order-tab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    
    const categories = ["salad", "dessert", "soup" , "pizza", "drinks"];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    console.log(initialIndex)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Cover img={img} title={'order food'}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='my-20'>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>dessert</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;