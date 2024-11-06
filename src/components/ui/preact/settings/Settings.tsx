import { SettingsIcon } from "@ui/icons/Icons";
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

	return (
		<div
			id="settings-container"
			class="flex flex-col fixed bottom-10 right-10 items-center p-2 bg-[var(--foreground)] rounded-full shadow-lg transition-all duration-300 z-50 text-[var(--text-primary)]"
		>
			<ul
				class={`${
					menuState.main ? "" : "hidden"
				} relative flex flex-col gap-y-2 mb-10`}
			>
				<LanguageMenu
					isVisible={menuState.language}
					toggleVisibility={toggleMenu("language")}
					handleLanguageChange={handleLanguageChange}
				/>
				<ThemeMenu
					isVisible={menuState.theme}
					toggleVisibility={toggleMenu("theme")}
					handleThemeChange={handleThemeChange}
				/>
			</ul>
			<MenuButton clickHandler={toggleMenu("main")} rotation={true}>
				<SettingsIcon title="Settings" class="w-5 h-5 group-hover:scale-110" />
			</MenuButton>
		</div>
	);
}
