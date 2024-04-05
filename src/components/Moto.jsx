function Moto({ moto }) {
  return (
    <div className="p-3 bg-gray-800 rounded-md border-[1px] border-gray-700">
      <div className="flex items-center justify-between ">
        <h2 className="text-lg font-bold text-gray-50">{moto.title}</h2>
        <p className="text-sm text-pink-500 font-medium">
          {moto.deadline} left
        </p>
      </div>
      <p className="text-sm">{moto.body.slice(0, 71) + "..."}</p>

      <div className="flex items-center justify-between mt-3 text-sm">
        <p>
          Category: <span className="underline">{moto.category}</span>
        </p>
        {moto.important && <p className="text-red-400 font-bold">Important</p>}
      </div>
    </div>
  );
}

export default Moto;
