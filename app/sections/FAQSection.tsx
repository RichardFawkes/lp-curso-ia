'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: 'Preciso ter conhecimento prévio em programação?',
      answer:
        'Não! O curso foi desenvolvido para levar você do zero ao avançado. Começamos com os fundamentos de Python e programação, garantindo que mesmo iniciantes completos consigam acompanhar todo o conteúdo. Para quem já tem experiência, os módulos avançados proporcionam desafios e conhecimentos de ponta.',
    },
    {
      question: 'Quanto tempo leva para concluir o curso?',
      answer:
        'O curso tem mais de 63 horas de conteúdo, mas o tempo de conclusão varia de acordo com sua dedicação. Em média, alunos que estudam 2-3 horas por dia concluem em 2-3 meses. Como você tem acesso vitalício, pode aprender no seu próprio ritmo sem pressão.',
    },
    {
      question: 'O certificado é reconhecido no mercado?',
      answer:
        'Sim! Nosso certificado é reconhecido e validado digitalmente. Mais importante que o certificado são os projetos práticos que você desenvolverá durante o curso, que podem ir direto para seu portfólio e impressionar recrutadores. Muitos de nossos alunos conseguiram empregos na área destacando esses projetos.',
    },
    {
      question: 'Terei suporte durante o curso?',
      answer:
        'Com certeza! Você terá acesso à nossa comunidade exclusiva no Discord onde pode tirar dúvidas com instrutores e outros alunos. Além disso, oferecemos sessões de Q&A ao vivo mensalmente e suporte por e-mail com resposta em até 24 horas úteis.',
    },
    {
      question: 'Como funciona a garantia de 30 dias?',
      answer:
        'Acreditamos tanto na qualidade do nosso curso que oferecemos garantia incondicional de 30 dias. Se dentro deste período você não estiver satisfeito por qualquer motivo, basta enviar um e-mail e devolvemos 100% do seu investimento, sem perguntas ou burocracias.',
    },
    {
      question: 'O curso ensina sobre ChatGPT e outras IAs modernas?',
      answer:
        'Sim! Temos um módulo inteiro dedicado a Large Language Models (LLMs), incluindo ChatGPT, GPT-4, e técnicas modernas como prompt engineering e fine-tuning. Você aprenderá a integrar essas tecnologias em aplicações reais usando as APIs mais atuais.',
    },
    {
      question: 'Posso pagar em parcelas?',
      answer:
        'Sim! Oferecemos parcelamento em até 12x no cartão de crédito sem juros. Também aceitamos PIX com desconto adicional. Todas as opções de pagamento são processadas de forma segura através de plataformas certificadas.',
    },
    {
      question: 'As aulas ficam disponíveis para sempre?',
      answer:
        'Sim! Após a compra, você tem acesso vitalício a todo o conteúdo do curso, incluindo todas as atualizações futuras. Você pode assistir as aulas quantas vezes quiser, no seu tempo e ritmo, sem qualquer custo adicional.',
    },
    {
      question: 'Vou conseguir trabalhar com IA após o curso?',
      answer:
        'Nosso curso foi desenvolvido especificamente para preparar você para o mercado de trabalho. Você aprenderá as mesmas tecnologias e ferramentas usadas por profissionais em empresas de tecnologia. Com dedicação aos projetos práticos e construção de portfólio, você estará pronto para posições como Data Scientist, ML Engineer, ou AI Developer. 89% dos nossos alunos conseguiram emprego na área dentro de 6 meses após a conclusão.',
    },
  ];

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.05) 0%, transparent 70%), #0A0A0F',
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
              Perguntas Frequentes
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
              Tire suas dúvidas sobre o curso
            </Typography>
          </Box>
        </motion.div>

        {/* FAQ Accordions */}
        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  mb: 2,
                  bgcolor: 'rgba(26, 26, 36, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  borderRadius: '16px !important',
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    margin: '0 0 16px 0',
                    border: '1px solid rgba(0, 217, 255, 0.5)',
                    boxShadow: '0 8px 24px rgba(0, 217, 255, 0.15)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: expanded === `panel${index}` ? '#00D9FF' : '#B4B4C6',
                        transition: 'color 0.3s',
                      }}
                    />
                  }
                  sx={{
                    py: 2,
                    px: 3,
                    '& .MuiAccordionSummary-content': {
                      my: 1,
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: expanded === `panel${index}` ? '#00D9FF' : '#FFFFFF',
                      fontWeight: 600,
                      fontSize: { xs: '1rem', md: '1.125rem' },
                      transition: 'color 0.3s',
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    px: 3,
                    pb: 3,
                    pt: 0,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#B4B4C6',
                      lineHeight: 1.8,
                      fontSize: '1rem',
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>

        {/* Contact CTA */}
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
              textAlign: 'center',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
              border: '1px solid rgba(0, 217, 255, 0.3)',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Ainda tem dúvidas?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#B4B4C6',
                mb: 3,
              }}
            >
              Nossa equipe está pronta para ajudar! Entre em contato através do e-mail
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#00D9FF',
                fontWeight: 600,
              }}
            >
              contato@cursoai.com
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQSection;
