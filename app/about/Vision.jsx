"use client";
import Reveal from "../components/Reveal";
import { Eye, Target } from "lucide-react";

export default function Vision() {
	return (
		<section className="w-full pb-20 md:pb-24">
			<div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-12">
				<div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
					<Reveal from="right">
						<div className="group relative flex h-full flex-col rounded-[2.5rem] border border-white/5 bg-[#121624] p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:bg-[#161a2b] hover:shadow-[0_20px_40px_rgba(3,8,28,0.45)] md:p-12">
							<div className="mb-8 flex">
								<div className="flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-[#7a0011] shadow-[0_8px_20px_rgba(122,0,17,0.4)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
									<Eye className="h-9 w-9 text-white" strokeWidth={1.8} />
								</div>
							</div>
							<h3 className="mb-5 text-right text-3xl font-black text-white md:text-4xl">رؤيتنا</h3>
							<p className="text-right text-[17px] leading-[1.8] text-white/70 md:text-lg">
								أن نكون الشريك التسويقي للمشروعات والمنشآت في جميع الجهات والقطاعات ونقدم محتوى إبداعياً يصنع تأثيراً يحدث فرقاً حقيقياً في النتائج
							</p>
						</div>
					</Reveal>
					<Reveal from="left" delay={0.1}>
						<div className="group relative flex h-full flex-col rounded-[2.5rem] border border-white/5 bg-[#121624] p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:bg-[#161a2b] hover:shadow-[0_20px_40px_rgba(3,8,28,0.45)] md:p-12">
							<div className="mb-8 flex">
								<div className="flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-[#7a0011] shadow-[0_8px_20px_rgba(122,0,17,0.4)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
									<Target className="h-9 w-9 text-white" strokeWidth={1.8} />
								</div>
							</div>
							<h3 className="mb-5 text-right text-3xl font-black text-white md:text-4xl">رسالتنا</h3>
							<p className="mb-6 text-right text-[17px] leading-[1.8] text-white/70 md:text-lg">
								تمكين عملائنا من الوصول الفعال من الجمهور الحقيقي المستهدف وتحقيق الأهداف التسويقية عن طريق:
							</p>
							<div className="mt-auto grid grid-cols-1 gap-4 text-right sm:grid-cols-3 sm:gap-3">
								<div className="flex flex-col gap-1">
									<div className="h-1 w-8 bg-[#8b0016] ml-auto mb-1"></div>
									<span className="text-sm font-semibold text-white/90">وضع استراتيجية واضحة للعلامة التجارية</span>
								</div>
								<div className="flex flex-col gap-1">
									<div className="h-1 w-8 bg-[#8b0016] ml-auto mb-1"></div>
									<span className="text-sm font-semibold text-white/90">وضع محتوى يصنع تأثيراً حقيقياً</span>
								</div>
								<div className="flex flex-col gap-1">
									<div className="h-1 w-8 bg-[#8b0016] ml-auto mb-1"></div>
									<span className="text-sm font-semibold text-white/90">حملات إعلانية تركز على نتائج ملموسة</span>
								</div>
							</div>
						</div>
					</Reveal>
				</div>

				<Reveal from="up" delay={0.2}>
					<div className="mt-8 flex flex-col items-center justify-center rounded-[2.5rem] border border-[#a9001f]/30 bg-gradient-to-b from-[#210006] to-[#4a000b] p-10 shadow-2xl md:p-16 text-center relative overflow-hidden">
						<div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-[#a9001f] opacity-10 blur-[80px]"></div>
						<div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-[#a9001f] opacity-10 blur-[80px]"></div>

						<div className="mb-8 inline-block rounded-2xl bg-white px-8 py-3 text-2xl font-black text-[#7a0011] shadow-lg md:text-3xl">
							من نحن
						</div>

						<h2 className="mx-auto max-w-4xl text-2xl font-bold leading-relaxed text-white md:text-3xl lg:text-4xl lg:leading-[1.8] mb-10" dir="rtl">
							نربط العلامات والهويات التجارية العربية
							بجمهورها بأسلوب أصيل ومعاصر
							<br className="hidden md:block" />
							نؤمن بأن الهوية الواضحة هي أساس
							<br className="hidden md:block" />
							التأثير الحقيقي
						</h2>

						<div className="rounded-2xl bg-[#7a0011] px-8 py-4 text-xl font-bold text-white shadow-[0_8px_20px_rgba(122,0,17,0.4)] md:text-2xl">
							حيث تلتقي الهوية بالتأثير
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
