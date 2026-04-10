import { useRef, useState, FormEvent } from 'react';
import '../index.css';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
  const form = useRef<HTMLFormElement>(null);

  // State management for all fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_w08gk5t', 
          'template_xu4jx41', 
          form.current, 
          'NQJsmC0nLbWXtRdB0'
        )
        .then(
          () => {
            alert("Message sent successfully!");
            // Reset form fields
            setName('');
            setEmail('');
            setPhone('');
            setSubject('');
            setMessage('');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-group">
          <div className="input-box">
            <input 
              type="text" 
              name="from_name" 
              placeholder='Full Name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
            <input 
              type="email" 
              name="from_email" 
              placeholder='Email Address' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-box">
            <input 
              type="number" 
              name="phone_number" 
              placeholder='Phone Number' 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
            <input 
              type="text" 
              name="subject" 
              placeholder='Subject' 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
            />
          </div>
        </div>

        <div className="input-group-2">
          <textarea 
            name="message" 
            placeholder='Your Message' 
            cols={30} 
            rows={10} 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <input type="submit" value="Send Message" className='btn' />
        </div>
      </form>
    </section>
  );
};

export default EmailForm;