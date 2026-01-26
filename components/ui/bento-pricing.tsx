'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckIcon, SparklesIcon, ArrowRight } from 'lucide-react';

type PricingCardProps = {
	titleBadge: string;
	priceLabel: string;
	priceSuffix?: string;
	features: string[];
	cta?: string;
	className?: string;
	onCtaClick?: () => void;
};

function FilledCheck() {
	return (
		<div className="bg-black text-white rounded-full p-0.5">
			<CheckIcon className="size-3" strokeWidth={3} />
		</div>
	);
}

function PricingCard({
	titleBadge,
	priceLabel,
	priceSuffix = '/mois',
	features,
	cta = 'Choisir',
	className,
	onCtaClick,
}: PricingCardProps) {
	return (
		<motion.div
			whileHover={{ y: -8, scale: 1.02 }}
			transition={{ duration: 0.2 }}
			className={cn(
				'bg-white border-2 border-gray-200 relative overflow-hidden rounded-2xl hover:border-black hover:shadow-2xl transition-all duration-200 group',
				className,
			)}
		>
			<div className="flex items-center gap-3 p-4">
				<Badge variant="secondary" className="bg-gray-100 text-black hover:bg-gray-200">
					{titleBadge}
				</Badge>
				<div className="ml-auto">
					<Button 
						variant="outline" 
						className="group-hover:bg-black group-hover:text-white transition-all duration-200"
						onClick={onCtaClick}
					>
						{cta}
					</Button>
				</div>
			</div>

			<div className="flex items-end gap-2 px-4 py-2">
				<span className="font-mono text-5xl font-semibold tracking-tight">
					{priceLabel}
				</span>
				{priceLabel !== '0€' && priceLabel.toLowerCase() !== 'sur devis' && (
					<span className="text-muted-foreground text-sm pb-2">{priceSuffix}</span>
				)}
			</div>

			<ul className="text-muted-foreground grid gap-4 p-4 text-sm">
				{features.map((f, i) => (
					<motion.li 
						key={i} 
						className="flex items-start gap-3"
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: i * 0.1 }}
					>
						<FilledCheck />
						<span className="leading-relaxed">{f}</span>
					</motion.li>
				))}
			</ul>

			{/* Gradient hover effect */}
			<div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br from-black to-transparent pointer-events-none" />
		</motion.div>
	);
}

