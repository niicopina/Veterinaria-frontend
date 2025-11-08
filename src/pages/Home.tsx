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
  const [loading, setLoading] = useState<boolean>(false);


  const handleSubmit = async () => {
  if (!prompt.trim()) return;
    setLoading(true); // empieza la carga
    setResponse("");  // limpia respuesta anterior

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
  } finally {
    setLoading(false); // termina la carga
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
          className={`mt-4 px-6 py-2 rounded transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          onClick={handleSubmit}
          disabled={loading}
          >
           {loading ? "Enviando..." : "Enviar"}
        </button>

        {loading && (
        <div className="mt-6 flex flex-col items-center justify-center text-gray-500">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-500 mb-2"></div>
        <span className="text-sm">Generando respuesta...</span>
        </div>
        )}
        <ResponseBox response={response} />
        <Legend />
      </main>
    </div>
  );
};

export default Home;