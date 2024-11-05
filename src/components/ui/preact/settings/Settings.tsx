import { SettingsIcon } from "@ui/icons/Icons";
import { useEffect, useState } from "preact/hooks";
import { LanguageMenu, ThemeMenu } from "./submenus";

type Language = "en" | "es";
type Theme = "light" | "dark";

export default function Settings() {
	const [theme, setTheme] = useState<Theme>("light");
	const [language, setLanguage] = useState<Language>("en");
	const [isMainMenuVisible, setIsMainMenuVisible] = useState<boolean>(false);
	const [isLanguageMenuVisible, setIsLanguageMenuVisible] =
		useState<boolean>(false);
	const [isThemeMenuVisible, setIsThemeMenuVisible] = useState<boolean>(false);

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

	const toggleMainMenuVisibility = () => {
		setIsMainMenuVisible(!isMainMenuVisible);
	};

	const toggleLanguageMenuVisibility = () => {
		setIsLanguageMenuVisible(!isLanguageMenuVisible);
	};

	const toggleThemeMenuVisibility = () => {
		setIsThemeMenuVisible(!isThemeMenuVisible);
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
		<div class="flex flex-col fixed bottom-10 right-10 items-center p-4 bg-[var(--foreground)] rounded-full shadow-lg transition-all duration-300 z-50 text-[var(--text-primary)]">
			<ul
				class={`${
					isMainMenuVisible ? "" : "hidden"
				} relative flex flex-col gap-y-5 mb-10`}
			>
				<LanguageMenu
					isVisible={isLanguageMenuVisible}
					toggleVisibility={toggleLanguageMenuVisibility}
					handleLanguageChange={handleLanguageChange}
				/>
				<ThemeMenu
					isVisible={isThemeMenuVisible}
					toggleVisibility={toggleThemeMenuVisibility}
					handleThemeChange={handleThemeChange}
				/>
			</ul>
			<button type="button" onClick={toggleMainMenuVisibility}>
				<SettingsIcon title="Settings" height={20} width={20} />
			</button>
		</div>
	);
}
