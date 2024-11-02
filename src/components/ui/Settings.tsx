import {
	ArgFlagIcon,
	LanguageIcon,
	MoonIcon,
	PaintBrushIcon,
	SettingsIcon,
	SunIcon,
	USAFlagIcon,
} from "@ui/icons/Icons";
import { useEffect, useState } from "preact/hooks";

type Language = "en" | "es";
type Theme = "light" | "dark";

function SettingsSubMenu({
	topic,
	handleThemeChange,
	handleLanguageChange,
}: {
	topic: "theme" | "language";
	handleThemeChange?: (theme: Theme) => void;
	handleLanguageChange?: (language: Language) => void;
}) {
	return (
		<div class="absolute right-[-16px] top-[-16px] hidden group-hover:flex gap-4 items-center bg-[var(--card-bg-hover)] rounded-full p-4 pr-16 opacity-0 group-hover:opacity-100 transition-all duration-all z-[-1] shadow-lg">
			{topic === "theme" && handleThemeChange ? (
				<>
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
				</>
			) : (
				handleLanguageChange && (
					<>
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
					</>
				)
			)}
		</div>
	);
}

function SettingsMainMenuItem({
	topic,
	handleThemeChange,
	handleLanguageChange,
}: {
	topic: "theme" | "language";
	handleThemeChange?: (theme: Theme) => void;
	handleLanguageChange?: (language: Language) => void;
}) {
	return (
		<li class="cursor-pointer">
			<div class="flex flex-row relative group">
				{topic === "theme" ? (
					<PaintBrushIcon title="Theme" height={20} width={20} />
				) : (
					<LanguageIcon title="Language" height={20} width={20} />
				)}
				<SettingsSubMenu
					topic={topic}
					handleThemeChange={handleThemeChange}
					handleLanguageChange={handleLanguageChange}
				/>
			</div>
		</li>
	);
}

function SettingsMainMenu({
	isVisible,
	handleThemeChange,
	handleLanguageChange,
}: {
	isVisible: boolean;
	handleThemeChange: (theme: Theme) => void;
	handleLanguageChange: (language: Language) => void;
}) {
	return (
		<ul
			class={`${
				isVisible ? "" : "hidden"
			} relative flex flex-col gap-y-5 mb-10`}
		>
			<SettingsMainMenuItem
				topic="theme"
				handleThemeChange={handleThemeChange}
			/>
			<SettingsMainMenuItem
				topic="language"
				handleLanguageChange={handleLanguageChange}
			/>
		</ul>
	);
}

export default function Settings() {
	const [theme, setTheme] = useState<Theme>("light");
	const [language, setLanguage] = useState<Language>("en");
	const [isMainMenuVisible, setIsMainMenuVisible] = useState<boolean>(false);

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
		<div class="flex flex-col fixed bottom-10 right-10 items-center p-4 bg-[var(--card-bg-hover)] rounded-full shadow-lg transition-all duration-300 z-50">
			<SettingsMainMenu
				isVisible={isMainMenuVisible}
				handleThemeChange={handleThemeChange}
				handleLanguageChange={handleLanguageChange}
			/>
			<button type="button" onClick={toggleMainMenuVisibility}>
				<SettingsIcon title="Settings" height={20} width={20} />
			</button>
		</div>
	);
}
