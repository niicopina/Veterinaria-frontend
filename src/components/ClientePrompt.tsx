import { useState } from "react";

export default function ClientePrompt() {
  const [mensaje, setMensaje] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/chatbot/extraer_datos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensaje }),
      });

      const data = await response.json();
      setRespuesta(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error("Error al enviar datos:", error);
      setRespuesta("Hubo un problema al conectar con el backend.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Describe tu situación</h2>

      <p className="text-sm text-gray-600 mb-4">
        Escribí un mensaje como: <br />
        <em>“Hola, soy Ana y tengo un gato llamado Mishi de 2 años”</em>
      </p>

      <textarea
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        className="w-full p-3 h-32 border border-gray-300 rounded resize-none"
        placeholder="Escribí tu mensaje aquí..."
        required
      />

      <button type="submit" className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Enviar
      </button>

      {respuesta && (
        <pre className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded text-sm whitespace-pre-wrap">
          {respuesta}
        </pre>
      )}
    </form>
  );
}