# 🚀 Système de Devis Automatique avec IA

## 📋 Description

Ce système permet de gérer automatiquement les demandes de devis sur votre site web. Quand un client remplit le formulaire, une IA (via OpenRouter) génère une réponse personnalisée et l'envoie automatiquement par email via Brevo.

## ✨ Fonctionnalités

- ✅ **Modal de contact élégant** avec 2 options (Appel / Devis)
- ✅ **Formulaire de devis complet** avec sélection des services
- ✅ **Réponse IA personnalisée** via OpenRouter (accès à Claude, GPT-4, Llama, etc.)
- ✅ **Envoi automatique par email** via Brevo
- ✅ **Notification interne** pour l'agence
- ✅ **Design responsive** adapté au style de votre site

## 🛠️ Installation

### 1. Aucune dépendance à installer !

OpenRouter fonctionne avec `fetch` natif. Pas besoin d'installer de SDK ! 🎉

### 2. Configurer les API Keys

Créez un fichier `.env.local` à la racine du projet :

```bash
cp .env.example .env.local
```

Remplissez les variables suivantes dans `.env.local` :

```env
# OpenRouter API Key
OPENROUTER_API_KEY=sk-or-v1-votre-clé-ici

# Brevo API Key  
BREVO_API_KEY=xkeysib-votre-clé-ici

# URL de votre site
NEXT_PUBLIC_SITE_URL=https://sociql.fr
```

### 3. Obtenir les API Keys

