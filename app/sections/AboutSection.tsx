'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  EmojiObjects,
  Verified,
  AutoGraph,
  Psychology,
  Speed,
} from '@mui/icons-material';

const AboutSection: React.FC = () => {
  const benefits = [
    {
      icon: <Psychology />,
      title: 'Aprenda do Zero',
      description: 'Não precisa de conhecimento prévio. Começamos do básico e vamos até o avançado.',
    },
    {
      icon: <TrendingUp />,
      title: 'Projetos Práticos',
      description: 'Aprenda fazendo. Construa projetos reais que podem ir para seu portfólio.',
    },
    {
      icon: <EmojiObjects />,
      title: 'Conteúdo Atualizado',
      description: 'Curso sempre atualizado com as últimas tendências e tecnologias de IA.',
    },
    {
      icon: <Verified />,
      title: 'Certificado Reconhecido',
      description: 'Certificado de conclusão para impulsionar sua carreira profissional.',
    },
    {
      icon: <AutoGraph />,
      title: 'Suporte Contínuo',
      description: 'Comunidade exclusiva e suporte direto dos instrutores.',
    },
    {
      icon: <Speed />,
      title: 'Acesso Vitalício',
      description: 'Pague uma vez e tenha acesso para sempre, incluindo atualizações futuras.',
    },
  ];

  return (
    <Box
      id="sobre"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
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
              Por que escolher nosso curso?
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
              Desenvolvido por especialistas da área, nosso curso foi criado para levar
              você do iniciante ao profissional em Inteligência Artificial de forma
              estruturada e eficiente.
            </Typography>
          </Box>
        </motion.div>

        {/* Benefits Grid */}
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                    border: '1px solid rgba(168, 85, 247, 0.2)',
                    borderRadius: '16px',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      border: '1px solid rgba(0, 217, 255, 0.5)',
                      boxShadow: '0 16px 32px rgba(0, 217, 255, 0.2)',
                      '& .icon-box': {
                        background: 'linear-gradient(135deg, #00D9FF 0%, #A855F7 100%)',
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      className="icon-box"
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '12px',
                        background: 'rgba(0, 217, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        transition: 'all 0.3s ease-in-out',
                        '& svg': {
                          fontSize: 32,
                          color: '#00D9FF',
                        },
                      }}
                    >
                      {benefit.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: '#FFFFFF',
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#B4B4C6',
                        lineHeight: 1.7,
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 12,
              p: { xs: 4, md: 6 },
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
              border: '1px solid rgba(0, 217, 255, 0.3)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    background: 'linear-gradient(135deg, #00D9FF 0%, #A855F7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Resultados Comprovados
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#B4B4C6',
                    fontSize: '1.125rem',
                    lineHeight: 1.8,
                  }}
                >
                  Mais de 200 profissionais já transformaram suas carreiras com nosso
                  curso. Junte-se a uma comunidade de especialistas em IA e acelere
                  seu crescimento profissional.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={3}>
                  {[
                    { value: '92%', label: 'Taxa de Conclusão' },
                    { value: '89%', label: 'Conseguiram Emprego na Área' },
                    { value: '4.9/5', label: 'Avaliação Média' },
                    { value: '50h+', label: 'Conteúdo em Vídeo' },
                  ].map((stat, index) => (
                    <Grid item xs={6} key={index}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 800,
                            color: '#00D9FF',
                            mb: 1,
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
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;
