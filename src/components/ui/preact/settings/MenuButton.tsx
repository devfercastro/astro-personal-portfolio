import type { ComponentChildren } from "preact";

const MenuButton = ({
	children,
	clickHandler,
	rotation = false,
}: {
	children: ComponentChildren;
	clickHandler: (e: MouseEvent) => void;
	rotation?: boolean;
}) => {
	return (
		<button
			type="button"
			class="flex justify-center items-center w-[36px] h-[36px] rounded-full relative overflow-hidden group transition-all duration-300"
			onClick={clickHandler}
		>
			{/* Overlay */}
			<div class="absolute inset-0 bg-[var(--text-primary)] opacity-0 group-hover:opacity-100 transition-all duration-300" />
			{/* Icon container */}
			<div
				class={`relative z-10 transition-all duration-300 group-hover:text-[var(--text-alt)] ${
					rotation ? "group-hover:rotate-[360deg]" : ""
				}`}
			>
				{children}
			</div>
		</button>
	);
};

export default MenuButton;
