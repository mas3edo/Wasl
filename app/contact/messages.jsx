"use client";
import Reveal from "../components/Reveal";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";

function InstagramIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
		</svg>
	);
}

function TwitterIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
		</svg>
	);
}

function FacebookIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
		</svg>
	);
}

function LinkedinIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect x="2" y="9" width="4" height="12" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	);
}

export default function Messages() {
    return (
        <section className="w-full pb-20 md:pb-24">
            <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                    <div className="flex flex-col gap-8 lg:col-span-5">
                        <Reveal from="right">
                            <div>
                                <h2 className="mb-4 text-3xl font-black text-white md:text-4xl lg:text-[42px]">
                                    نحن في <span className="text-[#a9001f]">انتظارك</span>
                                </h2>
                                <p className="text-[17px] leading-[1.8] text-white/70">
                                    سواء كنت تبحث عن شريك تسويقي طويل الأمد أو تحتاج إلى استشارة سريعة، فريقنا جاهز لمساعدتك. تواصل معنا اليوم ودعنا نبدأ رحلة النجاح معاً.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal from="right" delay={0.1}>
                            <div className="rounded-[2rem] border border-white/5 bg-[#121624] p-7 shadow-xl md:p-8">
                                <h3 className="mb-8 text-xl font-bold text-white text-right">معلومات التواصل المباشر</h3>

                                <div className="flex flex-col gap-7">
                                    <div className="flex items-start gap-5">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7a0011] shadow-lg">
                                            <MapPin className="h-6 w-6 text-white" strokeWidth={1.8} />
                                        </div>
                                        <div className="text-right pt-1">
                                            <h4 className="mb-1 text-lg font-bold text-white">العنوان</h4>
                                            <p className="text-[15px] text-white/70">مدينة الكويت</p>
                                            <p className="text-[15px] text-white/70">دولة الكويت</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7a0011] shadow-lg">
                                            <Mail className="h-6 w-6 text-white" strokeWidth={1.8} />
                                        </div>
                                        <div className="text-right pt-1">
                                            <h4 className="mb-1 text-lg font-bold text-white">البريد الإلكتروني</h4>
                                            <p className="text-[15px] text-white/70" dir="ltr">waslads.9@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7a0011] shadow-lg">
                                            <Phone className="h-6 w-6 text-white" strokeWidth={1.8} />
                                        </div>
                                        <div className="text-right pt-1">
                                            <h4 className="mb-1 text-lg font-bold text-white">الهاتف</h4>
                                            <p className="text-[15px] text-white/70" dir="ltr">+965 5888 9121</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#7a0011] shadow-lg">
                                            <Clock className="h-6 w-6 text-white" strokeWidth={1.8} />
                                        </div>
                                        <div className="text-right pt-1">
                                            <h4 className="mb-1 text-lg font-bold text-white">ساعات العمل</h4>
                                            <p className="text-[15px] text-white/70">الأحد - الخميس</p>
                                            <p className="text-[15px] text-white/70">9:00 صباحاً - 6:00 مساءً</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal from="right" delay={0.2}>
                            <div className="rounded-[2rem] border border-white/5 bg-[#121624] p-7 shadow-xl md:p-8">
                                <h3 className="mb-6 text-xl font-bold text-white text-right">تابعنا على السوشيال ميديا</h3>
                                <div className="flex gap-3">
                                    <a href="https://www.instagram.com/waslads.9?igsh=OWtlbzVvOW12OGs0" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/10 bg-white/5 transition-all hover:border-[#7a0011] hover:bg-[#7a0011] hover:shadow-lg active:scale-95">
                                        <InstagramIcon className="h-[22px] w-[22px] text-white" />
                                    </a>
                                    <a href="#" className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/10 bg-white/5 transition-all hover:border-[#7a0011] hover:bg-[#7a0011] hover:shadow-lg active:scale-95">
                                        <TwitterIcon className="h-[22px] w-[22px] text-white" />
                                    </a>
                                    <a href="#" className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/10 bg-white/5 transition-all hover:border-[#7a0011] hover:bg-[#7a0011] hover:shadow-lg active:scale-95">
                                        <FacebookIcon className="h-[22px] w-[22px] text-white" />
                                    </a>
                                    <a href="#" className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/10 bg-white/5 transition-all hover:border-[#7a0011] hover:bg-[#7a0011] hover:shadow-lg active:scale-95">
                                        <LinkedinIcon className="h-[22px] w-[22px] text-white" />
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal from="right" delay={0.3}>
                            <div className="rounded-[2rem] border border-[#a9001f]/30 bg-gradient-to-br from-[#7a0011] to-[#3a0008] p-7 shadow-2xl md:p-8 text-right relative overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1">
                                <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white opacity-5 blur-2xl group-hover:opacity-10 transition-opacity"></div>
                                <h3 className="mb-2 text-2xl font-bold text-white">استشارة مجانية</h3>
                                <p className="mb-7 text-[15px] text-white/85 leading-relaxed">احصل على استشارة مجانية لمدة 30 دقيقة مع خبراء التسويق لدينا</p>
                                <button className="rounded-full bg-white px-7 py-3.5 text-[15px] font-bold text-[#7a0011] shadow-lg transition-all hover:scale-105 hover:bg-gray-50 active:scale-95">
                                    احجز موعدك الآن
                                </button>
                            </div>
                        </Reveal>
                    </div>
                    <div className="lg:col-span-7">
                        <Reveal from="left" delay={0.2}>
                            <div className="rounded-[2.5rem] border border-white/5 bg-[#121624] p-8 shadow-2xl md:p-12">
                                <h3 className="mb-3 text-3xl font-black text-white text-right md:text-4xl">أرسل لنا رسالة</h3>
                                <p className="mb-10 text-[17px] text-white/70 text-right">املأ النموذج وسنتواصل معك خلال 24 ساعة</p>

                                <form className="flex flex-col gap-6 text-right" dir="rtl" onSubmit={(e) => e.preventDefault()}>
                                    <div className="flex flex-col gap-2.5">
                                        <label className="text-[15px] font-bold text-white pr-1">الاسم الكامل *</label>
                                        <input
                                            type="text"
                                            placeholder="أدخل اسمك الكامل"
                                            className="rounded-2xl border border-white/5 bg-[#181d2f] px-5 py-4 text-white placeholder-white/30 outline-none transition-all focus:border-[#a9001f] focus:bg-[#121624] focus:ring-1 focus:ring-[#a9001f]"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div className="flex flex-col gap-2.5">
                                            <label className="text-[15px] font-bold text-white pr-1">رقم الهاتف *</label>
                                            <input
                                                type="text"
                                                placeholder="+965 5888 9121"
                                                className="rounded-2xl border border-white/5 bg-[#181d2f] px-5 py-4 text-left text-white placeholder-white/30 outline-none transition-all focus:border-[#a9001f] focus:bg-[#121624] focus:ring-1 focus:ring-[#a9001f]"
                                                dir="ltr"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2.5">
                                            <label className="text-[15px] font-bold text-white pr-1">البريد الإلكتروني *</label>
                                            <input
                                                type="email"
                                                placeholder="example@email.com"
                                                className="rounded-2xl border border-white/5 bg-[#181d2f] px-5 py-4 text-left text-white placeholder-white/30 outline-none transition-all focus:border-[#a9001f] focus:bg-[#121624] focus:ring-1 focus:ring-[#a9001f]"
                                                dir="ltr"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <label className="text-[15px] font-bold text-white pr-1">الخدمة المطلوبة *</label>
                                        <select
                                            className="rounded-2xl border border-white/5 bg-[#181d2f] px-5 py-4 text-white outline-none transition-all focus:border-[#a9001f] focus:bg-[#121624] focus:ring-1 focus:ring-[#a9001f] appearance-none"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>اختر الخدمة</option>
                                            <option value="شراء الميديا">شراء الميديا</option>
                                            <option value="تحسين محركات البحث">تحسين محركات البحث</option>
                                            <option value="إدارة السوشيال ميديا">إدارة السوشيال ميديا</option>
                                            <option value="صناعة المحتوى">صناعة المحتوى</option>
                                            <option value="الموشن جرافيك">الموشن جرافيك</option>
                                            <option value="تطوير المواقع">تطوير المواقع</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <label className="text-[15px] font-bold text-white pr-1">رسالتك *</label>
                                        <textarea
                                            rows={5}
                                            placeholder="أخبرنا المزيد عن مشروعك وأهدافك..."
                                            className="resize-none rounded-2xl border border-white/5 bg-[#181d2f] px-5 py-4 text-white placeholder-white/30 outline-none transition-all focus:border-[#a9001f] focus:bg-[#121624] focus:ring-1 focus:ring-[#a9001f]"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#7a0011] py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#9a0016] hover:shadow-[0_8px_25px_rgba(122,0,17,0.4)] active:scale-[0.98]"
                                    >
                                        إرسال الرسالة
                                        <Send className="h-5 w-5" />
                                    </button>
                                </form>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
}
