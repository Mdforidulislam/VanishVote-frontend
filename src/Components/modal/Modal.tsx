import axios from "axios";
import { useState } from "react";

type PollModalProps = {
  setShowModal: (show: boolean) => void;
};

type PollType = "single" | "multiple";

type ExpiryOption = "1 Hour" | "12 Hours" | "24 Hours";

export default function PollModal({ setShowModal }: PollModalProps) {
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [question, setQuestion] = useState<string>("");
  const [expiresAt, setExpiresAt] = useState<ExpiryOption | "">("");
  const [hideResults, setHideResults] = useState<boolean>(false);
  const [typePoll, setTypePoll] = useState<PollType>("single");

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    const pollData = {
      typePoll,
      question,
      options,
      expiresAt,
      hideResults,
    };

    try {
      const createPoll = await axios.post(
        "http://localhost:5000/api/polls/create-pull",
        pollData
      );
      console.log(createPoll, "check create Poll request ====>");
    } catch (error) {
      console.error("Error creating poll:", error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-semibold mb-2 text-center">Create a New Poll</h3>
        <p className="text-gray-600 text-center mb-4">
          Your poll will be anonymous and will expire after the selected time.
        </p>

        <label className="block text-gray-700 font-medium mb-1">Poll Type</label>
        <div className="flex justify-between mb-4">
          {(["single", "multiple"] as PollType[]).map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded-lg ${typePoll === type ? "bg-purple-500 text-white" : "border-2 border-gray-300 text-gray-700"}`}
              onClick={() => setTypePoll(type)}
            >
              {type === "single" ? "Single Choice" : "Multiple Choice"}
            </button>
          ))}
        </div>

        <label className="block text-gray-700 font-medium mb-1">Question</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="What do you want to ask?"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
        />

        <label className="block text-gray-700 font-medium mb-1">Options</label>
        {options.map((option, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={option}
              onChange={(e) => {
                const newOptions = [...options];
                newOptions[index] = e.target.value;
                setOptions(newOptions);
              }}
              placeholder={`Option ${index + 1}`}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {options.length > 2 && (
              <button onClick={() => removeOption(index)} className="ml-2 text-red-500">
                &#x1F5D1;
              </button>
            )}
          </div>
        ))}

        <button
          onClick={addOption}
          className="w-full text-purple-600 border border-purple-500 py-2 rounded-lg hover:bg-purple-100 mb-4"
        >
          + Add Option
        </button>

        <label className="block text-gray-700 font-medium mb-1">Expires After</label>
        <div className="flex justify-between mb-4">
          {["1 Hour", "12 Hours", "24 Hours"].map((time) => (
            <button
              key={time}
              onClick={() => setExpiresAt(time as ExpiryOption)}
              className={`border-2 border-purple-500 px-4 py-2 rounded-lg ${expiresAt === time ? "bg-purple-100" : ""}`}
            >
              {time}
            </button>
          ))}
        </div>

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            checked={hideResults}
            onChange={() => setHideResults(!hideResults)}
            id="hide-results"
            className="form-checkbox text-purple-500 border-gray-300 focus:ring-purple-500"
          />
          <label htmlFor="hide-results" className="ml-2 text-gray-700">
            Hide results until poll ends
          </label>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition"
        >
          Create Poll
        </button>
      </div>
    </div>
  );
}
