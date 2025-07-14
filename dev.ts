
import { config } from 'dotenv';
config();

import '@/ai/flows/upsell-recommendations.ts';
import '@/ai/flows/optimize-route-flow.ts';
import '@/ai/flows/recipe-suggestion-flow.ts';
import '@/ai/flows/product-tips-flow.ts';
import '@/ai/flows/scan-item-flow.ts';
import '@/ai/flows/inventory-insights-flow.ts';
import '@/ai/tools/product-details.ts';
