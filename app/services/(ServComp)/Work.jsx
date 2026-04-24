"use client";
import { Target, Sparkles, Zap, TrendingUp } from "lucide-react";
import Reveal from "../../components/Reveal";

const steps = [
	{
		number: "1",
		title: "تحديد الأهداف",
		description: "نبدأ بفهم عميق لأهداف عملك واحتياجاتك التسويقية",
		icon: Target,
	},
	{
		number: "2",
		title: "وضع الاستراتيجية",
		description: "نضع خطة تسويقية شاملة ومبنية على البيانات والتحليل",
		icon: Sparkles,
	},
	{
		number: "3",
		title: "التنفيذ الإبداعي",
		description: "ننفذ الحملات بكفاءة عالية مع محتوى إبداعي متميز",
		icon: Zap,
	},
	{
		number: "4",
		title: "القياس والتحسين",
		description: "نقيس الأداء باستمرار ونحسن النتائج لتحقيق أعلى عائد",
		icon: TrendingUp,
	},
];

export default function Work() {
	return (
		<section className="relative w-full pb-20 md:pb-24">
			<div className="absolute left-1/2 top-10 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#a9001f] opacity-[0.15] blur-[100px] pointer-events-none"></div>

			<div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-12">
				<header className="mb-24 text-center">
					<Reveal from="up">
						<h2 className="mb-5 text-4xl font-black leading-tight text-white md:text-5xl lg:text-[56px]">
							طريقة <span className="text-[#a9001f]">عملنا</span>
						</h2>
					</Reveal>
					<Reveal from="up" delay={0.1}>
						<p className="text-xl font-medium text-white/60 md:text-2xl">
							نتبع منهجية واضحة ومثبتة لضمان نجاح مشروعك
						</p>
					</Reveal>
				</header>

				<div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
					{steps.map((step, index) => {
						const Icon = step.icon;
						return (
							<Reveal key={step.number} from="up" delay={0.1 * index}>
								<div className="group flex flex-col items-center text-center">
									<div className="relative mb-8 flex flex-col items-center">
										<div className="absolute -top-[21px] left-1/2 z-10 flex h-[42px] w-[42px] -translate-x-1/2 items-center justify-center rounded-full bg-[#7a0011] text-xl font-bold text-white shadow-[0_8px_20px_rgba(122,0,17,0.45)] transition-transform duration-500 group-hover:-translate-y-1">
											{step.number}
										</div>
										<div className="relative flex h-[100px] w-[100px] items-center justify-center rounded-[24px] border border-white/10 bg-[linear-gradient(115deg,rgba(23,36,67,0.72)_0%,rgba(43,45,72,0.54)_100%)] shadow-[0_10px_30px_rgba(3,8,28,0.3)] transition-all duration-500 group-hover:border-white/20 group-hover:bg-[linear-gradient(115deg,rgba(31,46,81,0.82)_0%,rgba(53,57,90,0.66)_100%)] group-hover:shadow-[0_20px_40px_rgba(3,8,28,0.45)]">
											<Icon className="h-10 w-10 text-white transition-transform duration-500 group-hover:scale-110" strokeWidth={1.6} />
										</div>
									</div>
									<h3 className="mb-3 text-[22px] font-extrabold text-white">{step.title}</h3>
									<p className="max-w-[280px] text-[17px] leading-[1.6] text-white/65">
										{step.description}
									</p>
								</div>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
