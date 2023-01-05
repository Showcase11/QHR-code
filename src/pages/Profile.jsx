import React, { useState, useEffect } from "react";
import { Layout } from "../components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useGlobalContext } from "../context/context";

const Profile = () => {
  const navigate = useNavigate();
  const { setLoading, saveUser, user, url, imageLink, uploadImage, loading } =
    useGlobalContext();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  const onChangePicture = (e) => {
    console.log(uploadImage(e.target.files[0]));
  };

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const onSubmit = async (data) => {
    console.log(data);

    try {
      console.log(imageLink);
      setLoading(true);
      const res = await axios.put(`${url}/employee/${user._id}`, {
        upi: data.upi,
        dob: data.dob,
        age: data.age,
        address: data.address,
        gender: data.gender,
        // profilepic: data.profilepic,
        bankAccount: data.accountNumber,
        ifscCode: data.ifscCode,
        country: data.country,
        emergencyNumber: data.emergencyNumber,
        isVisited: true,
        branchName: data.branchName,
        bankName: data.bankName,
        image: imageLink,
      });
      setLoading(false);
      saveUser(res.data.data);
      toast.success("Data Saved successfully");
      navigate("/profile");
    } catch (e) {
      console.log(e);
      toast.error(e?.response?.data?.message);
      setLoading(false);
    }
  };
  return (
    <Layout>
      {loading ? (
        <h1>Loadding..</h1>
      ) : (
        <div className="shadow bg-base-100 rounded-box w-2/4 md:w-[97%] xl:w-3/5 sm:w-11/12 lg:w-3/4 xs:w-full p-7 mt-10 m-auto content-center mb-10">
          <h1 className="text-xl font-roboto mb-5">Let us know about you !</h1>
          <form onSubmit={handleSubmit}>
    <div class="grid xs:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 pb-3">
      <div class="relative">
                <div className="form-group">
                  <label
                    for="upi"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    UPI ID
                  </label>
                  <input
                    type="text"
                    name="upi"
                    required
                    {...register("upi", { required: true })}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md "
                    placeholder="Enter your UI ID..."
                  />
                </div>
                <div className="form-group">
                  <label
                    for="dob"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    DOB
                  </label>
                  <input
                    type="date"
                    name="dob"
                    required
                    {...register("dob", { required: true })}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md "
                    placeholder="Enter your email..."
                  />
                </div>
                <div className="form-group">
                  <label
                    for="age"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Age
                  </label>
                  <input
                    type="text"
                    name="age"
                    required
                    {...register("age", { required: true })}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md "
                    placeholder="Enter your age..."
                  />
                </div>
                <div className="form-group">
                  <label
                    for="Address"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Address
                  </label>
                  <textarea
                    type="text"
                    name="address"
                    required
                    {...register("address", { required: true })}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                    placeholder="Enter your Address..."
                  />
                </div>
                <div className="form-group">
                  <label
                    for="gender"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Gender
                  </label>
                  <select
                    name="gender"
                    required
                    className="block w-full px-4 py-2 mt-2 text-grey-700 bg-white border rounded-md"
                    {...register("gender", { required: true })}
                  >
                    <option value="select">Select...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label
                    for="profilepic"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Profile Image
                  </label>
                  <input
                    id="profilePic"
                    type="file"
                    name="profilepic"
                    required
                    onChange={onChangePicture}
                  />
                  <div className="pt-5">
                    <img className="w-40 h-30" src={imageLink} alt="img" />
                  </div>
                </div>
                </div>
              <div className="">
                <div className="form-group">
                  <label
                    for="bankName"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Bank Name
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    required
                    {...register("bankName", { required: true })}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                    placeholder="Enter your Bank Name"
                  />
                </div>
                <div className="form-group">
                  <label
                    for="accountNumber"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Account Number
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    required
                    {...register("accountNumber", { required: true })}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                    placeholder="Enter your Account Number..."
                  />
                </div>
                <div className="form-group">
                  <label
                    for="branchName"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Branch Name
                  </label>
                  <input
                    type="text"
                    name="branchName"
                    required
                    {...register("branchName", { required: true })}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                    placeholder="Enter Bank Brach Name"
                  />
                </div>
                <div className="form-group">
                  <label
                    for="ifscCode"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    name="ifscCode"
                    required
                    {...register("ifscCode", { required: true })}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                    placeholder="Enter your IFSC Code..."
                  />
                </div>
                <div className="form-group">
                  <label
                    for="country"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Nationality
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    {...register("country", { required: true })}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                    placeholder="Enter your Country..."
                  />
                </div>
                <div className="form-group">
                  <label
                    for="emergencyNumber"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Emergency
                  </label>
                  <input
                    type="text"
                    name="emergencyNumber"
                    required
                    {...register("emergencyNumber", { required: true })}
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                    placeholder="Enter your Emergency Number..."
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="flex justify-center py-2 px-4 border border-transparent m-auto text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mt-10"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </Layout>
  );
};

export default Profile;
