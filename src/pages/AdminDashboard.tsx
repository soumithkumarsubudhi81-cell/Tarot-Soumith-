import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  Settings, 
  CalendarCheck, 
  MessageSquare,
  Star,
  Tag,
  LogOut,
  Menu,
  X
} from 'lucide-react';

// Sub-pages
import AdminOverview from './admin/AdminOverview';
import AdminServices from './admin/AdminServices';
import AdminClasses from './admin/AdminClasses';
import AdminEbooks from './admin/AdminEbooks';
import AdminRemedies from './admin/AdminRemedies';
import AdminSettings from './admin/AdminSettings';
import AdminBookings from './admin/AdminBookings';
import AdminTestimonials from './admin/AdminTestimonials';
import AdminDiscounts from './admin/AdminDiscounts';

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const location = useLocation();

  const navItems = [
    { name: 'Overview', path: '/admin', icon: LayoutDashboard },
    { name: 'Bookings', path: '/admin/bookings', icon: CalendarCheck },
    { name: 'Services', path: '/admin/services', icon: Sparkles },
    { name: 'Classes', path: '/admin/classes', icon: GraduationCap },
    { name: 'Ebooks', path: '/admin/ebooks', icon: BookOpen },
    { name: 'Remedies', path: '/admin/remedies', icon: MessageSquare },
    { name: 'Discounts', path: '/admin/discounts', icon: Tag },
    { name: 'Testimonials', path: '/admin/testimonials', icon: Star },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#050210] flex">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-[#0a051a] border-r border-white/10 transition-all duration-300 flex flex-col fixed h-full z-40`}
      >
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          {isSidebarOpen && <span className="font-serif font-bold gold-text">Admin Panel</span>}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 hover:bg-white/5 rounded transition-colors"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <nav className="flex-grow py-6 px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-purple-600/20 text-amber-400 border border-purple-500/30' 
                    : 'text-purple-200/60 hover:bg-white/5 hover:text-purple-100'
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {isSidebarOpen && <span className="font-medium">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link 
            to="/" 
            className="flex items-center gap-4 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-all"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {isSidebarOpen && <span className="font-medium">Exit Admin</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'} p-8`}>
        <div className="max-w-6xl mx-auto">
          <Routes>
            <Route index element={<AdminOverview />} />
            <Route path="bookings" element={<AdminBookings />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="classes" element={<AdminClasses />} />
            <Route path="ebooks" element={<AdminEbooks />} />
            <Route path="remedies" element={<AdminRemedies />} />
            <Route path="discounts" element={<AdminDiscounts />} />
            <Route path="testimonials" element={<AdminTestimonials />} />
            <Route path="settings" element={<AdminSettings />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
