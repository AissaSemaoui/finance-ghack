import { Button } from "@/components/ui/button";
import hero from "./hero.svg";

const HomePage = () => {
  return (
    <div className="px-6">
      <div className="py-6 flex flex-row justify-between">
        <h1 className="text-4xl">LOGO</h1>
        <div className="flex space-x-4 items-center">
          <p className="text-2xl">About US</p>
          <p className="text-2xl">Contact Us</p>
          <Button>Login</Button>
          <Button>Signup</Button>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <div className="w-full flex flex-col justify-center ">
          <h1 className="text-4xl">The first finance helper in Algeria!</h1>
          <div className="space-x-4">
            <Button>Read more</Button>
            <Button>Join now</Button>
          </div>
        </div>
        <img src={hero} alt=""/>
      </div>
      <div>

      </div>
    </div>
  );
};

export default HomePage;
