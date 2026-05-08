import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import "./BMICalculator.css";

const BMI_LEVELS = [
  {
    label: "Underweight",
    min: 0,
    max: 18.5,
    color: "#4DA6FF",
    rotate: "-110deg",
  },
  {
    label: "Healthy",
    min: 18.5,
    max: 25,
    color: "#52C878",
    rotate: "-25deg",
  },
  {
    label: "Overweight",
    min: 25,
    max: 30,
    color: "#FFB347",
    rotate: "45deg",
  },
  {
    label: "Obese",
    min: 30,
    max: 100,
    color: "#FF6B6B",
    rotate: "110deg",
  },
];

export default function BMICalculator() {
  const [height, setHeight] = useState<any>(170);
  const [weight, setWeight] = useState<any>(70);

  const bmi = useMemo(() => {
    const h = Number(height);
    const w = Number(weight);
    if (h === 0) return 0;
    const meter = h / 100;
    return w / (meter * meter);
  }, [height, weight]);

  const healthyWeight = useMemo(() => {
    const h = Number(height);
    if (h <= 0) return { min: 0, max: 0 };
    const meter = h / 100;
    return {
      min: (18.5 * meter * meter).toFixed(1),
      max: (24.9 * meter * meter).toFixed(1)
    };
  }, [height]);

  const heightError = useMemo(() => {
    const val = Number(height);
    if (val < 125 || val > 225) return "Please enter value between 125 and 225";
    return "";
  }, [height]);

  const weightError = useMemo(() => {
    const val = Number(weight);
    if (val < 10 || val > 500) return "Please enter value between 10.0 and 500.0 ( one decimal ).";
    return "";
  }, [weight]);

  const currentLevel = useMemo(() => {
    return BMI_LEVELS.find(
      (item) => bmi >= item.min && bmi < item.max
    );
  }, [bmi]);

  const getPointerRotation = () => {
    // Mapping BMI to rotation angles based on the conic-gradient segments
    // 0deg is top. Conic gradient goes 0-90 (Blue), 90-180 (Green), 180-250 (Orange), 250-360 (Red)
    if (bmi < 18.5) {
      return `${(bmi / 18.5) * 90}deg`;
    } else if (bmi < 25) {
      return `${90 + ((bmi - 18.5) / (25 - 18.5)) * 90}deg`;
    } else if (bmi < 30) {
      return `${180 + ((bmi - 25) / (30 - 25)) * 70}deg`;
    } else {
      const obeseVal = Math.min(bmi, 40);
      return `${250 + ((obeseVal - 30) / (40 - 30)) * 100}deg`;
    }
  };

  return (
    <section className=" bg-[#ffffff] flex items-center justify-center px-5 py-18 overflow-hidden">
      <div className="bmi-wrapper w-full max-w-7xl">

        {/* TOP TITLE */}
        <div className="mb-8 text-center">
          <h1 className="title-main">
            KNOW YOUR <br /> <span>Body – TRY OUR FREE HEALTH TOOL</span>
          </h1>
        </div>
        <div className=" bg-brand-amber py-2  px-10 rounded-t-lg w-full flex justify-between">
          <div className=" py-5">  
            <h2 className=" text-3xl  font-semibold">BMI Calculator</h2>
            <p className=" text-lg">Use this calculator to check your body mass index (BMI).</p></div>
          <div>
            <img src="https://missiongoodlife.in/wp-content/plugins/bmi-adultkid-calculator/images/bmiberegner.png" alt="" />
          </div>

        </div>
        <div className="grid gap-8 lg:grid-cols-3">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="glass-card shadow-lg shadow-black"
          >
            <div className="card-header">
              <h2 className="text-brand-amber mb-4!">Height</h2>
            </div>
            <div className="relative mb-6">
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className={`input-gold border-brand-amber border-2 p-2 rounded-lg ${heightError ? 'border-red-500' : ''}`}
                placeholder="150"
              />
              <span className="input-suffix ms-10  text-lg">cm.</span>
              {heightError && <p className="text-[10px] text-red-500 mt-1">{heightError}</p>}
            </div>

            <div className="card-header">
              <h2 className="text-brand-amber mb-4!">Weight</h2>
            </div>
            <div className="relative mb-10">
              <input
                type="number"
                step="0.1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className={`input-gold border-brand-amber border-2 p-2 rounded-lg ${weightError ? 'border-red-500' : ''}`}
                placeholder="Your weight"
                
              />
              <span className="input-suffix ms-10 text-lg">kg.</span>
              {weightError && <p className="text-lg text-red-500 mt-1">{weightError}</p>}
            </div>

            <button 
              onClick={() => { setHeight(170); setWeight(70); }}
              className="w-full bg-brand-teal py-4 rounded-lg text-white font-bold flex items-center justify-center gap-2 hover:bg-brand-teal/80 transition-colors"
            >
              Recalculate BMI <span className="-rotate-45">↺</span>
            </button>
          </motion.div>

          {/* CENTER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card center-card  scale-101 shadow-lg shadow-black"
          >

            <div className="circle-wrapper">

              {/* OUTER RING */}
              <div className="circle-ring" />

              {/* POINTER */}
              <motion.div
                animate={{
                  rotate: getPointerRotation(),
                }}
                transition={{
                  duration: 1,
                  type: "spring",
                }}
                className="pointer-line"
              />
              <span className="pointer-center-dot" />

              {/* BMI CONTENT */}
              <div className="circle-content">

                <motion.h2
                  key={bmi}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bmi-number"
                >
                  {bmi.toFixed(1)}
                </motion.h2>

                <span className="bmi-status">
                  {currentLevel?.label}
                </span>
              </div>


            </div>

            {/* RESULT BOX */}
            <div className="result-box">
              <div className="result-item">
                <span>Status</span>
                <strong>{currentLevel?.label}</strong>
              </div>

              <div className="result-item">
                <span>Score</span>
                <strong>{bmi.toFixed(1)}</strong>
              </div>

              <div className="result-item">
                <span>Health</span>
                <strong>
                  {bmi < 25 ? "Good" : "Attention"}
                </strong>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="glass-card result-side shadow-lg shadow-black"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-[#333]">Your Body Mass Index (BMI) is</h3>
                <p className="text-4xl font-black text-brand-orange mt-1">{bmi.toFixed(2)}</p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#333]">Based on your input, your BMI is in the category</h3>
                <p className="text-4xl font-black text-brand-orange mt-1">{currentLevel?.label}</p>
              </div>

              <div className="py-4 relative">
                <div className="h-2 w-full flex rounded-full overflow-hidden">
                  {BMI_LEVELS.map((level) => (
                    <div key={level.label} className="h-full border-r border-white last:border-0" style={{ width: '25%', background: level.color }} />
                  ))}
                </div>
                {/* YOU Marker */}
               
                <div className="flex justify-between text-[10px] font-bold mt-2 text-[#666]">
                  {BMI_LEVELS.map(l => <span key={l.label}>{l.label}</span>)}
                </div>
              </div>

              <div className="py-4 border-t border-gray-100">
                <p className="text-lg font-bold text-black">
                  For your height, a healthy weight would be between <span className="text-brand-lime">{healthyWeight.min} - {healthyWeight.max}</span> kilograms
                </p>
              </div>
            </div>


            <button className="expert-btn bg-brand-teal! text-white! hover:bg-brand-teal/90!">
              GET EXPERT ADVICE →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}