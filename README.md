# Landing Page - Curso de Inteligência Artificial

Uma landing page premium e moderna para um curso de Inteligência Artificial, desenvolvida com as tecnologias mais atuais para garantir excelente performance e conversões.

## Tecnologias Utilizadas

- **Next.js 14+** - Framework React com App Router e SSR
- **TypeScript** - Tipagem estática para maior segurança
- **Material UI v6** - Biblioteca de componentes com tema customizado
- **Framer Motion** - Animações fluidas e microinterações
- **Emotion** - CSS-in-JS para estilização

## Características

- Design futurista e sofisticado
- Paleta de cores: azul elétrico (#00D9FF), roxo (#A855F7), preto grafite (#0A0A0F)
- Animações suaves com Framer Motion
- Totalmente responsivo para todos os dispositivos
- SEO otimizado com metadados dinâmicos
- Open Graph e Twitter Cards configurados
- Sitemap e robots.txt automáticos
- Performance otimizada para Lighthouse Score ≥ 95

## Estrutura do Projeto

```
/app
  /components      # Componentes reutilizáveis
  /sections        # Seções da landing page
  /styles          # Estilos globais
  theme.ts         # Configuração do tema MUI
  layout.tsx       # Layout principal
  page.tsx         # Página inicial
  sitemap.ts       # Geração do sitemap
  robots.ts        # Configuração de robots.txt
/public            # Arquivos estáticos
```

## Seções da Landing Page

1. **Header** - Menu de navegação fixo com scroll suave
2. **Hero Section** - Primeira dobra com headline impactante e CTAs
3. **Sobre o Curso** - Benefícios e métricas de sucesso
4. **Conteúdo Programático** - 6 módulos detalhados com cards interativos
5. **Instrutor** - Apresentação do professor e credenciais
6. **Depoimentos** - Carrossel com avaliações de alunos
7. **Preço e Oferta** - Plano de pagamento com bônus exclusivos
8. **FAQ** - Perguntas frequentes com accordion
9. **Footer** - Links, redes sociais e informações de contato

## Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## Configuração

### SEO

Os metadados estão configurados em `app/layout.tsx`. Atualize conforme necessário:

- Título e descrição
- Open Graph tags
- Twitter Cards
- URL base do site

### Tema

O tema MUI está em `app/theme.ts`. Você pode personalizar:

- Cores primárias e secundárias
- Tipografia
- Espaçamentos
- Componentes (botões, cards, etc.)

### Conteúdo

Todo o conteúdo está hardcoded nos componentes. Para editar:

- Módulos do curso: `app/sections/CurriculumSection.tsx`
- Depoimentos: `app/sections/TestimonialsSection.tsx`
- FAQ: `app/sections/FAQSection.tsx`
- Preços: `app/sections/PricingSection.tsx`

## Performance

A aplicação está otimizada para:

- Lazy loading de imagens com Next Image
- Code splitting automático
- SSR para primeira renderização rápida
- Animações otimizadas com Framer Motion
- Componentes MUI customizados para reduzir bundle size

## Deploy

Recomendado deploy na Vercel para melhor performance:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Ou conecte seu repositório Git diretamente na [Vercel](https://vercel.com).

## Melhorias Futuras

- [ ] Integração com sistema de pagamento (Stripe/PayPal)
- [ ] Sistema de autenticação
- [ ] Dashboard do aluno
- [ ] Blog integrado
- [ ] Analytics e tracking de conversões
- [ ] A/B testing
- [ ] Chatbot de atendimento

## Suporte

Para dúvidas ou problemas, abra uma issue neste repositório.

## Licença

Este projeto é privado e proprietário.
