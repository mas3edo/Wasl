import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";const CONTACT_LINKS = {
	email: "mailto:waslads.9@gmail.com",
	instagram: "https://www.instagram.com/waslads.9?igsh=OWtlbzVvOW12OGs0",
	snapchat: "https://www.snapchat.com",
	phone1Href: "tel:+96558889121",
	phone2Href: "tel:++96558889121",
};

const CONTACT_INFO = [
	{
		id: "location",
		label: "الكويت",
		subLabel: "مدينة الكويت",
		icon: MapPin,
	},
	{
		id: "email",
		label: "waslads.9@gmail.com",
		href: CONTACT_LINKS.email,
		icon: Mail,
		dir: "ltr",
	},
	{
		id: "phone-1",
		label: "+965 58889121",
		href: CONTACT_LINKS.phone1Href,
		icon: Phone,
		dir: "ltr",
	},
	{
		id: "phone-2",
		label: "+965 5888 9121",
		href: CONTACT_LINKS.phone2Href,
		icon: Phone,
		dir: "ltr",
	},
];

function InstagramGlyph() {
	return (
		<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
			<circle cx="12" cy="12" r="4" />
			<circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
		</svg>
	);
}

function SnapchatGlyph() {
	return (
		<svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d="M8.5 10.4c0-2.2 1.5-3.9 3.5-3.9s3.5 1.7 3.5 3.9v1.1c.5.3 1 .4 1.5.4-.3 1-.9 1.6-1.9 1.9-.2.8-.7 1.3-1.6 1.6-.8.2-1.2.7-1.5 1.3-.3-.6-.7-1.1-1.5-1.3-.9-.3-1.4-.8-1.6-1.6-1-.3-1.6-.9-1.9-1.9.5 0 1-.1 1.5-.4v-1.1Z" />
			<path d="M7.2 17.4c.7.6 1.7.9 2.8 1 .6.9 1.2 1.5 2 1.5s1.4-.6 2-1.5c1.1-.1 2.1-.4 2.8-1" />
		</svg>
	);
}

const quickLinks = [
	{ href: "/", label: "الرئيسية" },
	{ href: "/services", label: "خدماتنا" },
	{ href: "/about", label: "من نحن" },
	{ href: "/contact", label: "اتصل بنا" },
];

const services = [
	"شراء الميديا",
	"تحسين محركات البحث",
	"إدارة السوشيال ميديا",
	"صناعة المحتوى",
	"الموشن جرافيك",
	"تطوير المواقع",
];

export default function Footer() {
	return (
		<footer className="w-full bg-[linear-gradient(110deg,#040d2a_0%,#091536_48%,#21102f_100%)] pt-14 text-white" dir="rtl">
			<div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-12">
				<div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
					<Reveal from="up" delay={0.1}>
						<div>
							<h3 className="mb-4 text-4xl font-black leading-none text-[#a1001b] md:text-5xl">وصل</h3>
							<p className="max-w-xs text-base leading-relaxed text-white/88 md:text-lg">
								نربط علامتك التجارية بجمهورها المستهدف في الكويت ودول الخليج من خلال استراتيجيات تسويق رقمي مبتكرة ومبنية على البيانات.
							</p>

						<div className="mt-8 flex items-center gap-4">
							<Link
								href={CONTACT_LINKS.email}
								aria-label="Email"
								className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-white/85 transition hover:-translate-y-0.5 hover:border-[#b3001f]/60 hover:bg-white/10 hover:text-[#b3001f]"
							>
								<Mail className="h-7 w-7" />
							</Link>
							<Link
								href={CONTACT_LINKS.instagram}
								target="_blank"
								rel="noreferrer"
								aria-label="Instagram"
								className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-white/85 transition hover:-translate-y-0.5 hover:border-[#b3001f]/60 hover:bg-white/10 hover:text-[#b3001f]"
							>
								<InstagramGlyph />
							</Link>
							<Link
								href={CONTACT_LINKS.snapchat}
								target="_blank"
								rel="noreferrer"
								aria-label="Snapchat"
								className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-white/85 transition hover:-translate-y-0.5 hover:border-[#b3001f]/60 hover:bg-white/10 hover:text-[#b3001f]"
							>
								<SnapchatGlyph />
							</Link>
						</div>
					</div>
					</Reveal>

					<Reveal from="up" delay={0.2}>
					<div>
						<h4 className="mb-5 text-2xl font-bold text-white/95 md:text-3xl">روابط سريعة</h4>
						<ul className="space-y-4">
							{quickLinks.map((item) => (
								<li key={item.href}>
									<Link href={item.href} className="text-lg text-white/85 transition hover:text-[#b3001f] md:text-xl">
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					</Reveal>

					<Reveal from="up" delay={0.3}>
					<div>
						<h4 className="mb-5 text-2xl font-bold text-white/95 md:text-3xl">خدماتنا</h4>
						<ul className="space-y-4">
							{services.map((item) => (
								<li key={item} className="text-lg text-white/85 md:text-xl">
									{item}
								</li>
							))}
						</ul>
					</div>
					</Reveal>

					<Reveal from="up" delay={0.4}>
					<div>
						<h4 className="mb-5 text-2xl font-bold text-white/95 md:text-3xl">تواصل معنا</h4>
						<div className="space-y-3">
							{CONTACT_INFO.map((item) => {
								const Icon = item.icon;

								return (
									<div key={item.id} className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
										{item.href ? (
											<Link
												href={item.href}
												className="min-w-0 break-all text-sm text-white transition hover:text-[#b3001f] md:text-base"
												dir={item.dir || "rtl"}
											>
												{item.label}
											</Link>
										) : (
											<div>
												<p className="text-sm font-semibold text-white md:text-base">{item.label}</p>
												{item.subLabel && <p className="text-xs text-white/80 md:text-sm">{item.subLabel}</p>}
											</div>
										)}

										<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-[#b50021] to-[#730013]">
											<Icon className="h-5 w-5" />
										</span>
									</div>
								);
							})}
						</div>
					</div>
					</Reveal>
				</div>

				<Reveal from="up" delay={0.5}>
				<div className="border-t border-white/12 py-8 text-center">
					<p className="text-base font-semibold text-white/70 md:text-lg">© 2026 وصل - جميع الحقوق محفوظة</p>
					<p className="mt-2 text-sm text-white/45 md:text-base">نربط علامتك التجارية بجمهورها | Connecting Your Brand to Its Audience</p>
				</div>
				</Reveal>
			</div>
		</footer>
	);
}
