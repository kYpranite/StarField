const SeasonDropdown = ({ season, setSeason }) => {
  const handleChange = (event) => {
    setSeason(event.target.value);
  };

  return (
    <div className="ml-5 w-48">
      <select
        id="season-dropdown"
        value={season}
        onChange={handleChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-700 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
        <option value="Fall">Fall</option>
        <option value="Winter">Winter</option>
      </select>
    </div>
  );
};

export default SeasonDropdown;
