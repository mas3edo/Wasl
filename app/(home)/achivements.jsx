"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "../components/Reveal";

const stats = [
	{ value: 200, prefix: "+", label: "حملة ناجحة" },
	{ value: 95, prefix: "+", label: "عميل سعيد" },
	{ value: 99, suffix: "%", label: "نسبة رضا العملاء" },
	{ value: 7, prefix: "+", label: "سنوات من الخبرة" },
];

function useCountUp(target, shouldStart, duration = 1400) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!shouldStart) return;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setCount(target);
			return;
		}

		let frameId;
		const start = performance.now();

		const tick = (now) => {
			const progress = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setCount(Math.floor(target * eased));

			if (progress < 1) {
				frameId = requestAnimationFrame(tick);
			}
		};

		frameId = requestAnimationFrame(tick);

		return () => cancelAnimationFrame(frameId);
	}, [target, shouldStart, duration]);

	return count;
}

function StatItem({ value, label, prefix = "", suffix = "", shouldStart }) {
	const current = useCountUp(value, shouldStart);

	return (
		<div className="flex flex-col items-center text-center text-white">
			<p className="mb-3 text-5xl font-extrabold leading-none tracking-tight md:text-6xl">
				{prefix}
				{current}
				{suffix}
			</p>
			<p className="text-2xl font-semibold md:text-3xl">{label}</p>
		</div>
	);
}

export default function Achivements() {
	const sectionRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const element = sectionRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.25 }
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	return (
		<section ref={sectionRef} className="w-full border-y border-[#111d3f] bg-[linear-gradient(90deg,#8f0018_0%,#760013_52%,#4b000b_100%)] py-14 md:py-16">
			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-12" dir="rtl">
				{stats.map((stat, index) => (
					<Reveal key={stat.label} from="up" delay={index * 0.1}>
						<StatItem
							value={stat.value}
							label={stat.label}
							prefix={stat.prefix}
							suffix={stat.suffix}
							shouldStart={isVisible}
						/>
					</Reveal>
				))}
			</div>
		</section>
	);
}
