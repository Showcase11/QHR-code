import React from 'react';
import { Layout } from "../components";
import { IoMdCreate } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";

const TotalDeptTable = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
            <Layout>
           <div className="my-1 mx-8 mt-10">
    <div className="overflow-x-auto">
      <table className="table table-zebra w-2/4">
      <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Code</th>
              <th>No. Of Employees</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Sukanya</td>
              <td>Web Development</td>
              <td>12</td>
              <td>
            <button
          type="button"
          className="mr-5"
          onClick={(event) => handleEditClick(event, contact)}
        >
         <IoMdCreate />
        </button>
        <button type="button" className="mr-5" onClick={() => handleDeleteClick(contact.id)}>
          <IoTrashOutline />
        </button>
            </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Rahul Pradhan</td>
              <td>Web Development</td>
              <td>45</td>
              <td>
              <button
          type="button"
          className="mr-5"
          onClick={(event) => handleEditClick(event, contact)}
        >
         <IoMdCreate />
        </button>
        <button type="button" className="mr-5" onClick={() => handleDeleteClick(contact.id)}>
          <IoTrashOutline />
        </button>
              </td>
            </tr>
            <tr>
              <th>3</th>
              <td>Sahithya</td>
              <td>Web Development</td>
              <td>24</td>
              <td>
              <button
          type="button"
          className="mr-5"
          onClick={(event) => handleEditClick(event, contact)}
        >
         <IoMdCreate />
        </button>
        <button type="button" className="mr-5" onClick={() => handleDeleteClick(contact.id)}>
          <IoTrashOutline />
        </button>
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td>Ibrahim</td>
              <td>DevOps</td>
              <td>16</td>
              <td>
              <button
          type="button"
          className="mr-5"
          onClick={(event) => handleEditClick(event, contact)}
        >
         <IoMdCreate />
        </button>
        <button type="button" className="mr-5" onClick={() => handleDeleteClick(contact.id)}>
          <IoTrashOutline />
        </button>
              </td>
            </tr>
            <tr>
              <th>5</th>
              <td>Jahnavi</td>
              <td>HR</td>
              <td>35</td>
              <td>
              <button
          type="button"
          className="mr-5"
          onClick={(event) => handleEditClick(event, contact)}
        >
         <IoMdCreate />
        </button>
        <button type="button" className="mr-5" onClick={() => handleDeleteClick(contact.id)}>
          <IoTrashOutline />
        </button>
              </td>
            </tr>
            <tr>
              <th>6</th>
              <td>Sukanya</td>
              <td>Mobile App</td>
              <td>20</td>
              <td>
              <button
          type="button"
          className="mr-5"
          onClick={(event) => handleEditClick(event, contact)}
        >
         <IoMdCreate />
        </button>
        <button type="button" className="mr-5" onClick={() => handleDeleteClick(contact.id)}>
          <IoTrashOutline />
        </button>
              </td>
            </tr>
          </tbody>
      </table>
      </div>
      </div>
        </Layout>
    );
};

export default TotalDeptTable;