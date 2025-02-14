import React, { useState } from 'react';
import { 
  MessageSquareCode, 
  Brain, 
  BarChart3, 
  Zap,
  Users,
  LineChart,
  Shield,
  ArrowRight,
  Sparkles,
  Circle,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  MessageSquare, BarChart2, AlertTriangle, Bot
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Logo from './components/Logo';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SEO } from './components/SEO';
import { IPhone } from './components/Iphone';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzzeLZFGehfWxDQ5E8PL8cgXKIdV7sUZ7y7Hk9TgnxH4SNKNAUSg91bLLG7g_PXvLOG/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitSuccess(false);
          setFormData({ name: '', email: '', mobile: '', company: '' });
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const features = [
    {
      title: "Onboard IQ",
      description: "AI-powered workflows to streamline user activation through personalized, automated guidance",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
    },
    {
      title: "Mood IQ",
      description: "Monitor customer sentiment during calls to improve satisfaction.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    },
    {
      title: "Dialog IQ",
      description: "Get AI-generated summaries and action items after each call.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      title: "Retention IQ",
      description: "Predict, analyse and optimizes customer retention through ML-based advanced churn behavioral insights",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      title: "Upsell IQ",
      description: " AI-powered alert system that intelligently identifies and notifies you of personalized cross-selling and up-selling moments.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    }

  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Customer Service Director",
      company: "TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      quote: "SupportAI has transformed our customer service operations. Our response times have improved by 45% and customer satisfaction is at an all-time high."
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      company: "GlobalTech Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      quote: "The pre-call intelligence feature has been a game-changer for our team. We're now able to anticipate customer needs before they even explain their issues."
    },
    {
      name: "Emily Rodriguez",
      role: "Support Team Lead",
      company: "Innovate Systems",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      quote: "The analytics and insights provided by SupportAI have helped us identify and address systemic issues we weren't even aware of."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <SEO/>
      {/* Background Elements */}
      <div className="fixed inset-0 grid-background opacity-40" />
      <div className="fixed inset-0 gradient-bg" />

      {/* Floating Orbs */}
      <div className="fixed top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl floating" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating" style={{ animationDelay: '-2s' }} />

      <div className="relative">
        {/* Updated Navigation with new Logo */}
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
          <Logo className="hover:opacity-80 transition-opacity" />
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-purple-400 transition-colors">How it Works</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
          <a href="https://calendly.com/love4css/30min">
          <button className="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors relative group">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-purple-400 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity" />
          </button>
          </a>
        </nav>

        <main>
          {/* Hero Section */}
          <section className="container mx-auto px-6 py-20 text-center relative hero-gradient min-h-screen">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-purple-500 rounded-full pulse" />
        <div className="absolute top-20 right-1/3 w-3 h-3 bg-purple-400 rounded-full pulse" style={{ animationDelay: '-2s' }} />
        <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-purple-300 rounded-full pulse" style={{ animationDelay: '-1s' }} />
        
        <h1 className="text-5xl md:text-6xl font-bold mb-8 relative">
          Transform Customer Support with
          <span className="text-purple-500 relative">
            {' '}AI Intelligence
            <div className="absolute -right-8 -top-8">
              <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
            </div>
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Enhance your customer support with real-time AI insights, pre-call preparation,
          and post-call analytics to deliver exceptional customer experiences.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="https://calendly.com/love4css/30min">
          <button className="bg-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2 relative group">
            <span className="relative z-10">Get in Touch</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-purple-400 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity" />
          </button>
          </a>
          <a href="#demo">
          <button className="border border-purple-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-500/10 transition-colors relative group">
            Watch Demo
            <div className="absolute inset-0 border border-purple-500 rounded-lg blur-sm opacity-0 group-hover:opacity-50 transition-opacity" />
          </button>
          </a>
        </div>

        {/* Feature Showcase */}
        <div className="mt-20 relative max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-purple-500/20 blur-3xl -z-10" />
          
          {/* SVG Container for Lines and Nodes */}
          <div className="relative">
            <svg className="absolute inset-0 w-full h-full" style={{ minHeight: '600px' }}>
              {/* Animated Lines */}
              <g className="feature-lines">
                {/* Real-time Transcript Line */}
                <path 
                  d="M200,300 C300,300 350,200 450,200" 
                  className="feature-line" 
                  stroke="url(#purpleGradient)" 
                  strokeWidth="2" 
                  fill="none" 
                />
                
                {/* Sentiment Analysis Line */}
                <path 
                  d="M900,300 C800,300 750,400 650,400" 
                  className="feature-line" 
                  stroke="url(#purpleGradient)" 
                  strokeWidth="2" 
                  fill="none" 
                />
                
                {/* Churn Prediction Line */}
                <path 
                  d="M200,500 C300,500 350,600 450,600" 
                  className="feature-line" 
                  stroke="url(#purpleGradient)" 
                  strokeWidth="2" 
                  fill="none" 
                />
                
                {/* Zeus AI Line */}
                <path 
                  d="M900,500 C800,500 750,600 650,600" 
                  className="feature-line" 
                  stroke="url(#purpleGradient)" 
                  strokeWidth="2" 
                  fill="none" 
                />
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </g>
            </svg>

            {/* Feature Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Left Features */}
              <div className="space-y-16 text-left md:mt-32">
                <div className="feature-node p-6 bg-purple-900/20 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <MessageSquare className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Real-time Transcript</h3>
                  <p className="text-gray-400">Live call transcription with key point highlighting</p>
                </div>
                <div className="feature-node p-6 bg-purple-900/20 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <BarChart2 className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Sentiment Analysis</h3>
                  <p className="text-gray-400">Real-time customer mood and satisfaction tracking</p>
                </div>
              </div>

              {/* Center - iPhone */}
              <div className="flex justify-center items-center" id="demo">
                <IPhone screenshotUrl="/app_screenshot.PNG" />
              </div>

              {/* Right Features */}
              <div className="space-y-16 text-left md:mt-32">
                <div className="feature-node p-6 bg-purple-900/20 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <AlertTriangle className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Churn Prediction</h3>
                  <p className="text-gray-400">AI-powered risk assessment and early warnings</p>
                </div>
                <div className="feature-node p-6 bg-purple-900/20 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <Bot className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Zeus AI Chat</h3>
                  <p className="text-gray-400">Intelligent chatbot for instant customer support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* Features Section */}
          <section className="bg-gray-800/50 py-20 relative" id="features">
            <div className="absolute inset-0 gradient-bg" />
            <div className="container mx-auto px-6 relative">
              <h2 className="text-4xl font-bold text-center mb-16">
                Powerful Features
                <div className="absolute left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-500 mt-4 rounded-full" />
              </h2>
              <div className="grid md:grid-cols-3 gap-12">
                <FeatureCard 
                  icon={<Brain className="w-8 h-8 text-purple-500" />}
                  title="Pre-call Intelligence"
                  description="AI analyzes customer history and predicts needs before the conversation starts."
                />
                <FeatureCard 
                  icon={<MessageSquareCode className="w-8 h-8 text-purple-500" />}
                  title="Real-time Assistance"
                  description="Get live suggestions and relevant information during customer interactions."
                />
                <FeatureCard 
                  icon={<BarChart3 className="w-8 h-8 text-purple-500" />}
                  title="Post-call Analytics"
                  description="Detailed insights and actionable feedback after each conversation."
                />
              </div>
            </div>
          </section>

          {/* Feature Carousel */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 gradient-bg opacity-50" />
            <div className="container mx-auto px-6 relative">
              <h2 className="text-4xl font-bold text-center mb-16">
                Product Features
                <div className="absolute left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-500 mt-4 rounded-full" />
              </h2>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next',
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className="feature-carousel"
              >
                {features.map((feature, index) => (
                  <SwiperSlide key={index}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-purple-500/20 rounded-xl blur-xl" />
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="rounded-xl relative z-10 w-full h-[300px] object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-gray-400 text-lg">{feature.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-prev !text-purple-500" />
              <div className="swiper-button-next !text-purple-500" />
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 relative bg-gray-800/50">
            <div className="absolute inset-0 gradient-bg opacity-50" />
            <div className="container mx-auto px-6 relative">
              <h2 className="text-4xl font-bold text-center mb-16">
                What Our Clients Say
                <div className="absolute left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-500 mt-4 rounded-full" />
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-800 p-8 rounded-xl relative group">
                    <div className="absolute inset-0 bg-purple-500/5 rounded-xl group-hover:bg-purple-500/10 transition-colors" />
                    <div className="relative">
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                          <p className="text-sm text-purple-400">{testimonial.company}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-purple-500 fill-purple-500" />
                        ))}
                      </div>
                      <p className="text-gray-400">{testimonial.quote}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="py-20 relative">
            <div className="absolute inset-0 gradient-bg opacity-50" />
            <div className="container mx-auto px-6 relative">
              <h2 className="text-4xl font-bold text-center mb-16">
                Powered By
                <div className="absolute left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-500 mt-4 rounded-full" />
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <TechCard icon={<Zap />} title="Real-time Processing" />
                <TechCard icon={<Users />} title="Advanced NLP" />
                <TechCard icon={<LineChart />} title="Predictive Analytics" />
                <TechCard icon={<Shield />} title="Enterprise Security" />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative overflow-hidden" id="contact">
            <div className="absolute inset-0 bg-purple-600" />
            <div className="absolute inset-0 gradient-bg opacity-50" />
            <div className="container mx-auto px-6 py-20 text-center relative">
              <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Customer Support?</h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto">
                Join leading companies using SupportAI to deliver exceptional customer experiences.
              </p>
              <a href="https://calendly.com/love4css/30min">
              <button
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors relative group"
              >
                <span className="relative z-10">Schedule a Demo</span>
                <div className="absolute inset-0 bg-white rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity" />
              </button>
              </a>
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 py-12 relative">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <Logo className="w-24" />
              <p className="text-gray-400">© 2025 SupportAI. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Demo Form Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-xl w-full max-w-md relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold mb-6">Schedule a Demo</h3>
              {submitSuccess ? (
                <div className="text-center text-green-400">
                  <p>Thank you! We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-400 mb-1">
                        Mobile
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 bg-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors relative group"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Submitting...' : 'Schedule Demo'}
                    </span>
                    <div className="absolute inset-0 bg-purple-400 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity" />
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }:any) {
  return (
    <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors relative group">
      <div className="absolute inset-0 bg-purple-500/5 rounded-xl group-hover:bg-purple-500/10 transition-colors" />
      <div className="relative">
        <div className="mb-6 relative">
          {icon}
          <div className="absolute -top-2 -right-2">
            <Circle className="w-2 h-2 text-purple-400 fill-purple-400 animate-pulse" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function TechCard({ icon, title }:any) {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors relative group">
      <div className="absolute inset-0 bg-purple-500/5 rounded-xl group-hover:bg-purple-500/10 transition-colors" />
      <div className="relative">
        <div className="text-purple-500 mb-4 relative">
          {icon}
          <div className="absolute -top-1 -right-1">
            <Circle className="w-1.5 h-1.5 text-purple-400 fill-purple-400 animate-pulse" />
          </div>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}

export default App;