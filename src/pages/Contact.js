import React, { useState } from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    const initialFormData = {
        name: '',
        email: '',
        mobile: '',
        services: [],
        message: ''
    };
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            if (checked) {
                setFormData({
                    ...formData,
                    services: [...formData.services, value]
                });
            } else {
                setFormData({
                    ...formData,
                    services: formData.services.filter(service => service !== value)
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            const response = await fetch('http://localhost:8080/api/save-Contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Contact details saved successfully!');
                setFormData(initialFormData); // Clear form fields on successful submit
            } else {
                alert('Failed to save contact details.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error saving contact details.');
        }
    };



    return (
        <div className="contact">
            <div className="container">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter the Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter the Email Address" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input type="text" className="form-control" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} pattern="\d*" maxLength="10" placeholder="Enter the Mobile Number" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="services">Choose the Services</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="logoMaker" name="services" value="Logo Maker" checked={formData.services.includes('Logo Maker')} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="logoMaker">Logo Maker</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="websiteMaker" name="services" value="Website Maker" checked={formData.services.includes('Website Maker')} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="websiteMaker">Website Maker</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="digitalMarketing" name="services" value="Digital Marketing" checked={formData.services.includes('Digital Marketing')} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="digitalMarketing">Digital Marketing</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
