import React, { useState, useEffect } from "react";
import axios from "axios";
const Newsdata = ({ news }) => {
  const [newsdata, setnewsdata] = useState();
console.log(news)
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* <!-- head --> */}
        <thead className="font-semibold text-lg">
          <tr>
            <th></th>
            <th>Title</th>
            <th>PostBy</th>
            <th>content</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {news.map((data, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{data.title}</td>
              <td>{data.postBy}</td>
              <td>{data.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Newsdata;