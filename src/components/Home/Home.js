import React from "react";
import "./Home.css";
import BannerPic from "../../assets/images/watch.jpg";
import useReviews from "../../hooks/useReviews";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import { Link } from "react-router-dom";

const Home = () => {
  const [reviews] = useReviews([]);
  return (
    <div className="home">
      {/* Banner */}
      <section className="container my-5">
        <div className="banner d-md-flex justify-content-around">
          <div className="banner-text d-flex flex-column justify-content-center">
            <h1 className="text-black">
              Time is what we want most, but what we use worst.
            </h1>
            <p className="text-muted">
              We are here providing reviews and analysis data about various
              watches with charts.
            </p>
            <Link
          to="/reviews"
          className="my-4 text-decoration-none"
        >
          <button className="btn btn-dark p-2">See All Reviews</button>
        </Link>
          </div>
          <div className="banner-picture mx-auto mx-md-0">
            <img src={BannerPic} alt="" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container my-3 my-md-0 pt-5 pt-md-0">
        <h1 className="text-center mb-4">Customer Reviews</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
          {reviews.slice(0, 3).map((review) => (
            <ReviewDetails key={review.id} data={review}></ReviewDetails>
          ))}
        </div>
        <Link
          to="/reviews"
          className="my-4 d-flex justify-content-center text-decoration-none"
        >
          <button className="btn btn-dark p-2">See All Reviews</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
