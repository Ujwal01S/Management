import ast from "../../assets/1.png";
import { Button } from "../cva/button";

export const DonwloadDemo = () => {
  return (
    <div className="h-[200px] w-[200px]">
      <img src={ast} alt="as" />
      <a
        href={ast}
        download="img"
        target="_blank"
      >
      <Button className="text-center">Download</Button>    
      </a>

    </div>
  );
};
