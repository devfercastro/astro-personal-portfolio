interface IconProps {
	height?: number;
	width?: number;
	className?: string;
	style?: React.CSSProperties;
}

export const ArrowTopRightOnSquareIcon: React.FC<IconProps> = ({
	height = 24,
	width = 24,
	className = "",
	style = {},
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		height={height}
		width={width}
		className={className}
		style={style}
	>
		<title>ArrowTopRightOnSquareIcon</title>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
		/>
	</svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({
	height = 24,
	width = 24,
	className = "",
	style = {},
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		height={height}
		width={width}
		className={className}
		style={style}
	>
		<title>ChevronDownIcon</title>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m19.5 8.25-7.5 7.5-7.5-7.5"
		/>
	</svg>
);
