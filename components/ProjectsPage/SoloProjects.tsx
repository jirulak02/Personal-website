import Image from "next/image";

import Card from "../ui/Card";

export default function SoloProjects() {
	return (
		<section className="mt-12">
			<h2 className="font-semibold ml-4">Top 3 solo projects</h2>
			<div className="grid grid-cols-3 gap-8 mt-2">
				<Card>
					<div className="flex items-center space-x-1">
						<Image
							src="/ProjectsPage/Python logo.png"
							width="23"
							height="25"
							alt="Python language logo"
						/>
						<h4>Sudoku app</h4>
					</div>
					<div className="flex justify-between">
						<Image
							src="/ProjectsPage/Sudoku 1.png"
							width="140"
							height="184"
							alt="Playing sudoku"
						/>
						<Image
							src="/ProjectsPage/Sudoku 2.png"
							width="139"
							height="184"
							alt="Victory screen of sudoku app"
						/>
					</div>
					<p className="pb-4">
						A fully functional Sudoku game application for Windows.
					</p>
					<a
						href="https://github.com/jirulak02/Sudoku"
						className="underline"
					>
						View the code{">"}
					</a>
					<div className="text-center">
						<a
							href="https://github.com/jirulak02/Sudoku/raw/main/Sudoku.exe"
							className="w-56 rounded-3xl inline-block"
						>
							<div className="text-2xl py-2 rounded-3xl bg-lime-800 text-white border-2 border-lime-800 hover:bg-neutral-100 hover:text-lime-800 hover:border-2">
								Download game
							</div>
						</a>
					</div>
				</Card>
				<Card>
					<div className="flex items-center space-x-1">
						<Image
							src="/ProjectsPage/Python logo.png"
							width="23"
							height="25"
							alt="Python language logo"
						/>
						<h4>Sudoku app</h4>
					</div>
					<div className="flex justify-between">
						<Image
							src="/ProjectsPage/Sudoku 1.png"
							width="140"
							height="184"
							alt="Playing sudoku"
						/>
						<Image
							src="/ProjectsPage/Sudoku 2.png"
							width="139"
							height="184"
							alt="Victory screen of sudoku app"
						/>
					</div>
					<p className="pb-4">
						A fully functional Sudoku game application for Windows.
					</p>
					<a
						href="https://github.com/jirulak02/Sudoku"
						className="underline"
					>
						View the code{">"}
					</a>
				</Card>
				<Card>
					<div className="flex items-center space-x-1">
						<Image
							src="/ProjectsPage/Python logo.png"
							width="23"
							height="25"
							alt="Python language logo"
						/>
						<h4>Sudoku app</h4>
					</div>
					<div className="flex justify-center">
						<Image
							src="/ProjectsPage/Ytb.png"
							width="141"
							height="162"
							alt="Playing sudoku"
						/>
					</div>
					<p className="pb-4">
						A fully functional Sudoku game application for Windows.
					</p>
					<a
						href="https://github.com/jirulak02/Sudoku"
						className="underline"
					>
						View the code{">"}
					</a>
				</Card>
			</div>
		</section>
	);
}