export function BentoPricing() {
	const scrollToChatbot = () => {
		// Ouvrir le chatbot si disponible
		const chatbotButton = document.querySelector('[class*="chatbot"]') as HTMLElement;
		if (chatbotButton) {
			chatbotButton.click();
		}
	};

	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-8">
			{/* Carte principale - OFFRE POPULAIRE */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				whileHover={{ y: -8 }}
				className={cn(
					'bg-gradient-to-br from-black to-gray-800 text-white relative w-full overflow-hidden rounded-2xl border-2 border-black shadow-xl hover:shadow-2xl transition-all duration-300',
					'lg:col-span-5 group',
				)}
			>
				{/* Pattern background */}
				<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full opacity-10">
					<div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5">
						<div
							aria-hidden="true"
							className={cn(
								'absolute inset-0 size-full',
								'bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)]',
								'bg-[size:24px]',
							)}
						/>
					</div>
				</div>

				<div className="relative z-10 flex items-center gap-3 p-4 sm:p-6">
					<Badge className="bg-white text-black hover:bg-gray-100">
						🔥 OFFRE POPULAIRE
					</Badge>
					<Badge variant="outline" className="hidden lg:flex border-white/20 text-white">
						<SparklesIcon className="me-1 size-3" /> Plus recommandé
					</Badge>
					<div className="ml-auto">
						<Button 
							className="bg-white text-black hover:bg-gray-100"
							onClick={scrollToChatbot}
						>
							Commander
							<ArrowRight className="ml-2 w-4 h-4" />
						</Button>
					</div>
				</div>

				<div className="relative z-10 flex flex-col p-4 sm:p-6 lg:flex-row gap-6">
					<div className="lg:w-[30%]">
						<div className="flex items-end gap-2">
							<span className="font-mono text-5xl sm:text-6xl font-bold tracking-tight">
								1 200€
							</span>
						</div>
						<span className="text-white/70 text-sm">paiement unique</span>
						<p className="text-white/60 text-xs mt-2">
							Site e-commerce complet
						</p>
					</div>
					<ul className="text-white/90 grid gap-4 text-sm lg:w-[70%]">
						{[
							'Site e-commerce complet avec panier avancé',
							'Intégration Stripe pour paiements en ligne',
							'Gestion des stocks et des commandes',
							'Dashboard admin pour gérer votre business',
							'Design responsive et moderne',
							'SEO optimisé pour Google',
							'Support 3 mois offert + formation',
						].map((f, i) => (
							<motion.li 
								key={i} 
								className="flex items-start gap-3"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
							>
								<div className="bg-white text-black rounded-full p-0.5 mt-0.5">
									<CheckIcon className="size-3" strokeWidth={3} />
								</div>
								<span className="leading-relaxed">{f}</span>
							</motion.li>
						))}
					</ul>
				</div>

				{/* Glow effect */}
				<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
					<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent" />
				</div>
			</motion.div>

			{/* STARTER */}
			<PricingCard
				titleBadge="DÉBUTANT"
				priceLabel="800€"
				features={[
					'Site vitrine professionnel (5-7 pages)',
					'Design moderne et épuré',
					'Responsive mobile/tablette/desktop',
					'Formulaire de contact fonctionnel',
					'Optimisation SEO de base',
					'Hébergement 1 an inclus',
					'Support technique 3 mois',
				]}
				className="lg:col-span-3"
				onCtaClick={scrollToChatbot}
			/>

			{/* RESTAURANT PRO */}
			<PricingCard
				titleBadge="RESTAURANT"
				priceLabel="1 500€"
				features={[
					'Site spécialisé restaurant/café',
					'Menu digital interactif et beau',
					'Intégration Uber Eats/Deliveroo',
					'Galerie photos professionnelle',
					'Système de réservation en ligne',
					'SEO local pour être trouvé facilement',
					'Formation complète incluse',
				]}
				className="lg:col-span-4"
				onCtaClick={scrollToChatbot}
			/>

			{/* SOLUTION IA */}
			<PricingCard
				titleBadge="SOLUTION IA"
				priceLabel="Sur devis"
				priceSuffix=""
				features={[
					'Chatbot intelligent comme celui-ci',
					'Automatisation de vos processus métier',
					'Analyse de données avec IA',
					'Workflows N8N personnalisés',
					'Intégration OpenAI API',
					'Gain de temps jusqu\'à 95%',
					'Support premium dédié',
				]}
				className="lg:col-span-4"
				onCtaClick={scrollToChatbot}
			/>

			{/* MAINTENANCE */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
				whileHover={{ y: -8, scale: 1.02 }}
				className="lg:col-span-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:border-black hover:shadow-2xl transition-all duration-200 group"
			>
				<Badge variant="secondary" className="mb-4 bg-gray-100 text-black">
					MAINTENANCE
				</Badge>
				<div className="flex items-end gap-2 mb-4">
					<span className="font-mono text-4xl font-semibold tracking-tight">
						99€
					</span>
					<span className="text-muted-foreground text-sm pb-1">/mois</span>
				</div>
				<ul className="text-muted-foreground grid gap-3 text-sm mb-6">
					{[
						'Mises à jour de sécurité continues',
						'Corrections de bugs illimitées',
						'Sauvegardes automatiques quotidiennes',
						'Support prioritaire par email/chat',
						'Monitoring de performance 24/7',
					].map((f, i) => (
						<li key={i} className="flex items-start gap-3">
							<FilledCheck />
							<span>{f}</span>
						</li>
					))}
				</ul>
				<Button 
					className="w-full group-hover:bg-black group-hover:text-white transition-all" 
					variant="outline"
					onClick={scrollToChatbot}
				>
					S'abonner
				</Button>
			</motion.div>

			{/* REFONTE */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.3 }}
				whileHover={{ y: -8, scale: 1.02 }}
				className="lg:col-span-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:border-black hover:shadow-2xl transition-all duration-200 group"
			>
				<Badge variant="secondary" className="mb-4 bg-gray-100 text-black">
					REFONTE
				</Badge>
				<div className="flex items-end gap-2 mb-4">
					<span className="font-mono text-4xl font-semibold tracking-tight">
						600€
					</span>
					<span className="text-muted-foreground text-sm pb-1">paiement unique</span>
				</div>
				<ul className="text-muted-foreground grid gap-3 text-sm mb-6">
					{[
						'Modernisation complète de votre site',
						'Nouveau design tendance 2026',
						'Optimisation des performances',
						'Migration de contenu incluse',
						'Formation à la nouvelle interface',
					].map((f, i) => (
						<li key={i} className="flex items-start gap-3">
							<FilledCheck />
							<span>{f}</span>
						</li>
					))}
				</ul>
				<Button 
					className="w-full group-hover:bg-black group-hover:text-white transition-all" 
					variant="outline"
					onClick={scrollToChatbot}
				>
					Demander un devis
				</Button>
			</motion.div>
		</div>
	);
}
