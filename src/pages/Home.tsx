import Navbar from "../components/Navbar";
import RecommendedPrompt from "../components/RecommendedPrompt";
import PromptBox from "../components/PromptBox";
import Legend from "../components/Legend";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <RecommendedPrompt />
        <PromptBox />
        <Legend />
      </main>
    </div>
  );
}
