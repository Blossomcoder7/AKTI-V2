import { Box, Typography } from "@mui/material";
import { AiOutlineStock } from "react-icons/ai";
import { motion } from "framer-motion";

const WeeklyDynamics = () => {
  const data = [40, 70, 50, 80, 90, 60, 75, 62, 45, 87, 30, 55, 39, 29];

  return (
    <Box
      sx={{
        background: "#fff",
        p: 2,
        borderRadius: 2,
        boxShadow: 2,
        width: 220,
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={1}>
          <AiOutlineStock fontSize="small" color="action" />
          <Typography variant="subtitle2" fontWeight="bold">
            Weekly Dynamics
          </Typography>
        </Box>
        <Typography
          variant="subtitle2"
          sx={{ color: "green", fontWeight: "bold" }}
        >
          +4.6%
        </Typography>
      </Box>

      {/* Bar Chart with Animation */}
      <Box display="flex" gap={1} alignItems="end" mt={2} height={80}>
        {data.map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.5,
              delay: i * 0.2,
              ease: "easeOut",
            }}
            style={{
              width: 8,
              background: "linear-gradient(to top, #6a11cb, #2575fc)",
              borderRadius: 4,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default WeeklyDynamics;
