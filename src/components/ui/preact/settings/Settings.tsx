import { SettingsIcon } from "@icons/tsx-icons/Icons";
import clsx from "clsx";
import { useEffect, useState } from "preact/hooks";
import MenuButton from "./MenuButton";
import { LanguageMenu, ThemeMenu } from "./Submenus";

type MenuState = {
	main: boolean;
	language: boolean;
	theme: boolean;
};

export default function Settings() {
	const [theme, setTheme] = useState<Theme>("light");
	const [language, setLanguage] = useState<Language>("en");
	useState<boolean>(false);
	const [menuState, setMenuState] = useState<MenuState>({
		main: false,
		language: false,
		theme: false,
	});

	// Get theme from localStorage
	useEffect(() => {
		if (typeof window !== "undefined") {
			const savedTheme = localStorage.getItem("theme") as Theme;
			if (savedTheme) {
				setTheme(savedTheme);
			}
		}
	}, []);

	// Get the language preference
	useEffect(() => {
		const path = window.location.pathname;
		const lang = path.split("/")[1] as Language;
		if (lang) {
			setLanguage(lang);
		}
	}, []);

	// Change theme
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		localStorage.setItem("theme", theme);
	}, [theme]);

	// Click outside handler
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (!target.closest("#settings-container"))
				setMenuState({
					main: false,
					language: false,
					theme: false,
				});
		};

		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);

	const toggleMenu = (menuName: keyof MenuState) => (event: MouseEvent) => {
		event.preventDefault();

		if (menuName === "main") {
			if (menuState.main) {
				setMenuState({
					main: false,
					language: false,
					theme: false,
				});
			} else {
				setMenuState({
					...menuState,
					main: true,
				});
			}
		} else {
			setMenuState({
				...menuState,
				language: menuName === "language" ? !menuState.language : false,
				theme: menuName === "theme" ? !menuState.theme : false,
			});
		}
	};

	const handleThemeChange = (theme: Theme) => {
		setTheme(theme);
	};

	const handleLanguageChange = (newLanguage: Language) => {
		setLanguage(newLanguage);

		const currentPath = window.location.pathname;
		const currentLanguage = currentPath
			.split("/")
			.filter((segment) => segment !== "")[0];

		if (newLanguage !== currentLanguage) {
			window.location.href = newLanguage;
		}
	};

	const containerClasses = clsx(
		// Layout
		"flex flex-col fixed bottom-10 right-10 items-center p-2",

		// Appearance
		"bg-[var(--foreground)]",
		"rounded-full",
		"shadow-lg",

		// Position and z-index
		"z-50",
		"text-[var(--text-primary)]",
	);

	const menuListClasses = clsx(
		// Position and layout
		"relative flex flex-col gap-y-2",

		// Transitions
		"transition-all duration-300",

		{
			"max-h-[200px] opacity-100 mb-10": menuState.main,
			"max-h-0 opacity-0 mb-0": !menuState.main,
		},
	);

	return (
		<div id="settings-container" class={containerClasses}>
			<ul class={menuListClasses}>
				<LanguageMenu
					isVisible={menuState.language}
					toggleVisibility={toggleMenu("language")}
					handleLanguageChange={handleLanguageChange}
					currentLanguage={language}
				/>
				<ThemeMenu
					isVisible={menuState.theme}
					toggleVisibility={toggleMenu("theme")}
					handleThemeChange={handleThemeChange}
					currentTheme={theme}
				/>
			</ul>
			<MenuButton clickHandler={toggleMenu("main")} rotation={true}>
				<SettingsIcon title="Settings" class="w-5 h-5 group-hover:scale-110" />
			</MenuButton>
		</div>
	);
}
