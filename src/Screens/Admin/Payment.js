import React, { useState, useEffect } from "react";
import axios from "axios";
import Header2 from '../../Components/Header2';
import Sidebar2 from '../../Components/Sidebar2';
import Modal from "react-modal";
import baseUrl from "../const/baseUrl";

const Payment = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [payments, setPayments] = useState([]);
  // const [availableCars, setAvailableCars] = useState([]);
  const token = localStorage.getItem("token");
  const [selectedPayment, setSelectedPayment] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(`${baseUrl}payments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPayments(response.data);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };

    // const fetchAvailableCars = async () => {
    //   try {
    //     const response = await axios.get(`${baseUrl}cars?status=available`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //     setAvailableCars(response.data);
    //   } catch (error) {
    //     console.error("Error fetching available cars:", error);
    //   }
    // };

    fetchPayments();
    //fetchAvailableCars();
  }, [token]);


  const toggleModal1 = (payment) => {
    setSelectedPayment(payment);
    setIsModalOpen1(!isModalOpen1);
  };


  const handleDelete = async (paymentId) => {
    try {
      const response = await axios.delete(`${baseUrl}payments/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setPayments(payments.filter((payment) => payment._id !== paymentId));
        console.log("Payment deleted successfully");
      } else {
        throw new Error("Failed to delete payment");
      }
    } catch (error) {
      console.error("Error deleting payment:", error);
    }
  };

  return (
    <div className="dashb">
      <section className="dashboard">
        <Sidebar2 />
        <main>
          <Header2 />
          <div className="add">
            <h2>Payment List</h2>
          </div>

          <table>
            <thead>
              <tr className="heading">
                {/* <th>Car</th> */}
                <th>Booking</th>
                <th>Amount</th>
                <th>Date</th>
                <th className='dt'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment._id}>
                  <td>{payment.bookingId}</td>
                  <td className='dt'>{payment.amount}</td>
                  <td className='dt'>{new Date(payment.paymentdate).toLocaleDateString()}</td>
                  <td className='dt'>
                    <button onClick={() => toggleModal1(payment)}>
                      Details
                    </button>
                  </td>
                  <td className='dt'>
                    <button onClick={() => handleDelete(payment._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </section>

      {/* Payment Details Modal */}
      {selectedPayment && (
        <Modal
          isOpen={isModalOpen1}
          onRequestClose={() => setIsModalOpen1(false)}
          contentLabel="Payment Details"
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
                  style={{ cursor: "pointer" }}
                >
                  X
                </button>
              </div>
              <div>
                <h2>Payment Details</h2>
                <p><strong>Booking:</strong> {selectedPayment.bookingId}</p>
                <p><strong>Amount:</strong> ${selectedPayment.amount}</p>
                <p><strong>Payment Date:</strong> {new Date(selectedPayment.paymentdate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Payment;
