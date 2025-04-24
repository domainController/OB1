#!/bin/bash

echo "🧹 Suppression des composants liés à astro-icon..."

# Supprimer tous les fichiers Icon.astro (s'ils existent)
find src -type f -name "Icon.astro" -delete

# Supprimer les imports dans astro.config.ts (s'ils sont présents)
sed -i '' '/import icon from "astro-icon"/d' astro.config.ts
sed -i '' '/icons()/d' astro.config.ts

# Supprimer les éventuelles intégrations icon
sed -i '' '/@astrojs\/icons/d' package.json

echo "📦 Suppression des packages liés aux icônes..."
npm uninstall astro-icon @astrojs/icons @iconify/json @iconify/react

echo "📁 Nettoyage des dépendances..."
rm -rf node_modules package-lock.json dist .astro

echo "🔁 Réinstallation des modules..."
npm install

echo "🛠 Rebuild Astro..."
npm run build