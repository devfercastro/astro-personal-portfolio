import en from "../locales/en.json";
import es from "../locales/es.json";

const messages: Record<"es" | "en", Translation> = { es, en };

export default function i18n(lang: "es" | "en", key: keyof Translation) {
	return messages[lang]?.[key] || messages.es[key];
}
