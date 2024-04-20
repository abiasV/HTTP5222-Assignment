import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./Home.css";
import HotelImg1 from "../assets/p-1.jpg";
import HotelImg2 from "../assets/p-2.jpg";
import HotelImg3 from "../assets/p-3.jpg";
import HotelImg4 from "../assets/p-4.jpg";
import HotelImg5 from "../assets/p-5.jpg";
import HotelImg6 from "../assets/p-6.jpg";

const hotels = [
    {
        img: HotelImg1,
        city: "mumbai",
        review: "Mumbai hotel offering personalized, attentive service and stunning views of Queen's Necklace and Arabian Sea.",
        price: 149,
        discount: 129,
    },
    {
        img: HotelImg2,
        city: "sydney",
        review: "Dream with a harbour view, from this Sydney hotel. Choose from a range of rooms with views, including the Opera House, Harbour Bridge, and Darling Harbour.",
        price: 199,
        discount: 169,
    },
    {
        img: HotelImg3,
        city: "hawaii",
        review: "Oceanfront resort offering authentic Hawaiian experience, blending modernity with traditional elements. Excellent water amenities, clean ponds, and water sports.",
        price: 229,
        discount: 199,
    },
    {
        img: HotelImg4,
        city: "paris",
        review: "Come and explore the historic city of Paris. Hotel Eiffel Segur is a contemporary 3-star Paris hotel located near the Eiffel Tower, the Seine river, Invalides and Montparnasse.",
        price: 288,
        discount: 259,
    },
    {
        img: HotelImg5,
        city: "tokyo",
        review: "The Tokyo Station Hotel has a rich history of over a hundred year and is ideally located in the heart of Tokyo.",
        price: 189,
        discount: 159,
    },
    {
        img: HotelImg6,
        city: "egypt",
        review: "Luxurious hotel with friendly staff, modern spacious rooms, and excellent amenities. Features beauty and spa, great food, and engaging animation team.",
        price: 130,
        discount: 100,
    }
];

const Home = () => {
    return (
        <>
            <div className="container-fluid h1 p-5 text-center">Home Page</div>
            <section className="packages" id="packages">
                <h1 className="heading">
                    <span>p</span>
                    <span>a</span>
                    <span>c</span>
                    <span>k</span>
                    <span>a</span>
                    <span>g</span>
                    <span>e</span>
                    <span>s</span>
                </h1>
                <div className="box-container">
                {hotels.map(({ img, city, review, price, discount }, index) => (
                    <HotelItem
                        key={index} 
                        img={img} 
                        city={city}
                        review={review}
                        price={price}
                        discount={discount}
                    />
                ))}
                </div>
            </section>
        </>
        
    )
}
// Add prop type validation
HotelItem.propTypes = {
    img: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
};
export default Home;

function HotelItem({ img, city, review, price, discount }) {
    
    return (
        <div className="box">
            <img src={img} alt={city} />
            <div className="content">
                <h3><i className="fas fa-map-marker-alt"></i> {city}</h3>
                <p>{review}</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <div className="price"> {discount}$ <span> {price}$</span></div>
                <Link to="/Dashboard" className="btn btn-primary">book now</Link>
                {/* <a href="#" className="btn">book now</a> */}
            </div>
        </div>
    )
}