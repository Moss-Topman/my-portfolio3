import React from 'react';
import { motion, MotionProps } from 'framer-motion'; // Import MotionProps

// Define your component's own props
interface ButtonProps {
  children: React.ReactNode;
  // ... your other custom props here
}

// Combine your props with MotionProps, omitting the conflicting prop
type CombinedProps = ButtonProps & Omit<MotionProps, 'onAnimationStart'>;

const Button = React.forwardRef<HTMLButtonElement, CombinedProps>(({ children, ...props }, ref) => {

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      ref={ref}
      {...props} // Spread the remaining props
      // Use the correct function signature for Motion's callback
      onAnimationStart={(definition) => {
        // You can now use the 'definition' parameter which is a string or AnimationDefinition
        console.log('Animation started:', definition);
      }}
      className="your-class-name-here" // Ensure className is a string
    >
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;