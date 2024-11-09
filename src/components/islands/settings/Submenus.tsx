import {
	ArgFlagIcon,
	LanguageIcon,
	MoonIcon,
	PaintBrushIcon,
	SunIcon,
	USAFlagIcon,
} from "@icons/tsx-icons/Icons";

import Menu from "./Menu";
import MenuButton from "./MenuButton";

export function LanguageMenu({
	isVisible,
	toggleVisibility,
	handleLanguageChange,
	currentLanguage,
}: {
	isVisible: boolean;
	toggleVisibility: (e: MouseEvent) => void;
	handleLanguageChange: (language: Language) => void;
	currentLanguage: Language;
}) {
	return (
		<div class="flex flex-row relative">
			<MenuButton clickHandler={(e) => toggleVisibility(e)} rotation={true}>
				<LanguageIcon title="Language" class="w-5 h-5 group-hover:scale-110" />
			</MenuButton>
			<Menu isVisible={isVisible}>
				<MenuButton
					clickHandler={() => handleLanguageChange("es")}
					active={currentLanguage === "es"}
				>
					<ArgFlagIcon
						title="English ARG"
						class="w-5 h-5 group-hover:scale-110"
					/>
				</MenuButton>
				<MenuButton
					clickHandler={() => handleLanguageChange("en")}
					active={currentLanguage === "en"}
				>
					<USAFlagIcon
						title="English US"
						class="w-5 h-5 group-hover:scale-110"
					/>
				</MenuButton>
			</Menu>
		</div>
	);
}

export function ThemeMenu({
	isVisible,
	toggleVisibility,
	handleThemeChange,
	currentTheme,
}: {
	isVisible: boolean;
	toggleVisibility: (e: MouseEvent) => void;
	handleThemeChange: (theme: Theme) => void;
	currentTheme: Theme;
}) {
	return (
		<div class="flex flex-row relative">
			<MenuButton clickHandler={(e) => toggleVisibility(e)} rotation={true}>
				<PaintBrushIcon title="Theme" class="w-5 h-5 group-hover:scale-110" />
			</MenuButton>
			<Menu isVisible={isVisible}>
				<MenuButton
					clickHandler={() => handleThemeChange("dark")}
					active={currentTheme === "dark"}
				>
					<MoonIcon title="Dark theme" class="w-5 h-5 group-hover:scale-110" />
				</MenuButton>
				<MenuButton
					clickHandler={() => handleThemeChange("light")}
					active={currentTheme === "light"}
				>
					<SunIcon title="Light theme" class="w-5 h-5 group-hover:scale-110" />
				</MenuButton>
			</Menu>
		</div>
	);
}
