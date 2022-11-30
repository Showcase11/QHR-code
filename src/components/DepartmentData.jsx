function DepartmentData({ handleChange, formInputData, handleSubmit }) {
  return (
    <div className="form-row row">
      <div className="flex">
        <input
          className="block px-4 py-2 mt-2 mr-4 ml-8 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
          type="text"
          name="name"
          value={formInputData.name}
          required
          placeholder="Enter a name..."
          onChange={handleChange}
        />
        <input
          className="block px-4 py-2 mt-2 mr-4 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
          type="text"
          name="department_code"
          value={formInputData.department_code}
          required
          placeholder="Enter an code..."
          onChange={handleChange}
        />

        <div className="col">
          <input
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          />
        </div>
      </div>
    </div>
  );
}
export default DepartmentData;
