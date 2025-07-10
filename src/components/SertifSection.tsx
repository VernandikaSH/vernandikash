// src/components/BlogSection.tsx
import Image from 'next/image';
import Link from 'next/link';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      imageSrc: '/gambar.jpg',
      title: 'Blog 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, praesentium!',
    },
    {
      id: 2,
      imageSrc: '/gambar.jpg',
      title: 'Blog 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum facilis doloremque unde eius perspiciatis!',
    },
    {
      id: 3,
      imageSrc: '/gambar.jpg',
      title: 'Blog 3 : Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, beatae. Ab harum quasi incidunt enim a laboriosam consequatur officiis tenetur.',
    },
  ];

  return (
    <section id="sertificate" className="pt-36 pb-32 bg-slate-100 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Sertificate</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Tulisan Terkini</h2>
            <p className="font-medium text-secondary text-md md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis minus exercitationem ipsam molestiae.
            </p>
          </div>

          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.id} className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-700">
                  <Image src={post.imageSrc} alt={post.title} width={600} height={400} />
                  <div className="py-8 px-6">
                    <h3>
                      <Link href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="font-medium text-base text-secondary mb-6">{post.description}</p>
                    <Link href="#" className="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;