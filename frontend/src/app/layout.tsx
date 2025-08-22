import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Lucidity",
    description: "Psychedelic Trip Integration",
    icons: [
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon-16x16.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/apple-touch-icon.png",
        },
        {
            rel: "manifest",
            url: "site.webmanifest",
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#11051e" />
            </head>
            <body>{children}</body>
        </html>
    );
}
