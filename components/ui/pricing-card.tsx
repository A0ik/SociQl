'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const cardVariants = cva(
  'relative flex flex-col p-8 rounded-2xl border shadow-sm transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-card border-border',
        popular:
          'bg-card border-primary shadow-lg shadow-primary/10 -translate-y-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface PricingCardProps extends VariantProps<typeof cardVariants> {
  className?: string;
  planName: string;
  description: string;
  price: number;
  originalPrice?: number;
  billingCycle: string;
  features: string[];
  buttonText: string;
  isCurrentPlan?: boolean;
  icon?: React.ReactNode;
  onButtonClick?: () => void;
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      className,
      variant,
      planName,
      description,
      price,
      originalPrice,
      billingCycle,
      features,
      buttonText,
      isCurrentPlan = false,
      icon,
      onButtonClick,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn(cardVariants({ variant }), className)}
        {...props}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      >
        {variant === 'popular' && (
          <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
            POPULAIRE
          </div>
        )}

        {originalPrice && (
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
            PROMO -20%
          </div>
        )}

        <div className="flex items-center gap-4 mb-4">
          {icon && (
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-card-foreground">{planName}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>

        <div className="my-6">
          {originalPrice && (
            <div className="mb-2">
              <span className="text-2xl font-semibold text-gray-400 line-through">
                {originalPrice}€
              </span>
            </div>
          )}
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold">{price}€</span>
            <span className="text-muted-foreground">{billingCycle}</span>
          </div>
        </div>

        <Button
          className="w-full"
          size="lg"
          variant={isCurrentPlan ? 'secondary' : variant === 'popular' ? 'default' : 'outline'}
          disabled={isCurrentPlan}
          onClick={onButtonClick}
        >
          {isCurrentPlan ? 'Plan actuel' : buttonText}
        </Button>

        <ul className="mt-8 space-y-4 text-sm text-muted-foreground flex-1">
          {features.map((feature, index) => {
            const isNegative = feature.startsWith('❌');
            return (
              <li key={index} className="flex items-start gap-3">
                {!isNegative && <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />}
                <span className={isNegative ? 'text-red-500' : ''}>{feature}</span>
              </li>
            );
          })}
        </ul>
      </motion.div>
    );
  }
);

PricingCard.displayName = 'PricingCard';

export { PricingCard };
