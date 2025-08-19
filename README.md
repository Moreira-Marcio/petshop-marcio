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

´´´´´´´´

## 03_componentes-cabecalho-menu-e-modulos-de-estilo

- Criação de componentes Cabecalho e Menu
- Definição de link ativo no menu utilizando o hook usePathname
- Ativação a renderização de componente em modo cliente com use client
- Importação e aplicação de módulos CSS
  ´´´´´´´´

## 04_melhorias-nas-paginas-e-componente-container

- adção de conteudo às pages (sobre,produto,contato)
- utilização de imagem svg na page not found
- criação e aplicação de componente container usando children
- desativação do compilador turbopack para evitar bugs de cache (em especial quando alguns modulos css)

´´´´´´

## 05_home-com-lista-de-posts-a-partir-de-um-array

- configuração e exportação de um novo tipo `post.ts`
- adição de array de dados: `array-posts.ts`
- componente `ListaPosts.tsx` com prop `posts`
- utilização do `map` para renderizar os <article> com os conteudo dinamico de cada post

´´´´´´´´´´

## 06_fake-api-usando-json-server-rota-dinamica

- instalaçao e configuração do `jason-server` como dependencia de desenvolvedor
  desenvolvedor: parainstalar `npm install json-server --save-dev`
- utilização de `fetch` com `async/awit` na pagina home para consumiir os posts da fake-api

- substitui array fixo por posts de dados da fake-api
- configuração de rota dinamica com carregamento de dados a partir de parametro da rota
- uso de `promise` com tipo para prop `params
- geração de meta-dados dinamicos usando a função `generateMatadata`
- refatorção da programação de burca de dados na fake-api usando ua funçao dedicada (buscarPorId)

## 07_componentes-SemPosts-e-notFound-da-rota-de-posts

- Criação do componente SemPosts.tsx e aplicação de renderização condicional na page Home
- Criação da page not-found.tsx e aplicação na rota dinâmica de posts usando verificação de erro status 404 e chamada da função notFound()

´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´

##
