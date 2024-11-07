import clsx from "clsx";
import type { ComponentChildren } from "preact";

const Menu = ({
	isVisible,
	children,
}: {
	isVisible: boolean;
	children: ComponentChildren;
}) => {
	const menuClasses = clsx(
		// Position and layout
		"absolute right-[-8px] top-[-8px]",
		"flex items-center gap-x-2",

		// Appearance
		"bg-[var(--foreground)]",
		"rounded-full",
		"shadow-lg",

		// Padding and z-index
		"p-2 pr-16",
		"z-[-1]",

		// Transitions
		"transition-all duration-300",

		// State-dependent classes
		{
			"opacity-100 scale-100 pointer-events-auto": isVisible,
			"opacity-0 scale-95 pointer-events-none": !isVisible,
		},
	);
	return <div class={menuClasses}>{children}</div>;
};

export default Menu;
