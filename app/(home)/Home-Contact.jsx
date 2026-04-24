import Link from "next/link";
import Reveal from "../components/Reveal";

export default function HomeContact() {
	return (
		<section className="w-full py-16 md:py-20" dir="rtl">
			<div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-12">
				<div className="rounded-[28px] bg-[linear-gradient(90deg,#850016_0%,#680011_55%,#43000a_100%)] px-6 py-12 text-center md:px-12 md:py-16">
					<Reveal from="up">
						<h2 className="mx-auto mb-6 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
							هل أنت مستعد لتنمية علامتك
							<br className="hidden md:block" />
							التجارية؟
						</h2>
					</Reveal>

					<Reveal from="up" delay={0.1}>
						<p className="mx-auto mb-10 max-w-4xl text-xl leading-relaxed text-white/95 md:mb-12 md:text-3xl">
							دعنا نساعدك في الوصول إلى جمهورك المستهدف وتحقيق أهدافك التسويقية بكفاءة
							<br className="hidden md:block" />
							واحترافية
						</p>
					</Reveal>

					<Reveal from="up" delay={0.2}>
						<Link
							href="/contact"
							data-btn="true"
							className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-xl font-extrabold text-[#8b0016] shadow-[0_10px_24px_rgba(3,8,20,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f3f3f3] hover:text-[#5a0010] hover:shadow-[0_16px_34px_rgba(3,8,20,0.35)] md:px-12 md:py-4 md:text-4xl"
						>
							<span aria-hidden="true">←</span>
							تواصل معنا الآن
						</Link>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
