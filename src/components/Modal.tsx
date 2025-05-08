import { useRecoilState } from "recoil";
import { modalState } from "@/atoms/modalAtom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import Welcome from "./Welcome";
import Region from "./Region";
import Interested from "./Interested";
import ThankYou from "./ThankYou";
import ProgressDots from "./ProgressDots";

const steps = [Welcome, Region, Interested, ThankYou];

export default function Modal() {
	const [modal, setModal] = useRecoilState(modalState);
	const CurrentStep = steps[modal.stage];

	return (
		<div className="flex justify-center items-center">
			<Button
				className="cursor-pointer w-72 md:w-96 bg-orange-500 hover:bg-amber-600"
				onClick={() => setModal((prev) => ({ ...prev, isOpen: true }))}
			>
				Open Modal
			</Button>

			<Dialog
				open={modal.isOpen}
				onOpenChange={() => setModal((prev) => ({ ...prev, isOpen: true }))}
			>
				<DialogContent className="flex flex-col items-center p-6 space-y-4 w-96 md:w-full">
					<CurrentStep />
					{modal.stage < steps.length - 1 && (
						<ProgressDots stage={modal.stage} length={steps.length} />
					)}
				</DialogContent>
			</Dialog>
		</div>
	);
}
