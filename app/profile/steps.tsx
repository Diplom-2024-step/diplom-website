"use client"
import React from "react";
// import { CheckCircleIcon, ClipboardListIcon, BriefcaseIcon } from "@heroicons/react/solid";
import { Progress } from "@nextui-org/react";

interface Step {
  label: string;
  status: "completed" | "current" | "upcoming";
  description: string;
//   icon: React.ReactNode;
}

const steps: Step[] = [
  {
    label: "Очікування",
    status: "completed",
    description: "Завершено",
    // icon: <CheckCircleIcon className="w-6 h-6 text-white" />,
  },
  {
    label: "Оплата",
    status: "completed",
    description: "Завершено",
    // icon: <CheckCircleIcon className="w-6 h-6 text-white" />,
  },
  {
    label: "Підтвердження",
    status: "current",
    description: "В процесі",
    // icon: <ClipboardListIcon className="w-6 h-6 text-white" />,
  },
  {
    label: "Подорож",
    status: "upcoming",
    description: "В очікуванні",
    // icon: <BriefcaseIcon className="w-6 h-6 text-gray-400" />,
  },
];

const ProgressSteps: React.FC = () => {
    return (
        <div className="flex flex-col w-full max-w-4xl mx-auto">
          <div className="flex items-center w-full">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center">
                  {/* Step Icon */}
                  <div
                    className={
                      "flex items-center justify-center w-12 h-12 rounded-full " +
                      (step.status === "completed"
                        ? "bg-[#5DB3C1]"
                        : step.status === "current"
                        ? "bg-[#F6B500]"
                        : "bg-gray-200")
                    }
                  >
                    {/* {step.icon} */}
                  </div>
    
                  {/* Step Label */}
                  <p
                    className={
                      "mt-2 text-sm font-medium " +
                      (step.status === "upcoming" ? "text-gray-500" : "text-black")
                    }
                  >
                    {step.label}
                  </p>
    
                  {/* Step Description */}
                  <p
                    className={
                      "text-xs font-medium mt-1" +
                      (step.status === "completed"
                        ? "bg-[#E8EDF1] text-[#5DB3C1] border-large rounded-full"
                        : step.status === "current"
                        ? "bg-[#E8EDF1] text-[#F6B500] border-large rounded-full"
                        : "border-small border-[#ABABAB] text-gray-400 rounded-full")
                    }
                  >
                    {step.description}
                  </p>
                </div>
    
                {/* Divider */}
                {index < steps.length - 1 && (
                  <div className="flex items-center flex-1 mx-4">
                    <Progress
                      value={100}
                      color={steps[index].status === "completed" ? "primary" : "default"}
                      className="h-1 w-full"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      );
};

export default ProgressSteps;
