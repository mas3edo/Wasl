"use client";
import Reveal from "../components/Reveal";

export default function Years() {
	return (
		<section className="w-full pb-20 md:pb-24">
			<div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-12">
				<Reveal from="up">
					<div className="grid grid-cols-1 gap-12 rounded-[2.5rem] border border-white/5 bg-[#121624] p-8 shadow-2xl md:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
						<div className="flex flex-col justify-center text-right">
							<h2 className="mb-8 text-4xl font-black leading-[1.3] text-white md:text-5xl lg:text-[46px]">
								رحلتنا في عالم <span className="text-[#a9001f]">التسويق</span><br/>
								<span className="text-[#a9001f]">الرقمي</span>
							</h2>
							<p className="mb-6 text-[17px] leading-[1.8] text-white/75 md:text-lg">
								انطلقت "وصل" من رؤية بسيطة: ربط العلامات التجارية بجمهورها بطريقة أصيلة ومؤثرة. في عالم مليء بالضوضاء الرقمية، أردنا أن نكون الجسر الذي يصل الرسالة الصحيحة إلى الأشخاص المناسبين في الوقت المثالي.
							</p>
							<p className="text-[17px] leading-[1.8] text-white/75 md:text-lg">
								على مدى السنوات الماضية، تطورنا من وكالة ناشئة إلى شريك موثوق للعديد من العلامات التجارية الرائدة في الكويت ودول الخليج. نجاحنا مبني على فهم عميق للسوق المحلي، وشغف حقيقي بالإبداع، والتزام لا يتزعزع بتحقيق نتائج استثنائية لعملائنا.
							</p>
						</div>
						<div className="flex items-center justify-center">
							<div className="group flex h-full min-h-[360px] w-full flex-col items-center justify-center rounded-[2.5rem] border-[3px] border-[#7a0011]/80 bg-[#0a0c14] p-10 text-center shadow-[0_0_40px_rgba(122,0,17,0.15)] transition-all duration-500 hover:border-[#a9001f] hover:shadow-[0_0_50px_rgba(169,0,31,0.25)] hover:scale-[1.02]">
								<span className="mb-5 text-7xl font-black text-white md:text-8xl lg:text-[110px]">
									+7
								</span>
								<h3 className="mb-3 text-2xl font-bold text-white md:text-[28px]">
									سنوات من التميز
								</h3>
								<p className="text-base font-semibold text-white/50 md:text-lg">
									في خدمة السوق الكويتي
								</p>
							</div>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
