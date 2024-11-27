import Card from "../components/home/cards/Cards";

function Home() {
  return (
    <div className="w-full h-screen flex bg-gray-100 p-5">
      <div className="flex-grow flex flex-row gap-3 justify-center">
        <Card name="To Do" />
        <Card name="In Progress" />
        <Card name="Done" />
      </div>
    </div>
  );
}

export default Home;
