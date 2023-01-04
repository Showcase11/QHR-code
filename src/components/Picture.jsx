import React from "react";
import { useDrag } from "react-dnd";
import { IoPersonOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";

function Picture({ id, name }) {
  const locale = 'en';
  const today = new Date();
  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div>
    <div className="card w-96 bg-base-100 shadow-xl" ref={drag}
    src={name} style={{ border: isDragging ? "5px solid pink" : "0px", width: "200px", marginLeft: '14px', marginBottom: '10px', marginTop: '10px' }}>
      <div className="card-body">
           <h2 className="card-title"><IoPersonOutline className="mt-5" />{name}</h2>
           <p className="flex pl-6"><IoTimeOutline className="mt-1" />{time}</p>
      </div>
  </div>
</div>
  );
}

export default Picture;