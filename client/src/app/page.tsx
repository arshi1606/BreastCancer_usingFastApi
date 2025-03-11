"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Herosection from "@/components/Herosection";

export default function Home() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    stats: false,
    testimonials: false,
    cta: false,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/protected/home");
    }
    // Staggered animations on load (super chill delay effects)
    const timeouts = [
      setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 300),
      setTimeout(() => setIsVisible(prev => ({ ...prev, features: true })), 800),
      setTimeout(() => setIsVisible(prev => ({ ...prev, stats: true })), 1300),
      setTimeout(() => setIsVisible(prev => ({ ...prev, testimonials: true })), 1800),
      setTimeout(() => setIsVisible(prev => ({ ...prev, cta: true })), 2300),
    ];
    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fff5f8] to-[#fafafa] overflow-x-hidden m-0 p-0 text-gray-900 font-sans">
     

      {/* Hero Section */}
     <Herosection/>

      {/* About Section */}
      <section id="about" className="py-20 px-[10%] bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Approach</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Combining medical expertise with cutting-edge AI technology</p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-800 ${
          isVisible.features ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className= "bg-white p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center relative">
              <div className="w-10 h-10 bg-white rounded absolute"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-600 text-sm">
              Our algorithms analyze thousands of data points in medical images to detect patterns invisible to the human eye.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center relative">
              <div className="w-10 h-10 bg-white rounded absolute"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Early Detection</h3>
            <p className="text-gray-600 text-sm">
              Identify potential cancer markers up to 2.5 years earlier than traditional methods.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center relative">
              <div className="w-10 h-10 bg-white rounded absolute"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Physician Partnership</h3>
            <p className="text-gray-600 text-sm">
              We work alongside medical pros, boosting diagnostic power with smart AI insights.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center relative">
              <div className="w-10 h-10 bg-white rounded absolute"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Privacy Focused</h3>
            <p className="text-gray-600 text-sm">
              Your health data is encrypted and protected with top-notch security.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="features" className={`py-24 px-[10%] bg-gradient-to-br from-pink-50 to-white transition-all duration-800 ${
          isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
        <div className="flex flex-wrap">
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The Numbers Speak</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-md">
              Our tech is making a real difference in breast cancer outcomes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col transition-transform duration-300 hover:-translate-y-1">
                <span className="text-2xl font-bold text-pink-500 mb-1">10,000+</span>
                <span className="text-sm text-gray-500">Screenings Completed</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col transition-transform duration-300 hover:-translate-y-1">
                <span className="text-2xl font-bold text-pink-500 mb-1">97%</span>
                <span className="text-sm text-gray-500">Detection Accuracy</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col transition-transform duration-300 hover:-translate-y-1">
                <span className="text-2xl font-bold text-pink-500 mb-1">30%</span>
                <span className="text-sm text-gray-500">Earlier Diagnosis</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col transition-transform duration-300 hover:-translate-y-1">
                <span className="text-2xl font-bold text-pink-500 mb-1">250+</span>
                <span className="text-sm text-gray-500">Partner Clinics</span>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-[300px] flex justify-center items-center">
            <div className="w-11/12 h-96 relative flex justify-center items-center">
              <div className="absolute w-4/5 h-4/5 border-2 border-pink-500/20 rounded-xl"></div>
              <div className="relative w-full h-full">
                <div className="absolute w-28 h-28 bg-gradient-to-br from-pink-300 to-transparent rounded-full top-1/3 left-1/5 animate-[circleAnimation_4s_infinite]"></div>
                <div className="absolute w-20 h-20 bg-gradient-to-br from-pink-500 to-transparent rounded-full top-1/2 right-1/4 animate-[circleAnimation_6s_infinite]"></div>
                <div className="absolute w-36 h-36 bg-gradient-to-br from-cyan-400 to-transparent rounded-full bottom-1/5 left-1/3 animate-[circleAnimation_5s_infinite]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-24 px-[10%] bg-white transition-all duration-800 ${
          isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from patients and physicians who've experienced the difference
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="text-lg text-gray-800 mb-6 relative pl-4">
              "The early detection from this tech gave me precious time. So grateful!"
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-br from-pink-500 to-red-400"></div>
              <div>
                <div className="font-semibold text-gray-800">Sarah J.</div>
                <div className="text-sm text-gray-500">Patient, diagnosed 2023</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="text-lg text-gray-800 mb-6 relative pl-4">
              "As an oncologist, I've seen how this AI tool enhances diagnostics and saves lives."
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-br from-blue-500 to-blue-300"></div>
              <div>
                <div className="font-semibold text-gray-800">Dr. Michael Chen</div>
                <div className="text-sm text-gray-500">Oncologist at City Hospital</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="text-lg text-gray-800 mb-6 relative pl-4">
              "The speed and accuracy of this tech has transformed early intervention."
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-br from-cyan-400 to-blue-200"></div>
              <div>
                <div className="font-semibold text-gray-800">Dr. Lisa Rodriguez</div>
                <div className="text-sm text-gray-500">Radiologist, Women's Health Center</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-[10%] bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Get answers to common questions about our tech</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">How does AI detect breast cancer?</h3>
            <p className="text-gray-600 text-sm">
              Our AI analyzes mammograms and other imaging data to identify subtle patterns and anomalies that might indicate early-stage cancer.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Is this meant to replace my doctor?</h3>
            <p className="text-gray-600 text-sm">
              Not at all. Our tech works alongside healthcare pros, giving them advanced tools for better detection.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">How accurate is the detection?</h3>
            <p className="text-gray-600 text-sm">
              Our current models hit 97% accuracy in clinical trials—way above traditional screening methods.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Is my medical data secure?</h3>
            <p className="text-gray-600 text-sm">
              Absolutely. We use end-to-end encryption and follow all HIPAA guidelines to keep your info safe.
            </p>
          </div>
        </div>
      </section>

    

      {/* Footer */}
    
    </div>
  );
}
