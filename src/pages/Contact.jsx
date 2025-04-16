import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(form);
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <motion.div
            className="page d-flex justify-content-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div style={{ maxWidth: '600px', width: '100%' }}>
                <h2 className="mb-4 text-center">Contact Me</h2>
                {submitted && <div className="alert alert-success">Message sent successfully!</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input name="name" type="text" className="form-control" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input name="email" type="email" className="form-control" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message:</label>
                        <textarea name="message" className="form-control" rows="5" value={form.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-primary w-100">Send</button>
                </form>
            </div>
        </motion.div>
    );
}
