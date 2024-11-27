function CardContent() {
  return (
    <div className="mt-6 space-y-4">
      {/* Make conditional rendering here, if there are no tasks display a message with an option to create a task. If there is task, display the tasks */}
      {/* Put cards components here */}
      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md shadow-sm">
        <p className="text-gray-700">Sample Task</p>
        <button className="text-red-500 hover:text-red-700 transition-colors">
          ❌
        </button>
      </div>
      {/* More tasks go here */}
    </div>
  );
}

export default CardContent;
