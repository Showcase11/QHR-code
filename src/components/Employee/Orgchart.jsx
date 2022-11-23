import React  from 'react'
import {Link} from "react-router-dom";
const Orgchart = () => {
    return (
      <div>
        <div class="bg-white rounded shadow border p-10 w-64">
        <Link to="/employee" class="text-xl font-bold mb-4 mt-0">
                      Sahithya
                    </Link>
  <p class="text-gray-700 text-sm">Sahithya@gmail</p>
  <p>QS</p>
</div>
<div class="bg-white rounded shadow border p-10 w-64">
  <Link to="/employee" class="text-xl font-bold mb-4 mt-0">
                      Sukanya
                    </Link>
  <p class="text-gray-700 text-sm">sukanya@gmail</p>
  <p>QS</p>
</div>
      </div>
    );
};

export default Orgchart





    
   
