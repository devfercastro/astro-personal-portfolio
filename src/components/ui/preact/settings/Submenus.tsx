import type { ComponentChildren } from "preact";
import {
	ArgFlagIcon,
	LanguageIcon,
	MoonIcon,
	PaintBrushIcon,
	SunIcon,
	USAFlagIcon,
} from "../../icons/Icons";

type Language = "en" | "es";
type Theme = "light" | "dark";

const MenuButton = ({
	children,
	clickHandler,
}: {
	children: ComponentChildren;
	clickHandler: () => void;
}) => {
	return (
		<button
			type="button"
			class="flex justify-center items-center w-[36px] h-[36px] rounded-full hover:bg-[var(--text-primary)] hover:text-[var(--text-alt)]"
			onClick={clickHandler}
		>
			{children}
		</button>
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
		<div class="flex flex-row relative group">
			<button type="button" onClick={(e) => toggleVisibility(e)}>
				<LanguageIcon title="Language" height={20} width={20} />
			</button>
			<div
				class={`absolute right-[-16px] top-[-16px] ${isVisible ? "flex" : "hidden"} gap-4 items-center bg-[var(--foreground)] rounded-full p-2 pr-16 z-[-1] shadow-lg`}
			>
				<MenuButton clickHandler={() => handleLanguageChange("es")}>
					<ArgFlagIcon title="English ARG" height={20} width={20} />
				</MenuButton>
				<MenuButton clickHandler={() => handleLanguageChange("en")}>
					<USAFlagIcon title="English US" height={20} width={20} />
				</MenuButton>
			</div>
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
		<div class="flex flex-row relative group">
			<button type="button" onClick={(e) => toggleVisibility(e)}>
				<PaintBrushIcon title="Theme" height={20} width={20} />
			</button>
			<div
				class={`absolute right-[-16px] top-[-16px] ${isVisible ? "flex" : "hidden"} gap-4 items-center bg-[var(--foreground)] rounded-full p-2 pr-16 z-[-1] shadow-lg`}
			>
				<MenuButton clickHandler={() => handleThemeChange("dark")}>
					<MoonIcon title="Dark theme" height={20} width={20} />
				</MenuButton>
				<MenuButton clickHandler={() => handleThemeChange("light")}>
					<SunIcon title="Light theme" height={20} width={20} />
				</MenuButton>
			</div>
		</div>
	);
}
