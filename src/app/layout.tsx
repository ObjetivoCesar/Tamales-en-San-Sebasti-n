import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Tamales tradicionales en San Sebastián, Loja | Chabaquito",
  description: "Tamales de chancho, pollo, mixtos y queso con la auténtica receta lojana. Ideales para tu desayuno, cafecito o eventos en San Sebastián, Loja.",
  keywords: ["tamales loja", "tamal lojano", "san sebastian loja", "comida típica loja", "humitas", "quimbolitos", "desayuno loja"],
  icons: {
    icon: "/images/general/logo.png",
    apple: "/images/general/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
