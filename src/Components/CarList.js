import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import baseUrl from "../Screens/const/baseUrl";
// import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CarList = () => {
  // const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  // const user = JSON.parse(localStorage.getItem('user'));

  
  useEffect(() => {
    if (startDate && endDate && selectedCar) {
      const calculateTotalPrice = (startDate, endDate, rentalPrice) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const timeDiff = Math.abs(end - start);
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
        return diffDays * rentalPrice;
      };

      if (selectedCar.rental) {
        const calculatedPrice = calculateTotalPrice(
          startDate,
          endDate,
          selectedCar.rental
        );
        setTotalPrice(calculatedPrice);
      }
    }
  }, [startDate, endDate, selectedCar]);

  useEffect(() => {
    axios
      .get(`${baseUrl}cars`)
      .then((response) => {
        setCars(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching cars:", error);
      });
  }, []);


  const toggleModal1 = () => {
    setIsModalOpen1(!isModalOpen1);
  };

  const openModalWithCar = (car) => {
    setSelectedCar(car);
    setIsModalOpen1(true);
  };

  const openBookingModal = (car) => {
    setSelectedCar(car);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  Modal.setAppElement("#root");

  const handleBooking = async (e) => {
    e.preventDefault();
  
    const paymentDetails = {
      carId: selectedCar._id,
      userEmail: userEmail,
      startDate,
      endDate,
      price: totalPrice,
    };
  
    try {
      const response = await axios.post(`${baseUrl}bookings/`, paymentDetails);
      // Check if the status code is 201
      if (response.status === 201) {
        const { bookingId, message } = response.data; // Extract the booking ID and message from the response
        
        // Notify the user based on the response message
        alert(message || "Booking successful!");
    
        // Close the booking modal
        closeBookingModal();
    
        // Proceed with the payment using the booking ID
        handlePayment(bookingId);
      } else {
        // Handle unexpected status codes
        alert(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      closeBookingModal();
      console.error("Booking failed:", error);
  
      // Handle booking failure
      alert("Booking failed: " + (error.response?.data?.message || "An error occurred"));
    }
  };
  
  

  const handlePayment = async (bookingId) => {
    const paymentDetails = {
      bookingId,
      amount: totalPrice,
    };

    try {
      const response = await axios.post(`${baseUrl}payments`, paymentDetails);
      alert("Payment successful",response.data);
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Payment failed, please try again.");
    }
  };


  return (
    <div>
      <section className="car" id="cars">
        {cars.map((car, index) => (
          <div className="car1" key={index}>
            <div className="c-c">
              <img
                src={car.image ? car.image : "path/to/defaultImage.jpg"}
                alt="Car"
                onError={(e) => (e.target.src = "path/to/defaultImage.jpg")} // Fallback for broken images
              />
              <h2>
                {car.make} {car.model}
              </h2>
              <h4>${car.rental}</h4>
              <p>{car.status}</p>

              <div className="btns">
                <button onClick={() => openModalWithCar(car)}>Details</button>
                <button onClick={() => openBookingModal(car)}>Book</button>
              </div>
            </div>
          </div>
        ))}

        {/* Car Details Modal */}
        <Modal
          isOpen={isModalOpen1}
          onRequestClose={toggleModal1}
          contentLabel="Car Details Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          {selectedCar && (
            <div className="modal1">
              <div className="close">
                <button
                  onClick={() => setIsModalOpen1(false)}
                  style={{ cursor: "pointer" }}
                >
                  X
                </button>
              </div>
              <div className="modal1-content">
                <section className="car-details">
                  <div className="img">
                    <img
                      src={
                        selectedCar.image
                          ? selectedCar.image
                          : "path/to/defaultImage.jpg"
                      }
                      alt="Car"
                    />
                  </div>

                  <div className="txt">
                    <div className="place">
                      <h1>
                        {selectedCar.make} {selectedCar.model}
                      </h1>
                      <h2>${selectedCar.rental}</h2>
                    </div>

                    <div className="content">
                      <div className="d-c">
                        {/* <p>
                          <strong>Year:</strong> {selectedCar.year}
                        </p> */}
                        <p>
                          <strong>Availability:</strong>{" "}
                          {selectedCar.isAvailable
                            ? "Available"
                            : "Not Available"}
                        </p>
                      </div>
                    </div>

                    <div className="body">
                      <p>
                        <strong>Car Details:</strong>
                      </p>
                      <p>{selectedCar.description}</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}
        </Modal>

        {/* Payment Modal */}
        <Modal
          isOpen={isBookingModalOpen}
          onRequestClose={closeBookingModal}
          contentLabel="Payment Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          {selectedCar && (
            <div className="payment-modal">
              <div className="payment-content">
                <div className="close">
                  <button onClick={closeBookingModal}>X</button>
                </div>

                <section className="payment-details">
                  <img
                    src={selectedCar.image}
                    alt={`${selectedCar.make} ${selectedCar.model}`}
                    className="car-image"
                  />
                  <h1>
                    Payment for {selectedCar.make} {selectedCar.model}
                  </h1>
                  <p>
                    <strong>Price per day:</strong> ${selectedCar.rental}
                  </p>
                  <p>
                    <strong>Total Price:</strong> ${totalPrice}
                  </p>

                  <form onSubmit={handleBooking}>
                  <div>
                  {/* <label htmlFor="cardNumber">Card Number:</label> */}
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="form-control"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                          placeholder="user email"
                        />
                      
                  </div>
                    <div className="date-group">
                      <div>
                        <label htmlFor="startDate">Start Date:</label>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                          dateFormat="yyyy/MM/dd"
                          className="form-control"
                        />
                      </div>
                      <div>
                        <label htmlFor="endDate">End Date:</label>
                        <DatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          minDate={startDate}
                          dateFormat="yyyy/MM/dd"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="card-details-group">
                      <div className="form-group">
                        <label htmlFor="cardNumber">Card Number:</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          className="form-control"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="expiryDate">Expiry Date:</label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          className="form-control"
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cvv">CVV:</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          className="form-control"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn-pay">
                      Pay Now
                    </button>
                  </form>
                </section>
              </div>
            </div>
          )}
        </Modal>
      </section>
    </div>
  );
};

export default CarList;
