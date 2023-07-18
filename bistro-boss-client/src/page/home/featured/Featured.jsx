import SectionTitle from "../../../components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <section className="my-32 featured-img bg-fixed text-white">
            <SectionTitle subHeading={'Check it out'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className="md:flex justify-center items-center px-16 py-8 gap-10 bg-slate-900 bg-opacity-50">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="space-y-4">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur, quibusdam pariatur quo placeat sunt! Repellendus quaerat minima, cumque exercitationem sit aspernatur obcaecati blanditiis corporis totam dicta doloremque quas eligendi nam amet. Obcaecati veniam consequuntur non. Consectetur ullam molestias voluptate distinctio ab provident maxime ea, quod vero atque, illum quae?</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Order now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;