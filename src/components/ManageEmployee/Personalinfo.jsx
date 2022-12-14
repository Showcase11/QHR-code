import React, {useState, useEffect} from 'react';
import { useGlobalContext } from "../../context/context";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Personaliinfo = () => {
    const { setLoading, saveUser, user, url } = useGlobalContext();
    const [getStudentDataById, setStudentDataById] = useState([])

    const [editStudentDataById, latestEdit] = useState({ name:'', age: '', country: '', gender: '', email: '', emergencyNumber: '' })

    // const id = props.match.params.id
    // console.log(id)



    // useEffect(() => {
    //     const getDataById = async () => {
    //         try {
    //             const result = await axios.get(`${url}/employee/${user._id}`)
    //             setStudentDataById(result.data)
    //             console.log(result.data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getDataById()
    // }, [])
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
    // const { user, fetchUsers, url } = useGlobalContext();
        
    // const[close, setClose] = useState(false);
    // const [post, setPost] = useState({
    //     name: "",
    //     age: "",
    //     emergencyNumber: "",
    //     email: "",
    //     country: "",
    //     gender: "",
    //     isAdmin: false,
    //     joined: "",
    // });
    // const onClose = () => {
    //     setClose(true);
    // }
    // const handleChange = ({target}) => {
    //     const {name, value} = target;
    //     setPost({...post, [name]: value});
    //     console.log(post);
    // };

    //   const handleEditFormSubmit = async (e) =>{
    //     alert('dfdvd');
    //     const editedContact = {
    //         name: "",
    //         age:"",
    //         emergencyNumber: "",
    //         email: "",
    //         country: "",
    //         gender: "",
    //         isAdmin: user.isAdmin,
    //       };
    //       console.log(editedContact);
    //       try {
    //         const res = await axios.put(
    //           `${url}/employee/${post.id}`,
    //           editedContact
    //         );
    //         console.log(res);
    //         toast.success("Updated");
    //         fetchUsers();
    //       } catch (error) {
    //         toast.error("Something went wrong");
    //         console.log(error);
    //       }
    //       setPost(null);
    //     };

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
             {/* <form className="w-full" onSubmit={handleEditFormSubmit}>
           <div className='flow-root'>
  <div className='float-left w-[49%]'>
  <div className="mb-2">
                        <label
                            for="firstname"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name*
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            placeholder='First Name'
                            name="name"
                            value={post.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="dob"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Age
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            placeholder='Age'
                            name="age"
                            value={post.age}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="nationality"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Nationality
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            placeholder='Nationality'
                            name="country"
                            value={post.country}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            placeholder='Email Address'
                            name="email"
                            value={post.email}
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
                            Gender
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            placeholder='Gender'
                            name="gender"
                            value={post.gender}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="phonenumber"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Phone Number
                        </label>
                        <input
                            type="number"
                            className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                            name="emergencyNumber"
                            value={post.emergencyNumber}
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
</form> */}
        </div>
    );
};

export default Personaliinfo;