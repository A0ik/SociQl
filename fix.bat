@echo off
echo Nettoyage du cache Next.js...

REM Supprimer les dossiers de cache
if exist .next rmdir /s /q .next
if exist node_modules rmdir /s /q node_modules
if exist .vercel rmdir /s /q .vercel

echo Reinstallation des dependances...
call npm install

echo Redemarrage du serveur...
call npm run dev
