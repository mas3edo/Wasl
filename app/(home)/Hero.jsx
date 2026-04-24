import Link from "next/link";
import Reveal from "../components/Reveal";

export default function Hero() {
	return (
		<section className="relative w-full overflow-hidden">
			<div className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl items-center px-5 pb-14 pt-24 md:px-8 lg:px-12">
				<div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center" dir="rtl">
					<Reveal from="down">
						<div className="mb-6 inline-flex rounded-full bg-gradient-to-l from-[#b2001d] to-[#8b0016] px-6 py-2 text-xs font-bold text-white shadow-[0_8px_35px_rgba(139,0,22,0.45)] md:text-sm">
							الوكالة الرقمية الرائدة في الكويت
						</div>
					</Reveal>

					<Reveal from="right" delay={0.1}>
						<h1 className="mb-4 text-3xl font-extrabold leading-[1.2] tracking-tight text-white md:text-5xl">
							نربط علامتك التجارية
						</h1>
					</Reveal>

					<Reveal from="left" delay={0.2}>
						<h2 className="mb-6 bg-gradient-to-l from-[#ff1435] to-[#8b0016] bg-clip-text text-3xl font-black leading-[1.2] tracking-tight text-transparent md:text-5xl">
							بجمهورها المستهدف
						</h2>
					</Reveal>

					<Reveal from="up" delay={0.3}>
						<p className="mb-4 max-w-4xl text-lg font-semibold leading-relaxed text-white/86 md:text-2xl md:leading-[1.45]">
							حلول تسويق رقمي متكاملة مصممة خصيصاً للسوق الكويتي والخليجي
						</p>
					</Reveal>

					<Reveal from="up" delay={0.4}>
						<p className="mb-10 max-w-3xl text-base leading-8 text-white/65 md:text-xl md:leading-[1.6]">
							نحن في "وصل" نؤمن بقوة الاتصال الحقيقي، نبني استراتيجيات تسويقية مبنية على البيانات
							تحقق نتائج ملموسة وعلاقات دائمة مع عملائك.
						</p>
					</Reveal>

					<Reveal from="up" delay={0.5}>
						<div className="flex w-full max-w-2xl flex-col-reverse items-center justify-center gap-4 sm:flex-row sm:gap-4">
							<Link
								href="/services"
								data-btn="true"
								className="inline-flex w-full max-w-[250px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-lg font-bold text-white transition hover:border-white/40 hover:bg-white/10 sm:w-auto"
							>
								استكشف خدماتنا
							</Link>

							<Link
								href="/contact"
								data-btn="true"
								className="inline-flex w-full max-w-[290px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-l from-[#b2001d] to-[#8b0016] px-6 py-3 text-lg font-extrabold text-white shadow-none transition-all duration-300 hover:brightness-110 hover:shadow-[0_12px_40px_rgba(139,0,22,0.55)] sm:w-auto sm:max-w-none"
							>
								<span aria-hidden="true">←</span>
								احصل على استشارة مجانية
							</Link>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
