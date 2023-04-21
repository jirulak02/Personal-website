type WaveProps = {
	rotated?: boolean;
};

export default function Wave({ rotated }: WaveProps) {
	return (
		<div
			className={`relative ${rotated ? "bottom-px" : "top-px"}`}
			style={{
				transform: rotated ? "rotate(180deg)" : "rotate(0deg)",
			}}
		>
			<svg
				viewBox="0 0 1440 100"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill="rgb(229, 229, 229)"
					d="M0,70L48,71.7C96,73,192,77,288,65C384,53,480,27,576,26.7C672,27,768,53,864,56.7C960,60,1056,40,1152,35C1248,30,1344,40,1440,50C1536,60,1632,70,1728,65C1824,60,1920,40,2016,35C2112,30,2208,40,2304,51.7C2400,63,2496,77,2592,78.3C2688,80,2784,70,2880,58.3C2976,47,3072,33,3168,28.3C3264,23,3360,27,3456,28.3C3552,30,3648,30,3744,35C3840,40,3936,50,4032,53.3C4128,57,4224,53,4320,55C4416,57,4512,63,4608,61.7C4704,60,4800,50,4896,41.7C4992,33,5088,27,5184,26.7C5280,27,5376,33,5472,41.7C5568,50,5664,60,5760,66.7C5856,73,5952,77,6048,76.7C6144,77,6240,73,6336,68.3C6432,63,6528,57,6624,51.7C6720,47,6816,43,6864,41.7L6912,40L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
				/>
			</svg>
		</div>
	);
}
