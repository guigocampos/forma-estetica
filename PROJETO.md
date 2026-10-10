# Revisão visual vigente — 9 de outubro de 2026

A primeira versão clara foi rejeitada pelo usuário. A direção vigente segue as seis imagens da referência Brum fornecidas na conversa: preto, vermelho, foto de carro na hero, títulos fortes e blocos de serviço com fotografia. A implementação preserva a marca Forma e o fluxo de orçamento da Ghati; não usa fotografias, logo, textos, certificações ou dados da Brum.

Archivo permanece por ser a família existente, agora em peso 800, títulos em caixa alta e escala mais compacta; Source Sans 3 mantém a legibilidade dos parágrafos e campos. Navegação sobre a hero, serviços 2×2 no desktop e empilhados no celular, quatro opções visíveis, páginas internas escuras. Filme atualizado para a fotografia original do carro no estúdio. Não há perfil social, endereço ou certificados fictícios.

Os registros abaixo documentam a primeira versão e as decisões anteriores; a direção clara foi substituída por esta revisão.

# Forma Estética Automotiva — demonstração da Ghati

## Decisões aprovadas

- Objetivo: vender sites em prospecção presencial, demonstrando apresentação profissional e facilidade para solicitar orçamento.
- Público: proprietários de estéticas automotivas e lava-rápidos locais; o usuário pretende abordar cinco estabelecimentos e enviou sete referências no Google Maps.
- Marca: fictícia, associada conceitualmente a Praia Grande; Forma é o nome de trabalho, sem verificação de disponibilidade.
- Posicionamento: estética acessível com serviços especializados.
- Personalidade: técnica e próxima.
- Conceito escolhido: Superfície; pintura, tecido, vidro e acabamento orientam a narrativa visual.
- Ambiente claro e organizado; branco, cinza mineral e laranja queimado em áreas pontuais de ação.
- Tipografia candidata: Archivo para títulos e Source Sans 3 para corpo; verificar licença, arquivos e leitura com conteúdo real antes de fixar.
- Fotografias conceituais geradas com IA, coerentes entre si e identificadas como ilustrativas. Sem provas de resultados, antes/depois fabricados ou instalações apresentadas como reais.
- Serviços: lavagem técnica, higienização interna e polimento; vitrificação complementar.
- Arquitetura: principal e três páginas de serviços.
- Principal: navegação; abertura; escolha do cuidado por superfície; como funciona; detalhes do cuidado; dúvidas frequentes; orçamento; rodapé.
- Páginas de serviços: o que é; necessidades a discutir; o que avaliar; solicitar orçamento.
- Orçamento: serviço, veículo e observação opcional; mensagem visível antes de abrir o WhatsApp; sem cadastro.
- WhatsApp da Ghati informado pelo usuário: +55 13 97814-3448 (5513978143448).
- Destino identificado como Ghati e mensagem identificada como demonstração. O visitante confirma o envio no WhatsApp.
- Apresentação: conduzida pelo usuário no próprio celular, incluindo demonstração da mensagem preparada.
- Transparência: sem endereço, horários, avaliações, histórico, certificações ou números fictícios apresentados como fatos.
- Oferta da Ghati: a partir de R$ 550 para adaptação da estrutura, incluindo estimativa de R$ 40 para domínio; personalização e páginas adicionais podem alterar o preço.

## Copy aprovada como proposta

Título: “Limpeza, polimento e proteção. Cada superfície pede um cuidado.”

Apoio: “Lavagem técnica, higienização interna e polimento. Escolha o serviço ou peça orientação para entender o cuidado indicado para seu carro.”

CTA de entrada: “Escolher um serviço”.

CTA final: “Continuar no WhatsApp da Ghati”.

Mensagem de exemplo:

> Olá! Estou testando a demonstração do site Forma, criada pela Ghati.
> Serviço: Higienização interna
> Veículo: Onix 2020
> Observação: Gostaria de cuidar dos bancos e carpetes.

## Plano técnico aprovado e implementado

- Projeto independente neste diretório.
- Astro com saída estática, CSS próprio e JavaScript somente para as interações necessárias.
- Quatro páginas pré-renderizadas; componentes compartilhados para layout, navegação, rodapé, orçamento e estrutura das páginas de serviço.
- Dados comerciais e serviços centralizados para adaptações futuras, sem construir um CMS.
- Sem servidor, banco de dados, React ou bibliotecas de animação por padrão.
- Imagens responsivas otimizadas; fontes locais com fallback e carregamento eficiente.
- Interações por superfície e formulário de orçamento com validação, limites de texto e codificação da mensagem na URL do WhatsApp.
- HTML semântico, navegação por teclado, foco visível, contraste e movimento reduzido.
- Títulos e descrições únicos por página; metadados de compartilhamento; demonstração com noindex; indexação e SEO local configurados para clientes reais com dados verdadeiros.
- Verificação: build, teste pequeno da mensagem/URL do WhatsApp e inspeção renderizada em desktop e mobile das quatro páginas e do fluxo principal.
- Hospedagem: saída estática portátil; o usuário decidirá a hospedagem posteriormente. Nenhuma publicação foi executada.

