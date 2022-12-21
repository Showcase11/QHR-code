import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";

const PictureList = [
  {
    id: 1,
    name: 'sukanya',
  },
  {
    id: 2,
    name: 'sahithya',
  },
  {
    id: 3,
    name: 'rahul',
  },
];

const DragDrop = () => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <div className="flex">
      <div className="Pictures border-2 text-black" style={{width: '230px', height: '500px', border: '2px solid black', marginLeft: '25px', marginRight: '20px'}}>
      <h5 className="pl-5">Applied 0</h5>
        {PictureList.map((picture) => {
          return <Picture name={picture.name} id={picture.id} />;
        })}
      </div>
      <div className="Board mr-5" style={{width: '230px', height: '500px', border: '2px solid black'}} ref={drop}>
      <h5 className="pl-5">Screening 0</h5>
        {board.map((picture) => {
          return <Picture name={picture.name} id={picture.id} />;
        })}
      </div>
      <div className="Board mr-5" style={{width: '230px', height: '500px', border: '2px solid black'}}>
      <h5 className="pl-5">1st Interview  0</h5>
        {/* {board.map((picture) => {
          return <Picture name={picture.name} id={picture.id} />;
        })} */}
      </div>
      <div className="Board mr-5" style={{width: '230px', height: '500px', border: '2px solid black'}}>
      <h5 className="pl-5">2nd Interview 0</h5>
        {/* {board.map((picture) => {
          return <Picture name={picture.name} id={picture.id} />;
        })} */}
      </div>
      <div className="Board mr-5" style={{width: '230px', height: '500px', border: '2px solid black'}}>
      <h5 className="pl-5">Offered 0</h5>
        {/* {board.map((picture) => {
          return <Picture name={picture.name} id={picture.id} />;
        })} */}
      </div>
      <div className="Board mr-5" style={{width: '230px', height: '500px', border: '2px solid black'}}>
      <h5 className="pl-5">Hired 0</h5>
        {/* {board.map((picture) => {
          return <Picture name={picture.name} id={picture.id} />;
        })} */}
      </div>
      </div>
  );
}

export default DragDrop;