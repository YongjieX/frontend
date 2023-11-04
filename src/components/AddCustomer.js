import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AddCustomer(props) {

  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <button onClick={handleShow} className="bg-purple-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-red font-bold py-2 px-4 rounded">Update Customer</button>
   

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form  
          onSubmit={(e)=>{
            e.preventDefault();
            console.log(props.id, role, name);
   
            props.updateEmployee(props.id,name,role);

          }}
          id='editmodal' 
          className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                Customer Name
              </label>
            </div>  
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
              id="name" 
              type="text" 
              placeholder='Google'
              value={name}
              onChange={(e)=>{
                setName(e.target.value);
              }}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="industry">
                Organization
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="industry" type="text" 
              value={role}
              placeholder='Tech'
              onChange={(e)=>{
                setRole(e.target.value);
              }}
              />
            </div>
          </div>
        
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button id='editmodal' className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" > Update
          </button>
          <button id='editmodal' className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={handleClose}> Close</button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

