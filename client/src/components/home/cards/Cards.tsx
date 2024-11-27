import CardContent from "./CardContent";

interface CardProps {
  name: string;
}

const Card: React.FC<CardProps> = ({ name = "" }) => {
  return (
    <div className="w-full max-w-md h-fit bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl text-gray-800">{name}</h1>
        <button
          className="font-normal text-3xl text-blue-500 hover:text-blue-700 transition-colors"
          aria-label="Add Task"
        >
          +
        </button>
      </div>
      {name === "To Do" && <CardContent />}
    </div>
  );
};

export default Card;
