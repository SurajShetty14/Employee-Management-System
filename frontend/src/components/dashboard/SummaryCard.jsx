const SummaryCard = ({ icon, text, number, color }) => {
    return (
      <div className="rounded-lg bg-white shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex mb-6">
        {/* Icon */}
        <div className={`text-3xl flex justify-center items-center ${color} text-white px-6 py-4 rounded-l-lg`}>
          {icon}
        </div>
        <div className="pl-6 py-4">
          {/* Name of card */}
          <p className="text-lg font-semibold text-gray-800">{text}</p>
          {/* Number */}
          <p className="text-2xl font-bold">{number}</p>
        </div>
      </div>
    );
  };
  
  export default SummaryCard;
  