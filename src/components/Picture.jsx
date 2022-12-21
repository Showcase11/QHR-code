import React from "react";
import { useDrag } from "react-dnd";

function Picture({ id, name }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div className="card w-96 bg-base-100 shadow-xl" ref={drag}
    src={name} style={{ border: isDragging ? "5px solid pink" : "0px", width: "200px", marginLeft: '20px', marginBottom: '10px', marginTop: '10px' }}>
  <div className="card-body">
       <h2 className="card-title">{name}</h2>
  </div>
  </div>
  );
}

export default Picture;