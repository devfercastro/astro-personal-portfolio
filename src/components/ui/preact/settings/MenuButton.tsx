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
}) => {
	return (
		<button
			type="button"
			class="flex justify-center items-center w-[36px] h-[36px] rounded-full relative overflow-hidden group transition-all duration-300"
			onClick={clickHandler}
		>
			{/* Overlay */}
			<div
				class={`absolute inset-0 bg-[var(--text-primary)] transition-all duration-300 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
			/>
			{/* Icon container */}
			<div
				class={`relative z-10 transition-all duration-300 ${
					active
						? "text-[var(--text-alt)]"
						: "group-hover:text-[var(--text-alt)]"
				} ${rotation ? "group-hover:rotate-[360deg]" : ""}`}
			>
				{children}
			</div>
		</button>
	);
};

export default MenuButton;
