import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { paths } from "@/configuration";
import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import picture from "./pic.svg";

const Expertpage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const data = Array.from({ length: 100 }, (_, index) => ({
    id: index,
    name: `Lorem ipsum ${index + 1}`,
    role: "Expert",
    description: `Working in lorem ipsum ${index + 1}`,
  }));

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const borderStyle = {
    width: "100%",
    height: "1px",
    backgroundColor: "#000",
    margin: "1rem 0",
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <h1 className="text-xl">Talk to Experts</h1>
      <hr style={borderStyle} />
      <Input
        type="text"
        placeholder="Search for an expert"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredData.map((item) => (
          <Card key={item.id} className="p-7 m-2">
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-3 items-center">
                <img src={picture} alt="" />
                <div>
                  <h1>{item.name}</h1>
                  <h2>{item.role}</h2>
                </div>
              </div>
              <div className="space-y-3 flex flex-col items-center justify-center">
                <p>{item.description}</p>
                <p>{item.description}</p>
                <p>{item.description}</p>
                <Link
                  to={paths.chats}
                  className={clsx(
                    buttonVariants({
                      variant: "default",
                    }),
                    "w-full"
                  )}
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Expertpage;
