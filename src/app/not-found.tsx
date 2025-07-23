import Link from 'next/link';
import Header from '@/components/Header';
import Loading from '@/components/Loading';

export default function NotFound() {
  return (
    <section className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800 min-h-screen">
      <Loading />
      <Header />
      <div className="container mx-auto p-4 text-center">
        <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8">
          <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}