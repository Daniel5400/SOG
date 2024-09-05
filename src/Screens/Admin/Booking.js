import React, { useState, useEffect } from "react";
import axios from "axios";
import Header2 from '../../Components/Header2';
import Sidebar2 from '../../Components/Sidebar2';
import Modal from "react-modal";
import baseUrl from "../const/baseUrl";

const Booking = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [books, setBooks] = useState([]);
  // const [availableCars, setAvailableCars] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${baseUrl}bookings`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
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

    fetchBookings();
    //fetchAvailableCars();
  }, [token]);

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  const toggleModal1 = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen1(!isModalOpen1);
  };

  const handleDelete = async (bookingId) => {
    try {
      const response = await axios.delete(`${baseUrl}bookings/${bookingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setBooks(books.filter((booking) => booking._id !== bookingId));
        console.log("Booking deleted successfully");
      } else {
        throw new Error("Failed to delete booking");
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Invalid Date';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.error(`Invalid date: ${dateString}`);
      return 'Invalid Date';
    }
    return date.toLocaleDateString();
  };

  return (
    <div className="dashb">
      <section className="dashboard">
        <Sidebar2 />
        <main>
          <Header2 />
          <div className="add">
            <h2>Booking List</h2>
          </div>

          <table>
            <thead>
              <tr className="heading">
                <th>Vehicle</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Lender Name</th>
                <th className='dt'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((booking) => {
                // Check if booking.user is an object or ID
                const user = typeof booking.user === 'object' ? booking.user : null;

                return (
                  <tr key={booking._id}>
                    <td>{booking.car?.make}</td>
                    <td>{formatDate(booking.startDate)}</td>
                    <td>{formatDate(booking.endDate)}</td>
                    <td className='dt'>{booking.isAvailable ? 'Yes' : 'No'}</td>
                    <td>{user ? user.name : 'No user'}</td> {/* Display user name */}
                    <td className='dt'>
                      <button onClick={() => toggleModal1(booking)}>
                        Details
                      </button>
                    </td>
                    <td className='dt'>
                      <button onClick={() => handleDelete(booking._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
      </section>

      {/* Booking Details Modal */}
      <Modal
        isOpen={isModalOpen1}
        onRequestClose={() => setIsModalOpen1(false)}
        contentLabel="Booking Details"
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
            {selectedBooking && (
              <div>
                <h2>Booking Details</h2>
                <p><strong>Vehicle:</strong> {selectedBooking.car?.make} - {selectedBooking.car?.model}</p>
                <p><strong>Start Date:</strong> {formatDate(selectedBooking.startDate)}</p>
                <p><strong>End Date:</strong> {formatDate(selectedBooking.endDate)}</p>
                <p><strong>Status:</strong> {selectedBooking.isAvailable ? 'Available' : 'Not Available'}</p>
                <p><strong>Total Price:</strong> {selectedBooking.price}</p>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Booking;






// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Header2 from '../../Components/Header2';
// import Sidebar2 from '../../Components/Sidebar2';
// import Modal from "react-modal";
// import baseUrl from "../const/baseUrl";

// const Booking = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isModalOpen1, setIsModalOpen1] = useState(false);
//   const [books, setBooks] = useState([]);
//   const [availableCars, setAvailableCars] = useState([]);
//   const [selectedBooking, setSelectedBooking] = useState(null);

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get(`${baseUrl}bookings`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setBooks(response.data);
//       } catch (error) {
//         console.error("Error fetching books:", error);
//       }
//     };

//     const fetchAvailableCars = async () => {
//       try {
//         const response = await axios.get(`${baseUrl}cars?status=available`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setAvailableCars(response.data);
//       } catch (error) {
//         console.error("Error fetching available cars:", error);
//       }
//     };

//     fetchBookings();
//     fetchAvailableCars();
//   }, [token]);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const toggleModal1 = (booking) => {
//     setSelectedBooking(booking);
//     setIsModalOpen1(!isModalOpen1);
//   };

//   const handleDelete = async (bookingId) => {
//     try {
//       const response = await axios.delete(`${baseUrl}bookings/${bookingId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.status === 200) {
//         setBooks(books.filter((booking) => booking._id !== bookingId));
//         console.log("Booking deleted successfully");
//       } else {
//         throw new Error("Failed to delete booking");
//       }
//     } catch (error) {
//       console.error("Error deleting booking:", error);
//     }
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return 'Invalid Date';
//     const date = new Date(dateString);
//     if (isNaN(date.getTime())) {
//       console.error(`Invalid date: ${dateString}`);
//       return 'Invalid Date';
//     }
//     return date.toLocaleDateString();
//   };

//   const parseUser = (userString) => {
//     try {
//       return JSON.parse(userString.replace(/'/g, '"'));
//     } catch (error) {
//       console.error("Error parsing user data:", error);
//       return null;
//     }
//   };

//   return (
//     <div className="dashb">
//       <section className="dashboard">
//         <Sidebar2 />
//         <main>
//           <Header2 />
//           <div className="add">
//             <h2>Booking List</h2>
//             {/* <button onClick={toggleModal}>Add Booking</button> */}
//           </div>

//           <table>
//             <thead>
//               <tr className="heading">
//                 <th>Vehicle</th>
//                 <th>Start Date</th>
//                 <th>End Date</th>
//                 <th>Status</th>
//                 <th>Lender Name</th>
//                 <th className='dt'>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {books.map((booking) => {
//                 const user = parseUser(booking.user);
//                 return (
//                   <tr key={booking._id}>
//                     <td>{booking.car?.make}</td>
//                     <td>{formatDate(booking.startDate)}</td>
//                     <td>{formatDate(booking.endDate)}</td>
//                     <td className='dt'>{booking.isAvailable ? 'Yes' : 'No'}</td>
//                     <td>{user ? user.name : 'No user'}</td> {/* Display user name */}
//                     <td className='dt'>
//                       <button onClick={() => toggleModal1(booking)}>
//                         Details
//                       </button>
//                     </td>
//                     <td className='dt'>
//                       <button onClick={() => handleDelete(booking._id)}>
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </main>
//       </section>


//       {/* Booking Details Modal */}
//       <Modal
//         isOpen={isModalOpen1}
//         onRequestClose={() => setIsModalOpen1(false)}
//         contentLabel="Booking Details"
//         className={`bg-transparent`}
//         style={{
//           overlay: {
//             position: "fixed",
//             top: "0",
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "hsla(0, 0%, 0%, .8)",
//             zIndex: 100000,
//           },
//         }}
//       >
//         <div className="modal1">
//           <div className="modal1-content">
//             <div className="close">
//               <button
//                 onClick={() => setIsModalOpen1(false)}
//                 style={{ cursor: "pointer" }}
//               >
//                 X
//               </button>
//             </div>
//             {selectedBooking && (
//               <div>
//                 <h2>Booking Details</h2>
//                 <p><strong>Vehicle:</strong> {selectedBooking.car?.make} - {selectedBooking.car?.model}</p>
//                 <p><strong>Start Date:</strong> {formatDate(selectedBooking.startDate)}</p>
//                 <p><strong>End Date:</strong> {formatDate(selectedBooking.endDate)}</p>
//                 <p><strong>Status:</strong> {selectedBooking.isAvailable ? 'Available' : 'Not Available'}</p>
//                 <p><strong>Total Price:</strong> {selectedBooking.totalPrice}</p>
//                 <p><strong>Lender Name:</strong> {selectedBooking.lenderName}</p>
//                 <p><strong>Lender Phone:</strong> {selectedBooking.lenderPhone}</p>
//                 <p><strong>Lender Address:</strong> {selectedBooking.lenderAddress}</p>
//                 <p><strong>Driving License:</strong> {selectedBooking.drivingLicense}</p>
//                 {/* <p><strong>User Email:</strong> {user ? user.email : 'N/A'}</p> Display user email */}
//               </div>
//             )}
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Booking;