#### OpenRouter (Accès à plusieurs modèles d'IA)
1. Allez sur [openrouter.ai](https://openrouter.ai/)
2. Créez un compte (login avec Google/GitHub facile)
3. Allez dans "Keys" → Create Key
4. Copiez la clé qui commence par `sk-or-v1-`
5. **BONUS:** 5$ de crédits gratuits pour débuter !

**Avantages d'OpenRouter:**
- 💰 **50% moins cher** que les API directes
- 🤖 Accès à **plusieurs modèles** (Claude, GPT-4, Llama, Gemini, Mistral...)
- 🔄 Changement de modèle en 1 ligne de code
- 📊 Dashboard avec statistiques détaillées
- ⚡ Pas de quota mensuel strict

**Prix approximatifs :**
- Claude 3.5 Sonnet: ~0,0015€ par devis
- GPT-4 Turbo: ~0,0025€ par devis
- Llama 3.1 70B: ~0,0003€ par devis

#### Brevo (ex-Sendinblue)
1. Allez sur [app.brevo.com](https://app.brevo.com/)
2. Créez un compte gratuit
3. Allez dans "Settings" → "SMTP & API" → "API Keys"
4. Créez une nouvelle clé
5. Copiez la clé qui commence par `xkeysib-`

**Plan gratuit :** 300 emails/jour - largement suffisant!

### 4. Configurer l'email d'envoi dans Brevo

1. Dans Brevo, allez dans "Senders & IP"
2. Ajoutez et vérifiez votre domaine (contact@sociql.fr)
3. Suivez les instructions de vérification DNS

## 📱 Utilisation

### Pour les visiteurs du site

1. Clic sur "Prendre contact" dans le Hero
2. Choix entre "Appeler" ou "Demander un devis"
3. Si devis : formulaire se déploie
4. Remplissage des informations
5. Réception d'un email personnalisé sous 24h

### Pour vous (l'agence)

Vous recevrez une notification email à chaque nouvelle demande avec :
- Nom et coordonnées du client
- Services demandés
- Détails du projet

## 🎨 Personnalisation

### Changer le modèle d'IA

Éditez le fichier `/app/api/devis/route.ts` (ligne 52) :

```typescript
model: "anthropic/claude-3.5-sonnet", // Modèle par défaut

// Autres options disponibles :
// "openai/gpt-4-turbo"              // Le plus intelligent
// "openai/gpt-3.5-turbo"            // Le moins cher
// "meta-llama/llama-3.1-70b-instruct" // Open source performant
// "google/gemini-pro-1.5"           // Google
// "mistralai/mixtral-8x7b-instruct" // Français natif
```

### Modifier les services proposés

Éditez le fichier `/components/ContactModal.tsx` :

```typescript
const services = [
  { id: "standard", name: "Standard - Site vitrine (550€)", value: "Standard - 550€" },
  // Ajoutez vos services ici
];
```

### Personnaliser la réponse de l'IA

Éditez le prompt dans `/app/api/devis/route.ts` (ligne 30) :

```typescript
const promptMessage = `Tu es un expert en développement web pour SociQl...`
```

### Changer l'email de l'agence

Modifiez dans `/app/api/devis/route.ts` (ligne 100) :

```typescript
sender: {
  email: "contact@sociql.fr", // Votre email
  name: "SociQl - Solutions Digitales",
}
```

## 🧪 Test en local

```bash
npm run dev
```

1. Ouvrez http://localhost:3000
2. Cliquez sur "Prendre contact"
3. Sélectionnez "Demander un devis"
4. Remplissez le formulaire
5. Vérifiez vos emails !

## 📊 Coûts estimés

Pour 100 devis par mois :

| Service | Coût mensuel |
|---------|--------------|
| **OpenRouter** (Claude 3.5 Sonnet) | ~0,15€ |
| **Brevo** (plan gratuit) | 0€ |
| **Total** | **~0,15€/mois** |

**C'est 50x moins cher qu'envoyer des SMS (7€/100 SMS) !** 🔥

## 🐛 Dépannage

### Erreur "OPENROUTER_API_KEY is not defined"
→ Vérifiez que `.env.local` existe et contient la clé
→ Redémarrez le serveur (`npm run dev`)

### Erreur "Brevo API error"
→ Vérifiez que votre domaine est vérifié dans Brevo
→ Vérifiez que la clé API est correcte

### L'email n'arrive pas
→ Vérifiez vos spams
→ Vérifiez que l'email d'envoi est vérifié dans Brevo
→ Testez avec un autre email

### Erreur OpenRouter
→ Vérifiez vos crédits sur https://openrouter.ai/credits
→ Vérifiez que la clé commence par `sk-or-v1-`
→ Vérifiez que le modèle existe (voir la liste sur openrouter.ai/models)

### Le formulaire ne s'envoie pas
→ Ouvrez la console du navigateur (F12)
→ Vérifiez les erreurs dans l'onglet Network
→ Vérifiez que NEXT_PUBLIC_SITE_URL est défini

## 🚀 Déploiement

### Sur Vercel

1. Ajoutez les variables d'environnement dans Vercel :
   - `OPENROUTER_API_KEY`
   - `BREVO_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`

2. Redéployez votre site

3. Testez le formulaire en production

## 📞 Support

Si vous avez des questions :
- Email : contact@sociql.fr
- Téléphone : +33 7 49 41 27 56

## 🎯 Améliorations futures possibles

- [ ] Dashboard admin pour voir toutes les demandes
- [ ] Test A/B de plusieurs modèles d'IA
- [ ] Intégration WhatsApp pour les notifications
- [ ] Système de suivi de devis
- [ ] Génération automatique de PDF
- [ ] Chat en direct avec l'IA
- [ ] Analytics et statistiques de conversion

## 📈 Comparaison des modèles

| Modèle | Prix/1M tokens | Qualité | Vitesse | Bon pour |
|--------|---------------|---------|---------|----------|
| Claude 3.5 Sonnet | $3 | ⭐⭐⭐⭐⭐ | ⚡⚡⚡⚡ | Réponses pro |
| GPT-4 Turbo | $5 | ⭐⭐⭐⭐⭐ | ⚡⚡⚡ | Créativité |
| GPT-3.5 Turbo | $0.50 | ⭐⭐⭐ | ⚡⚡⚡⚡⚡ | Volume élevé |
| Llama 3.1 70B | $0.50 | ⭐⭐⭐⭐ | ⚡⚡⚡⚡ | Open source |
| Mistral 8x7B | $0.50 | ⭐⭐⭐⭐ | ⚡⚡⚡⚡ | Français |

---

**Fait avec ❤️ par SociQl**
