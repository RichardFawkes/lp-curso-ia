'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import {
  WorkspacePremium,
  School,
  Business,
  TrendingUp,
} from '@mui/icons-material';

const InstructorSection: React.FC = () => {
  const credentials = [
    {
      icon: <School />,
      title: 'PhD em IA',
      description: 'MIT - 2015',
    },
    {
      icon: <Business />,
      title: '10+ anos',
      description: 'Experiência em Big Tech',
    },
    {
      icon: <WorkspacePremium />,
      title: '50+ Projetos',
      description: 'IA em Produção',
    },
    {
      icon: <TrendingUp />,
      title: '10.000+',
      description: 'Alunos Formados',
    },
  ];

  const expertise = [
    'Machine Learning',
    'Deep Learning',
    'NLP',
    'Computer Vision',
    'LLMs',
    'MLOps',
    'PyTorch',
    'TensorFlow',
  ];

  return (
    <Box
      id="instrutor"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #0A0A0F 0%, #1A1A24 50%, #0A0A0F 100%)',
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
              Conheça seu Instrutor
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
              Aprenda com um especialista reconhecido internacionalmente em
              Inteligência Artificial
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          {/* Instructor Image */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '2px solid',
                  borderColor: 'transparent',
                  background: 'linear-gradient(135deg, #00D9FF 0%, #A855F7 100%)',
                  p: '2px',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 400, md: 500 },
                    bgcolor: '#1A1A24',
                    borderRadius: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'radial-gradient(circle at center, rgba(0, 217, 255, 0.1) 0%, #1A1A24 70%)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Placeholder for instructor image */}
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      gap: 2,
                    }}
                  >
                    <School sx={{ fontSize: 120, color: '#00D9FF', opacity: 0.3 }} />
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#B4B4C6',
                        opacity: 0.5,
                      }}
                    >
                      Foto do Instrutor
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Instructor Info */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Stack spacing={4}>
                {/* Name and Title */}
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      mb: 1,
                      background: 'linear-gradient(135deg, #00D9FF 0%, #A855F7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Dr. Alexandre Silva
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#00D9FF',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    PhD em Inteligência Artificial | Ex-Google AI
                  </Typography>
                </Box>

                {/* Bio */}
                <Typography
                  variant="body1"
                  sx={{
                    color: '#B4B4C6',
                    fontSize: '1.125rem',
                    lineHeight: 1.8,
                  }}
                >
                  Com mais de uma década de experiência em empresas de tecnologia de ponta
                  como Google, Amazon e Microsoft, o Dr. Alexandre Silva é um dos principais
                  especialistas em IA do Brasil. Autor de diversos artigos científicos e
                  palestrante internacional, ele dedicou os últimos anos a democratizar o
                  acesso ao conhecimento de IA através da educação online.
                </Typography>

                {/* Credentials Grid */}
                <Grid container spacing={2}>
                  {credentials.map((credential, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card
                          sx={{
                            p: 2,
                            bgcolor: 'rgba(0, 217, 255, 0.05)',
                            border: '1px solid rgba(0, 217, 255, 0.2)',
                            borderRadius: '12px',
                            textAlign: 'center',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              bgcolor: 'rgba(0, 217, 255, 0.1)',
                              border: '1px solid rgba(0, 217, 255, 0.5)',
                            },
                          }}
                        >
                          <Box
                            sx={{
                              color: '#00D9FF',
                              mb: 1,
                              '& svg': { fontSize: 32 },
                            }}
                          >
                            {credential.icon}
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              color: '#FFFFFF',
                              fontWeight: 700,
                              fontSize: '1rem',
                              mb: 0.5,
                            }}
                          >
                            {credential.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#B4B4C6',
                              fontSize: '0.75rem',
                            }}
                          >
                            {credential.description}
                          </Typography>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>

                {/* Expertise Tags */}
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    Áreas de Especialização:
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {expertise.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Chip
                          label={skill}
                          sx={{
                            bgcolor: 'rgba(168, 85, 247, 0.1)',
                            color: '#A855F7',
                            border: '1px solid rgba(168, 85, 247, 0.3)',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            py: 2,
                            '&:hover': {
                              bgcolor: 'rgba(168, 85, 247, 0.2)',
                              borderColor: '#A855F7',
                            },
                          }}
                        />
                      </motion.div>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InstructorSection;
