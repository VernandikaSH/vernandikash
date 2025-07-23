import Image from 'next/image';
import { notFound } from 'next/navigation';
import { posts as allCertifications, Certification } from '@/components/SertifSection';
import Header from '@/components/Header';

interface SertificationDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allCertifications.map((cert: Certification) => ({
    slug: cert.slug,
  }));
}

export const generateMetadata = async ({ params }: SertificationDetailPageProps) => {
  const { slug } = await params;
  const certification = allCertifications.find((cert) => cert.slug === slug);
  
  return {
    title: certification?.title || 'Certification Not Found',
    description: certification?.description || 'Details about the certification',
  };
};

export default async function SertificationDetailPage({ params }: SertificationDetailPageProps) {
  const { slug } = await params;
  const certification = allCertifications.find((cert) => cert.slug === slug);

  if (!certification) {
    notFound();
  }

  return (
    <section className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800 min-h-screen">
      <Header />
      <div className="container mx-auto p-4 md:p-8 pt-24">
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden md:flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:flex-shrink-0 md:w-1/2 relative h-64 md:h-auto">
            <Image
              src={certification.imageSrc}
              alt={certification.title}
              fill
              className="object-contain p-4 md:p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true}
            />
          </div>

          {/* Details Section */}
          <div className="p-6 md:p-8 md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {certification.title}
            </h1>
            <div className="space-y-2">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                <strong>Issued In:</strong> {certification.issuedIn}
              </p>
            </div>
            
            <hr className="my-6 border-gray-200 dark:border-gray-700" />
            
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-xl font-semibold mb-3 dark:text-white">Description</h2>
              <p className="text-base text-gray-700 dark:text-gray-400 leading-relaxed">
                {certification.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}