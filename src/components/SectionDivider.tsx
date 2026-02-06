import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionDividerProps {
  variant?: "gradient" | "dots" | "line";
}

const SectionDivider = ({ variant = "gradient" }: SectionDividerProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  if (variant === "dots") {
    return (
      <div ref={ref} className="flex justify-center items-center py-8 gap-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: i * 0.15, type: "spring" }}
            className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
          />
        ))}
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div ref={ref} className="flex justify-center py-8">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={inView ? { width: "200px", opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
        />
      </div>
    );
  }

  return (
    <div ref={ref} className="relative py-12 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-0 right-0 top-1/2 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,217,255,0.2), rgba(168,85,247,0.2), transparent)",
        }}
      />
    </div>
  );
};

export default SectionDivider;
