interface ExperiencesItem {
	job: string;
	company: string;
	time: number;
	description: string;
	url: string;
	badges: Badge[];
}

interface ProjectsItem {
	title: string;
	description: string;
	image: string;
	urls: {
		preview: string;
		code: string;
	};
	badges: Badge[];
}

type Badge = {
	text: string;
	icon: string;
};

interface Translation {
	welcome: string;
	description: string;
	about: string[];
	experience: ExperiencesItem[];
	projects: ProjectsItem[];
	sections: Section[];
}

type Section = {
	id: string;
	label: string;
};
