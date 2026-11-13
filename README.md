# Himanshu Gunwant — Personal Portfolio & Writing

Hey there! 👋 I'm **Himanshu Gunwant**, a Computer Science undergraduate at **IIIT Tiruchirappalli**. I'm a developer and builder passionate about backend systems, developer tooling, and building clean, reliable software that solves real problems.

This repository houses the source code for my personal portfolio and writing space at [himanshugunwant.com](https://himanshugunwant.com).

---

## ✦ Design & Philosophy

I wanted my corner of the internet to be fast, quiet, and distraction-free:

- **Text-First & Minimal**: Single centered column layout (`max-w-2xl`), dark-only aesthetic, clean typography, and zero visual clutter.
- **Lightweight by Design**: Smooth CSS entrance transitions with no heavy client-side JavaScript or bulky animation libraries. Fully respects `prefers-reduced-motion`.
- **Markdown / MDX Native**: Articles and essays are written in local `.mdx` files with frontmatter, parsed at build time for instant page loads.
- **Open Web Ready**: Built-in RSS feed at [`/feed.xml`](/app/feed.xml/route.ts), dynamic `sitemap.xml`, `robots.txt`, and full OpenGraph/Twitter card metadata.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (modern CSS-first theme configuration)
- **Content**: MDX parsed with `gray-matter` & rendered with `next-mdx-remote`
- **Typography**: [Geist](https://vercel.com/font) (Sans & Mono)
- **Language**: TypeScript
- **Deployment**: [Vercel](https://vercel.com)

---

## 📁 Project Structure

```
├── app/
│   ├── feed.xml/route.ts      # Native RSS 2.0 XML generator
│   ├── writing/               # Writing index & dynamic [slug] article views
│   ├── globals.css            # Tailwind v4 theme, tokens & CSS keyframes
│   ├── layout.tsx             # Root layout, Geist fonts & global SEO metadata
│   ├── page.tsx               # Homepage (Hero, About, Projects, Recent Writing)
│   ├── robots.ts              # Dynamic robots.txt
│   └── sitemap.ts             # Dynamic sitemap.xml
├── components/                # Modular React components (Hero, Nav, Projects, etc.)
├── content/writing/           # My essays and technical writings in MDX
├── data/site.ts               # Site configuration, bio, socials & project entries
└── lib/                       # MDX parsing utilities and TypeScript definitions
```

---

## 🚀 Running Locally

If you'd like to explore or run this project locally:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:himanshu-gunwant/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local dev server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📬 Connect With Me

- **Website**: [himanshugunwant.com](https://himanshugunwant.com)
- **GitHub**: [@himanshu-gunwant](https://github.com/himanshu-gunwant)
- **X / Twitter**: [@himanshugg_](https://x.com/himanshugg_)
- **LinkedIn**: [himanshugunwant](https://www.linkedin.com/in/himanshugunwant/)
- **YouTube**: [@Himanshu-Gunwant](https://www.youtube.com/@Himanshu-Gunwant)
- **Instagram**: [@himanshugunwant_](https://www.instagram.com/himanshugunwant_)
- **Email**: [hello@himanshugunwant.com](mailto:hello@himanshugunwant.com)

---

## 📄 License

The code in this repository is open-source. Feel free to use the layout, styling, and architecture as inspiration for your own portfolio. Please do not copy my personal writing, bio, or images directly.
