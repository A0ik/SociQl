# 🎯 GUIDE RAPIDE - Système de Devis Automatique

## ⚡ Installation en 5 minutes

### 1️⃣ Aucune dépendance à installer !
OpenRouter fonctionne avec fetch natif, pas besoin de SDK. 🎉

### 2️⃣ Créer le fichier `.env.local`
```env
OPENROUTER_API_KEY=sk-or-v1-VOTRE_CLE
BREVO_API_KEY=xkeysib-VOTRE_CLE
NEXT_PUBLIC_SITE_URL=https://sociql.fr
```

### 3️⃣ Obtenir les clés API

**OpenRouter - 5$ GRATUITS pour commencer ! 🎁**
- 👉 https://openrouter.ai/keys
- Créer un compte (login avec Google/GitHub)
- Créer une clé API
- **Avantages:**
  - Accès à Claude, GPT-4, Llama, Mistral, etc.
  - **Prix 50% moins cher** que l'API directe
  - Pas de quota mensuel strict
  - **Coût:** ~0,0015€ par devis (2x moins cher que Claude direct!)

**Brevo (Emails) - 300 emails/jour GRATUITS**
- 👉 https://app.brevo.com/
- Créer un compte gratuit
- Settings → API Keys
- Vérifier votre domaine email

### 4️⃣ Tester
```bash
npm run dev
```
→ Ouvrir http://localhost:3000
→ Cliquer "Prendre contact"
→ Tester le formulaire de devis !

---

## 📁 Fichiers créés/modifiés

✅ `/components/ContactModal.tsx` - Modal avec formulaire
✅ `/components/ui/animated-hero.tsx` - Bouton modifié
✅ `/app/api/devis/route.ts` - API backend avec OpenRouter
✅ `/.env.example` - Template des variables
✅ `/package.json` - Aucune dépendance supplémentaire !

---

## 🎨 Comment ça marche

1. **Visiteur** clique "Prendre contact"
2. **Modal** s'ouvre avec 2 choix :
   - 📞 Appeler directement
   - 📝 Demander un devis
3. **Formulaire** se déploie (nom, email, services, etc.)
4. **OpenRouter + IA** génère une réponse personnalisée
5. **Email automatique** envoyé via Brevo
6. **Vous recevez** une notification

---

## 💰 Coûts

| Service | Plan Gratuit | Coût par devis |
|---------|-------------|----------------|
| Brevo | 300 emails/jour | 0€ |
| OpenRouter | 5$ gratuits | ~0,0015€ |
| **TOTAL** | **Largement suffisant** | **~0,0015€** |

**100 devis/mois = 0,15€ seulement !** (2x moins cher que Claude direct)

---

## 🎯 Personnalisation

### Changer le modèle d'IA
Éditer `/app/api/devis/route.ts` ligne 52 :
```typescript
model: "anthropic/claude-3.5-sonnet", // Ou :
// "openai/gpt-4-turbo"
// "meta-llama/llama-3.1-70b-instruct"
// "google/gemini-pro-1.5"
// "mistralai/mixtral-8x7b-instruct"
```

### Changer les services proposés
Éditer `/components/ContactModal.tsx` ligne 11-18

### Modifier le ton de l'IA
Éditer `/app/api/devis/route.ts` ligne 30-60

### Changer l'email de contact
Éditer `/app/api/devis/route.ts` ligne 100

---

## 🚨 Problèmes courants

❌ **L'email n'arrive pas**
→ Vérifier spam
→ Vérifier domaine vérifié dans Brevo

❌ **Erreur API OpenRouter**
→ Vérifier `.env.local` existe
→ Vérifier la clé commence par `sk-or-v1-`
→ Vérifier crédits disponibles sur OpenRouter

❌ **Modal ne s'ouvre pas**
→ Vérifier la console (F12)
→ Vérifier import ContactModal

---

## 📊 Comparaison des prix

| Modèle | Prix OpenRouter | Prix Direct |
|--------|----------------|-------------|
| Claude 3.5 Sonnet | $3/M tokens | $6/M tokens |
| GPT-4 Turbo | $5/M tokens | $10/M tokens |
| Llama 3.1 70B | $0.50/M tokens | Hébergement requis |

**OpenRouter = 50% moins cher !** 🔥

---

## 📞 Besoin d'aide ?

📧 contact@sociql.fr
📱 +33 7 49 41 27 56

---

## ✨ C'est tout !

Votre système de devis automatique est prêt 🎉

Le client reçoit une réponse personnalisée en quelques secondes,
et vous êtes notifié de chaque demande !

