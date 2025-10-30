'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
  Email,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Twitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <LinkedIn />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Instagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <YouTube />, href: 'https://youtube.com', label: 'YouTube' },
  ];

  const footerLinks = {
    'Curso': [
      { label: 'Sobre o Curso', href: '#sobre' },
      { label: 'Conteúdo', href: '#conteudo' },
      { label: 'Instrutor', href: '#instrutor' },
      { label: 'Depoimentos', href: '#depoimentos' },
    ],
    'Suporte': [
      { label: 'Central de Ajuda', href: '#' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contato', href: '#contato' },
      { label: 'Política de Privacidade', href: '#' },
    ],
    'Legal': [
      { label: 'Termos de Uso', href: '#' },
      { label: 'Política de Reembolso', href: '#' },
      { label: 'Termos de Serviço', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0A0A0F',
        borderTop: '1px solid rgba(168, 85, 247, 0.2)',
        pt: 8,
        pb: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Logo e Descrição */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #00D9FF 0%, #A855F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  mb: 2,
                }}
              >
                AI Course
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: '#B4B4C6', maxWidth: 300 }}>
                Transforme sua carreira com o curso mais completo de Inteligência Artificial do mercado.
                Aprenda com experts e domine as tecnologias do futuro.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Email sx={{ color: '#00D9FF', fontSize: 20 }} />
                <Link
                  href="mailto:contato@cursoai.com"
                  sx={{
                    color: '#B4B4C6',
                    textDecoration: 'none',
                    '&:hover': { color: '#00D9FF' },
                  }}
                >
                  contato@cursoai.com
                </Link>
              </Box>
            </motion.div>
          </Grid>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <Grid item xs={12} sm={4} md={2.66} key={title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#FFFFFF',
                    mb: 2,
                    fontWeight: 600,
                    fontSize: '1.125rem',
                  }}
                >
                  {title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      sx={{
                        color: '#B4B4C6',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        transition: 'color 0.3s',
                        '&:hover': {
                          color: '#00D9FF',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(168, 85, 247, 0.2)' }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: '#B4B4C6' }}>
            {currentYear} AI Course Academy. Todos os direitos reservados.
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <IconButton
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: '#B4B4C6',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    transition: 'all 0.3s',
                    '&:hover': {
                      color: '#00D9FF',
                      borderColor: '#00D9FF',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 16px rgba(0, 217, 255, 0.2)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
