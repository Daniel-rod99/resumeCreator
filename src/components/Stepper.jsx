import { Progress } from "@nextui-org/react";

function Stepper({ step, totalSteps }) {
  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div className="w-full flex justify-center my-4">
      <Progress value={progressPercentage} size="md" color="primary" />
    </div>
  );
}

export default Stepper;
