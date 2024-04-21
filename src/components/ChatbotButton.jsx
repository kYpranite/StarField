import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function ChatbotButton({ handleButtonClick }) {
  return (
    <button
      onClick={handleButtonClick}
      className="fixed bottom-12 z-50 right-10 p-3 bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
  );
}
