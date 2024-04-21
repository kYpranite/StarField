import CardBox from "./CardBox";
import VisibilityChart from "./VisibilityChart";

export default function SideBarDefault({
  isOpen,
  searchRef,
  chartData,
  setConstellationView,
}) {
  return (
    <div
      className={`fixed items-start overflow-y-auto flex-wrap top-0 left-0 w-[38%] bg-gray-900 h-full flex flex-row justify-center z-20 pt-20 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ease-in-out duration-300`}
    >
      <div className="px-6 py-1">
        <h1 className="font-bold text-left text-lg my-2">Visible Constellations</h1>
        <CardBox setConstellationView={setConstellationView} />
      </div>
      <hr className="w-11/12 border-[0.5px] border-gray-400"></hr>
      <div ref={searchRef} className="h-[50%] w-[100%] p-5">
        <h1 className="font-bold text-lg text-left">Visibility Predictions</h1>
        {chartData.length ? (
          <VisibilityChart data={chartData} />
        ) : (
          <h1 className="text-gray-300">
            Chart will load after a location is inputted!
          </h1>
        )}
      </div>
    </div>
  );
}
