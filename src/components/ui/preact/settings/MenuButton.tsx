import clsx from "clsx";
import type { ComponentChildren } from "preact";

const MenuButton = ({
	children,
	clickHandler,
	rotation = false,
	active = false,
}: {
	children: ComponentChildren;
	clickHandler: (e: MouseEvent) => void;
	rotation?: boolean;
	active?: boolean;
	extraClasses?: string;
}) => {
	const overlayClasses = clsx(
		// Positning and layout
		"absolute inset-0",

		// Appearance
		"bg-[var(--text-primary)]",

		// Transitions
		"transition-all duration-300",

		// State-dependent classes
		active ? "opacity-100" : "opacity-0 group-hover:opacity-100",
	);

	const iconClasses = clsx(
		// Positning and layout
		"relative z-10",

		// Transitions
		"transition-all duration-300",

		// State-dependent classes
		active ? "text-[var(--text-alt)]" : "group-hover:text-[var(--text-alt)]",
		rotation ? "group-hover:rotate-[360deg]" : "",
	);

	return (
		<button
			type="button"
			class="flex justify-center items-center w-[36px] h-[36px] rounded-full relative overflow-hidden group transition-all duration-300"
			onClick={clickHandler}
		>
			{/* Overlay */}
			<div class={overlayClasses} />
			{/* Icon container */}
			<div class={iconClasses}>{children}</div>
		</button>
	);
};

export default MenuButton;
