import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-l from-[#020617]  text-gray-400 ">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Left */}
                <div className="text-sm text-center md:text-left">
                    © 2026 <Link href="/" className="hover:text-white transition">Get Me A Chai</Link> — Crowdfunding Platform for Creators
                </div>

                {/* Right */}
                <div className="flex gap-6 text-sm">

                    <Link
                        href={"/PrivacyPolicy"}
                        className="hover:text-white transition"
                    >
                        Privacy Policy
                    </Link>

                    <Link
                        href="/Terms-Conditions"
                        className="hover:text-white transition"
                    >
                        Terms
                    </Link>

                    <Link
                        href="/about"
                        className="hover:text-white transition"
                    >
                        About
                    </Link>

                </div>

            </div>
        </footer>
    );
}