import React, { useState, useEffect } from "react";
import axios from "axios";
import Header2 from "../../Components/Header2";
import SideBar from "../../Components/Sidebar2";
import Modal from "react-modal";
import baseUrl from "../const/baseUrl";

Modal.setAppElement("#root"); // Set the app element for react-modal

const AdminCarList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [cars, setCars] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for edit modal
  const [selectedCar, setSelectedCar] = useState(null);
  const token = localStorage.getItem("token");
  const [make, setMake] = useState("");
  const [rental, setRental] = useState("");
  const [model, setModel] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const user = localStorage.getItem("userId");

  const [editedCar, setEditedCar] = useState({
    make: "",
    rental: "",
    model: "",
    status: "",
    image: "",
    user: localStorage.getItem("userId"),
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleModal1 = (car) => {
    setSelectedCar(car);
    setIsModalOpen1(!isModalOpen1);
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${baseUrl}cars`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Match Postman request
          },
        });

        console.log(response);
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchProperties();
  }, [token, user]);

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first (and only) file
    if (file) {
      setImage(file); // Store the single file in the state
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("make", make);
    formData.append("rental", rental);
    formData.append("model", model);
    formData.append("status", status);

    if (image) {
      formData.append("image", image); // Append the single file
    }

    try {
      const response = await fetch(`${baseUrl}cars`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.status === 201) {
        const data = await response.json();
        console.log("Car saved successfully:", data);
        clearForm(); // Clear the form fields
        setIsModalOpen(false); // Close the modal
      } else {
        const errorData = await response.text();
        console.error("Failed to save car:", errorData);
        throw new Error("Failed to save car");
      }
    } catch (error) {
      console.error("Error saving car:", error.message);
    }
  };

  const clearForm = () => {
    setMake("");
    setRental("");
    setModel("");
    setStatus("");
    setImage("");
  };

  const toggleEditModal = (car) => {
    setSelectedCar(car);
    setEditedCar({ ...car });
    setIsEditModalOpen(true); // Ensure the modal opens
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const propId = selectedCar._id;

    if (!selectedCar || !selectedCar._id) {
      console.error("Selected car is not defined or missing id");
      return;
    }

    Object.keys(editedCar).forEach((key) => {
      if (key === "image" && editedCar.image instanceof FileList) {
        Array.from(editedCar.image).forEach((file) => {
          formData.append("image", file); // Ensure the key matches the backend expectation
        });
      } else {
        formData.append(key, editedCar[key]);
      }
    });

    try {
      const response = await axios.put(`${baseUrl}cars/${propId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response from server:", response.data);

      const updatedCars = cars.map((car) =>
        car._id === selectedCar._id ? response.data : car
      );

      setCars(updatedCars);
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error updating car:", error);
    }
  };

  const handleDelete = async (car) => {
    try {
      const response = await axios.delete(`${baseUrl}cars/${car._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const updatedProperties = cars.filter((car) => car.id !== car);
        setCars(updatedProperties);
        console.log("Property deleted successfully");
      } else {
        throw new Error("Failed to delete car");
      }
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  return (
    <div className="dashb">
      <section className="dashboard">
        <SideBar />
        <main>
          <Header2 />
          <div className="add">
            <h2>CarLists</h2>
            <button onClick={toggleModal}>Add Car</button>
          </div>

          <table>
            <thead>
              <tr className="heading">
                <th >Make</th>
                <th >Model</th>
                <th >Price</th>
                <th  >Availability</th>
                <th className="dt">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car._id}>
                  <td>{car.make}</td>
                  <td >{car.model}</td>
                  <td >£{car.rental}</td>
                  <td className="dt">{car.isAvailable ? 'Yes' : 'No'}</td>
                  <td className="dt">
                    <button onClick={() => toggleModal1(car)}>
                      Details
                    </button>
                  </td>
                  <td className="dt">
                    <button onClick={() => toggleEditModal(car)}>Edit</button>
                  </td>
                  <td className="dt">
                    <button onClick={() => handleDelete(car)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </section>

      {/* Add Car Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="Add Car"
        className={`bg-transparent`}
        style={{
          overlay: {
            position: "fixed",
            top: "0",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "hsla(0, 0%, 0%, .8)",
            zIndex: 100000,
          },
        }}
      >
        <div className="modal1">
          <div className="modal1-content">
            <div className="close">
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ cursor: "pointer" }}
              >
                X
              </button>
            </div>
            <form className="product-form" onSubmit={handleSubmit}>
              <div>
                <p>Make</p>
                <input
                  type="text"
                  name="make"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                />
              </div>
              <div>
                <p>Price</p>
                <input
                  type="text"
                  name="rental"
                  value={rental}
                  onChange={(e) => setRental(e.target.value)}
                  placeholder="£32"
                />
              </div>
              <div>
                <p>Model</p>
                <input
                  type="text"
                  name="model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="car model"
                />
              </div>
              <div>
                <p>Status</p>
                <select
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="available">Available</option>
                  <option value="rented">Not Available</option>
                </select>
              </div>
              <div>
                <p>Images</p>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                />
              </div>

              <div>
                <button type="submit">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>

      {/* Car Details Modal */}
      <Modal
        isOpen={isModalOpen1}
        onRequestClose={toggleModal1}
        contentLabel="Car Details"
        className={`bg-transparent`}
        style={{
          overlay: {
            position: "fixed",
            top: "0",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "hsla(0, 0%, 0%, .8)",
            zIndex: 100000,
          },
        }}
      >
        <div className="modal1">
          <div className="modal1-content">
            <div className="close">
              <button
                onClick={() => setIsModalOpen1(false)}
                aria-label="Close"
                style={{ cursor: "pointer" }}
              >
                X
              </button>
            </div>
            {selectedCar && (
              <section className="product-info">
                <div className="product-image">
                  {/* Display the single image */}
                  {selectedCar.image ? (
                    <img
                      src={selectedCar.image}
                      alt={`${selectedCar.make} ${selectedCar.model}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "4px",
                      }}
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                </div>
                <div className="others">
                  <p>
                    Make: <span>{selectedCar.make}</span>
                  </p>
                  <p>
                    Model: <span>{selectedCar.model}</span>
                  </p>
                  <p>
                    Rental Price: <span>{selectedCar.rental}</span>
                  </p>
                  <p>
                    Status: <span>{selectedCar.status}</span>
                  </p>
                </div>
              </section>
            )}
          </div>
        </div>
      </Modal>
      
      {/* Edit Car Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        contentLabel="Edit Car Details"
        className="bg-transparent"
        style={{
          overlay: {
            position: "fixed",
            top: "0",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "hsla(0, 0%, 0%, .8)",
            zIndex: 100000,
          },
        }}
      >
        <div className="modal1">
          <div className="modal1-content">
            <div className="close">
              <button
                onClick={() => setIsEditModalOpen(false)}
                style={{ cursor: "pointer" }}
              >
                X
              </button>
            </div>
            <form className="product-form" onSubmit={handleEditSubmit}>
              {/* Form inputs */}
              <div>
                <p>Make</p>
                <input
                  type="text"
                  name="make"
                  value={editedCar.make}
                  onChange={(e) =>
                    setEditedCar({
                      ...editedCar,
                      make: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <p>Price</p>
                <input
                  type="text"
                  name="rental"
                  value={editedCar.rental}
                  onChange={(e) =>
                    setEditedCar({
                      ...editedCar,
                      rental: e.target.value,
                    })
                  }
                  placeholder="£32"
                />
              </div>
              <div>
                <p>Model</p>
                <input
                  type="text"
                  name="model"
                  value={editedCar.model}
                  onChange={(e) =>
                    setEditedCar({
                      ...editedCar,
                      model: e.target.value,
                    })
                  }
                  placeholder="1,150 Sq. Ft."
                />
              </div>
              <div>
                <p>Images</p>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => handleFileChange(e)}
                />
              </div>
              <div>
                <p>Status</p>
                <input
                  type="text"
                  name="status"
                  value={editedCar.status}
                  onChange={(e) =>
                    setEditedCar({
                      ...editedCar,
                      status: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <button type="submit">Update Property</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AdminCarList;
