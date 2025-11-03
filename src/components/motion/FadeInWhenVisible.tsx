import { motion } from "motion/react";

function FadeInWhenVisible({ children, delay = 0, centered = false}: { children: React.ReactNode, delay?: number, centered?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ width: "100%", display: "flex", ...(centered && { justifyContent: "center" }) }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;