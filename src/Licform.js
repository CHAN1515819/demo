import React, { useState } from 'react';
import './licstyle.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or perform validation
    // You can access the customer details in the 'name', 'email', and 'phone' variables
    console.log('Submitted:', name, email, phone);
  };

  return (
    <div>
      <header>
        <h1>Welcome to Chandan Kumar Jha - LIC Agent</h1>
      </header>
      <section>
        <div>
          <h2>A Lifetime of Security</h2>
          <p>
            Welcome to a leader in security who knows the art of turning your dreams into reality.
          </p>
          <p>
            I am Chandan Kumar Jha, LIC Agent. With our deep understanding, we guarantee your well-being.
          </p>
          <p>
            I offer insurance in various categories such as health insurance, vehicle insurance, and personal insurance.
            Choose plans according to your needs and secure your future.
          </p>
          <p>
            My services are not just insurance, but also self-confidence for you. Join me and give yourself a voice that says,
            "I am responsible for making my future prosperous!"
          </p>
        </div>
        <div>
          <h2>Contact Details:</h2>
          <p>Email: chandankr.jha16@gmail.com</p>
          <p>Mobile: 9528671585</p>
        </div>
      </section>
      <section>
        <h2>Fill in Your Details</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Phone:
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;