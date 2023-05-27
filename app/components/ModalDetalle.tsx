"use client";
import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

interface ModalDetalleProps {
  isOpen: boolean;
  toggle: () => void;
  character: any;
}

const ModalDetalle: React.FC<ModalDetalleProps> = ({ isOpen, toggle, character  }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle} className="text-Thover">{character?.name}</ModalHeader>
      <ModalBody >
        <h4 className="text-Thover">Descripción:</h4>
        <p className="text-black">{character?.description}</p>
        <h4 className="text-Thover">Fecha de modificación:</h4>
        <p className="text-black">{character?.modified}</p>
        <h4 className="text-Thover">Comics:</h4>
        <ul>
          {character?.comics.items.map((comic: any) => (
            <li className="text-black" key={comic.id}>{comic.name}</li>
          ))}
        </ul>
        <h4 className="text-Thover">Series:</h4>
        <ul>
          {character?.series.items.map((serie: any) => (
            <li className="text-black" key={serie.id}>{serie.name}</li>
          ))}
        </ul>

        <h4 className="text-Thover">Eventos:</h4>
        <ul>
          {character?.events.items.map((evento: any) => (
            <li className="text-black" key={evento.id}>{evento.name}</li>
          ))}
        </ul>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-secondary" onClick={toggle}>
          Cerrar
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalDetalle;
