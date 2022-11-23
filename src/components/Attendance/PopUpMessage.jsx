import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FaDotCircle } from "react-icons/fa";
const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const PopUpMessage = ({ setOpen, message, open }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="font-semibold text-xl tracking-wider capitalize leading-3 ">
            {message} Attendance
          </h1>
          <hr className="my-5" />
          {/* {pepoples.map((data) => (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {data.name}
            </Typography>
          ))} */}
          <p className="text-md font-normal text-gray-500">
            Are you sure to reject the attendance records from 02 Nov 2022 to 17
            Nov 2022?
          </p>

          <div className="flex flex-col items-start justify-start gap-5 mt-5">
            <div className="flex gap-2 justify-start items-center">
              <FaDotCircle
                className={`${
                  message == "reject" ? "text-orange-600" : "text-green-600"
                }`}
              />
              <div className="bg-gray-100 rounded-full gap-2 flex justify-start items-center px-4 py-1">
                <img
                  className="rounded-full object-contain h-[23px] w-[23px]"
                  src="https://images.news18.com/ibnlive/uploads/2022/09/virat-kohli-asia-cup-ap.jpg"
                  alt="persom"
                />
                <h1 className="text-md font-normal">Virat Kholi</h1>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default PopUpMessage;
