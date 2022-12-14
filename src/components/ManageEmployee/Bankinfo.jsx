import React, { useState } from 'react';
import { useGlobalContext } from "../../context/context";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Bankinfo = () => {
    
    const[close, setClose] = useState(false);
    const [getBankInfoDataById, setBankinfoDataById] = useState([])
    const [editBankInfoDataById, latestEdit] = useState({ branchName:'', bankName: '', upi: '', country: '' })
    const onClose = () => {
        setClose(true);
    }
    const { setLoading, saveUser, user, url } = useGlobalContext();

    const navigate = useNavigate();
    
    const handleChange = ({ target }) => {
        console.log(target);
        const { name, value } = target

        const newData = Object.assign({}, getBankInfoDataById, { [name]: value });
        setBankinfoDataById(newData);

        const latestData = Object.assign({}, editBankInfoDataById, { [name]: value })
        latestEdit(latestData)
    }

    const handleSubmit = async (e)  => {
        e.preventDefault();
        console.log(editBankInfoDataById)
        const editDataById = async () => {
            try {
                const response = await axios.put(`${url}/employee/${user._id}`, editBankInfoDataById)
                latestEdit(response.data)
                setLoading(false);
      saveUser(response.data.data);
      toast.success("Data Saved successfully");
      navigate("/profile");
                console.log(response.data)
            } catch (error) {
                toast.error(e?.response?.data?.message);
                setLoading(false);
                console.log(error)
            }
        }
        editDataById()
    }
    return (
        <div>
             <form className="w-full" onSubmit={handleSubmit}>
           <div className='flow-root'>
  <div className='float-left w-[49%]'>
  <div className="mb-2">
                        <label
                            for="firstname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           Bank Name*
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            placeholder='Bank Name'
                            name='bankName'
                            required
                            value={getBankInfoDataById.bankName} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="lastname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Branch
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            placeholder='Branch'
                            name='branch'
                            required
                            value={getBankInfoDataById.branch} 
                            onChange={handleChange}
                        />
                    </div>
                    
  </div>
  <div className='float-right w-[49%]'>
  <div className="mb-2">
                        <label
                            for="gender"
                           className="block text-sm font-semibold text-gray-800"
                        >
                            Account Name
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            placeholder='Account Name'
                            name='accountName'
                            required
                            value={getBankInfoDataById.accountName} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="marital status"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           Account Number
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            placeholder='E.G. 4932'
                            name='accountNumber'
                            required
                            value={getBankInfoDataById.accountNumber} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="marital status"
                            className="block text-sm font-semibold text-gray-800"
                        >
                           IBAN
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2  bg-white border rounded-md"
                            placeholder='E.G. NL63 HNDK 7000708362'
                            name='upi'
                            required
                            value={getBankInfoDataById.upi} 
                            onChange={handleChange}
                        />
                    </div>
                    
  </div>
  </div>
  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
<div className="rounded-md shadow">
 <button value="Submit" className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-3 py-2 text-base font-bold text-white hover:bg-green-500  md:px-5 text-sm">Save</button>
</div>
<div className="mt-3 sm:mt-0 sm:ml-3">
 <button onClick={onClose} value={close} className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-300 px-3 py-2 text-base font-bold text-slate-600 hover:bg-slate-400 md:px-5 text-lg">Cancel</button>
</div>
</div>
</form>
        </div>
    );
};

export default Bankinfo;