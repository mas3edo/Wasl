import Reveal from "../components/Reveal";
import Services from "./(ServComp)/Services";
import Work from "./(ServComp)/Work";
import Ready from "./(ServComp)/Ready";

export const metadata = {

    description: 'حلول تسويق رقمي شاملة مصممة خصيصاً لتلبية احتياجات السوق الكويتي والخليجي',
};

export default function ServicesPage() {
    return (
        <main className="flex min-h-screen flex-col pt-[88px]" dir="rtl">
            <section className="relative flex min-h-[45vh] w-full flex-col items-center justify-center overflow-hidden px-5 pb-10 pt-20 text-center md:min-h-[50vh]">
                <div className="relative z-10 mx-auto w-full max-w-4xl mt-12">
                    <Reveal from="down">
                        <div className="mx-auto mb-6 inline-flex items-center justify-center rounded-full bg-gradient-to-l from-[#b2001d] to-[#8b0016] px-6 py-2 text-sm font-bold text-white shadow-[0_8px_35px_rgba(139,0,22,0.45)] md:text-base">
                            خدمات متكاملة
                        </div>
                    </Reveal>

                    <Reveal from="up" delay={0.1}>
                        <h1 className="mb-6 text-[40px] sm:text-5xl font-black leading-tight text-white md:text-7xl md:leading-[1.1]">
                            خدماتنا <span className="text-[#a9001f]">الاحترافية</span>
                        </h1>
                    </Reveal>

                    <Reveal from="up" delay={0.2}>
                        <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-white/70 md:text-2xl md:leading-[1.6]">
                            حلول تسويق رقمي شاملة مصممة خصيصاً لتلبية احتياجات السوق الكويتي والخليجي
                        </p>
                    </Reveal>
                </div>
            </section>
            <Services />
            <Work />
            <Ready />
        </main>
    );
}
