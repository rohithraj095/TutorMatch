import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useAuthContext } from '../../hooks/useAuthContext'

export const SendEmail = () => {
  const form = useRef();
  const { user } = useAuthContext()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yojzntw', 'template_k1523zq', form.current, 'PJOBi5Sx7GoCYmN1a')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div></div>
      <label>&emsp;Name: &emsp;</label>
      <input label="Name" name="Name" type="text" value={user && user.displayName} readonly/>
      <div></div>
      <label>&emsp;Email:  &emsp;  </label>
      <input type="email" name="Email" value={user &&user.email} readonly/>
      <div></div>
      <label>&emsp;Subject:   &emsp; </label>
      <select id="Subject" name="Subject">
        <option value="Bugs">Bugs</option>
        <option value="Report User">Report User</option>
        <option value="Other">Other</option>
      </select>
      <div></div>
      <label>&emsp;Msg: &emsp;&emsp;</label>
      <textarea name="message" />
      <div></div>
      <center>
      <button id="btn" type="submit">Send Email</button>
      </center>
    </form>
  );
};

export default SendEmail