import Moto from "./Moto";

const motos = [
  {
    id: 1,
    title: "Buy a beautiful house for my family",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at. Dignissim sodales ut eu sem. Laoreet non curabitur gravida arcu. Dictumst quisque sagittis purus sit amet volutpat. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. In hendrerit gravida rutrum quisque non. Feugiat sed lectus vestibulum mattis. Fusce ut placerat orci nulla pellentesque dignissim enim. Pretium lectus quam id leo in. Massa tempor nec feugiat nisl pretium fusce id. Fames ac turpis egestas maecenas pharetra convallis posuere. Sed nisi lacus sed viverra tellus in hac habitasse.",
    category: "Family happiness",
    deadline: "10 years",
    important: true,
  },
  {
    id: 2,
    title: "Find the love of my life",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at. Dignissim sodales ut eu sem. Laoreet non curabitur gravida arcu. Dictumst quisque sagittis purus sit amet volutpat. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. In hendrerit gravida rutrum quisque non. Feugiat sed lectus vestibulum mattis. Fusce ut placerat orci nulla pellentesque dignissim enim. Pretium lectus quam id leo in. Massa tempor nec feugiat nisl pretium fusce id. Fames ac turpis egestas maecenas pharetra convallis posuere. Sed nisi lacus sed viverra tellus in hac habitasse.",
    category: "Self love",
    deadline: "3 years",
    important: true,
  },
  {
    id: 3,
    title: "Get graduated",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra adipiscing at. Dignissim sodales ut eu sem. Laoreet non curabitur gravida arcu. Dictumst quisque sagittis purus sit amet volutpat. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. In hendrerit gravida rutrum quisque non. Feugiat sed lectus vestibulum mattis. Fusce ut placerat orci nulla pellentesque dignissim enim. Pretium lectus quam id leo in. Massa tempor nec feugiat nisl pretium fusce id. Fames ac turpis egestas maecenas pharetra convallis posuere. Sed nisi lacus sed viverra tellus in hac habitasse.",
    category: "Career",
    deadline: "1.5 years",
    important: true,
  },
];

function Motos() {
  return (
    <main className="mt-3 px-4 text-gray-200">
      <h2>Motos and values for which I have to strive</h2>
      <div className="flex flex-col gap-3 mt-3">
        {motos.map((moto) => (
          <Moto moto={moto} />
        ))}
      </div>
    </main>
  );
}

export default Motos;
