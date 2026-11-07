# Portfolio FC / V4 – Animated Assembly

Questa versione aggiunge un’introduzione che si compone all’apertura e sezioni animate allo scroll con Web Animations API e IntersectionObserver (senza dipendenze aggiuntive). Rispetta prefers-reduced-motion.

## Avvio

```bash
npm install
npm run dev
```

## Test build

```bash
npm run build
npm run preview
```

## Pubblicazione GitHub Pages

Il workflow è configurato per il dominio personalizzato `custureri.dev`, con `SITE_URL=https://custureri.dev` e `BASE_PATH=/`. Nel repository attivare Settings → Pages → GitHub Actions e impostare Custom domain `custureri.dev`. Verificare che i DNS siano corretti e HTTPS disponibile prima di considerare il sito pubblicato.

Non caricare file `.env`, segreti, CV riservati o dati personali nel repository pubblico. Gli articoli e i progetti presenti sono dimostrativi.
