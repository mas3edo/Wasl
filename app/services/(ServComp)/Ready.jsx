"use client";
import Reveal from "../../components/Reveal";
import Link from "next/link";

export default function Ready() {
	return (
		<section className="w-full pb-20 md:pb-24">
			<div className="mx-auto w-full max-w-[1040px] px-5 md:px-8">
				<Reveal from="up">
					<div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#8a0015] to-[#4a000b] px-6 py-16 text-center shadow-[0_20px_50px_rgba(100,0,15,0.4)] md:px-12 md:py-20">
						<div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white opacity-[0.04] blur-3xl pointer-events-none"></div>
						<div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-black opacity-[0.3] blur-3xl pointer-events-none"></div>

						<h2 className="relative z-10 mb-6 text-3xl font-black text-white sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.2]">
							مستعد لبدء مشروعك القادم؟
						</h2>
						
						<p className="relative z-10 mx-auto mb-10 max-w-2xl text-base font-medium leading-relaxed text-white/85 sm:text-lg md:text-[20px]">
							دعنا نناقش كيف يمكننا مساعدتك في تحقيق أهدافك التسويقية
						</p>

						<div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
							<Link 
								href="/contact" 
								className="flex h-[52px] w-full items-center justify-center rounded-full bg-white px-9 text-lg font-bold text-[#7a0011] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,255,255,0.25)] sm:w-auto"
							>
								تواصل معنا الآن
							</Link>
							
							<Link 
								href="/about" 
								className="flex h-[52px] w-full items-center justify-center rounded-full border border-white/80 bg-transparent px-9 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:w-auto"
							>
								تعرف علينا أكثر
							</Link>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
