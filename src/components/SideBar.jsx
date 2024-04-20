import Cardbox from "./CardBox";
import VisibilityChart from "./VisibilityChart";

const SideBar = ({ isOpen }) => {
  return (
    <div
      className={`fixed items-start flex-wrap top-0 left-0 w-[38%] bg-gray-900 h-screen flex flex-col justify-center z-20 pt-20 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ease-in-out duration-300`}
    >
      <Cardbox />
      <VisibilityChart></VisibilityChart>
    </div>
  );
};

export default SideBar;
