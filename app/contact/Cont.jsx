"use client";
import Reveal from "../components/Reveal";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function Cont() {
	return (
		<section className="w-full pb-20 md:pb-24">
			<div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-12">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
					<Reveal from="up" delay={0}>
						<div className="group flex h-full flex-col items-center rounded-[2rem] border border-white/5 bg-[#121624] p-8 text-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:bg-[#161a2b] hover:shadow-[0_20px_40px_rgba(3,8,28,0.45)] md:p-10">
							<div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
								<MapPin className="h-8 w-8 text-white" strokeWidth={1.8} />
							</div>
							<h3 className="mb-4 text-xl font-bold text-white md:text-2xl">موقعنا</h3>
							<p className="text-base font-semibold text-white/70">مدينة الكويت</p>
							<p className="text-base font-semibold text-white/70">دولة الكويت</p>
						</div>
					</Reveal>
					<Reveal from="up" delay={0.1}>
						<div className="group flex h-full flex-col items-center rounded-[2rem] border border-white/5 bg-[#121624] p-8 text-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:bg-[#161a2b] hover:shadow-[0_20px_40px_rgba(3,8,28,0.45)] md:p-10">
							<div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-gradient-to-br from-[#d946ef] to-[#a21caf] shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
								<Mail className="h-8 w-8 text-white" strokeWidth={1.8} />
							</div>
							<h3 className="mb-4 text-xl font-bold text-white md:text-2xl">البريد الإلكتروني</h3>
							<p className="text-base font-semibold text-white/70" dir="ltr">waslads.9@gmail.com</p>
						</div>
					</Reveal>
					<Reveal from="up" delay={0.2}>
						<div className="group flex h-full flex-col items-center rounded-[2rem] border border-white/5 bg-[#121624] p-8 text-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:bg-[#161a2b] hover:shadow-[0_20px_40px_rgba(3,8,28,0.45)] md:p-10">
							<div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-gradient-to-br from-[#10b981] to-[#047857] shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
								<Phone className="h-8 w-8 text-white" strokeWidth={1.8} />
							</div>
							<h3 className="mb-4 text-xl font-bold text-white md:text-2xl">الهاتف</h3>
							<p className="text-base font-semibold text-white/70" dir="ltr">+965 5888 9121</p>
						</div>
					</Reveal>
					<Reveal from="up" delay={0.3}>
						<div className="group flex h-full flex-col items-center rounded-[2rem] border border-white/5 bg-[#121624] p-8 text-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:bg-[#161a2b] hover:shadow-[0_20px_40px_rgba(3,8,28,0.45)] md:p-10">
							<div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-gradient-to-br from-[#ef4444] to-[#b91c1c] shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
								<Clock className="h-8 w-8 text-white" strokeWidth={1.8} />
							</div>
							<h3 className="mb-4 text-xl font-bold text-white md:text-2xl">ساعات العمل</h3>
							<p className="text-base font-semibold text-white/70">الأحد - الخميس</p>
							<p className="text-base font-semibold text-white/70">9:00 صباحاً - 6:00 مساءً</p>
						</div>
					</Reveal>

				</div>
			</div>
		</section>
	);
}
