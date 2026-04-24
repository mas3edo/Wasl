import Reveal from "../components/Reveal";

const clients = [
	"شركة الخليج للتكنولوجيا",
	"مجموعة النور التجارية",
	"بيت الأزياء الكويتي",
	"مطاعم الذوق الرفيع",
	"عقارات الكويت الحديثة",
	"الشركة الوطنية للتجارة",
];

export default function Clients() {
	return (
		<section className="w-full bg-[linear-gradient(110deg,rgba(21,35,64,0.78)_0%,rgba(28,40,70,0.62)_52%,rgba(39,25,57,0.54)_100%)] py-16 md:py-20" dir="rtl">
			<div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-12">
				<header className="mb-12 text-center">
					<Reveal from="up">
						<h2 className="mb-3 text-4xl font-black leading-tight text-white md:text-6xl">
							عملاؤنا <span className="text-[#a9001f]">يثقون بنا</span>
						</h2>
					</Reveal>
					<Reveal from="up" delay={0.1}>
						<p className="text-lg font-semibold text-white/55 md:text-2xl">
							نفخر بشراكتنا مع أبرز العلامات التجارية في الكويت والخليج
						</p>
					</Reveal>
				</header>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{clients.map((client, index) => (
						<Reveal key={client} from="up" delay={index * 0.05}>
							<div
								className="rounded-3xl border border-white/10 bg-[linear-gradient(115deg,rgba(30,43,72,0.72)_0%,rgba(43,45,72,0.54)_100%)] px-6 py-9 text-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.015] hover:border-white/20 hover:bg-[linear-gradient(115deg,rgba(39,55,90,0.84)_0%,rgba(56,59,92,0.68)_100%)] hover:shadow-[0_16px_34px_rgba(4,10,30,0.45)] md:px-8 md:py-10"
							>
								<p className="text-2xl font-bold leading-relaxed text-white/85 md:text-3xl">{client}</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
