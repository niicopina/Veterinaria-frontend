import type { FC } from "react";

type Props = {
  selected: "didactic" | "client";
  setSelected: (value: "didactic" | "client") => void;
};

const PromptSelector: FC<Props> = ({ selected, setSelected }) => {
  return (
    <div className="flex gap-4 mb-6">
      <button
        className={`px-4 py-2 rounded ${
          selected === "didactic" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => setSelected("didactic")}
      >
        Consulta didáctica
      </button>
      <button
        className={`px-4 py-2 rounded ${
          selected === "client" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => setSelected("client")}
      >
        Cliente + Mascota
      </button>
    </div>
  );
};

export default PromptSelector;

