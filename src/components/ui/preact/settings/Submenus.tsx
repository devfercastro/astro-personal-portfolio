import type { ComponentChildren } from "preact";
import {
	ArgFlagIcon,
	LanguageIcon,
	MoonIcon,
	PaintBrushIcon,
	SunIcon,
	USAFlagIcon,
} from "../../icons/Icons";

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
			<div class="absolute inset-0 bg-[var(--text-primary)] opacity-0 group-hover:opacity-100 transition-all duration-300" />
			<div
				class={`relative z-10 transition-all duration-300 group-hover:text-[var(--text-alt)] group-hover:scale-110 ${
					rotation ? "group-hover:rotate-[360deg]" : ""
				}`}
			>
				{children}
			</div>
		</button>
	);
};

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

export function LanguageMenu({
	isVisible,
	toggleVisibility,
	handleLanguageChange,
}: {
	isVisible: boolean;
	toggleVisibility: (e: MouseEvent) => void;
	handleLanguageChange: (language: Language) => void;
}) {
	return (
		<div class="flex flex-row relative">
			<MenuButton clickHandler={(e) => toggleVisibility(e)} rotation={true}>
				<LanguageIcon title="Language" height={20} width={20} />
			</MenuButton>
			<Menu isVisible={isVisible}>
				<MenuButton clickHandler={() => handleLanguageChange("es")}>
					<ArgFlagIcon title="English ARG" height={20} width={20} />
				</MenuButton>
				<MenuButton clickHandler={() => handleLanguageChange("en")}>
					<USAFlagIcon title="English US" height={20} width={20} />
				</MenuButton>
			</Menu>
		</div>
	);
}

export function ThemeMenu({
	isVisible,
	toggleVisibility,
	handleThemeChange,
}: {
	isVisible: boolean;
	toggleVisibility: (e: MouseEvent) => void;
	handleThemeChange: (theme: Theme) => void;
}) {
	return (
		<div class="flex flex-row relative">
			<MenuButton clickHandler={(e) => toggleVisibility(e)} rotation={true}>
				<PaintBrushIcon title="Theme" height={20} width={20} />
			</MenuButton>
			<Menu isVisible={isVisible}>
				<MenuButton clickHandler={() => handleThemeChange("dark")}>
					<MoonIcon title="Dark theme" height={20} width={20} />
				</MenuButton>
				<MenuButton clickHandler={() => handleThemeChange("light")}>
					<SunIcon title="Light theme" height={20} width={20} />
				</MenuButton>
			</Menu>
		</div>
	);
}
