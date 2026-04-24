"use client";
import { Search, BarChart3, Palette, Share2, Code, Video, CheckCircle2 } from "lucide-react";
import Reveal from "../../components/Reveal";

const servicesData = [
	{
		title: "تحسين محركات البحث",
		subtitle: "SEO",
		description: "تصدر نتائج البحث في جوجل وزيادة ظهور علامتك التجارية للعملاء المحتملين في الكويت ودول الخليج من خلال استراتيجيات SEO مثبتة.",
		icon: Search,
		iconBg: "bg-[#0f9d58]",
		bullets: [
			"بحث وتحليل الكلمات المفتاحية المحلية",
			"تحسين تقني شامل للموقع",
			"بناء روابط خلفية عالية الجودة",
			"محتوى محسّن لمحركات البحث",
		]
	},
	{
		title: "شراء الميديا",
		subtitle: "Media Buying",
		description: "نضع ميزانيتك الإعلانية في المكان الصحيح لتحقيق أعلى عائد على الاستثمار من خلال استراتيجيات شراء إعلانات احترافية عبر جميع المنصات الرقمية.",
		icon: BarChart3,
		iconBg: "bg-[#0084ff]",
		bullets: [
			"استهداف دقيق للجمهور الكويتي والخليجي",
			"تحسين مستمر للحملات الإعلانية",
			"تقارير شفافة ومفصلة للأداء",
			"إدارة الميزانية بكفاءة عالية",
		]
	},
	{
		title: "صناعة المحتوى",
		subtitle: "Content Creation",
		description: "محتوى إبداعي واحترافي يروي قصة علامتك التجارية ويجذب انتباه جمهورك، من النصوص التسويقية إلى التصاميم المرئية المذهلة.",
		icon: Palette,
		iconBg: "bg-[#ff3d00]",
		bullets: [
			"كتابة نصوص تسويقية مؤثرة",
			"تصميم جرافيك احترافي",
			"محتوى فيديو قصير وجذاب",
			"استراتيجية محتوى متكاملة",
		]
	},
	{
		title: "إدارة السوشيال ميديا",
		subtitle: "Social Media Management",
		description: "بناء مجتمع نشط ومتفاعل حول علامتك التجارية على جميع منصات التواصل الاجتماعي مع محتوى إبداعي يعكس هويتك ويحقق أهدافك.",
		icon: Share2,
		iconBg: "bg-[#c100e6]",
		bullets: [
			"استراتيجية محتوى مخصصة لكل منصة",
			"إدارة يومية للحسابات والتفاعل",
			"تصميم منشورات احترافية وجذابة",
			"تحليل الأداء وتقارير شهرية",
		]
	},
	{
		title: "تطوير المواقع",
		subtitle: "Website Development",
		description: "مواقع إلكترونية عصرية وسريعة ومستجيبة لجميع الأجهزة، مبنية بأحدث التقنيات لتقديم تجربة مستخدم استثنائية وتحقيق أهدافك التجارية.",
		icon: Code,
		iconBg: "bg-[#00a859]",
		bullets: [
			"تصميم واجهات مستخدم حديثة وجذابة",
			"تطوير متوافق مع جميع الأجهزة",
			"تحسين السرعة والأداء",
			"نظام إدارة محتوى سهل الاستخدام",
		]
	},
	{
		title: "الموشن جرافيك",
		subtitle: "Motion Graphics",
		description: "فيديوهات ورسوم متحركة احترافية تبرز رسالتك بشكل مبتكر وجذاب، مصممة خصيصاً لزيادة التفاعل وتعزيز الوعي بعلامتك التجارية.",
		icon: Video,
		iconBg: "bg-[#651fff]",
		bullets: [
			"فيديوهات ترويجية قصيرة",
			"رسوم متحركة توضيحية (Explainer Videos)",
			"محتوى فيديو للسوشيال ميديا",
			"إنتاج فيديو كامل من الفكرة للتنفيذ",
		]
	},
];

function ServiceCard({ title, subtitle, description, icon: Icon, iconBg, bullets }) {
	return (
		<article className="group relative flex h-full flex-col rounded-[2rem] border border-white/5 bg-[#121624] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:bg-[#161a2b] hover:shadow-[0_20px_40px_rgba(3,8,28,0.45)] md:p-10">
			<div className="mb-6 flex items-center gap-4 md:mb-8 md:gap-5">
				<div className={`flex h-16 w-16 md:h-[72px] md:w-[72px] shrink-0 items-center justify-center rounded-[18px] md:rounded-[20px] ${iconBg} shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3`}>
					<Icon className="h-7 w-7 text-white md:h-8 md:w-8" strokeWidth={2.2} />
				</div>
				<div className="text-right flex-1">
					<h3 className="text-[22px] leading-tight font-black text-white md:text-[28px]">{title}</h3>
					<p className="mt-1 text-sm font-semibold text-white/50">{subtitle}</p>
				</div>
			</div>
			<p className="mb-10 text-right text-[17px] leading-relaxed text-white/75 md:text-[18px]">
				{description}
			</p>
			<ul className="mt-auto flex flex-col gap-4 text-right">
				{bullets.map((bullet, i) => (
					<li key={i} className="flex items-start gap-3">
						<CheckCircle2 className="h-6 w-6 shrink-0 text-[#d90429] mt-0.5" strokeWidth={2.5} />
						<span className="flex-1 text-base font-medium text-white/85">{bullet}</span>
					</li>
				))}
			</ul>
		</article>
	);
}

export default function Services() {
	return (
		<section className="w-full pb-20 md:pb-24" dir="rtl">
			<div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-12">
				<div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
					{servicesData.map((service, index) => (
						<Reveal key={service.title} from={index % 2 === 0 ? "right" : "left"} delay={0.1 * index}>
							<ServiceCard {...service} />
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
