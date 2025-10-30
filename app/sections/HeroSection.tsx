'use client';

import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import CTAButton from '../components/CTAButton';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SchoolIcon from '@mui/icons-material/School';

const HeroSection: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 50,
    }));
    setParticles(newParticles);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at top, rgba(0, 217, 255, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(168, 85, 247, 0.15) 0%, transparent 50%), #0A0A0F',
        pt: { xs: 12, md: 8 },
        pb: { xs: 8, md: 4 },
      }}
    >
      {/* Animated Particles Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            style={{
              position: 'absolute',
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${
                particle.id % 2 === 0 ? 'rgba(0, 217, 255, 0.1)' : 'rgba(168, 85, 247, 0.1)'
              } 0%, transparent 70%)`,
              filter: 'blur(40px)',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + particle.id * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </Box>

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(10, 10, 15, 0.8) 100%)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Stack
          spacing={4}
          alignItems="center"
          textAlign="center"
          sx={{ py: { xs: 4, md: 8 } }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1,
                bgcolor: 'rgba(0, 217, 255, 0.1)',
                border: '1px solid rgba(0, 217, 255, 0.3)',
                borderRadius: '50px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <RocketLaunchIcon sx={{ color: '#00D9FF', fontSize: 20 }} />
              <Typography
                variant="body2"
                sx={{
                  color: '#00D9FF',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                }}
              >
                Transforme sua Carreira em 2025
              </Typography>
            </Box>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 2,
                background: 'linear-gradient(135deg, #00D9FF 0%, #A855F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Domine a Inteligência Artificial
              <br />e Transforme sua Carreira
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#B4B4C6',
                maxWidth: '800px',
                fontSize: { xs: '1.125rem', md: '1.5rem' },
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Aprenda Machine Learning, Deep Learning, ChatGPT e LLMs com um curso
              premium 100% online. Do zero ao avançado com certificado incluso.
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mt: 2 }}
            >
              <CTAButton
                variant="primary"
                onClick={() => handleScrollToSection('#inscricao')}
                startIcon={<SchoolIcon />}
              >
                Matricule-se Agora
              </CTAButton>
              <CTAButton
                variant="secondary"
                onClick={() => handleScrollToSection('#conteudo')}
              >
                Ver Módulos do Curso
              </CTAButton>
            </Stack>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            style={{ width: '100%' }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={4}
              sx={{
                mt: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {[
                { value: '200+', label: 'Alunos Ativos' },
                { value: '100%', label: 'Online' },
                { value: '4.9/5', label: 'Avaliação' },
                { value: 'Certificado', label: 'Incluso' },
              ].map((stat, index) => (
                <Box
                  key={index}
                  sx={{
                    textAlign: 'center',
                    px: 3,
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #00D9FF 0%, #A855F7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      mb: 0.5,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#B4B4C6',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
