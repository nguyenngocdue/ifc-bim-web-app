import { Button } from "../ui/button";

const View3DTool = () => {
    const tools = [
        { name: "Home", icon: "🏠" },
        { name: "Fit", icon: "🔍" },
        { name: "Pan", icon: "🤲" },
        { name: "Zoom", icon: "🔎" },
        { name: "Orbit", icon: "🌐" },
        { name: "1st Person", icon: "👤" },
        { name: "Measure", icon: "📏" },
        { name: "Section", icon: "✂️" },
        { name: "Explode", icon: "💥" },
        { name: "Markup", icon: "✍️" },
      ];
    

  return (
    <div className="w-full py-4 bg-gray-50 border-t border-gray-200 flex justify-center">
      <div className="flex space-x-6">
      {tools.map((tool) => (
          <Button
            key={tool.name}
            variant="outline"
            className="flex items-center space-x-2 px-6 py-3 text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-full border-gray-300 shadow-md hover:shadow-lg"
          >
            <span className="text-lg">{tool.icon}</span>
            <span className="text-sm font-semibold">{tool.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default View3DTool;
