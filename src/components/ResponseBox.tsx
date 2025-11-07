import type { FC } from "react";

type Props = {
  response: string;
};

const ResponseBox: FC<Props> = ({ response }) => {
  if (!response) return null;

  return (
    <div className="mt-6 p-4 bg-white border rounded shadow text-gray-800 whitespace-pre-line">
      {response}
    </div>
  );
};

export default ResponseBox;