import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { SiLinkedin, SiGithub, SiWhatsapp } from 'react-icons/si';
import './Contact.css';

const Contact = ({ lang = 'en' }) => {
    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: ''
    });
    const [status, setStatus] = useState({ sent: false, error: false, loading: false });
    const formRef = useRef();

    const t = {
        en: {
            title: 'Contact',
            subtitle: 'Have a project in mind or want to collaborate? Let\'s connect and make something amazing together.',
            name: 'Full Name',
            email: 'Email Address',
            subject: 'Subject',
            message: 'Your Message',
            send: 'Send Message',
            sending: 'Sending...',
            sent: 'Message Sent!',
            error: 'Failed to send. Please try again.',
            sentMsg: 'Thank you! I\'ll get back to you soon.',
            infoTitle: 'Get In Touch',
            location: 'Beheira, Egypt',
            phone: '+20 102 438 1851',
            emailAddr: 'mostafsalkasaby53@gmail.com',
            followMe: 'Follow Me',
            availability: 'Available for freelance projects',
        },
        ar: {
            title: 'تواصل معي',
            subtitle: 'لديك مشروع في ذهنك أو تريد التعاون؟ دعنا نتواصل ونصنع شيئاً مذهلاً معاً.',
            name: 'الاسم الكامل',
            email: 'البريد الإلكتروني',
            subject: 'الموضوع',
            message: 'رسالتك',
            send: 'إرسال الرسالة',
            sending: 'جاري الإرسال...',
            sent: 'تم الإرسال!',
            error: 'فشل الإرسال. يرجى المحاولة مرة أخرى.',
            sentMsg: 'شكراً لك! سأتواصل معك قريباً.',
            infoTitle: 'تواصل معي',
            location: 'البحيرة، مصر',
            phone: '+20 102 438 1851',
            emailAddr: 'mostafsalkasaby53@gmail.com',
            followMe: 'تابعني',
            availability: 'متاح للمشاريع الحرة',
        }
    };

    const currentT = t[lang];

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ sent: false, error: false, loading: true });

        // NOTE: Replace these with your actual EmailJS credentials
        // You can get them by signing up at https://www.emailjs.com/
        const serviceID = 'service_uv0a63b'; // Replace with EmailJS Service ID
        const templateID = 'template_1i3rbdp'; // Replace with EmailJS Template ID
        const publicKey = '6QaNVdyO8asZ_F43I'; // Replace with EmailJS Public Key

        emailjs.sendForm(serviceID, templateID, formRef.current, {
            publicKey: publicKey,
        })
            .then(
                () => {
                    setStatus({ sent: true, error: false, loading: false });
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setTimeout(() => setStatus(prev => ({ ...prev, sent: false })), 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setStatus({ sent: false, error: true, loading: false });
                    setTimeout(() => setStatus(prev => ({ ...prev, error: false })), 5000);
                },
            );
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="section contact-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="section-header"
            >
                <h2>{currentT.title}</h2>
                <div className="section-divider"></div>
                <p className="contact-subtitle">{currentT.subtitle}</p>
            </motion.div>

            <div className="contact-grid">
                {/* Contact Form */}
                <motion.form
                    ref={formRef}
                    className="contact-form glass-panel"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="form-row">
                        <div className="form-group">
                            <label>{currentT.name}</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder={currentT.name}
                            />
                        </div>
                        <div className="form-group">
                            <label>{currentT.email}</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder={currentT.email}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>{currentT.subject}</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder={currentT.subject}
                        />
                    </div>
                    <div className="form-group">
                        <label>{currentT.message}</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder={currentT.message}
                        />
                    </div>
                    <motion.button
                        type="submit"
                        className={`submit-btn ${status.sent ? 'sent' : ''} ${status.error ? 'error' : ''}`}
                        disabled={status.loading}
                        whileHover={{ scale: status.loading ? 1 : 1.02 }}
                        whileTap={{ scale: status.loading ? 1 : 0.98 }}
                    >
                        {status.loading ? (
                            <span>{currentT.sending}</span>
                        ) : status.sent ? (
                            <>
                                <CheckCircle size={20} />
                                {currentT.sent}
                            </>
                        ) : status.error ? (
                            <span>{currentT.error}</span>
                        ) : (
                            <>
                                <Send size={20} />
                                {currentT.send}
                            </>
                        )}
                    </motion.button>
                    {status.sent && (
                        <motion.p
                            className="sent-message"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {currentT.sentMsg}
                        </motion.p>
                    )}
                </motion.form>

                {/* Contact Info */}
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="info-card glass-panel">
                        <h3>{currentT.infoTitle}</h3>

                        <div className="info-items">
                            <a href="https://maps.google.com/?q=Beheira,Egypt" className="info-item" target="_blank" rel="noreferrer">
                                <div className="info-icon-wrapper location">
                                    <MapPin size={20} />
                                </div>
                                <span>{currentT.location}</span>
                            </a>
                            <a href="tel:+201024381851" className="info-item">
                                <div className="info-icon-wrapper phone">
                                    <Phone size={20} />
                                </div>
                                <span>{currentT.phone}</span>
                            </a>
                            <a href="mailto:mostafsalkasaby53@gmail.com" className="info-item">
                                <div className="info-icon-wrapper email">
                                    <Mail size={20} />
                                </div>
                                <span>{currentT.emailAddr}</span>
                            </a>
                        </div>

                        <div className="info-divider"></div>

                        <h4>{currentT.followMe}</h4>
                        <div className="contact-socials">
                            <a href="https://www.linkedin.com/in/mostafa-ali-337884250/" target="_blank" rel="noreferrer" className="contact-social-icon linkedin">
                                <SiLinkedin size={20} />
                            </a>
                            <a href="https://github.com/mostafaali-1" target="_blank" rel="noreferrer" className="contact-social-icon github">
                                <SiGithub size={20} />
                            </a>
                            <a href="https://wa.me/201024381851" target="_blank" rel="noreferrer" className="contact-social-icon whatsapp">
                                <SiWhatsapp size={20} />
                            </a>
                        </div>

                        <div className="availability-badge">
                            <div className="availability-dot"></div>
                            {currentT.availability}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
