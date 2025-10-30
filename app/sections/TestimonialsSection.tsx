'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Stack,
  Rating,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowBackIos,
  ArrowForwardIos,
  FormatQuote,
} from '@mui/icons-material';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Data Scientist na Nubank',
      avatar: 'MS',
      rating: 5,
      text: 'Este curso mudou completamente minha carreira. Consegui uma promoção para Data Scientist em apenas 6 meses após concluir. O conteúdo é extremamente prático e aplicável no dia a dia.',
    },
    {
      name: 'João Silva',
      role: 'ML Engineer na Amazon',
      avatar: 'JS',
      rating: 5,
      text: 'O melhor investimento que fiz na minha carreira. O Dr. Alexandre explica conceitos complexos de forma clara e os projetos práticos foram fundamentais para meu portfólio.',
    },
    {
      name: 'Ana Paula Costa',
      role: 'AI Researcher na USP',
      avatar: 'AC',
      rating: 5,
      text: 'Conteúdo de altíssima qualidade e sempre atualizado. A seção sobre LLMs e ChatGPT é simplesmente incrível. Recomendo para todos que querem se destacar na área de IA.',
    },
    {
      name: 'Pedro Oliveira',
      role: 'Tech Lead na iFood',
      avatar: 'PO',
      rating: 5,
      text: 'Fiz vários cursos de IA, mas este é disparado o mais completo. A didática é excelente e o suporte da comunidade fez toda a diferença no meu aprendizado.',
    },
    {
      name: 'Camila Rodrigues',
      role: 'AI Product Manager na Microsoft',
      avatar: 'CR',
      rating: 5,
      text: 'Mesmo vindo de uma área não técnica, consegui acompanhar e aprender muito. O curso me deu a base necessária para liderar projetos de IA na minha empresa.',
    },
    {
      name: 'Lucas Ferreira',
      role: 'Founder de Startup de IA',
      avatar: 'LF',
      rating: 5,
      text: 'Os conhecimentos que adquiri neste curso foram essenciais para lançar minha startup. O módulo de automação com IA foi decisivo para criar nosso MVP.',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box
      id="depoimentos"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'radial-gradient(ellipse at center, rgba(0, 217, 255, 0.05) 0%, transparent 70%), #0A0A0F',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(135deg, #00D9FF 0%, #A855F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              O que dizem nossos alunos
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#B4B4C6',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Mais de 200 profissionais já transformaram suas carreiras com nosso curso
            </Typography>
          </Box>
        </motion.div>

        {/* Carousel */}
        <Box sx={{ position: 'relative', px: { xs: 0, md: 8 } }}>
          {/* Navigation Buttons */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: { xs: -16, md: -24 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'rgba(0, 217, 255, 0.1)',
              border: '1px solid rgba(0, 217, 255, 0.3)',
              color: '#00D9FF',
              '&:hover': {
                bgcolor: 'rgba(0, 217, 255, 0.2)',
                borderColor: '#00D9FF',
              },
            }}
          >
            <ArrowBackIos sx={{ ml: 1 }} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: { xs: -16, md: -24 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'rgba(0, 217, 255, 0.1)',
              border: '1px solid rgba(0, 217, 255, 0.3)',
              color: '#00D9FF',
              '&:hover': {
                bgcolor: 'rgba(0, 217, 255, 0.2)',
                borderColor: '#00D9FF',
              },
            }}
          >
            <ArrowForwardIos />
          </IconButton>

          {/* Testimonial Cards */}
          <Box sx={{ minHeight: { xs: 450, md: 400 }, position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <Card
                  sx={{
                    bgcolor: 'rgba(26, 26, 36, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 217, 255, 0.3)',
                    borderRadius: '24px',
                    p: { xs: 3, md: 5 },
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  {/* Quote Icon */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      right: 40,
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00D9FF 0%, #A855F7 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(0, 217, 255, 0.3)',
                    }}
                  >
                    <FormatQuote sx={{ color: '#000', fontSize: 32 }} />
                  </Box>

                  <CardContent sx={{ p: 0 }}>
                    {/* Rating */}
                    <Rating
                      value={testimonials[activeIndex].rating}
                      readOnly
                      sx={{
                        mb: 3,
                        '& .MuiRating-iconFilled': {
                          color: '#00D9FF',
                        },
                      }}
                    />

                    {/* Testimonial Text */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#FFFFFF',
                        lineHeight: 1.8,
                        mb: 4,
                        fontSize: { xs: '1.125rem', md: '1.25rem' },
                        fontStyle: 'italic',
                      }}
                    >
                      &ldquo;{testimonials[activeIndex].text}&rdquo;
                    </Typography>

                    {/* Author Info */}
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        sx={{
                          width: 64,
                          height: 64,
                          background: 'linear-gradient(135deg, #00D9FF 0%, #A855F7 100%)',
                          fontSize: '1.25rem',
                          fontWeight: 700,
                        }}
                      >
                        {testimonials[activeIndex].avatar}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#FFFFFF',
                            fontWeight: 700,
                            mb: 0.5,
                          }}
                        >
                          {testimonials[activeIndex].name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#00D9FF',
                            fontWeight: 500,
                          }}
                        >
                          {testimonials[activeIndex].role}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* Dots Indicator */}
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => setActiveIndex(index)}
                sx={{
                  width: index === activeIndex ? 32 : 8,
                  height: 8,
                  borderRadius: '4px',
                  bgcolor: index === activeIndex ? '#00D9FF' : 'rgba(0, 217, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    bgcolor: index === activeIndex ? '#00D9FF' : 'rgba(0, 217, 255, 0.5)',
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
