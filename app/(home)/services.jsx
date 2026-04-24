import Link from "next/link";
import { TrendingUp, UsersRound, Target, BadgeCheck } from "lucide-react";
import Reveal from "../components/Reveal";

const services = [
	{
		title: "شراء الميديا",
		description: "استراتيجيات إعلانية متقدمة لتحقيق أعلى عائد على الاستثمار",
		icon: TrendingUp,
	},
	{
		title: "إدارة السوشيال ميديا",
		description: "بناء مجتمع نشط حول علامتك التجارية بمحتوى جذاب ومؤثر",
		icon: UsersRound,
	},
	{
		title: "تحسين محركات البحث",
		description: "تصدر نتائج البحث في السوق الكويتي والخليجي",
		icon: BadgeCheck,
	},
	{
		title: "صناعة المحتوى",
		description: "محتوى احترافي يعكس هوية علامتك ويتفاعل مع جمهورك",
		icon: Target,
	},
];

function ServiceCard({ title, description, icon: Icon }) {
	return (
		<article className="group rounded-3xl border border-white/10 bg-[linear-gradient(115deg,rgba(23,36,67,0.72)_0%,rgba(43,45,72,0.54)_100%)] p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:border-white/20 hover:bg-[linear-gradient(115deg,rgba(31,46,81,0.82)_0%,rgba(53,57,90,0.66)_100%)] hover:shadow-[0_20px_40px_rgba(3,8,28,0.45)] md:p-10">
			<div className="mb-8 flex justify-end">
				<div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-b from-[#b50021] to-[#730013] shadow-[0_10px_25px_rgba(139,0,22,0.45)] transition-transform duration-700 hover:rotate-[360deg]">
					<Icon className="h-8 w-8 text-white" strokeWidth={2.4} />
				</div>
			</div>

			<h3 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">{title}</h3>
			<p className="text-2xl leading-relaxed text-white/60 md:text-3xl">{description}</p>
		</article>
	);
}

export default function Services() {
	return (
		<section className="w-full py-20 md:py-24" dir="rtl">
			<div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-12">
				<header className="mb-14 text-center">
					<Reveal from="up">
						<h2 className="mb-4 text-5xl font-black leading-tight text-white md:text-7xl">
							خدماتنا <span className="text-[#a9001f]">المتميزة</span>
						</h2>
					</Reveal>
					<Reveal from="up" delay={0.1}>
						<p className="text-2xl font-semibold text-white/55 md:text-4xl">حلول شاملة لنجاح علامتك التجارية</p>
					</Reveal>
				</header>

				<div className="grid grid-cols-1 gap-7 md:grid-cols-2">
					{services.map((service, index) => (
						<Reveal key={service.title} from={index % 2 === 0 ? "right" : "left"} delay={0.1 * index}>
							<ServiceCard
								title={service.title}
								description={service.description}
								icon={service.icon}
							/>
						</Reveal>
					))}
				</div>

				<div className="mt-10 flex justify-center md:mt-12">
					<Reveal from="up" delay={0.4}>
						<Link
							href="/services"
							data-btn="true"
							className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-[#b3001f] to-[#8b0016] px-7 py-3 text-lg font-bold text-white shadow-[0_12px_28px_rgba(139,0,22,0.36)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:brightness-110 hover:shadow-[0_18px_36px_rgba(139,0,22,0.55)] md:gap-3 md:px-11 md:py-5 md:text-3xl"
						>
							<span aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
							عرض جميع الخدمات
						</Link>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
