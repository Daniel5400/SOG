import React, { useState, useEffect } from 'react';
import Header2 from '../../Components/Header2';
import Sidebar2 from '../../Components/Sidebar2';
import Modal from 'react-modal';
import baseURL from '../const/baseUrl';

const Users = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const toggleModal1 = (user) => {
    setSelectedUser(user);
    setIsModalOpen1(!isModalOpen1);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${baseURL}users`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='dashb'>
      <section className='dashboard'>
        <Sidebar2 />
        <main>
          <Header2 />
          <div className='add' style={{ textAlign: 'center' }}>
            <h2>Users</h2>
          </div>
          <table>
            <thead>
              <tr className='heading'>
                <th >Vendor Name</th>
                <th >Phone</th>
                <th >Email</th>
                <th className='dt'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td className='dt'>
                    <button onClick={() => toggleModal1(user)}>See Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </section>

      {selectedUser && (
        <Modal
          isOpen={isModalOpen1}
          onRequestClose={() => setIsModalOpen1(false)}
          contentLabel='User Details'
          className='bg-transparnt'
          style={{
            overlay: {
              position: 'fixed',
              top: '0',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'hsla(0, 0%, 0%, .8)',
              zIndex: 100000,
            },
          }}
        >
          <div className='modal1'>
            <div className='modal1-content'>
              <div className='close'>
                <button onClick={() => setIsModalOpen1(false)} style={{ cursor: 'pointer' }}>
                  X
                </button>
              </div>
              <section className='product-info'>
                {/* <div className='product-images'>
                  <img src={m1} alt='' />
                </div> */}
                <div className='others'>
                  <p>
                    Full Name: <span>{selectedUser.name}</span>
                  </p>
                  <p>
                    Email Address: <span>{selectedUser.email}</span>
                  </p>
                  <p>
                    Phone Number: <span>{selectedUser.phone}</span>
                  </p>
                  <p>
                    Address: <span>{selectedUser.address}</span>
                  </p>
                  {/* <p>
                    Password: <span>{selectedUser.password}</span>
                  </p> */}
                </div>
              </section>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Users;
