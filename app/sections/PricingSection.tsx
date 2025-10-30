'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  AccessTime,
  Groups,
  WorkspacePremium,
  OndemandVideo,
  LibraryBooks,
  Support,
  CloudDownload,
} from '@mui/icons-material';
import CTAButton from '../components/CTAButton';

const PricingSection: React.FC = () => {
  const benefits = [
    {
      icon: <OndemandVideo />,
      text: '63+ horas de conteúdo em vídeo HD',
    },
    {
      icon: <LibraryBooks />,
      text: '87 aulas práticas e teóricas',
    },
    {
      icon: <WorkspacePremium />,
      text: 'Certificado de conclusão reconhecido',
    },
    {
      icon: <AccessTime />,
      text: 'Acesso vitalício ao conteúdo',
    },
    {
      icon: <CloudDownload />,
      text: 'Material complementar para download',
    },
    {
      icon: <Groups />,
      text: 'Comunidade exclusiva de alunos',
    },
    {
      icon: <Support />,
      text: 'Suporte direto dos instrutores',
    },
    {
      icon: <CheckCircle />,
      text: 'Atualizações futuras gratuitas',
    },
  ];

  const bonuses = [
    'E-book: Guia Completo de Python para IA',
    'Templates de projetos prontos',
    'Acesso a webinars mensais ao vivo',
    'Lista de recursos e ferramentas premium',
  ];

  return (
    <Box
      id="inscricao"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #0A0A0F 0%, #1A1A24 50%, #0A0A0F 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              label="OFERTA LIMITADA"
              sx={{
                mb: 2,
                bgcolor: 'rgba(255, 68, 68, 0.1)',
                color: '#FF4444',
                border: '1px solid rgba(255, 68, 68, 0.3)',
                fontWeight: 700,
                fontSize: '0.875rem',
                animation: 'pulse 2s infinite',
              }}
            />
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
              Garanta sua Vaga Agora
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
              Investimento único com acesso vitalício e todas as atualizações futuras
            </Typography>
          </Box>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card
            sx={{
              maxWidth: 900,
              mx: 'auto',
              bgcolor: 'rgba(26, 26, 36, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '2px solid',
              borderColor: 'transparent',
              background: 'linear-gradient(rgba(26, 26, 36, 0.8), rgba(26, 26, 36, 0.8)) padding-box, linear-gradient(135deg, #00D9FF 0%, #A855F7 100%) border-box',
              borderRadius: '32px',
              p: { xs: 3, md: 5 },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Glow Effect */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at top right, rgba(0, 217, 255, 0.1) 0%, transparent 50%)',
                pointerEvents: 'none',
              }}
            />

            <CardContent sx={{ p: 0, position: 'relative', zIndex: 1 }}>
              <Stack spacing={4}>
                {/* Price Section */}
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#B4B4C6',
                      textDecoration: 'line-through',
                      mb: 1,
                    }}
                  >
                    De R$ 1.997,00
                  </Typography>
                  <Stack direction="row" alignItems="flex-start" justifyContent="center" spacing={1}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#00D9FF',
                        fontWeight: 700,
                        mt: 2,
                      }}
                    >
                      R$
                    </Typography>
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: { xs: '4rem', md: '5rem' },
                        fontWeight: 900,
                        background: 'linear-gradient(135deg, #00D9FF 0%, #A855F7 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: 1,
                      }}
                    >
                      997
                    </Typography>
                  </Stack>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#B4B4C6',
                      mt: 1,
                    }}
                  >
                    ou 12x de R$ 97,00
                  </Typography>
                  <Chip
                    label="50% DE DESCONTO"
                    sx={{
                      mt: 2,
                      bgcolor: 'rgba(0, 255, 136, 0.1)',
                      color: '#00FF88',
                      border: '1px solid rgba(0, 255, 136, 0.3)',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                    }}
                  />
                </Box>

                <Divider sx={{ borderColor: 'rgba(168, 85, 247, 0.2)' }} />

                {/* Benefits List */}
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: 700,
                      mb: 3,
                      textAlign: 'center',
                    }}
                  >
                    O que está incluído:
                  </Typography>
                  <List sx={{ py: 0 }}>
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <ListItem sx={{ py: 1.5, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 40 }}>
                            <Box
                              sx={{
                                color: '#00D9FF',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              {benefit.icon}
                            </Box>
                          </ListItemIcon>
                          <ListItemText
                            primary={benefit.text}
                            primaryTypographyProps={{
                              sx: {
                                color: '#FFFFFF',
                                fontWeight: 500,
                                fontSize: '1rem',
                              },
                            }}
                          />
                        </ListItem>
                      </motion.div>
                    ))}
                  </List>
                </Box>

                <Divider sx={{ borderColor: 'rgba(168, 85, 247, 0.2)' }} />

                {/* Bonuses */}
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: 700,
                      mb: 2,
                      textAlign: 'center',
                    }}
                  >
                    Bônus Exclusivos:
                  </Typography>
                  <Stack spacing={1.5}>
                    {bonuses.map((bonus, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            p: 2,
                            bgcolor: 'rgba(168, 85, 247, 0.1)',
                            borderRadius: '12px',
                            border: '1px solid rgba(168, 85, 247, 0.2)',
                          }}
                        >
                          <CheckCircle sx={{ color: '#A855F7', fontSize: 24 }} />
                          <Typography
                            sx={{
                              color: '#FFFFFF',
                              fontWeight: 500,
                            }}
                          >
                            {bonus}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Stack>
                </Box>

                {/* CTA Button */}
                <Box sx={{ textAlign: 'center', pt: 2 }}>
                  <CTAButton
                    variant="primary"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    sx={{ width: { xs: '100%', sm: 'auto' }, minWidth: 300 }}
                  >
                    Matricule-se Agora
                  </CTAButton>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#B4B4C6',
                      mt: 2,
                    }}
                  >
                    Garantia de 30 dias ou seu dinheiro de volta
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 6 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <CheckCircle sx={{ color: '#00FF88', fontSize: 32, mb: 1 }} />
              <Typography variant="body2" sx={{ color: '#B4B4C6' }}>
                Pagamento Seguro
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <CheckCircle sx={{ color: '#00FF88', fontSize: 32, mb: 1 }} />
              <Typography variant="body2" sx={{ color: '#B4B4C6' }}>
                Acesso Imediato
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <CheckCircle sx={{ color: '#00FF88', fontSize: 32, mb: 1 }} />
              <Typography variant="body2" sx={{ color: '#B4B4C6' }}>
                Garantia de 30 dias
              </Typography>
            </Box>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PricingSection;