## Verificações e referências

Ambiente inspecionado: Node v24.14.0 e npm 11.9.0 disponíveis; há outro projeto Astro estático no workspace. Nenhum projeto Forma existia antes deste registro.

- Vercel Hobby permite apenas uso pessoal não comercial: https://vercel.com/docs/plans/hobby
- Uso comercial na Vercel requer Pro ou Enterprise: https://vercel.com/docs/limits/fair-use-guidelines
- Astro pré-renderiza páginas em HTML estático por padrão: https://docs.astro.build/en/guides/on-demand-rendering/
- Cloudflare Pages possui plano gratuito com limites: https://developers.cloudflare.com/pages/platform/limits/
- Registro.br informa R$ 40 por ano: https://registro.br/dominio

## Aprovações

1. Briefing: aprovado pelo usuário.
2. Direção criativa: conceito 3, Superfície, aprovado pelo usuário.
3. Arquitetura e linha de texto: aprovadas pelo usuário; número da Ghati fornecido.
4. Plano técnico: aprovado pelo usuário; hospedagem será escolhida posteriormente.
5. Implementação: autorizada e executada localmente. Vídeo na hero acrescentado a pedido do usuário.
6. Publicação: não solicitada nesta etapa.

## Entrega e verificação

- Astro estático com principal, três páginas de serviços e página 404.
- Imagens originais produzidas com imagegen; originais em `assets/originals/`, versões responsivas em `public/media/`.
- Hero com vídeo MP4 original de 8 segundos, cerca de 470 KB, produzido localmente com movimento suave de câmera sobre a fotografia de polimento. Não é uma filmagem do processo.
- Tentativa de geração de vídeo no Higgsfield recusada pelo serviço por exigir plano Plus ou superior. Nenhum vídeo foi gerado nesse serviço.
- Arquivo `ASSETS.md` registra origem, prompts e referências.
- Build e testes da mensagem/URL do WhatsApp aprovados.
- Fluxo no navegador: seletor por toque e teclado; serviço transferido ao formulário; mensagem com acentos; redirecionamento real ao WhatsApp para `5513978143448`, que apresentou a identificação da Ghati. Não foi enviada mensagem.
- Revisão visual e ausência de rolagem horizontal em 320, 390, 768 e 1440 pixels; páginas de serviços verificadas em 390 pixels. Capturas em `evidence/`.
- Movimento reduzido ativo no navegador: vídeo começa parado e reprodução manual funciona.
- Contraste de texto secundário/papel: 5,41:1; botão branco/laranja: 5,37:1; destaque pêssego/grafite: 8,71:1.
- Dependências auditadas e sharp atualizado para versão corrigida; npm audit sem vulnerabilidades reportadas.
- Não verificados: hardware de celular, leitor de tela, indexação real, métricas de campo e envio/recebimento de mensagem em uma sessão autenticada do WhatsApp.

## Personalização para empresas reais

Alterar dados e serviços em `src/data/site.mjs`, identidade e estilos em `src/styles/global.css`, conteúdo e fotos conforme a operação real. A identificação da demonstração aparece também no layout, formulário e mensagem; não basta trocar o telefone para apresentar a marca como real. Ajustar `noindex` e metadados apenas quando existirem empresa, domínio e conteúdo verdadeiros. Não inserir endereço, horários, resultados ou avaliações sem material confirmado.



## Verificação da revisão escura

- Build final concluído: home, três serviços e 404. Os dois testes de mensagem/URL passaram; nenhuma dependência adicionada.
- Desktop 1440, tablet 768, celular 390 e menor largura 320 conferidos. Sem rolagem horizontal observada; serviço preselecionado correto nas três páginas internas.
- Menu mobile abre e fecha ao navegar. Consulta de vitrificação e orientação preenchem o formulário; prévia da mensagem verificada com veículo e observação.
- MP4 novo reproduz manualmente e apresenta controle de pausa. O ambiente continua com preferência de movimento reduzido ativa.
- Contrastes: texto branco no botão vermelho 5,21:1; texto secundário no fundo principal 8,98:1; destaque no fundo de contato 6,29:1.
- Capturas atuais em evidence/redesign-*.jpg. Imagens novas garage.png e atelier.png e respectivos prompts em ASSETS.md.
- Limites: sem publicação, sem verificação em telefone físico ou leitor de tela, sem envio real de mensagem. O filme é movimento sobre uma fotografia conceitual.
