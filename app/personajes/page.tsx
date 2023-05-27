"use client";
import Image from "next/image";
import React, { CSSProperties, useState, useEffect } from "react";
import { Card, CardTitle, CardImg, CardBody,Pagination, PaginationItem, PaginationLink } from "reactstrap";
import ModalDetalle from "../components/ModalDetalle";
import personajesService from "../services/personajesService";
import formanivelIzq from "../../public/formanivelIzq.png";
import formanivelDer from "../../public/formanivelDer.png";
import circulolineas from "../../public/circulolineas.png";
import diamantes from "../../public/diamantes.png";
import Multimedia from "../components/Multimedia";
import Header from "../components/Header";
import Footer from "../components/Footer";

const _personajesService = new personajesService();

const Personajes = () => {
  //consumo de api
  const [characters, setCharacters] = useState<any[]>([]);
  const [totalSeries, setTotalSeries] = useState<number>(0);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const charactersData = await _personajesService.getAllCharacters();
        setCharacters(charactersData);
        const total = charactersData.reduce((sum: number, character: any) => sum + character.series.available,0);
        setTotalSeries(total);
      } catch (e) {
        console.error(e);
      }
    }
    fetchCharacters();
  }, []);

  //Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);

  const handleCharacterClick = (character: any) => {
    setSelectedCharacter(character);
    toggleModal();
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  //Paginador
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(3);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

 


  //Css
  const cardStyle: CSSProperties = {
    background: "rgba(3, 3, 3, 0.61)",
    border: "2px solid #3C3C41",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const buttonStyle: CSSProperties = {
    textAlign: "center",
    background: "#1E2328;",
    border: "1px solid #3C3C41", // Cambia aquí por el color y grosor del borde deseados
    borderRadius: "4px", // Cambia aquí el radio de borde para obtener la forma de botón deseada
    padding: "8px 8px", // Cambia aquí el espaciado interno para ajustar el tamaño del botón
    margin: "10px", // Cambia aquí el espaciado externo para ajustar el espacio entre los botones
  };
  const titleContainerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: "20px",
    marginLeft: "30px",
    marginRight: "30px",
  };

  const avatarStyle: CSSProperties = {
    width: "auto",
    height: "auto",
    position: "relative",
  };

  const circulolineasStyle: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    transition: "transform 0.5s",
  };

  const diamantesStyle: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
  };

  const cardImageStyle: CSSProperties = {
    width: "130px", // Ajusta el ancho deseado
    height: "130px", // Ajusta la altura deseada
    objectFit: "cover", // Ajusta la forma de ajuste de la imagen
  };

  const cardImageContainerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    position: "relative",
  };

  

  return (
    <>
      <Multimedia series={totalSeries}/>
      <div className="flex flex-wrap gap-0 justify-content-center">
      {currentCharacters.map((character) => (
          <Card
            key={character.id}
            onClick={() => handleCharacterClick(character)}
            style={cardStyle}
            className="max-w-sm m-5"
          >
            <div style={titleContainerStyle}>
              <Image src={formanivelIzq} alt="" />
              <CardTitle
                tag="h5"
                className=" text-Thover text-center ml-5 mr-5"
              >
                {character?.name}
              </CardTitle>
              <Image src={formanivelDer} alt="" />
            </div>
            <div
              className="overflow-hidden cursor-pointer p-5"
              style={cardImageContainerStyle}
            >
              <Image src={circulolineas} alt="" style={circulolineasStyle} />
              <Image src={diamantes} alt="" style={diamantesStyle} />
              <CardImg
                src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
                alt="Avatar"
                className="rounded-full"
                style={cardImageStyle}
              />
            </div>
            <CardBody>
              <p style={buttonStyle}>Comics: {character?.comics.available}</p>
              <p style={buttonStyle}>Series: {character?.series.available}</p>
            </CardBody>
          </Card>
        
      ))}
      </div>
      <div className="pagination-container">
        <Pagination className="d-flex justify-content-center mb-5">
          {Array.from({ length: Math.ceil(characters.length / charactersPerPage) }, (_, index) => (
            <PaginationItem key={index} active={currentPage === index + 1}>
              <PaginationLink className=" bg-fondo text-Thover" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </Pagination>
      </div>
      <div className="modal">
        <ModalDetalle isOpen={modalOpen} toggle={toggleModal} character={selectedCharacter}/>
      </div>
    </>
  );
};

export default Personajes;
