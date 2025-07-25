import React from 'react';
import { Check, Award, Users, Clock, BookOpen, Shield } from 'react-feather';

const TrustedCoursesBrand = () => {
  const courses = [
    {
      id: 1,
      title: "AI & Machine Learning Professional",
      duration: "6 Months",
      students: "12K+",
      badge: "BESTSELLER",
      rating: 4.9
    },
    {
      id: 2,
      title: "Data Science Specialization",
      duration: "8 Months",
      students: "8.5K+",
      badge: "TRENDING",
      rating: 4.8
    },
    {
      id: 3,
      title: "Full Stack Development",
      duration: "5 Months",
      students: "15K+",
      badge: "HOT",
      rating: 4.7
    },
    {
      id: 4,
      title: "Cloud Computing & DevOps",
      duration: "4 Months",
      students: "6.2K+",
      badge: "NEW",
      rating: 4.8
    },
    {
      id: 5,
      title: "Cybersecurity Expert",
      duration: "7 Months",
      students: "5.8K+",
      badge: "POPULAR",
      rating: 4.9
    },
    {
      id: 6,
      title: "Blockchain Development",
      duration: "6 Months",
      students: "4.3K+",
      badge: "EMERGING",
      rating: 4.7
    }
  ];

  const trustFactors = [
    { icon: <Award size={24} />, title: "Industry-Recognized Certifications", description: "Accredited by top tech organizations" },
    { icon: <Users size={24} />, title: "500K+ Alumni Network", description: "Join our global community" },
    { icon: <Clock size={24} />, title: "10+ Years Experience", description: "Trusted since 2013" },
    { icon: <BookOpen size={24} />, title: "Project-Based Learning", description: "Hands-on with real-world projects" },
    { icon: <Shield size={24} />, title: "Money-Back Guarantee", description: "30-day satisfaction guarantee" },
    { icon: <Check size={24} />, title: "Placement Support", description: "90% placement rate" }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Trust Badges Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-blue-600">50,000+</span> Learners Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join India's most awarded tech education platform with industry-aligned programs
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {trustFactors.map((factor, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">{factor.icon}</div>
                <h3 className="font-bold text-lg mb-2">{factor.title}</h3>
                <p className="text-gray-600 text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Courses */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">
            Our <span className="text-blue-600">Flagship Programs</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      course.badge === "BESTSELLER" ? "bg-orange-100 text-orange-800" :
                      course.badge === "TRENDING" ? "bg-purple-100 text-purple-800" :
                      course.badge === "HOT" ? "bg-red-100 text-red-800" :
                      course.badge === "NEW" ? "bg-blue-100 text-blue-800" :
                      course.badge === "POPULAR" ? "bg-green-100 text-green-800" :
                      "bg-yellow-100 text-yellow-800"
                    }`}>
                      {course.badge}
                    </span>
                    <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                      <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-bold">{course.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="mr-4">{course.duration}</span>
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.students} students</span>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    View Program Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Still Deciding Which Program Is Right For You?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Our education consultants will help you choose the perfect career path
          </p>
          <button className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105">
            Talk to an Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrustedCoursesBrand;