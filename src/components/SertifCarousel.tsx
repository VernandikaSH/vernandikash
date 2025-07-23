// src/components/SertifCarousel.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import the Certification interface from where it's defined (SertifSection.tsx)
import { Certification } from './SertifSection'; // Adjust path if SertifSection is in a different directory relative to SertifCarousel

const SertifCarousel = ({ posts }: { posts: Certification[] }) => {
  return (
    <div className="mx-auto max-w-4xl">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-700">
              <div className="relative w-full h-48"> {/* Fixed height for carousel items */}
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  fill
                  className="object-contain" // object-cover to make sure the image fills the space
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="py-8 px-6">
                <h3>
                  <Link
                    href={`/sertifications/${post.slug}`} // Link to the detail page using the slug
                    className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="font-medium text-base text-secondary mb-6 line-clamp-3">{post.description}</p> {/* Added line-clamp for description preview */}
                <Link
                  href={`/sertifications/${post.slug}`} // Link to the detail page
                  className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                >
                  Read More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SertifCarousel;