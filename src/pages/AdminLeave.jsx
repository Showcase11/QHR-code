import React from "react";
import { Layout } from "../components";
import LeaveTable from "../components/LeaveTable";

const AdminLeave = () => {
  return (
    <Layout>
      <div className="px-9">
        <h1 className="text-2xl font-roboto font-semibold my-8">
          Employees Leave Applications
        </h1>
        <div className="my-5">
          <LeaveTable />
        </div>
      </div>
    </Layout>
  );
};

export default AdminLeave;
