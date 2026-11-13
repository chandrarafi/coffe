import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "More Nutrition - Matcha meets Protein",
  description:
    "Discover the More Nutrition Iced Matcha Latte in a whole new way: 20 g protein, 85 mg caffeine, 95% less sugar, refreshing, light and full of flavor.",
  icons: {
    icon: "https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689b29bd3caff6492c34a95c_More-32.png",
    apple: "https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689b29bfa930eaca4af75a40_More-256.png",
  },
  openGraph: {
    title: "More Nutrition - Matcha meets Protein",
    description:
      "Discover the More Nutrition Iced Matcha Latte in a whole new way: 20 g protein, 85 mg caffeine, 95% less sugar, refreshing, light and full of flavor.",
    images: [
      "https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68d42a7969bac99a00c2b065_0782dc3e2ffdb0ca7adc9aa85c472b8b_matcha-seo.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className="w-mod-js"
      data-wf-domain="more-nutrition.webflow.io"
      data-wf-page="686c09a33211842a0ac01850"
      data-wf-site="686c09a33211842a0ac0183d"
    >
      <head>
        <link rel="preconnect" href="https://cdn.prod.website-files.com" crossOrigin="anonymous" />
        <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=686c09a33211842a0ac0183d"
          async={false}
        />
        <script
          src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/js/more-nutrition.a9ba356d.f9d79368f06abced.js"
          async={false}
        />
        <script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js"
          async={false}
        />
        <script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js"
          async={false}
        />
        <script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js"
          async={false}
        />
        <script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/CustomEase.min.js"
          async={false}
        />
        <script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/DrawSVGPlugin.min.js"
          async={false}
        />
        <script
          src="https://cdn.prod.website-files.com/gsap/3.15.0/InertiaPlugin.min.js"
          async={false}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
                gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, DrawSVGPlugin, InertiaPlugin);
              }
            `,
          }}
        />
      </head>
      <body className="body">
        {children}

        {/* Main More Matcha Engine */}
        <Script src="/scripts/app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
