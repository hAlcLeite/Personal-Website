# Personal Website

This is a modern personal website built with Next.js, featuring a clean and responsive design.

## Features

- Modern and responsive design
- Built with Next.js
- TypeScript support
- Easy to customize and extend

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14.x or higher)
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone [your-repository-url]
cd personal-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/app` - Contains the main application code
- `/components` - Reusable React components
- `/public` - Static assets like images
- `/styles` - CSS and styling files

## Deployment

This website can be deployed to various platforms. Here are some recommended options:

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Follow the deployment steps

### Netlify

1. Push your code to a GitHub repository
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - Build command: `npm run build` or `yarn build`
   - Publish directory: `out`

## Environment Variables

Create a `.env` file in the root directory and add any necessary environment variables:

```env
# Add your environment variables here
```

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is open source and available under the [MIT License](LICENSE). 