"use client";
import Image from "next/image";
import React, { CSSProperties } from "react";
import { Progress } from "reactstrap";

interface MultimediaProps {
  series: number;
}

const Multimedia: React.FC<MultimediaProps> = ({ series }) => {
  const url = "https://www.youtube.com/embed/8wi4gXSRvH8";
  const metaSeries = 400;
  const decimal = (series / metaSeries) * 100;
  const porcentaje = decimal.toFixed(1);

  const videoContainer: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "150px",
    padding: "2px",
    overflow: "hidden",
    border: "1px solid #c89b3c",
    borderRadius: "8px",
  };

  return (
    <div className="w-full flex">
      <div className="flex-1 p-2 w-full md:w-1/2">
        <div className="bg-black p-2 object-center" style={videoContainer}>
          <h5 className="mt-3 text-Thover text-center">
            Progreso de películas producidas
          </h5>
          <div className="d-flex justify-content-between">
            <p className="text-start w-50">Producidas: {series}</p>
            <p className="text-end w-50">Meta: {metaSeries}</p>
          </div>
          <Progress
            color="info"
            striped
            value={porcentaje}
            className="border-1"
          />
          <p className="text-center">{`${porcentaje}%`}</p>
        </div>
      </div>
      <div className="flex-1 p-2 w-full">
        <iframe
          src={url}
          title="Video"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={videoContainer}
        ></iframe>
      </div>
      <div className="flex-1 p-2 w-full">
        <img
          src="https://lafrikileria.com/blog/wp-content/uploads/2023/02/lista-mejores-superheroes-marvel-750x506.jpg"
          alt=""
          style={videoContainer}
        />
      </div>
    </div>
  );
};

export default Multimedia;
