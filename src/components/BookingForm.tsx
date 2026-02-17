import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Package, User, ChevronRight, CheckCircle2 } from 'lucide-react';

interface BookingFormProps {
    onCancel: () => void;
    onSubmit: (data: any) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onCancel, onSubmit }) => {
    const [formData, setFormData] = useState({
        customerName: '',
        customerId: '',
        location: '',
        date: '',
        time: '',
        packageCount: '',
        totalWeight: '',
        jobType: 'Document',
        notes: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validate?
        onSubmit(formData);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <CheckCircle2 className="text-thp-red" />
                        สร้างนัดหมายใหม่
                    </h2>
                    <p className="text-sm text-gray-500">กรอกข้อมูลเพื่อนัดรับงานจากลูกค้า</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Customer Info Section */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                        <User size={16} /> ข้อมูลลูกค้า
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">ชื่อลูกค้า / บริษัท</label>
                            <input
                                required
                                type="text"
                                name="customerName"
                                value={formData.customerName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-100 focus:border-thp-red outline-none transition-all"
                                placeholder="ระบุชื่อลูกค้า"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">รหัสสมาชิก (ถ้ามี)</label>
                            <input
                                type="text"
                                name="customerId"
                                value={formData.customerId}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-100 focus:border-thp-red outline-none transition-all"
                                placeholder="เช่น M12345"
                            />
                        </div>
                    </div>
                </div>

                <div className="h-px bg-gray-100"></div>

                {/* Location & Time Section */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                        <MapPin size={16} /> สถานที่และเวลา
                    </h3>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">สถานที่รับงาน</label>
                        <textarea
                            required
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            rows={2}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-100 focus:border-thp-red outline-none transition-all resize-none"
                            placeholder="ระบุที่อยู่ หรือจุดสังเกต"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">วันที่นัดหมาย</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-2.5 text-gray-400" size={18} />
                                <input
                                    required
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-100 focus:border-thp-red outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">เวลานัดหมาย</label>
                            <div className="relative">
                                <Clock className="absolute left-3 top-2.5 text-gray-400" size={18} />
                                <input
                                    required
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-100 focus:border-thp-red outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-gray-100"></div>

                {/* Job Details Section */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                        <Package size={16} /> รายละเอียดงาน
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">ประเภทงาน</label>
                            <select
                                name="jobType"
                                value={formData.jobType}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-100 focus:border-thp-red outline-none transition-all"
                            >
                                <option value="Document">เอกสาร</option>
                                <option value="Parcel">พัสดุ/กล่อง</option>
                                <option value="Bulky">ของชิ้นใหญ่</option>
                                <option value="Other">อื่นๆ</option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">จำนวนชิ้น (โดยประมาณ)</label>
                            <input
                                type="number"
                                name="packageCount"
                                value={formData.packageCount}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-100 focus:border-thp-red outline-none transition-all"
                                placeholder="0"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">น้ำหนักรวม (kg)</label>
                            <input
                                type="number"
                                name="totalWeight"
                                value={formData.totalWeight}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-100 focus:border-thp-red outline-none transition-all"
                                placeholder="0.0"
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    >
                        ยกเลิก
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2.5 rounded-lg bg-thp-red text-white font-medium hover:bg-red-700 shadow-md shadow-red-200 hover:shadow-lg hover:shadow-red-200 transition-all flex items-center gap-2"
                    >
                        บันทึกการนัดหมาย <ChevronRight size={18} />
                    </button>
                </div>

            </form>
        </div>
    );
};
