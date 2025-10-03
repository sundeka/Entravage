import "./globals.css";
import { Geist } from 'next/font/google'
 
const geist = Geist({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
