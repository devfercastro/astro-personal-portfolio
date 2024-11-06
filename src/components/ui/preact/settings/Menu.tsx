import type { ComponentChildren } from "preact";

const Menu = ({
	isVisible,
	children,
}: {
	isVisible: boolean;
	children: ComponentChildren;
}) => {
	return (
		<div
			class={`absolute right-[-8px] top-[-8px] flex items-center bg-[var(--foreground)] rounded-full gap-x-2 p-2 pr-16 z-[-1] shadow-lg transition-all duration-300 ${
				isVisible
					? "opacity-100 scale-100 pointer-events-auto"
					: "opacity-0 scale-95 pointer-events-none"
			}`}
		>
			{children}
		</div>
	);
};

export default Menu;
