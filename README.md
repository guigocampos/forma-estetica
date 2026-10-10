# Forma — demonstração da Ghati

Site estático em Astro. Direção atual: fundo escuro, vermelho, carro em hero de largura total, Archivo 800 nos títulos e Source Sans 3 no corpo. A revisão parte das referências de estética automotiva enviadas pelo usuário. A hero contém um filme de 8 segundos com movimento de câmera sobre uma fotografia conceitual de carro no estúdio, pausa manual e respeito a movimento reduzido.

## Abrir

```sh
npm install
npm run dev
```

Desktop: http://localhost:5208/

Celular na mesma rede Wi-Fi: http://192.168.15.2:5208/ enquanto o computador e o servidor estiverem ligados. O endereço IP pode mudar. A disponibilidade depende da rede e do firewall local; não foi testada em hardware de celular.

## Verificar e preparar para hospedagem

```sh
npm test
npm run build
npm run preview
```

Publicar a pasta `dist/` em uma hospedagem estática compatível. Nenhuma hospedagem foi configurada ou publicação executada. A demonstração tem `noindex, nofollow`; não deve competir nas buscas como uma empresa real.

## Personalizar

- `src/data/site.mjs`: serviços e dados comerciais.
- `src/lib/quote.mjs`: validação e mensagem do WhatsApp da Ghati.
- `src/components/Quote.astro`: formulário e identificação do destino.
- `src/styles/global.css`: tipografia, paleta e composição.
- `assets/originals/`: fotografias originais geradas com IA.
- `public/media/`: fotos WebP responsivas e vídeo pronto.
- `PROJETO.md`: decisões aprovadas e limites da demonstração.
- `ASSETS.md`: procedência e prompts da mídia.

`npm run media` recria as versões responsivas e o MP4 a partir dos originais. Sharp e ffmpeg-static são ferramentas de preparação; não são enviados ao navegador.

O visitante confirma o envio no WhatsApp. A interface não promete disponibilidade, agendamento, preço ou resultados. Para um cliente real, substituir fotos e textos por material autorizado, rever a identificação conceitual e configurar SEO com dados verdadeiros.

