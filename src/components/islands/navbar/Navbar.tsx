import clsx from "clsx";
import { useEffect, useState } from "preact/hooks";

interface NavbarProps {
	sectionsInfo: Section[];
	tailwindClass: string;
}

const Overlay = ({ y }: { y: number }) => {
	return (
		<div
			class="absolute h-[52px] w-full bg-[var(--text-primary)] rounded-lg z-0 transition-all duration-300 ease-in-out"
			style={{
				top: `calc((33.3% * ${y}) - 52px - 20px)`,
			}}
		/>
	);
};

export default function Navbar({ sectionsInfo, tailwindClass }: NavbarProps) {
	const [activeIndex, setActiveIndex] = useState<number>(1);

	useEffect(() => {
		const sectionContainer = document.querySelector("#section-container");
		const sectionElements = document.querySelectorAll(
			"section.content-section",
		);

		if (sectionContainer && sectionElements.length > 0) {
			const callback = (entries: IntersectionObserverEntry[]) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						const sectionIndex = sectionsInfo.findIndex(
							(section) => section.id === entry.target.id,
						);
						setActiveIndex(sectionIndex + 1);
					}
				}
			};

			const observer = new IntersectionObserver(callback, {
				root: sectionContainer,
				threshold: 0.8,
			});

			for (const section of sectionElements) {
				observer.observe(section);
			}

			return () => {
				observer.disconnect();
			};
		}
	}, [sectionsInfo]);

	const handleClick = (id: string, index: number) => {
		const sectionContainer = document.querySelector("#section-container");
		const targetSection = document.querySelector(`#${id}`);

		if (targetSection && sectionContainer) {
			const containerRect = sectionContainer.getBoundingClientRect();
			const targetSectionRect = targetSection.getBoundingClientRect();
			const relativeTop = targetSectionRect.top - containerRect.top;
			const offset = 50;

			sectionContainer.scrollTo({
				top: sectionContainer.scrollTop + relativeTop - offset,
				behavior: "smooth",
			});

			setActiveIndex(index + 1);
		}
	};

	const getButtonClass = (index: number) => {
		return clsx(
			"group",
			// Layout
			"flex w-full h-[52px] px-5 py-3 rounded-md",
			// Typography
			"text-md",
			{
				"text-[var(--text-alt)]": index === activeIndex,
				"text-[var(--text-primary)]": index !== activeIndex,
			},
			"font-medium text-left",
			// Transition
			index !== activeIndex
				? "hover:bg-[var(--foreground)] hover:shadow-lg hover:text-[var(--text-primary)]"
				: "",
			"transition-all duration-300",
		);
	};

	return (
		<nav class={tailwindClass}>
			<Overlay y={activeIndex} />
			<ul class="w-full flex flex-col items-start h-min z-10">
				{sectionsInfo.map(({ id, label }, index) => (
					<li class="w-full mb-5 z-10" key={`nav-item-${id}`}>
						<button
							type="button"
							class={getButtonClass(index + 1)}
							aria-label={id}
							onClick={() => handleClick(id, index)}
						>
							<span class="relative pr-5">
								{label}
								<span class="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all rounded-lg duration-300 group-hover:w-full" />
							</span>
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
}
