interface IconProps {
	title: string;
	class?: string;
	height?: number;
	width?: number;
}

export default function SettingsIcon({
	title = "SettingsIcon",
	class: className,
	height = 24,
	width = 24,
}: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class={className}
			height={height}
			width={width}
		>
			<title>{title}</title>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M14.279 2.152C13.909 2 13.439 2 12.5 2C11.561 2 11.092 2 10.721 2.152C10.4769 2.25175 10.2549 2.39878 10.0679 2.58465C9.88079 2.77051 9.73233 2.99154 9.63101 3.235C9.53701 3.458 9.50101 3.719 9.48601 4.098C9.47887 4.3725 9.40208 4.64068 9.26284 4.87736C9.1236 5.11403 8.92648 5.31142 8.69001 5.451C8.44875 5.5851 8.17755 5.65615 7.90154 5.65754C7.62552 5.65894 7.35361 5.59065 7.11101 5.459C6.77301 5.281 6.52801 5.183 6.28601 5.151C5.75659 5.08192 5.22128 5.2242 4.79601 5.547C4.47801 5.789 4.24301 6.193 3.77401 7C3.30401 7.807 3.07001 8.21 3.01701 8.605C2.94701 9.131 3.09101 9.663 3.41701 10.084C3.56501 10.276 3.77401 10.437 4.09701 10.639C4.57401 10.936 4.88001 11.442 4.88001 12C4.88001 12.558 4.57401 13.064 4.09801 13.36C3.77401 13.563 3.56501 13.724 3.41601 13.916C3.25558 14.1242 3.13776 14.362 3.0693 14.6158C3.00083 14.8696 2.98307 15.1343 3.01701 15.395C3.07001 15.789 3.30401 16.193 3.77401 17C4.24401 17.807 4.47801 18.21 4.79601 18.453C5.22001 18.776 5.75601 18.918 6.28601 18.849C6.52801 18.817 6.77301 18.719 7.11101 18.541C7.35374 18.4092 7.62583 18.3408 7.90204 18.3422C8.17825 18.3436 8.44963 18.4147 8.69101 18.549C9.17701 18.829 9.46501 19.344 9.48601 19.902C9.50101 20.282 9.53701 20.542 9.63101 20.765C9.83501 21.255 10.227 21.645 10.721 21.848C11.091 22 11.561 22 12.5 22C13.439 22 13.909 22 14.279 21.848C14.5231 21.7483 14.7451 21.6012 14.9322 21.4154C15.1192 21.2295 15.2677 21.0085 15.369 20.765C15.463 20.542 15.499 20.282 15.514 19.902C15.534 19.344 15.823 18.828 16.31 18.549C16.5513 18.4149 16.8225 18.3439 17.0985 18.3425C17.3745 18.3411 17.6464 18.4093 17.889 18.541C18.227 18.719 18.472 18.817 18.714 18.849C19.244 18.919 19.78 18.776 20.204 18.453C20.522 18.211 20.757 17.807 21.226 17C21.696 16.193 21.93 15.79 21.983 15.395C22.0168 15.1343 21.9989 14.8695 21.9303 14.6157C21.8616 14.3619 21.7436 14.1241 21.583 13.916C21.435 13.724 21.226 13.563 20.903 13.361C20.426 13.064 20.12 12.558 20.12 12C20.12 11.442 20.426 10.936 20.902 10.64C21.226 10.437 21.435 10.276 21.584 10.084C21.7444 9.87579 21.8623 9.63799 21.9307 9.38422C21.9992 9.13044 22.017 8.86565 21.983 8.605C21.93 8.211 21.696 7.807 21.226 7C20.756 6.193 20.522 5.79 20.204 5.547C19.7787 5.2242 19.2434 5.08192 18.714 5.151C18.472 5.183 18.227 5.281 17.889 5.459C17.6463 5.59083 17.3742 5.65922 17.098 5.65782C16.8218 5.65642 16.5504 5.58528 16.309 5.451C16.0727 5.3113 15.8758 5.11385 15.7367 4.87719C15.5977 4.64052 15.521 4.37241 15.514 4.098C15.499 3.718 15.463 3.458 15.369 3.235C15.2677 2.99154 15.1192 2.77051 14.9322 2.58465C14.7451 2.39878 14.5231 2.25175 14.279 2.152ZM12.5 15C14.17 15 15.523 13.657 15.523 12C15.523 10.343 14.169 9 12.5 9C10.831 9 9.47701 10.343 9.47701 12C9.47701 13.657 10.831 15 12.5 15Z"
				fill="currentColor"
			/>
		</svg>
	);
}