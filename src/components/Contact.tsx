
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Send } from "lucide-react";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute -top-40 right-0 w-72 h-72 rounded-full bg-ds-teal/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-ds-blue/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div ref={ref}>
          <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-ds-teal/10 text-ds-teal text-sm font-medium mb-3">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-ds-black">
              Book a <span className="water-breathing-text">Performance</span>
            </h2>
            <p className="mt-4 text-ds-gray max-w-2xl mx-auto">
              Interested in booking a Tanjiro cosplay performance for your event? Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className={`glass-card p-8 rounded-xl transition-all duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-ds-black mb-2">Message Sent Successfully!</h3>
                  <p className="text-ds-gray">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-ds-gray mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-ds-teal/50 focus:border-ds-teal outline-none transition"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-ds-gray mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-ds-teal/50 focus:border-ds-teal outline-none transition"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-ds-gray mb-1">
                      Event Type
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-ds-teal/50 focus:border-ds-teal outline-none transition"
                    >
                      <option value="" disabled>Select event type</option>
                      <option value="convention">Anime Convention</option>
                      <option value="private">Private Event</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="competition">Cosplay Competition</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-ds-gray mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-ds-teal/50 focus:border-ds-teal outline-none transition"
                      placeholder="Tell me about your event, date, location, and any specific requirements"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-ds-teal hover:bg-ds-darkTeal text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
            
            <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-ds-teal/10 rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8853 8.64932 10.6844 9.16531 10.2449 9.38787L7.63874 10.8236C9.02459 13.89 11.5793 16.4447 14.6456 17.8306L16.0814 15.2244C16.304 14.7849 16.82 14.584 17.292 14.7436L21.7855 16.2414C22.1938 16.3775 22.4693 16.7596 22.4693 17.1901V20.4C22.4693 21.5046 21.5738 22.4 20.4693 22.4H19C10.1634 22.4 3 15.2366 3 6.4V5Z" stroke="#3EBDC6" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-ds-black mb-1">Phone</h3>
                <p className="text-ds-gray">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-ds-teal/10 rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#3EBDC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-ds-black mb-1">Email</h3>
                <p className="text-ds-gray">tanjiro@cosplay.example</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-ds-teal/10 rounded-full flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="#3EBDC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="#3EBDC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-ds-black mb-1">Location</h3>
                <p className="text-ds-gray">Available for events worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
