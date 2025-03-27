import { useRecoilState, useRecoilValue } from "recoil";
import { formState, validUserName } from "@/atoms/formAtom";
import { DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { modalState } from "@/atoms/modalAtom";
import { DialogTitle } from "@/components/ui/dialog";

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

export default function ThankYou() {
  const form = useRecoilValue(formState);
  const [modal, setModal] = useRecoilState(modalState);
  const interestsList =
    form.interested.length > 0
      ? form.interested
          .map((interestId) => {
            const interest = options.find((option) => option.id === interestId);
            return interest ? interest.title : "";
          })
          .join(", ")
      : "No interests selected";

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
          Thank you for your answers!
        </h2>
      </DialogHeader>

      <div className="mt-4 p-4 bg-gray-100 rounded-md">
        <p className="text-lg font-semibold text-black">Your Information:</p>
        <div className="mt-2">
          <p>
            <strong>User Name:</strong> {form.userName || "N/A"}
          </p>
          <p>
            <strong>Language:</strong> {form.language || "N/A"}
          </p>
          <p>
            <strong>Country:</strong> {form.country || "N/A"}
          </p>
          <p>
            <strong>Interests:</strong> {interestsList}
          </p>
        </div>
      </div>

      <Button
        onClick={() => {
          setModal({ ...modal, isOpen: false });
        }}
        className="cursor-pointer w-full text-xl bg-orange-500 hover:bg-amber-600 mt-4"
      >
        DONE
      </Button>
    </>
  );
}
