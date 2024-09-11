import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
	return (
		<div className="">
			<main className="flex flex-col items-center justify-center min-h-screen">
				<div className="text-center uppercase flex flex-col gap-2">
					<h1>Hikken II</h1>
					<p className="uppercase">Coming soon...</p>
					<Button>START</Button>
				</div>
			</main>
		</div>
	);
}
