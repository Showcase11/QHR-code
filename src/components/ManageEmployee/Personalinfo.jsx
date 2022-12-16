import React, {useState} from 'react';
import { useGlobalContext } from "../../context/context";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Personaliinfo = () => {
    const { setLoading, saveUser, user, url } = useGlobalContext();
    const [getStudentDataById, setStudentDataById] = useState([])

    const [editStudentDataById, latestEdit] = useState({ name:'', age: '', country: '', gender: '', email: '', emergencyNumber: '' })

    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        console.log(target);
        const { name, value } = target

        const newData = Object.assign({}, getStudentDataById, { [name]: value });
        setStudentDataById(newData);

        const latestData = Object.assign({}, editStudentDataById, { [name]: value })
        latestEdit(latestData)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(editStudentDataById)
        const editDataById = async () => {
            console.log(user);
            try {
                const response = await axios.put(`${url}/employee/${user._id}`, editStudentDataById)
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
            <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <form onSubmit={handleSubmit}>
                    <div className='flow-root'>
                <div className='float-left w-[49%] pr-5'>
                        <div className="form-group">
                        <label
                            for="firstname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                            <input type="text" name='name' required value={getStudentDataById.name} onChange={handleChange} className="block w-full px-4 py-2 mt-2 bg-white border rounded-md" id="name"></input>
                        </div>
                        <div className="form-group">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Age
                        </label>
                            <input type="text" name='age' required value={getStudentDataById.age} onChange={handleChange} className="block w-full px-4 py-2 mt-2 bg-white border rounded-md" id="age"></input>
                        </div>
                        <div className="form-group">
                        <label
                            for="nationality"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Nationality
                        </label>
                            <input type="text" name='country' required value={getStudentDataById.country} onChange={handleChange} className="block w-full px-4 py-2 mt-2 bg-white border rounded-md" id="countrty"></input>
                        </div>
                        </div>
                        <div className='float-left w-[49%]'>
                        <div className="form-group">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email Address
                        </label>
                            <input type="email" name='email' required onChange={handleChange} value={getStudentDataById.email} className="block w-full px-4 py-2 mt-2 bg-white border rounded-md" id="email"></input>                        </div>
                        <div className="form-group">
                        <label
                            for="gender"
                           className="block text-sm font-semibold text-gray-800"
                        >
                            Gender
                        </label>
                        <input type="text" name='gender' required value={getStudentDataById.gender} onChange={handleChange} className="block w-full px-4 py-2 mt-2 bg-white border rounded-md" id="gender"></input>
                        </div>
                        <div className="form-group pb-3">
                        <label
                            for="phonenumber"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Phone Number
                        </label>
                            <input type="number" name='emergencyNumber' required onChange={handleChange} value={getStudentDataById.emergencyNumber} className="block w-full px-4 py-2 mt-2 bg-white border rounded-md" id="emergencyNumber"></input>
                        </div>
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Personaliinfo;