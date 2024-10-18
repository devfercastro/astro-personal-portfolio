# Astro Portfolio

This is a personal portfolio website built using [Astro](https://astro.build), styled with [Tailwind CSS](https://tailwindcss.com), and powered by [Bun](https://bun.sh) for fast and efficient JavaScript runtime deployed on [Vercel](https://vercel.com).
Check out the [demo](https://astro-portfolio.vercel.app/) to see the project in action.

## Table of Contents
1. [Requirements](#requirements)
2. [Dependencies](#dependencies)
3. [Project Structure](#project-structure)
4. [Commands](#commands)
5. [Deployment](#deployment)
6. [Contributing](#contributing)

## Requirements

Before running this project, make sure you have the following installed on your system:

- **Bun** (v1.0.0 or higher) - A fast JavaScript runtime, required for running commands but you can also use **Node.js**.

## Dependencies

The project relies on the following core technologies:

- **Astro**: v5.0.0-beta.3 - Frontend framework for building fast, optimized websites.
- **React**: Used in some components via @astrojs/react.
- **Tailwind CSS**: Utility-first CSS framework via @astrojs/tailwind.
- **Vercel**: Deployment integration via @astrojs/vercel.
- **TypeScript**: Type checking for better developer experience.
- **Biome**: Optional linter/formatter with support for TypeScript and modern JS.

## Project Structure

```bash
├── astro.config.mjs       # Astro configuration file
├── biome.json             # Biome (optional linter/formatter) configuration
├── bun.lockb              # Bun lockfile
├── package.json           # Project dependencies and scripts
├── public/                # Static assets
│   └── projects/          # Project-related assets (e.g., images)
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/            # UI-related components
│   │   │   ├── icons/     # Icon components
│   ├── content.ts         # Centralized content management
│   ├── env.d.ts           # TypeScript environment definitions
│   ├── layouts/           # Layout components
│   ├── pages/             # Application pages
│   ├── types/             # Global TypeScript custom types
│   └── utils/             # Utility functions
├── tailwind.config.mjs     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration

```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `bun install`              | Installs dependencies                            |
| `bun run dev`              | Starts local dev server at `localhost:4321`       |
| `bun run build`            | Build your production site to `./vercel/output/` |
| `bun run preview`          | Preview your build locally, before deploying     |
| `bun run astro ...`        | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help`  | Get help using the Astro CLI                     |

## Deployment

The project is configured to deploy on [Vercel](https://vercel.com). The build output is set to `./vercel/output/`, and you can customize the deployment settings in the Vercel dashboard.

### Build Settings

```bash
Output Directory: ./vercel/output/
Build Command: bun run build
```

## Contributing

Feel free to open issues or submit pull requests for improvements or new features. Contributions are welcome!
