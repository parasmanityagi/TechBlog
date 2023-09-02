import React,{ useState , useEffect } from "react";

const Card = ({ img, tag, title, description, author, duration }) => {
  const[width , setWidth] = useState(window.width);
  const margin = (width >= 920)? "0" : "3";

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className={`card my-3 mx-${margin}`} style={{ width: "18rem", fontSize: "13px" }}>
      <img src={img} className="card-img-top" alt="Post-Image" />
      <div className="card-body">
        <p className="card-subtitle mb-1 text-body-secondary">{tag}</p>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between flex-wrap">
          <a href="#" style={{ textDecoration: "none" }} className="card-link">
            <i className="bi bi-person" />
            {author}
          </a>
          <a href="#" style={{ textDecoration: "none" }} className="card-link">
            {duration}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
