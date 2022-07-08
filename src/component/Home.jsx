import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="https://scontent.fhan15-1.fna.fbcdn.net/v/t1.6435-9/178577444_102900761954448_51064625775174429_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=2j1yB4VIqAoAX-f6nPF&_nc_ht=scontent.fhan15-1.fna&oh=00_AT_SFhRFx-3iL9uqPR4Esce4-Ss6qtjxYVjlR99-VevatQ&oe=62E06341" className="card-img" alt="Background" height="550px" />
        {/* <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
          </p>
            </div>
        </div> */}
      </div>
      <Products/>
    </div>
  );
};

export default Home;