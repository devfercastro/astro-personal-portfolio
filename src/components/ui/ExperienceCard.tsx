import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

interface IExperienceCard {
	experience: {
		job: string;
		company: string;
		from: string;
		to: string;
		description: string;
	};
}

export const ExperienceCard: React.FC<IExperienceCard> = ({ experience }) => {
	const toggleActivate = (event: React.MouseEvent<HTMLDivElement>) => {
		const element = event.currentTarget;
		element.classList.add("duration-100");
		element.classList.add("bg-gray-800");
		setTimeout(() => {
			element.classList.remove("duration-100");
			element.classList.remove("bg-gray-800");
		}, 300);
	};

	return (
		<div
			className="cursor-pointer rounded-xl py-5 px-10 experience-card border border-gray-800 hover:border-white transition-all duration-100 lg:duration-300 group"
			onClick={toggleActivate}
		>
			<header className="flex flex-row w-full justify-between mb-2">
				<div className="flex flex-col">
					<h2 className="text-lg font-semibold">
						{experience.job} - {experience.company}
					</h2>
					<p className="text-base text-gray-500">
						{experience.from} - {experience.to}
					</p>
				</div>
				<ArrowTopRightOnSquareIcon
					height={25}
					width={25}
					className="lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				/>
			</header>
			<p className="text-sm mb-2">{experience.description}</p>
		</div>
	);
};

export default ExperienceCard;
