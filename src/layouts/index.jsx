import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="relative pb-10">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
