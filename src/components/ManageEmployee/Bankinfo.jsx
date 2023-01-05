import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Bankinfo = ({ setBankinfo }) => {
  const { setLoading, saveUser, user, url } = useGlobalContext();
  const [formData, setFormData] = useState({
    bankName: user?.bankName,
    bankAccount: user?.bankAccount,
    branchName: user?.branchName,
    upi: user?.upi,
    ifscCode: user?.ifscCode,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.put(`${url}/employee/${user._id}`, formData);
      toast.success("Data Updated");

      saveUser(res.data.data);
      setBankinfo(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div class="flex flex-col justify-center">
    <div class="relative">
    <form onSubmit={handleSubmit}>
      <div class="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mb-5">
        <div class="relative">
        <div className="form-group">
        <label
                 for="bankName"
                 className="block text-sm font-semibold text-gray-800"
               >
                 Bank Name*
               </label>
               <input
                 type="text"
                 className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                 placeholder="Bank Name"
                 name="bankName"
                 required
                 value={formData.bankName}
                 onChange={handleChange}
               />
                    </div>
                    <div className="form-group">
                    <label
                 for="branchName"
                 className="block text-sm font-semibold text-gray-800"
               >
                 Branch
               </label>
               <input
                 type="text"
                 className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                 placeholder="branchName"
                 name="branchName"
                 required
                 value={formData.branchName}
                 onChange={handleChange}
               />
                    </div>
                    <div className="form-group">
        <label
                 for="ifscCode"
                 className="block text-sm font-semibold text-gray-800"
               >
                 ifscCode
            </label>
               <input
                 type="text"
                 className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                 placeholder="ifscCode"
                 name="ifscCode"
                 required
                 value={formData.ifscCode}
                 onChange={handleChange}
               />
                    </div>
        </div>
        <div class="">
        <div className="form-group">
        <label
                 for="upi"
                 className="block text-sm font-semibold text-gray-800"
               >
                 UPI
               </label>
               <input
                 type="text"
                 className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                 placeholder="upi"
                 name="upi"
                 required
                 value={formData.upi}
                 onChange={handleChange}
               />
                    </div>
          <div className="form-group">
                    <label
                 for="marital status"
                 className="block text-sm font-semibold text-gray-800"
               >
                 Account Number
               </label>
               <input
                 type="text"
                 className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                 placeholder="E.G. 4932"
                 name="bankAccount"
                 required
                 value={formData.bankAccount}
                 onChange={handleChange}
               />
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-start items-center">
           <button type="submit" className="btn btn-sm btn-info capitalize">
             Submit
           </button>
           <button
             onClick={() => setBankinfo(false)}
             className="btn btn-error btn-sm capitalize"
           >
             cancel
           </button>
         </div>
                 </form>
    </div>
  </div>
      // <form className="w-full" onSubmit={handleSubmit}>
      //   <div className="flow-root">
      //     <div className="float-left w-[49%]">
      //       <div className="mb-2">
      //         <label
      //           for="bankName"
      //           className="block text-sm font-semibold text-gray-800"
      //         >
      //           Bank Name*
      //         </label>
      //         <input
      //           type="text"
      //           className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
      //           placeholder="Bank Name"
      //           name="bankName"
      //           required
      //           value={formData.bankName}
      //           onChange={handleChange}
      //         />
      //       </div>
      //       <div className="mb-2">
      //         <label
      //           for="branchName"
      //           className="block text-sm font-semibold text-gray-800"
      //         >
      //           Branch
      //         </label>
      //         <input
      //           type="text"
      //           className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
      //           placeholder="branchName"
      //           name="branchName"
      //           required
      //           value={formData.branchName}
      //           onChange={handleChange}
      //         />
      //       </div>
      //       <div className="mb-2">
      //         <label
      //           for="ifscCode"
      //           className="block text-sm font-semibold text-gray-800"
      //         >
      //           ifscCode
      //         </label>
      //         <input
      //           type="text"
      //           className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
      //           placeholder="ifscCode"
      //           name="ifscCode"
      //           required
      //           value={formData.ifscCode}
      //           onChange={handleChange}
      //         />
      //       </div>
      //       <div className="mb-2">
      //         <label
      //           for="upi"
      //           className="block text-sm font-semibold text-gray-800"
      //         >
      //           UPI
      //         </label>
      //         <input
      //           type="text"
      //           className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
      //           placeholder="upi"
      //           name="upi"
      //           required
      //           value={formData.upi}
      //           onChange={handleChange}
      //         />
      //       </div>
      //     </div>
      //     <div className="float-right w-[49%]">
      //       <div className="mb-2">
      //         <label
      //           for="marital status"
      //           className="block text-sm font-semibold text-gray-800"
      //         >
      //           Account Number
      //         </label>
      //         <input
      //           type="text"
      //           className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
      //           placeholder="E.G. 4932"
      //           name="bankAccount"
      //           required
      //           value={formData.bankAccount}
      //           onChange={handleChange}
      //         />
      //       </div>
      //     </div>
      //   </div>
      //   <div className="flex gap-2 justify-start items-center">
      //     <button type="submit" className="btn btn-sm btn-info capitalize">
      //       Submit
      //     </button>
      //     <button
      //       onClick={() => setBankinfo(false)}
      //       className="btn btn-error btn-sm capitalize"
      //     >
      //       cancel
      //     </button>
      //   </div>
      // </form>
  );
};

export default Bankinfo;
