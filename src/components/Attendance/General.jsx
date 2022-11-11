import React, { useState } from "react";
import DatePicker from "react-date-picker";

const General = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex flex-col  py-8 gap-4">
      <div className="flex justify-between items-center">
        <p className="text-md font-semibold text-gray-600">
          Total Hours Calculation *
        </p>
        <select className="select w-auto max-w-xs" disabled>
          <option>Every Valid check in & check out</option>
        </select>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-md font-semibold text-gray-600">
          Attendance Start Date *
        </p>
        <DatePicker onChange={setDate} value={date} />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-md font-semibold text-gray-600">
          Attendance Approval Cycle *
        </p>
        <div className="flex items-center gap-2">
          <select className="select  select-bordered  max-w-xs">
            <option selected>1</option>

            <option>2</option>
          </select>
          <select className="select  select-bordered  max-w-xs">
            <option selected>weekly</option>
            <option>monthly</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-md font-semibold text-gray-600">Repeat On *</p>
        <select className="select w-auto select-bordered max-w-xs">
          <option>Monthly on day 2</option>
        </select>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-md font-semibold text-gray-600">Location *</p>
        <select className="select w-auto select-bordered max-w-xs" disabled>
          <option>All office</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-xs checkbox-info "
        />
        <h1 className="text-sm text-gray-400">
          Managers will receive notifications 1 day before the end of the
          attendance cycle
        </h1>
      </div>
    </div>
  );
};

export default General;
