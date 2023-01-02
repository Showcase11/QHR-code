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
      <div class="grid grid-rows-1 grid-flow-col gap-4 pt-5">
        No data available
  {/* <div className="Pictures border bg-slate-200">
      <h5 className="pl-5 pt-3">Applied 0</h5>
        {PictureList.map((picture) => {
          return <Picture name={picture.name} id={picture.id} />;
        })}
      </div>
  <div className="Board bg-slate-200" ref={drop}>
      <h5 className="pl-5 pt-3">Screening 0</h5>
        {board.map((picture) => {
          return <Picture name={picture.name} id={picture.id} />;
        })}
      </div>
  <div className="Board bg-slate-200">
      <h5 className="pl-5 pt-3">1st Interview  0</h5>
      </div>
  <div className="Board bg-slate-200">
      <h5 className="pl-5 pt-3">2nd Interview  0</h5>
      </div>
 <div className="Board bg-slate-200">
      <h5 className="pl-5 pt-3">Offered  0</h5>
      </div>
  <div className="Board bg-slate-200">
      <h5 className="pl-5 pt-3">Hired  0</h5>
      </div>
  <div className="Board bg-slate-200">
      <h5 className="pl-5 pt-3">Rejected  0</h5>
      </div>
</div>  */}
      </div>
  );
}

export default DragDrop;