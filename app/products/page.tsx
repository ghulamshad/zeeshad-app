import type { Metadata } from 'next';
import ProductsCatalogueContent from '@/components/pages/ProductsCatalogueContent';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'ZeeShad Desk and internal delivery frameworks—labelled by commercial status.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Products | ZeeShad',
    description:
      'ZeeShad Desk and internal delivery frameworks—labelled by commercial status.',
    url: '/products',
  },
};

export default function ProductsPage() {
  return <ProductsCatalogueContent />;
}
