# Capital Ball

Capital market consultation platform built with modern web technologies.

## Tech Stack

This project is built using the following modern technologies:

- **Runtime**: [Bun](https://bun.sh) - Fast JavaScript runtime and package manager
- **Framework**: [Next.js 15](https://nextjs.org) with App Router and Turbopack
- **Language**: [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) - Utility-first CSS framework
- **UI Components**: [Shadcn UI](https://ui.shadcn.com) - Modern component library
- **Icons**: [Lucide React](https://lucide.dev) - Beautiful hand-crafted icons

## Features

- ⚡ **Fast Development** - Bun runtime with Turbopack for instant builds
- 🎨 **Modern UI** - Beautiful interface with Shadcn components
- 🌙 **Dark Mode** - Built-in dark/light mode support
- 📱 **Responsive** - Mobile-first responsive design
- 🔒 **Type Safe** - Full TypeScript support for robust development
- ⚡ **Optimized** - Next.js 15 with latest performance optimizations

## Getting Started

First, install dependencies:

```bash
bun install
```

Then, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `bun dev` - Start development server with Turbopack
- `bun build` - Build the application for production
- `bun start` - Start the production server
- `bun lint` - Lint the codebase
- `bun lint:fix` - Fix linting issues automatically
- `bun type-check` - Check TypeScript types

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   └── ui/               # Shadcn UI components
└── lib/                   # Utility functions
    └── utils.ts          # Common utilities
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com)
- [Bun Documentation](https://bun.sh/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
