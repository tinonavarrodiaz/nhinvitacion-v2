
import { Metadata } from "next";
import '@fontsource-variable/quicksand';
import '@fontsource-variable/merriweather-sans';
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | NH Invitaciones',
    default: 'NH Invitaciones', // a default is required when creating a template
  },
  description: "Invitaciones para todo tipo de evento",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
