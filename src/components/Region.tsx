import { useRecoilState, useRecoilValue } from "recoil";
import { DialogHeader } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogTitle } from "@radix-ui/react-dialog";
import { formState, validRegion } from "@/atoms/formAtom";
import { modalState } from "@/atoms/modalAtom";
import { Button } from "@/components/ui/button";

export default function Region() {
  const [form, setForm] = useRecoilState(formState);
  const [modal, setModal] = useRecoilState(modalState);
  const btnDisabled = useRecoilValue(validRegion);
  function handleNext() {
    const curStage = modal.stage;
    setModal({ ...modal, stage: curStage + 1 });
  }
  function handleBack() {
    const curStage = modal.stage;
    setModal({ ...modal, stage: curStage - 1 });
  }
  return (
    <>
      <DialogHeader className="w-full flex flex-col items-center">
        <DialogTitle>
          <h2 className="font-bold text-[28px] leading-[150%] text-center text-[#434E61]">
            Pick your language and country/region
          </h2>
        </DialogTitle>
      </DialogHeader>

      <div className="my-10 w-full">
        <Select
          value={form.language}
          onValueChange={(value) =>
            setForm((prev) => ({ ...prev, language: value }))
          }
        >
          <SelectTrigger className="w-full bg-gray-100 text-gray-500 px-4 py-3 rounded-md border border-gray-200 flex justify-between cursor-pointer">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent className="w-full bg-gray-100 rounded-md border border-gray-200">
            <SelectItem value="en">English (US)</SelectItem>
            <SelectItem value="it">Italiano (Italy)</SelectItem>
            <SelectItem value="fr">Français (France)</SelectItem>
            <SelectItem value="es">Español (Spain)</SelectItem>
            <SelectItem value="de">Deutsch (Germany)</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={form.country}
          onValueChange={(value) =>
            setForm((prev) => ({ ...prev, country: value }))
          }
        >
          <SelectTrigger className="w-full bg-gray-100 text-gray-500 px-4 py-3 rounded-md border border-gray-200 flex justify-between mt-4 cursor-pointer">
            <SelectValue placeholder="Select Region" />
          </SelectTrigger>
          <SelectContent className="w-full bg-gray-100 rounded-md border border-gray-200">
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="it">Italy</SelectItem>
            <SelectItem value="fr">France</SelectItem>
            <SelectItem value="es">Spain</SelectItem>
            <SelectItem value="de">Germany</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        disabled={!btnDisabled}
        onClick={handleNext}
        className="w-full text-xl bg-orange-500 hover:bg-amber-600 disabled:bg-[#B3B3B3]"
      >
        NEXT
      </Button>

      <Button
        variant="ghost"
        className="cursor-pointer flex items-center gap-2 text-gray-600 hover:text-black"
        onClick={handleBack}
      >
        {modal.stage !== 0 && "BACK"}
      </Button>
    </>
  );
}
