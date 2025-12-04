# ZeeShad (Private) Limited – Next.js Application

This repository contains the official **Next.js application** for **ZeeShad (Private) Limited**, a company incorporated under the Companies Act, 2017 (XIX of 2017), limited by shares, with its registered office at D-17 Ground Floor, Gulistan Society, Quaidabad, Karachi, Pakistan.

## About the Company

ZeeShad (Private) Limited specializes in **information technology** services including, but not limited to:

- Software development (web, mobile, and enterprise applications)
- Hardware solutions and IT infrastructure
- IT consultancy and digital transformation
- Cloud computing, data hosting, and digital infrastructure management
- Artificial intelligence, data analytics, and machine learning
- Cybersecurity, networking, and systems integration
- Project management, software quality assurance, and R&D in emerging technologies
- Professional and technical training in IT and computer sciences
- Outsourcing of IT and telecommunication services

The company operates with full authority to establish development centers, IT laboratories, training facilities, and provide both domestic and international IT solutions.

## Application Features

This Next.js application provides a comprehensive digital presence for ZeeShad (Private) Limited, featuring:

- **Professional Homepage** with hero section and company branding
- **Services Showcase** displaying all IT services offered by the company
- **Products Section** showcasing company products: Qr-Codify, Z-ERP, Z-POS, and ZeeShad Academy
- **About Section** with company information, capabilities, and mission
- **Contact Form** for client inquiries and business communications
- **Responsive Design** optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX** using Material-UI icons and Tailwind CSS
- **Smooth Animations** and interactive elements
- **SEO Optimized** with proper metadata and semantic HTML

## Products

ZeeShad (Private) Limited offers the following products:

- **Qr-Codify** ([qr-codify.com](https://qr-codify.com)) - Advanced QR code generation and management platform
- **Z-ERP** - Comprehensive Enterprise Resource Planning solution
- **Z-POS** - Modern Point of Sale system for retail and hospitality
- **ZeeShad Academy** - Professional IT training and certification programs

## Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Material-UI Icons
- **Deployment:** Vercel
- **Code Quality:** ESLint, TypeScript strict mode

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zeeshad-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
npm run build
npm start
```

### Project Structure

```
zeeshad-app/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Header.tsx     # Navigation header
│   ├── Footer.tsx     # Footer component
│   ├── Hero.tsx       # Hero section
│   ├── Services.tsx   # Services showcase
│   ├── Products.tsx   # Products showcase
│   ├── About.tsx      # About section
│   └── Contact.tsx    # Contact form
├── lib/               # Utility functions
│   └── utils.ts       # Helper functions
└── public/            # Static assets
```

## Deployment

This application is configured for deployment on **Vercel** and will be linked to the company domain: [zeeshad.com](https://zeeshad.com).

### Deploy to Vercel

1. Push your code to a Git repository
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

## Customization

### Updating Company Information

- Edit `components/About.tsx` for company details
- Update contact information in `components/Contact.tsx` and `components/Footer.tsx`
- Modify services in `components/Services.tsx`

### Styling

- Global styles: `app/globals.css`
- Component styles: Tailwind CSS classes in component files
- Color scheme: Update CSS variables in `globals.css`

## License

This repository is owned by **ZeeShad (Private) Limited**. Unauthorized use or reproduction is prohibited.

## Support

For questions or support, please contact:
- Email: info@zeeshad.com
- Phone: +92 304 0058323

