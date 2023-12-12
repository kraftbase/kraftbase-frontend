import React from "react";
import { motion } from "framer-motion";

export default function InfiniteRotation(props: {
  children: any;
  isClient: boolean;
}) {

  const { children, isClient } = props;
  return isClient ? (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.div>
  ) : (
    <div>{children}</div>
  );
}
