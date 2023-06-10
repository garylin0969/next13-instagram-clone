import Image from 'next/image';

const Header = () => {
    return (
        <>
            <div className="flex items-center justify-between max-w-6xl">
                <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                    <Image
                        fill
                        className="object-contain"
                        src="/Instagram_logo.svg.png"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="instagram logo"
                        priority
                    />
                </div>
                <div className="cursor-pointer h-24 w-10 relative lg:hidden">
                    <Image
                        fill
                        className="object-contain"
                        src="/Instagram-Icon.png"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="instagram icon"
                        priority
                    />
                </div>
                <h1>Right sides</h1>
            </div>
        </>
    );
};

export default Header;
