import { formState, interstedRemain, validIntersted } from "@/atoms/formAtom";
import { DialogHeader } from "./ui/dialog";

import { DialogTitle } from "@radix-ui/react-dialog";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button } from "./ui/button";
import { modalState } from "@/atoms/modalAtom";
const options = [
  {
    id: 0,
    title: "Interest 1",
    image: "",
  },
  {
    id: 1,
    title: "Interest 2",
    image:
      "https://img.freepik.com/photos-premium/fond-neons-realistes_80983-2524.jpg?w=996",
  },
  {
    id: 2,
    title: "Interest 3",
    image:
      "https://img.freepik.com/photos-gratuite/homme-costume-neon-est-assis-chaise-enseigne-au-neon-qui-dit-mot-dessus_188544-27011.jpg?t=st=1743082555~exp=1743086155~hmac=4ecef46110eff5e3265443263242200fd290f9191643c61ca8c2a3ed11ec1335&w=1060",
  },
  {
    id: 3,
    title: "Interest 4",
    image:
      "https://img.freepik.com/photos-premium/arene-sport-electronique-manette-jeu-vitesse-lumiere-coloree_43901-80.jpg?w=1060",
  },
];
export default function Interested() {
  const [form, setForm] = useRecoilState(formState);
  const [modal, setModal] = useRecoilState(modalState);
  const remain = useRecoilValue(interstedRemain);
  const btnDisabled = useRecoilValue(validIntersted);
  function handleNext() {
    const curStage = modal.stage;
    setModal({ ...modal, stage: curStage + 1 });
  }

  function handleClick(id: number) {
    console.log("click");

    if (!form.interested.includes(id)) {
      setForm({ ...form, interested: [...form.interested, id] });
    } else {
      setForm({
        ...form,
        interested: form.interested.filter((num) => num !== id),
      });
    }
  }
  return (
    <>
      <DialogHeader className="w-full flex flex-col items-center">
        <DialogTitle>
          <h2 className="font-bold text-[28px] leading-[150%] text-center text-[#434E61]">
            Tell us what you’re interested in
          </h2>
        </DialogTitle>
      </DialogHeader>
      <section className="w-full items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {options.map((e) => {
          return (
            <div
              onClick={() => handleClick(e.id)}
              key={e.id}
              className={
                form.interested.includes(e.id)
                  ? "cursor-pointer my-10 w-full h-full border-1 overflow-hidden rounded-md border-amber-500"
                  : "cursor-pointer my-10 w-full h-full border-1 overflow-hidden rounded-md"
              }
            >
              <div
                className="relative  w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${e.image})`,
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-end items-center  text-white p-4">
                  <p className="mt-2">{e.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <Button
        disabled={!btnDisabled}
        onClick={handleNext}
        className="cursor-pointer w-full text-xl bg-orange-500 hover:bg-amber-600 disabled:bg-[#B3B3B3]"
      >
        {!btnDisabled ? `Pick ${remain} more` : "NEXT"}
      </Button>
    </>
  );
}
