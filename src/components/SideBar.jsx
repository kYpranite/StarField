import Cardbox from "./CardBox";

const SideBar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-[38%] bg-gray-900 h-screen flex justify-center z-20 pt-20 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ease-in-out duration-300`}
    >
      <Cardbox />
    </div>
  );
};

export default SideBar;
 