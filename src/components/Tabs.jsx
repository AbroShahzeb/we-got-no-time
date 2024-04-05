function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="text-gray-200 flex items-center mx-4 mt-3 gap-5 font-bold">
      <p
        className={`px-3 py-1  cursor-pointer ${
          activeTab === "home" ? "bg-pink-600" : ""
        }`}
        onClick={() => setActiveTab("home")}
      >
        Home
      </p>
      <p
        className={`px-3 py-1  cursor-pointer ${
          activeTab === "motos" ? "bg-pink-600" : ""
        }`}
        onClick={() => setActiveTab("motos")}
      >
        Life motos
      </p>
    </div>
  );
}

export default Tabs;
