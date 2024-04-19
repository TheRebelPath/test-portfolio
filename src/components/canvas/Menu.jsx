import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" },
};

const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" },
};
const extraLineVariants = {
  open: { opacity: 1 }, // Make the line visible when open
  closed: { opacity: 0 } // Hide the line when closed
};

const MenuButton = ({ toggle, setToggle }) => {
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();
  const extraLineControls = useAnimation();

  const updateAnimation = async () => {
    if (toggle) {
      await path02Controls.start(path02Variants.moving);
      path01Controls.start(path01Variants.open);
      path02Controls.start(path02Variants.open);
      extraLineControls.start(extraLineVariants.closed); // Make the extra line visible
    } else {
      path01Controls.start(path01Variants.closed);
      await path02Controls.start(path02Variants.moving);
      path02Controls.start(path02Variants.closed);
      extraLineControls.start(extraLineVariants.open); // Hide the extra line
    }
  };

  // Use useEffect to watch for changes in the toggle prop
  useEffect(() => {
    updateAnimation();
  }, [toggle]);

  const onClick = () => {
    setToggle(!toggle);
    // No need to call updateAnimation here since it will be triggered by the useEffect
  };

  return (
    <button onClick={onClick}>
      <svg width="28" height="28" viewBox="0 0 22 22">
      <motion.path
          d="M0 4.5L24 4.5"
          animate={extraLineControls} // Use the animation control for the extra line
          transition={{ duration: 0.05 }}
          strokeWidth="3"
          stroke="#f4f511"
        />
        {/* First line */}
        <motion.path
          {...path01Variants.closed}
          animate={path01Controls}
          transition={{ duration: 0.2 }}
          strokeWidth="3"
          stroke="#f4f511"
        />
        {/* Second line */}
        <motion.path
          {...path02Variants.closed}
          animate={path02Controls}
          transition={{ duration: 0.2 }}
          strokeWidth="3"
          stroke="#f4f511"
        />
      </svg>
    </button>
  );
};



export default MenuButton;