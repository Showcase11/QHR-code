import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import axios from "axios";

import { GrView } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { getFullDate } from "../../utils";

const CandidateCard = ({ data}) => {
  const navigate = useNavigate();
  const { deleteJob, updateStatus } = useGlobalContext();
console.log(data)
  return (
    <>
   <div className="my-1 mx-8 mt-10">
      <div className="overflow-x-auto">
               
          
      </div>
    </div>
    </> 
  );
};

export default CandidateCard;
