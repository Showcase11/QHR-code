import React, {useState} from 'react';
import { useGlobalContext } from "../../context/context";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Address = () => {
    const[close, setClose] = useState(false);
    const [getAddressDataById, setAddressDataById] = useState([])
    const [editAddressDataById, latestEdit] = useState({ address:'', country: '', postalCode: '', city: '', state: '' })
    const onClose = () => {
        setClose(true);
    }
    const { setLoading, saveUser, user, url } = useGlobalContext();
    const navigate = useNavigate();
    
    const handleChange = ({ target }) => {
        console.log(target);
        const { name, value } = target

        const newData = Object.assign({}, getAddressDataById, { [name]: value });
        setAddressDataById(newData);

        const latestData = Object.assign({}, editAddressDataById, { [name]: value })
        latestEdit(latestData)
    }

    const handleSubmit = async (e)  => {
        e.preventDefault();
        console.log(editAddressDataById)
        const editDataById = async () => {
            try {
                const response = await axios.put(`${url}/employee/${user._id}`, editAddressDataById)
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
                           Primary Address
                        </label>
                        <textarea
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            placeholder='First Name'
                            name='address'
                            required
                            value={getAddressDataById.address} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="lastname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Country
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            placeholder='Last Name'
                            name='country'
                            required
                            value={getAddressDataById.country} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            placeholder='Last Name'
                            name='city'
                            required
                            value={getAddressDataById.city} 
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
                            State/Province
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            placeholder='Last Name'
                            name='state'
                            required
                            value={getAddressDataById.state} 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="marital status"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Postal Code
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            placeholder='Last Name'
                            name='postalCode'
                            required
                            value={getAddressDataById.postalCode} 
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

export default Address;