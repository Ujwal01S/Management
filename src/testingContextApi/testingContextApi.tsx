import { useContext, useState } from "react";
import { UserContext } from "@/store/user-context";

const TestingContextApi = () => {
  const [inputData, setInputData] = useState("");
  const userData = useContext(UserContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userData.users.push(inputData);
    console.log(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setInputData(e.target.value)} className="border-2"/>
      <button>Submit</button>
    </form>
  );
};

export default TestingContextApi;
