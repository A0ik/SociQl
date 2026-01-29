import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Récupérer les données du formulaire
    const body = await req.json();
    
    console.log('📨 Devis reçu:', body);

    // Validation basique
    if (!body.email || !body.prenom || !body.nom) {
      return NextResponse.json(
        { error: 'Email, prénom et nom sont obligatoires' },
        { status: 400 }
      );
    }

    // URL du webhook N8N
    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('❌ N8N_WEBHOOK_URL non configurée dans .env.local');
      return NextResponse.json(
        { error: 'Configuration serveur manquante' },
        { status: 500 }
      );
    }

    // Envoyer vers N8N
    console.log('🚀 Envoi vers N8N:', webhookUrl);
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error('❌ Erreur N8N:', response.status, await response.text());
      throw new Error('Erreur webhook N8N');
    }

    console.log('✅ N8N a reçu les données');

    // Réponse au client
    return NextResponse.json({ 
      success: true,
      message: 'Devis envoyé avec succès ! Vous allez recevoir un email dans quelques instants.' 
    });

  } catch (error) {
    console.error('❌ Erreur API devis:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi du devis',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      },
      { status: 500 }
    );
  }
}
