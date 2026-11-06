export const identity = {
 name: 'Francesco Custureri', role: 'AI Lead',
 tagline: 'Intelligenza artificiale, infrastrutture digitali e innovazione.',
 intro: 'Esploro il punto d’incontro tra AI, sistemi complessi e innovazione. Qui raccolgo progetti, approfondimenti e idee.',
 // Inserisci i tuoi link reali quando saranno disponibili.
 linkedin: '', github: '', email: '', cvFile: ''
};
export const base = import.meta.env.BASE_URL;
export const pathTo = (path = '') => `${base}${path.replace(/^\//, '')}`;
