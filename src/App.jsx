import EnableButton from "./components/EnableButton";
import Boxes from "./components/Boxes";

function App() {

  const data = [
    {
      id: 1,
      title: "today is the day",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore dolorum mollitia voluptatibus fuga ipsum exercitationem id deleniti inventore aut corporis quae veritatis vel aliquid, autem dolore asperiores! Reiciendis, impedit voluptates?, ",
    },
    {
      id: 2,
      title: "today is the day",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore dolorum mollitia voluptatibus fuga ipsum exercitationem id deleniti inventore aut corporis quae veritatis vel aliquid, autem dolore asperiores! Reiciendis, impedit voluptates?, ",
    },
    {
      id: 3,
      title: "today is the day",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore dolorum mollitia voluptatibus fuga ipsum exercitationem id deleniti inventore aut corporis quae veritatis vel aliquid, autem dolore asperiores! Reiciendis, impedit voluptates?, ",
    },
    {
      id: 4,
      title: "today is the day",
      description: "this day is great",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <EnableButton />
      <Boxes data={data} />
    </div>
  );
}

export default App;
