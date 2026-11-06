# Francesco Custureri | AI Lead

Portfolio Astro + Markdown + GitHub Pages. Design Dark Tech Premium / Editorial Dark.

## Avvio locale

Richiede Node.js 22 LTS o una versione supportata da Astro.

```bash
npm install
npm run dev
```

Apri http://localhost:4321. Per compilare: `npm run build`.

## Prima della pubblicazione

1. Apri `src/config.ts` e inserisci email, LinkedIn, GitHub e percorso del CV. Il CV PDF può essere collocato in `public/cv/curriculum.pdf`, impostando `cvFile: 'cv/curriculum.pdf'`.
2. Sostituisci i testi dimostrativi di `src/content/articles/` e `src/content/projects/` con contenuti originali e pubblicabili. Per nascondere una bozza imposta `draft: true`.
3. Verifica titolo professionale, descrizioni e privacy dei dati.
4. Crea un repository GitHub, carica il progetto e imposta `main` come branch principale.
5. In GitHub: Settings → Pages → Build and deployment → Source: **GitHub Actions**.
6. Esegui il workflow **Deploy Astro to GitHub Pages**. Per un repository chiamato `portfolio`, il sito sarà su `https://USERNAME.github.io/portfolio/`.
7. Per un repository speciale chiamato `USERNAME.github.io`, modifica nel workflow `BASE_PATH: /` e imposta `SITE_URL` al dominio corretto. Per un dominio personalizzato occorre aggiornare anche la configurazione di Pages, DNS e `SITE_URL`.

## Pubblicare un articolo

Copia un file `.md` in `src/content/articles/`, cambia titolo, descrizione, data, categoria, tag e testo. Fai commit su `main`: GitHub Actions ricompilerà il sito.

## Note

- Nessun CMS o login è incluso nella v1; si può aggiungere successivamente.
- Nessun numero, certificazione o link professionale è stato inventato.
- Il globo nella hero è un'illustrazione CSS leggera, non un rendering 3D.
- I font usano il sistema operativo e non dipendono da servizi esterni.
