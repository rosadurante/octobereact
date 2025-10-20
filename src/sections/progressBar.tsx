import { motion } from "framer-motion";
import { useState } from "react";

export const ProgressBar = () => {

  const [progress, setProgress] = useState(50);
  const animatedGradient = ({ progress }: { progress: number }) => {
    return (
      <div className="w-full h-6 bg-white border-1 border-[#eee] rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#333] to-[#eee] transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>
    )
  }

  const steps = ['Idea', 'Design', 'Development', 'Deployment'];
  const multiStepProgress = ({ currentStep }: { currentStep: number }) => {
    return (
      <div className="w-full flex items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex-1 flex items-center">
            <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index <= currentStep ? "bg-[#333] text-white" : "bg-[#eee] text-[#333]"
            }`}
          >
            {index + 1}
            </div>
            {index < steps.length - 1 && (
            <div className="flex-1 h-1 bg-[#eee] mx-2 relative">
              <div
                className="h-1 bg-[#333] absolute left-0 top-0 transition-all duration-500"
                style={{
                  width: index < currentStep ? "100%" : "0%",
                }}
              />
            </div>
            )}
            </div>
        ))}
      </div>
    )
  }

  const circularPercentage = ({ progress }: { progress: number }) => {
    const radius = 50;
    const stroke = 10;
    const normalizedRadius = radius - stroke;
    const circumference = normalizedRadius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    return (
      <svg height={radius * 2} width={radius * 2}>
        <circle cx={radius} cy={radius} r={normalizedRadius} fill="#ccc" />
        <motion.circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          stroke="#333"
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-[#333]">{progress}%</text>
      </svg>
    )
  }

  const stripedAnimated = ({ progress }: { progress: number }) => {
    return (
      <div className="w-full h-6 bg-[#eee] rounded-full overflow-hidden relative">
      <div
        className="h-full bg-[#333] bg-[repeating-linear-gradient(45deg,#333,#333_10px,#eee_10px,#eee_20px)] animate-[moveStripes_1s_linear_infinite]"
        style={{ width: `${progress}%` }}
      />
      <style>
        {`@keyframes moveStripes { 0% { background-position: 0 0; } 100% { background-position: 40px 0; } }`}
      </style>
    </div>
    )
  }

  return (
    <div className="w-full">
      <input type="range" min="0" max="100" value={progress} onChange={(e) => setProgress(parseInt(e.target.value))} />
      <div className="w-full grid grid-cols-2 gap-4">
      <div className="w-full bg-[#fff] p-4 rounded-md">
          {animatedGradient({ progress })}
      </div>    
      <div className="w-full bg-[#fff] p-4 rounded-md">
        {multiStepProgress({ currentStep: progress / 100 * (steps.length - 1) })}
      </div>
      <div className="w-full bg-[#fff] p-4 rounded-md">
          {circularPercentage({ progress })}
      </div>
      <div className="w-full bg-[#fff] p-4 rounded-md">
          {stripedAnimated({ progress })}
      </div>
      </div>
      </div>
  )

}