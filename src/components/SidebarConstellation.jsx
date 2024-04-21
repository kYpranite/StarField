import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function SidebarConstellation({
  setConstellationView,
  constellationView,
}) {
  return (
    <div
      className={`fixed items-start overflow-y-auto flex-wrap top-0 left-0 w-[38%] bg-gray-900 h-full flex flex-row justify-center z-20 `}
    >
      <button
        className="absolute right-5 top-5 px-2 hover:bg-gray-700 rounded-xl"
        onClick={() => setConstellationView({ ...constellationView, open: false })}
      >
        <FontAwesomeIcon icon={faX} />
      </button>
      <img
        src={`constellations_pictures/${constellationView.name}.webp`}
        alt={constellationView.name}
        className="w-full h-[40%] object-cover"
      />

      <div className="flex flex-col gap-y-2 p-5">
        <h1 className="font-semibold text-3xl text-left mx-6 mb-2">
          {constellationView.name}
        </h1>
        <h1 className="font-semibold text-left mx-6">
          {constellationView.visibility}
        </h1>
        <h1 className="text-left mx-6 my-2">{constellationView.information}</h1>
        <h1 className="font-bold text-left mx-6 my-2">
          {constellationView.best_viewing_equipment}
        </h1>
      </div>
    </div>
  );
}
