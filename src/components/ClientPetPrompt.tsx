import type { FC } from "react";

type Props = {
  value: string;
  setValue: (value: string) => void;
  loading: boolean;
};

const ClientPetPrompt: FC<Props> = ({ value, setValue, loading }) => {
  return (
    <div>
      <p className="text-sm text-gray-600 mb-2">
        💡 Ejemplo: “Hola soy Pepe y tengo un perrito llamado Juanelo de 2 años de raza pitbull.”
      </p>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={loading}
        placeholder="..."
        className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
        rows={4}
      />
    </div>
  );
};

export default ClientPetPrompt;