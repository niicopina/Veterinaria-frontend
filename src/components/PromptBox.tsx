export default function PromptBox() {
  return (
    <textarea
      placeholder="Escribí tu consulta aquí..."
      className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
      rows={4}
    />
  );
}
