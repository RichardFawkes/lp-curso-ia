'use client';

import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { motion } from 'framer-motion';

interface CTAButtonProps extends Omit<ButtonProps, 'variant'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  const isPrimary = variant === 'primary';

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        variant={isPrimary ? 'contained' : 'outlined'}
        size="large"
        sx={{
          py: 2,
          px: 4,
          fontSize: '1.125rem',
          fontWeight: 700,
          borderRadius: '12px',
          textTransform: 'none',
          position: 'relative',
          overflow: 'hidden',
          ...(isPrimary
            ? {
                background: 'linear-gradient(135deg, #00D9FF 0%, #A855F7 100%)',
                color: '#000',
                boxShadow: '0 8px 24px rgba(0, 217, 255, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #00B8DB 0%, #7C3AED 100%)',
                  boxShadow: '0 12px 32px rgba(0, 217, 255, 0.4)',
                  transform: 'translateY(-2px)',
                },
              }
            : {
                borderWidth: '2px',
                borderColor: '#00D9FF',
                color: '#00D9FF',
                '&:hover': {
                  borderWidth: '2px',
                  borderColor: '#A855F7',
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  boxShadow: '0 8px 24px rgba(168, 85, 247, 0.2)',
                },
              }),
          transition: 'all 0.3s ease-in-out',
        }}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default CTAButton;
