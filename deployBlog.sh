#!/bin/bash

echo "🔁 Nettoyage du dossier dist/"
rm -rf dist

echo "🛠 Ajout des fichiers critiques dans public/"
echo "aftershift.se" > public/CNAME
touch public/.nojekyll

echo "🔨 Build Astro..."
npm run build

echo "🚀 Déploiement vers gh-pages..."
npx gh-pages -d dist

echo "✅ Site AfterShift déployé avec succès sur https://aftershift.se"