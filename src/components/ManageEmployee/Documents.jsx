import React, {useState} from 'react';

const Documents = () => {
  const [selectedFile, setSelectedFile] = useState(false);
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		// setSelectedFile(event.target.files[0]);
		setSelectedFile(true);
	};
  const handleSubmission = () => {
	};

    return (
      <div>
        <div className="w-full px-4 py-5 bg-base-100 border mt-5">
        <div className='pb-7'>
            <h1 className='font-bold'>Contracts</h1>
            </div>
            <div className="flex w-full">
            <input type="file" name="file" onChange={changeHandler} />
			{selectedFile ? (
				<div className='w-full'>
					Next renewal on 20 Nov 2022
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
</div>
        </div>
        <div className="w-full px-4 py-5 bg-base-100 border mt-5">
        <div className='pb-7'>
            <h1 className='font-bold'>Personal Documents</h1>
            </div>
            <div className="flex w-full">
            <input type="file" name="file" onChange={changeHandler} />
			{selectedFile ? (
				<div className='w-full'>
					Next renewal on 20 Nov 2022
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
</div>
        </div>
        <div className="w-full px-4 py-5 bg-base-100 border mt-5">
        <div className='pb-7'>
            <h1 className='font-bold'>Payslips</h1>
            </div>
            <div className="w-full text-center">
           <h1>No documents yet</h1>
           <p>Keep your info up to date by uploading new documents here.</p>
</div>
        </div>
        </div>
    );
};

export default Documents;