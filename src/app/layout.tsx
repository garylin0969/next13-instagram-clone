import Header from '@/components/Header';
import { Metadata } from 'next/types';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
    title: 'Instagram Clone',
    description: 'This website is an Instagram clone',
    // icons: {
    //     icon: '/google_icon.svg',
    // },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true} className="min-h-screen">
                <Header />
                {children}
            </body>
        </html>
    );
}
