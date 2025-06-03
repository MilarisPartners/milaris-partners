# Milaris Partners - Landing Page

Une landing page moderne et élégante pour Milaris Partners, un cabinet de conseil en M&A (fusions-acquisitions) spécialisé dans l'accompagnement des TPE et PME.

## 🚀 Technologies utilisées

- **Next.js 15.3.3** - Framework React avec App Router
- **TypeScript** - Pour un code robuste et typé
- **Tailwind CSS 4** - Framework CSS utilitaire
- **Framer Motion** - Pour des animations fluides et modernes
- **Lucide React** - Bibliothèque d'icônes

## 📋 Prérequis

- Node.js 18.0 ou supérieur
- npm ou yarn

## 🛠️ Installation

1. Cloner le repository :
```bash
git clone [url-du-repo]
cd miralis-partners-new
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎨 Charte graphique

### Couleurs
- **Bleu principal** : #0e4eb3
- **Bleu clair** : #e6f1fe
- **Bleu foncé** : #0a3a8a
- **Gris** : #647488
- **Or (accent)** : #d4af37
- **Argent (accent)** : #c0c0c0

### Typographie
- **Titres** : Playfair Display (serif)
- **Corps de texte** : Inter (sans-serif)

## 📁 Structure du projet

```
miralis-partners-new/
├── app/
│   ├── layout.tsx      # Layout principal avec métadonnées
│   ├── page.tsx        # Page d'accueil
│   └── globals.css     # Styles globaux
├── components/
│   ├── Navbar.tsx      # Navigation avec menu responsive
│   ├── Hero.tsx        # Section hero avec CTA
│   ├── About.tsx       # Notre engagement + 4 piliers
│   ├── Services.tsx    # M&A et Levée de fonds
│   ├── Expertise.tsx   # 3 secteurs d'expertise
│   ├── Testimonial.tsx # Témoignage client
│   └── Footer.tsx      # Pied de page
├── public/             # Assets statiques
└── package.json        # Dépendances du projet
```

## 🌟 Fonctionnalités

- ✅ Design responsive (mobile-first)
- ✅ Animations au scroll avec Framer Motion
- ✅ Navigation avec effet glassmorphism
- ✅ Support multilingue (FR/EN/IT)
- ✅ Optimisation SEO
- ✅ Images optimisées avec Next.js Image
- ✅ Performance optimale avec Next.js

## 📦 Scripts disponibles

```bash
npm run dev      # Lance le serveur de développement
npm run build    # Compile l'application pour la production
npm run start    # Lance le serveur de production
npm run lint     # Vérifie le code avec ESLint
```

## 🚀 Déploiement

L'application est prête à être déployée sur Vercel :

```bash
npm run build
```

Puis suivre les instructions de [Vercel](https://vercel.com/docs) pour le déploiement.

## 📝 Personnalisation

### Modifier le contenu
Le contenu de chaque section se trouve dans les composants correspondants dans le dossier `components/`.

### Modifier les couleurs
Les couleurs sont définies dans :
- `tailwind.config.ts` pour les classes Tailwind
- `app/globals.css` pour les variables CSS

### Ajouter des sections
1. Créer un nouveau composant dans `components/`
2. L'importer dans `app/page.tsx`
3. L'ajouter dans le rendu de la page

## 🤝 Support

Pour toute question ou support, contactez : contact@miralispartners.com

## 📄 Licence

© 2024 Milaris Partners - Tous droits réservés
