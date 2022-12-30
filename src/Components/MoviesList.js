import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllMoviesAction } from "../Redux/actions/actions";
import CardMovie from "./CardMovie";
import PaginationPages from "./PaginationPages";

const MoviesList = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMoviesAction());
  }, []);
  const { movies } = useSelector((state) => state);
  useEffect(() => {
    setData(movies);
  }, [movies]);
  return (
    <Row className="mt-3">
      {data.length ? (
        data.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })
      ) : (
        <h2 className="text-center p-5">لا يوجد أفلام ...</h2>
      )}
      {data.length ? <PaginationPages /> : null}
    </Row>
  );
};

export default MoviesList;
