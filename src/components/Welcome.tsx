import { useRecoilState, useRecoilValue } from "recoil";
import { formState, validUserName } from "@/atoms/formAtom";
import pen from "@/assets/pen.svg";
import { DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { modalState } from "@/atoms/modalAtom";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function Welcome() {
  const [form, setForm] = useRecoilState(formState);
  const [modal, setModal] = useRecoilState(modalState);
  const btnDisabled = useRecoilValue(validUserName);
  function handleNext() {
    const curStage = modal.stage;
    setModal({ ...modal, stage: curStage + 1 });
  }
  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, userName: e.target.value });
  }

  return (
    <>
      <DialogHeader className="w-full flex flex-col items-center">
        <DialogTitle>
          <div className="bg-gray-600 size-30 flex justify-center items-center rounded-xl">
            <p className="text-white text-6xl font-bold">
              {validUserName && form.userName.charAt(0).toUpperCase()}
            </p>
          </div>
        </DialogTitle>

        <DialogDescription className="text-gray-400 text-sm mt-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.25)]">
          {form.userName}@wonderland.space
        </DialogDescription>

        <h2 className="text-[28px] font-bold text-[#434E61] mt-2 text-shadow:2px_2px_0px_black drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] ">
          Welcome to Giki
        </h2>
      </DialogHeader>

      <div className="flex justify-between w-full bg-gray-200 rounded-md p-1 items-center">
        <input
          id="userName"
          className="text-center bg-gray-200  text-orange-500 font-semibold  text-2xl border-none focus-visible:ring-0 focus-visible:outline-none"
          type="text"
          value={form.userName}
          onChange={handleName}
        />
        <label htmlFor="userName" className="">
          <img src={pen} alt="pen" className="size-4 text-orange-500 mr-1" />
        </label>
      </div>

      <p className="text-center text-black text-sm">
        Your answers to the next few questions will help us find the right
        communities for you
      </p>
      <Button
        disabled={!btnDisabled}
        onClick={handleNext}
        className="w-full text-xl bg-orange-500 hover:bg-amber-600 disabled:bg-[#B3B3B3]"
      >
        NEXT
      </Button>
    </>
  );
}
