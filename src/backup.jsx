import { useState, useEffect } from "react";
import { Switch, Card, CardBody } from "@nextui-org/react";
import { MoonIcon } from "./assets/svg/MoonIcon";
import { SunIcon } from "./assets/svg/SunIcon";
import { Button } from "@nextui-org/button";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saveMode = localStorage.getItem("darkMode");
    return saveMode === "true"; // Devuelve true o false
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="text-center p-8 h-[100vh] m-auto flex flex-col items-center justify-center gap-8">
      <Switch
        defaultSelected={darkMode}
        onChange={(e) => setDarkMode(e.target.checked)}
        size="lg"
        color="default"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
      >
        DarkMode
      </Switch>
      <div className="lg:w-[40rem]">
        <Card>
          <CardBody>
            <p>
              Welcome to the resume creator. Here, you can create a resume for
              free, without ads or any cost. You only need to enter your
              information and experience, and within minutes, you&apos;ll have
              your resume ready to download in PDF format. At the moment, we
              have one template available, but we are working on adding more
              options soon.
            </p>
          </CardBody>
        </Card>
      </div>
      <div className="flex justify-center items-center">
        <Button
          radius="full"
          className="bg-gradient-to-tr from-purple-500 to-indigo-500 text-white shadow-lg"
        >
          Create a Resume
        </Button>
      </div>
    </div>
  );
}
