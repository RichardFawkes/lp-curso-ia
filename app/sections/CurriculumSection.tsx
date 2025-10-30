'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  School,
  BubbleChart,
  SmartToy,
  AutoAwesome,
  Code,
  EmojiObjects,
} from '@mui/icons-material';

const CurriculumSection: React.FC = () => {
  const modules = [
    {
      icon: <School />,
      title: 'Módulo 1: Fundamentos de IA',
      duration: '8 horas',
      lessons: 12,
      description: 'Introdução à Inteligência Artificial, história, conceitos fundamentais e aplicações práticas no mercado.',
      topics: ['História da IA', 'Conceitos Básicos', 'Tipos de IA', 'Python para IA'],
      color: '#00D9FF',
    },
    {
      icon: <BubbleChart />,
      title: 'Módulo 2: Machine Learning',
      duration: '12 horas',
      lessons: 18,
      description: 'Aprenda algoritmos de aprendizado supervisionado, não supervisionado e por reforço com projetos práticos.',
      topics: ['Regressão', 'Classificação', 'Clustering', 'Scikit-learn'],
      color: '#A855F7',
    },
    {
      icon: <Code />,
      title: 'Módulo 3: Deep Learning',
      duration: '15 horas',
      lessons: 22,
      description: 'Redes neurais, CNN, RNN e transformers. Construa modelos de visão computacional e NLP.',
      topics: ['Redes Neurais', 'CNN', 'RNN', 'TensorFlow & PyTorch'],
      color: '#00D9FF',
    },
    {
      icon: <SmartToy />,
      title: 'Módulo 4: ChatGPT e LLMs',
      duration: '10 horas',
      lessons: 15,
      description: 'Domine os Large Language Models, GPT-4, fine-tuning e criação de aplicações com APIs.',
      topics: ['GPT-4', 'Prompt Engineering', 'Fine-tuning', 'Langchain'],
      color: '#A855F7',
    },
    {
      icon: <AutoAwesome />,
      title: 'Módulo 5: Automação com IA',
      duration: '8 horas',
      lessons: 12,
      description: 'Automatize tarefas, crie chatbots inteligentes e integre IA em aplicações web.',
      topics: ['Chatbots', 'Automação', 'APIs', 'Integrações'],
      color: '#00D9FF',
    },
    {
      icon: <EmojiObjects />,
      title: 'Módulo 6: Projeto Final',
      duration: '10 horas',
      lessons: 8,
      description: 'Desenvolva um projeto completo de IA do zero, aplicando todos os conhecimentos adquiridos.',
      topics: ['Planejamento', 'Desenvolvimento', 'Deploy', 'Apresentação'],
      color: '#A855F7',
    },
  ];

  return (
    <Box
      id="conteudo"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.05) 0%, transparent 70%), #0A0A0F',
      }}
    >
      <Container maxWidth="xl">
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
              Conteúdo Programático
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
              Um currículo completo e estruturado para levar você do zero ao profissional
              em Inteligência Artificial em 6 módulos práticos.
            </Typography>
          </Box>
        </motion.div>

        {/* Modules Grid */}
        <Grid container spacing={4}>
          {modules.map((module, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: 'rgba(26, 26, 36, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${module.color}40`,
                    borderRadius: '20px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      border: `1px solid ${module.color}`,
                      boxShadow: `0 20px 40px ${module.color}30`,
                      '& .module-icon': {
                        transform: 'scale(1.2) rotate(5deg)',
                        background: `linear-gradient(135deg, ${module.color} 0%, #A855F7 100%)`,
                      },
                      '& .glow-overlay': {
                        opacity: 0.3,
                      },
                    },
                  }}
                >
                  {/* Glow overlay */}
                  <Box
                    className="glow-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `radial-gradient(circle at top right, ${module.color}20 0%, transparent 60%)`,
                      opacity: 0,
                      transition: 'opacity 0.4s ease-in-out',
                      pointerEvents: 'none',
                    }}
                  />

                  <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                    {/* Icon */}
                    <Box
                      className="module-icon"
                      sx={{
                        width: 72,
                        height: 72,
                        borderRadius: '16px',
                        background: `${module.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        transition: 'all 0.4s ease-in-out',
                        '& svg': {
                          fontSize: 36,
                          color: module.color,
                        },
                      }}
                    >
                      {module.icon}
                    </Box>

                    {/* Title and Meta */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: '#FFFFFF',
                        fontSize: '1.5rem',
                      }}
                    >
                      {module.title}
                    </Typography>

                    <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                      <Chip
                        label={`${module.lessons} aulas`}
                        size="small"
                        sx={{
                          bgcolor: `${module.color}20`,
                          color: module.color,
                          fontWeight: 600,
                          border: `1px solid ${module.color}40`,
                        }}
                      />
                      <Chip
                        label={module.duration}
                        size="small"
                        sx={{
                          bgcolor: `${module.color}20`,
                          color: module.color,
                          fontWeight: 600,
                          border: `1px solid ${module.color}40`,
                        }}
                      />
                    </Stack>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#B4B4C6',
                        lineHeight: 1.8,
                        mb: 3,
                      }}
                    >
                      {module.description}
                    </Typography>

                    {/* Topics */}
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: '#FFFFFF',
                          fontWeight: 600,
                          mb: 1.5,
                        }}
                      >
                        Principais tópicos:
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {module.topics.map((topic, topicIndex) => (
                          <Chip
                            key={topicIndex}
                            label={topic}
                            size="small"
                            sx={{
                              bgcolor: 'rgba(255, 255, 255, 0.05)',
                              color: '#B4B4C6',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              fontWeight: 500,
                              fontSize: '0.75rem',
                              mb: 1,
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Total Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              p: 4,
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
              border: '1px solid rgba(0, 217, 255, 0.3)',
              textAlign: 'center',
            }}
          >
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={4}>
                <Typography variant="h3" sx={{ color: '#00D9FF', fontWeight: 800, mb: 1 }}>
                  63+
                </Typography>
                <Typography variant="body1" sx={{ color: '#B4B4C6' }}>
                  Horas de Conteúdo
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h3" sx={{ color: '#A855F7', fontWeight: 800, mb: 1 }}>
                  87
                </Typography>
                <Typography variant="body1" sx={{ color: '#B4B4C6' }}>
                  Aulas em Vídeo
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h3" sx={{ color: '#00D9FF', fontWeight: 800, mb: 1 }}>
                  15+
                </Typography>
                <Typography variant="body1" sx={{ color: '#B4B4C6' }}>
                  Projetos Práticos
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CurriculumSection;
