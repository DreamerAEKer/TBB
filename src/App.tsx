import React, { useState } from 'react';
import { LayoutDashboard, PlusCircle, History, ArrowRight } from 'lucide-react';
import { Header } from './components/Header';
import { BookingForm } from './components/BookingForm';

function App() {
    const [currentView, setCurrentView] = useState<'dashboard' | 'booking' | 'history'>('dashboard');

    const handleBookingSubmit = (data: any) => {
        console.log("Booking Submitted:", data);
        // TODO: Send to backend
        setCurrentView('dashboard');
        alert("บันทึกการนัดหมายเรียบร้อยแล้ว!");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-slate-800">
            <Header />

            <main className="flex-1 p-4 md:p-6 max-w-5xl mx-auto w-full pt-20 md:pt-24">

                {currentView === 'dashboard' && (
                    <div className="animate-in fade-in duration-500">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">ยินดีต้อนรับ, Admin</h2>
                                <p className="text-gray-500">จัดการงานรับฝากและนัดหมายลูกค้าธุรกิจ</p>
                            </div>
                            <button
                                onClick={() => setCurrentView('booking')}
                                className="bg-thp-red text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition-colors flex items-center gap-2 font-medium"
                            >
                                <PlusCircle size={20} /> สร้างนัดหมาย
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {/* Stat Cards */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-32">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">งานวันนี้</p>
                                        <h3 className="text-3xl font-bold text-gray-800 mt-1">12</h3>
                                    </div>
                                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                        <LayoutDashboard size={20} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                                    <span>+2 จากเมื่อวาน</span>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-32">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">รอดำเนินการ</p>
                                        <h3 className="text-3xl font-bold text-thp-red mt-1">5</h3>
                                    </div>
                                    <div className="p-2 bg-red-50 text-thp-red rounded-lg">
                                        <History size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-32 cursor-pointer hover:border-thp-red/30 transition-colors group" onClick={() => setCurrentView('booking')}>
                                <div className="flex items-center justify-center h-full flex-col gap-2">
                                    <div className="p-3 bg-red-50 text-thp-red rounded-full group-hover:bg-thp-red group-hover:text-white transition-colors">
                                        <PlusCircle size={24} />
                                    </div>
                                    <span className="font-semibold text-gray-600 group-hover:text-thp-red">สร้างนัดหมายใหม่</span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Jobs Section */}
                        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 min-h-[300px]">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold flex items-center gap-2">
                                    <History size={20} className="text-gray-400" />
                                    รายการล่าสุด
                                </h3>
                                <button className="text-sm text-thp-red font-medium hover:underline flex items-center gap-1">
                                    ดูทั้งหมด <ArrowRight size={14} />
                                </button>
                            </div>
                            <div className="text-center py-12 text-gray-400 border-2 border-dashed border-gray-100 rounded-lg">
                                <p>ยังไม่มีรายการจองในขณะนี้</p>
                                <button onClick={() => setCurrentView('booking')} className="mt-4 text-thp-red text-sm font-medium hover:underline">
                                    สร้างรายการแรกเลย
                                </button>
                            </div>
                        </section>
                    </div>
                )}

                {currentView === 'booking' && (
                    <BookingForm
                        onCancel={() => setCurrentView('dashboard')}
                        onSubmit={handleBookingSubmit}
                    />
                )}

            </main>
        </div>
    );
}

export default App;
