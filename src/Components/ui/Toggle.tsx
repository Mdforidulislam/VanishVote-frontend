

interface ToggleProps {
  enabled: boolean;
  onChange: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ enabled, onChange }) => {
  return (
    <div
      className={`w-12 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition 
                  ${enabled ? "bg-purple-500" : "bg-gray-300"}`}
      onClick={() => onChange(!enabled)}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition 
                    ${enabled ? "translate-x-5" : "translate-x-0"}`}
      ></div>
    </div>
  );
};

export default Toggle;
