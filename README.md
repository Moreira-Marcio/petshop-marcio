# PetShop

Projeto de uma aplicação web SPA usando Next.js, Typescript e Supabase (Baas - Back-End as a Service).

## 00_projeto-zerado

## 01_css-global-fonts-favicon-metadados

- adiciona estilos globais
- importação, configuração e aplicação de fonts web usando `next/fonts`
- adição de mais metadados
- aplicação automatica de favicon adicioinando arquivo `icon.png` direto na `app`

´´´´´

## 02_paginas-basicas-liks-ajustes-de-layout-e-metadados

- Criação de paginas/rotas (usando pastas e arquivos)
- Definição de metadados especificos para cada pagina
- Adição do componente `<link>` para navegação entre as rotas
- Ajustes diversos de estrutura HTML

## Exercícios

Página inicial (src/app/page.tsx)
Crie uma <section>.
Adicione um título <h2> com o texto Pet Notícias.
Adicione um parágrafo com uma breve descrição.
Não é necessário definir metadata personalizada nessa página.
Demais páginas (produtos, sobre, contato)
ATENÇÃO! Lembre-se que cada página deve estar dentro de uma pasta com o nome desejado.

Em cada uma, crie uma <section> contendo <h2> e <p>, com conteúdos apropriados ao tema.

Em cada uma, defina a constante metadata (usando o tipo Metadata do Next.js).

Configure o title com o nome da página seguido de | PetShop. Ex: "Contato | PetShop".
Configure o description com um resumo curto da página. Ex: "Entre em contato conosco".
Para visualizar as páginas, simplesmente acesse localhost:3000/nome_da_pagina
