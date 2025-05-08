export default function ProgressDots({
	stage,
	length,
}: {
	stage: number;
	length: number;
}) {
	return (
		<div className="flex space-x-2 mt-2">
			{[...Array(length)].map((_, index) => (
				<div
					key={index}
					className={`w-2 h-2 rounded-full ${
						index <= stage ? "bg-orange-500" : "bg-gray-300"
					}`}
				/>
			))}
		</div>
	);
}
