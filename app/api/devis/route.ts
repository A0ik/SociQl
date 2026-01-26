import { NextRequest, NextResponse } from "next/server";

// Types
interface DevisRequest {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  nomSite: string;
  services: string[];
  details: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: DevisRequest = await request.json();
    const { prenom, nom, email, telephone, nomSite, services, details } = body;

    // Validation basique
    if (!prenom || !nom || !email || !telephone || !details || services.length === 0) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis" },
        { status: 400 }
      );
    }

    // 1. Utiliser OpenRouter pour générer une réponse personnalisée
    const promptMessage = `Tu es un expert en développement web et solutions digitales pour SociQl, une agence spécialisée dans la création de sites web et applications sur mesure.

Un client vient de faire une demande de devis avec les informations suivantes :

**Client :** ${prenom} ${nom}
**Email :** ${email}
**Téléphone :** ${telephone}
**Nom du site/entreprise :** ${nomSite || "Non spécifié"}
**Services demandés :** ${services.join(", ")}
**Détails du projet :** ${details}

Génère une réponse professionnelle, chaleureuse et personnalisée en HTML qui :
1. Remercie le client pour sa demande
2. Montre que tu as bien compris son projet (en reprenant des éléments de sa description)
3. Confirme les services sélectionnés et leurs avantages
4. Propose une estimation de délai (généralement 2-4 semaines selon la complexité)
5. Suggère 2-3 fonctionnalités additionnelles pertinentes qui pourraient l'intéresser
6. Invite à planifier un appel de 30 minutes pour discuter en détail
7. Termine par un message encourageant et professionnel

Utilise un ton amical mais professionnel. La réponse doit être en HTML avec un bon formatage (paragraphes, listes, mise en forme).

IMPORTANT : Ne jamais donner de prix dans cette réponse initiale. Les prix sont déjà indiqués sur le site.`;

    const openrouterResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "https://sociql.fr",
        "X-Title": "SociQl - Devis Automatique",
      },
      body: JSON.stringify({
        model: "anthropic/claude-3.5-sonnet", // Tu peux changer le modèle ici
        messages: [
          {
            role: "user",
            content: promptMessage,
          },
        ],
        max_tokens: 2048,
      }),
    });

    if (!openrouterResponse.ok) {
      const error = await openrouterResponse.text();
      console.error("Erreur OpenRouter:", error);
      throw new Error("Échec de la génération de réponse IA");
    }

    const aiData = await openrouterResponse.json();
    const reponseIA = aiData.choices[0].message.content;

    // 2. Envoyer l'email via Brevo
    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY || "",
      },
      body: JSON.stringify({
        sender: {
          email: "contact@sociql.fr",
          name: "SociQl - Solutions Digitales",
        },
        to: [
          {
            email: email,
            name: `${prenom} ${nom}`,
          },
        ],
        subject: `Votre devis pour ${services[0] || "votre projet web"} - SociQl`,
        htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    .header {
      background: linear-gradient(135deg, #000000 0%, #2c2c2c 100%);
      color: white;
      padding: 40px 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
    }
    .header p {
      margin: 10px 0 0;
      color: #e0e0e0;
      font-size: 16px;
    }
    .content {
      padding: 40px 30px;
      background-color: #ffffff;
    }
    .content h2 {
      color: #000000;
      font-size: 22px;
      margin-top: 0;
      margin-bottom: 20px;
    }
    .content p {
      margin: 15px 0;
      color: #444;
    }
    .content ul {
      margin: 20px 0;
      padding-left: 20px;
    }
    .content li {
      margin: 10px 0;
      color: #444;
    }
    .info-box {
      background-color: #f9f9f9;
      border-left: 4px solid #000000;
      padding: 20px;
      margin: 25px 0;
    }
    .info-box strong {
      color: #000000;
    }
    .cta-button {
      display: inline-block;
      background: #000000;
      color: white;
      padding: 15px 35px;
      text-decoration: none;
      border-radius: 8px;
      margin: 25px 0;
      font-weight: 600;
      text-align: center;
    }
    .footer {
      background-color: #f9f9f9;
      padding: 30px;
      text-align: center;
      border-top: 1px solid #e0e0e0;
    }
    .footer p {
      margin: 5px 0;
      color: #666;
      font-size: 14px;
    }
    .footer a {
      color: #000000;
      text-decoration: none;
    }
    .divider {
      height: 1px;
      background: linear-gradient(to right, transparent, #e0e0e0, transparent);
      margin: 30px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>🚀 Votre Projet Web</h1>
      <p>Merci pour votre confiance !</p>
    </div>

    <!-- Content -->
    <div class="content">
      ${reponseIA}

      <div class="divider"></div>

      <div class="info-box">
        <strong>📋 Récapitulatif de votre demande :</strong><br><br>
        <strong>Services sélectionnés :</strong><br>
        ${services.map(s => `• ${s}`).join("<br>")}
        <br><br>
        <strong>Nom du projet :</strong> ${nomSite || "Non spécifié"}<br>
        <strong>Contact :</strong> ${telephone}
      </div>

      <div style="text-align: center;">
        <a href="tel:+33749412756" class="cta-button">
          📞 Planifier un appel (30 min)
        </a>
      </div>

      <p style="margin-top: 30px;">
        <strong>Prochaines étapes :</strong>
      </p>
      <ul>
        <li>Nous vous répondrons dans les 24h avec plus de détails</li>
        <li>Un appel de découverte pour affiner les besoins</li>
        <li>Proposition d'un planning et d'un devis finalisé</li>
        <li>Démarrage du projet sous 1 semaine après validation</li>
      </ul>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p><strong>SociQl</strong> - Solutions Digitales Sur Mesure</p>
      <p>📧 <a href="mailto:contact@sociql.fr">contact@sociql.fr</a></p>
      <p>📱 <a href="tel:+33749412756">+33 7 49 41 27 56</a></p>
      <p style="margin-top: 20px; font-size: 12px; color: #999;">
        Vous recevez cet email car vous avez demandé un devis sur sociql.fr
      </p>
    </div>
  </div>
</body>
</html>`,
      }),
    });

    if (!brevoResponse.ok) {
      const brevoError = await brevoResponse.text();
      console.error("Erreur Brevo:", brevoError);
      throw new Error("Échec de l'envoi de l'email");
    }

    // 3. Envoyer une notification à l'agence (optionnel)
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY || "",
      },
      body: JSON.stringify({
        sender: {
          email: "noreply@sociql.fr",
          name: "SociQl - Notifications",
        },
        to: [
          {
            email: "contact@sociql.fr",
            name: "SociQl",
          },
        ],
        subject: `🆕 Nouvelle demande de devis - ${prenom} ${nom}`,
        htmlContent: `
          <h2>Nouvelle demande de devis</h2>
          <p><strong>Client :</strong> ${prenom} ${nom}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${telephone}</p>
          <p><strong>Nom du site :</strong> ${nomSite || "Non spécifié"}</p>
          <p><strong>Services :</strong> ${services.join(", ")}</p>
          <p><strong>Détails :</strong></p>
          <p>${details}</p>
        `,
      }),
    });

    return NextResponse.json({
      success: true,
      message: "Demande envoyée avec succès",
    });
  } catch (error) {
    console.error("Erreur API:", error);
    return NextResponse.json(
      {
        error: "Une erreur est survenue lors du traitement de votre demande",
        details: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
