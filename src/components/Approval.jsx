import React from "react";
import { RiCheckboxFill } from "react-icons/ri";
const data = [
  {
    id: "1",
    name: "Rahul Pradhan",
    img: "data:image/jpeg;base64,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",
    time: "",
  },
  {
    id: "2",
    name: "Virat Kohli",
    img: "https://images.news18.com/ibnlive/uploads/2022/04/virat-kohli-ipl-2022-16503861083x2.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal",
    time: "",
  },
  {
    id: "3",
    name: "KL Rahul",
    img: "https://cricgram.b-cdn.net/wp-content/uploads/2019/08/KL-Rahul.jpg",
    time: "",
  },
  {
    id: "4",
    name: "MS Dhoni",
    img: "https://c.ndtvimg.com/2021-11/o66r0bb8_ms-dhoni-ipl_625x300_20_November_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
    time: "",
  },
];

const Approval = () => {
  return (
    <div className="w-full shadow-sm bg-white text-gray-700 ">
      <header className="flex justify-start items-center gap-3 py-3 shadow-sm px-8">
        <div className="bg-yellow-600 rounded-full p-[6px]"></div>
        <h1 className="font-semibold text-">Pending approval</h1>
        <RiCheckboxFill className="text-yellow-600 text-xl" />
      </header>
      <div className="flex flex-row">
        <div className="basis-1/2 py-4 border-r-[1px] border-gray-400 ">
          <div className="flex justify-between items-center px-8">
            <h1 className="font-bold text-sm font-sans text-gray-700">
              Time Off
            </h1>
            <h3 className="font-bold text-sm text-green-600"> 4 requests</h3>
          </div>
          <div className="px-8 py-4 h-[150px] overflow-y-scroll">
            {data.map((item) => (
              <div
                className="flex justify-between items-center my-5"
                key={item.id}
              >
                <h1 className="font-semibold text-sm font-sans flex items-center gap-1 text-gray-500">
                  <img
                    className="h-[20px] w-[20px] object-cover rounded-full"
                    alt="person"
                    src={item.img}
                  />
                  {item.name}
                </h1>
                <h3 className="font-semibold text-sm text-gray-400  ">
                  4 hrs . annual leave
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="basis-1/2 py-4  ">
          <div className="flex justify-between items-center px-8">
            <h1 className="font-bold text-sm font-sans text-gray-700">
              Time Attendance
            </h1>
            <h3 className="font-bold text-sm text-green-600"> 4 requests</h3>
          </div>
          <div className="px-8 py-4 h-[150px] overflow-y-scroll">
            {data.map((item) => (
              <div
                className="flex justify-between items-center my-5"
                key={item.id}
              >
                <h1 className="font-semibold text-sm font-sans flex items-center gap-1 text-gray-500">
                  <img
                    className="h-[20px] w-[20px] object-cover rounded-full"
                    alt="person"
                    src={item.img}
                  />
                  {item.name}
                </h1>
                <h3 className="font-semibold text-sm text-gray-700 px-1 bg-gray-200 ">
                  75/100
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approval;
