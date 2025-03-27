import { useRecoilState } from "recoil";
import { modalState } from "@/atoms/modalAtom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Welcome from "./Welcome";
import Region from "./Region";
import Interested from "./Interested";
import ThankYou from "./ThankYou";
export default function Modal() {
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <div className="flex justify-center items-center  ">
      <Button
        className="cursor-pointer w-72 md:w-96 bg-orange-500 hover:bg-amber-600"
        onClick={() => setModal({ ...modal, isOpen: true })}
      >
        Open Modal
      </Button>

      <Dialog
        open={modal.isOpen}
        onOpenChange={() => setModal({ ...modal, isOpen: true })}
      >
        <DialogContent className="flex flex-col items-center p-6 space-y-4 w-96 md:w-full">
          {modal.stage === 0 && <Welcome />}
          {modal.stage === 1 && <Region />}
          {modal.stage === 2 && <Interested />}
          {modal.stage === 3 && <ThankYou />}

          {modal.stage < 3 && (
            <div className="flex space-x-2 mt-2">
              {Array(3)
                .fill(null)
                .map((_, index) => {
                  let clases = "w-2 h-2 rounded-full";
                  clases +=
                    index <= modal.stage ? " bg-orange-500" : " bg-gray-300";
                  return <div key={index} className={clases}></div>;
                })}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
