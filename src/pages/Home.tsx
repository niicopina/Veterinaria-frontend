import { useState } from "react";
import Navbar from "../components/Navbar";
import PromptSelector from "../components/PromptSelector";
import DidacticPrompt from "../components/DidacticPrompt";
import ClientPetPrompt from "../components/ClientPetPrompt";
import ResponseBox from "../components/ResponseBox";
import Legend from "../components/Legend";

const Home = () => {
  const [selected, setSelected] = useState<"didactic" | "client">("didactic");
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleSubmit = async () => {
  if (!prompt.trim()) return;

  try {
    const res = await fetch("http://localhost:8000/api/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResponse(data.response);
  } catch (error) {
    console.error("Error al enviar el prompt:", error);
    setResponse("⚠️ Hubo un error al procesar tu consulta.");
  }
};
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <PromptSelector selected={selected} setSelected={setSelected} />
        {selected === "didactic" ? (
          <DidacticPrompt value={prompt} setValue={setPrompt} />
        ) : (
          <ClientPetPrompt value={prompt} setValue={setPrompt} />
        )}
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={handleSubmit}
            >
            Enviar
          </button>

        <ResponseBox response={response} />
        <Legend />
      </main>
    </div>
  );
};

export default Home;