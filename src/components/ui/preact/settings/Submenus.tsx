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
				class={`absolute right-[-16px] top-[-16px] ${isVisible ? "flex" : "hidden"} group-active:flex gap-4 items-center bg-[var(--foreground)] rounded-full p-4 pr-16 transition-all duration-all z-[-1] shadow-lg`}
			>
				<button
					type="button"
					class="hover:scale-110 transition-transform duration-200"
					onClick={() => handleLanguageChange("es")}
				>
					<ArgFlagIcon title="Español AR" height={20} width={20} />
				</button>
				<button
					type="button"
					class="hover:scale-110 transition-transform duration-200"
					onClick={() => handleLanguageChange("en")}
				>
					<USAFlagIcon title="English US" height={20} width={20} />
				</button>
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
				class={`absolute right-[-16px] top-[-16px] ${isVisible ? "flex" : "hidden"} group-active:flex gap-4 items-center bg-[var(--foreground)] rounded-full p-4 pr-16 transition-all duration-all z-[-1] shadow-lg`}
			>
				<button
					type="button"
					class="hover:scale-110 transition-transform duration-200"
					onClick={() => handleThemeChange("dark")}
				>
					<MoonIcon title="Dark theme" height={20} width={20} />
				</button>
				<button
					type="button"
					class="hover:scale-110 transition-transform duration-200"
					onClick={() => handleThemeChange("light")}
				>
					<SunIcon title="Light theme" height={20} width={20} />
				</button>
			</div>
		</div>
	);
}
