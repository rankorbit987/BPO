import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const ServicesTestimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, TechCorp',
      testimonial:
        "Working with this team has been an absolute pleasure. Their expertise and dedication to our project were exceptional. We saw a 40% increase in productivity after implementing their solutions. The communication was excellent throughout the entire process, and they delivered everything on time. I would highly recommend their services to anyone looking for professional results.",
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Marketing Director',
      testimonial:
        "The level of professionalism and customer support we received was outstanding. They delivered beyond our expectations and helped us achieve record-breaking campaign results. Their team was always available to answer questions and provide guidance. The analytics they provided were incredibly detailed and useful for our strategy.",
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'David Williams',
      role: 'Operations Manager',
      testimonial:
        "Their approach to solving our business challenges was exactly what we needed to see growth! Our operational efficiency improved by 35% in just three months. The solutions were tailored perfectly to our needs and the implementation was seamless.",
      rating: 4,
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
      name: 'Sarah Brown',
      role: 'CTO, InnovateX',
      testimonial:
        "A fantastic experience from start to finish. Their team went above and beyond to deliver results! The technical solutions they provided were cutting-edge and reliable. We've seen significant improvements in our system performance since working with them.",
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    },
    {
      name: 'Michael Turner',
      role: 'Product Lead',
      testimonial:
        "The team's collaborative approach helped us reach our business goals with precision and speed! We've already signed up for another year of partnership. Their insights into our industry were invaluable and helped shape our product roadmap.",
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
  ];
  // Color scheme
  const colors = {
    primary: "#C93C3C", // Red
    secondary: "#2C3E50", // Dark blue
    accent: "#E74C3C", // Bright red
    darkBg: "#1A202C", // Very dark blue
    darkerBg: "#121826", // Even darker blue
    darkText: "#E2E8F0", // Light gray (for text on dark)
    lightText: "#FFFFFF", // Pure white
    white: '#fff3ff' // Off-white
  };

  const renderStars = (rating) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  // Google icon component
  const GoogleIcon = ({ className = '' }) => (
    <svg
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
        fill="#4285F4"
      />
      <path
        d="M3.15302 7.3455L6.43852 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z"
        fill="#EA4335"
      />
      <path
        d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.6055 17.5455 13.3575 18 12 18C9.39902 18 7.19052 16.3415 6.35852 14.027L3.09752 16.5395C4.75252 19.778 8.11352 22 12 22Z"
        fill="#34A853"
      />
      <path
        d="M21.8055 10.0415H21V10H12V14H17.6515C17.2575 15.1085 16.5465 16.0765 15.6085 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
        fill="#FBBC05"
      />
    </svg>
  );

  // State to track which slides are visible for animation
  const [visibleSlides, setVisibleSlides] = useState(new Set());

  // Refs to track slide elements
  const slideRefs = useRef([]);

  // Setup Intersection Observer to add 'pop' class when slide is in view
  useEffect(() => {
    if (!slideRefs.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleSlides((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.6 }
    );

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => {
      slideRefs.current.forEach((slide) => {
        if (slide) observer.unobserve(slide);
      });
    };
  }, []);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #6B7280;
          opacity: 1;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: #C93C3C !important;
        }

        /* Slide pop/fade-in animation */
        .slide-pop {
          animation: popFadeIn 0.5s ease forwards;
        }

        @keyframes popFadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Heading with Google rating */}
        <div className="text-center mb-12">
            <span 
                  className="inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4"
                  style={{ backgroundColor: `${colors.primary}20`, color: colors.primary }}
                >
                  Our Success
                </span>
          <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              style={{ color: colors.lightText }}
            >
              What Our <span style={{ color: colors.primary }}>Clients Say</span>
            </h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - here's what our clients say about
            working with us
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="px-2 sm:px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div
                  data-index={index}
                  ref={(el) => (slideRefs.current[index] = el)}
                  className={`bg-[#1E293B] p-6 rounded-xl h-full flex flex-col border border-gray-700/50 hover:border-[#C93C3C]/30 transition-all relative ${
                    visibleSlides.has(index) ? 'slide-pop' : 'opacity-0'
                  }`}
                >
                  {/* Google icon positioned top right */}
                  <div className="absolute top-4 right-4 text-white">
                    <GoogleIcon />
                  </div>

                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-[#C93C3C]"
                    />
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="mb-4">{renderStars(testimonial.rating)}</div>

                  {/* Testimonial text with line clamping */}
                  <div className="mb-6">
                    <p className="text-gray-300 italic line-clamp-5 overflow-hidden text-ellipsis">
                      "{testimonial.testimonial}"
                    </p>
                  </div>

                  <div className="mt-auto text-sm text-gray-500">Google Review</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pagination dots */}
        <div className="testimonial-pagination flex justify-center mt-8 space-x-2" />
      </div>
    </div>
  );
};

export default ServicesTestimonials;
