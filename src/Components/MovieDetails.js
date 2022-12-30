import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=397b71f31600c47f90504a0ae2be54d2&language=ar`
    );
    setMovieDetails(res.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="12" className="mt-4">
          <div className="card-details d-flex align-items-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt="asda"
              className="img-movie w-30"
            />
            <div className="text-center mx-auto">
              <p className="card-text-details border-bottom">
                أسم الفيلم : {movieDetails.original_title}
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الإصدار : {movieDetails.release_date}
              </p>
              <p className="card-text-details border-bottom">
                عدد المقيمين : {movieDetails.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                التقييم : {movieDetails.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="12" className="mt-1">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-3">
              <p className="card-text-title border-bottom">القصة:</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{movieDetails.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="12" className="d-flex my-3 justify-content-center">
          <Link to="/">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              عودة للرئيسية
            </button>
          </Link>
          <a href={movieDetails.homepage}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary"
            >
              مشاهدة الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
