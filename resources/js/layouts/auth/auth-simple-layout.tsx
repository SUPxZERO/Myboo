import AppLogoIcon from '@/components/app-logo-icon';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-bg-primary p-6 md:p-10 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-light/30 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-peach/30 rounded-full blur-[100px] animate-pulse-glow delay-1000" />
            </div>

            <div className="w-full max-w-sm relative z-10">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="/"
                            className="flex flex-col items-center gap-2 font-medium"
                        >
                            <div className="mb-1 flex h-12 w-12 items-center justify-center">
                                <AppLogoIcon className="size-12" />
                            </div>
                            <span className="sr-only">{title}</span>
                            <span className="text-2xl font-bold text-text-brown tracking-tight">My Boo</span>
                        </Link>

                        <div className="space-y-2 text-center">
                            <h1 className="text-xl font-medium text-text-brown">{title}</h1>
                            <p className="text-center text-sm text-text-brown/70">
                                {description}
                            </p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
