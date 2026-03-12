import Link from "next/link";
import React from "react";

export default function About() {
    return (
        <div className="text-white">

            {/* HERO */}
            <section className="max-w-6xl mx-auto px-6 py-20 text-center">
                <h1 className="text-5xl font-bold mb-6">
                    Empowering Creators Through Community
                </h1>

                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Get Me A Chai is a simple platform where fans support creators they
                    love. Instead of large funding goals, supporters can contribute small
                    amounts that make a big difference.
                </p>

                <Link href="/login">
                    <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium">
                        Start Your Page
                    </button>
                </Link>
            </section>

            {/* STORY */}
            <section className="bg-gradient-to-r from-slate-900 py-20">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Why We Built This
                        </h2>

                        <p className="text-gray-300 mb-4">
                            Creators spend countless hours building amazing things —
                            open source projects, tutorials, videos, and designs.
                        </p>

                        <p className="text-gray-300">
                            But often they struggle to monetize their work.
                            Get Me A Chai solves this by allowing supporters
                            to quickly contribute and show appreciation.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="/tea.gif"
                            className="w-40"
                            alt="chai"
                        />
                    </div>

                </div>
            </section>

            {/* FEATURES */}
            <section className="max-w-6xl mx-auto px-6 py-20">

                <h2 className="text-3xl font-bold text-center mb-14">
                    What Makes Us Different
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-slate-900 p-6 rounded-xl hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-3">
                            Simple Donations
                        </h3>
                        <p className="text-gray-300 text-sm">
                            Fans can quickly support creators without complicated steps.
                        </p>
                    </div>

                    <div className="bg-slate-900 p-6 rounded-xl hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-3">
                            Creator First
                        </h3>
                        <p className="text-gray-300 text-sm">
                            The platform is designed to help creators grow their audience
                            and receive direct support.
                        </p>
                    </div>

                    <div className="bg-slate-900 p-6 rounded-xl hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-3">
                            Community Powered
                        </h3>
                        <p className="text-gray-300 text-sm">
                            A strong community makes creativity sustainable.
                        </p>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r  to-blue-600 py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Ready to get supported by your fans?
                </h2>

                <p className="text-gray-200 mb-6">
                    Create your page today and start receiving support.
                </p>

                <Link href="/login">
                    <button className="bg-black px-6 py-3 rounded-lg font-medium hover:bg-gray-900">
                        Get Started
                    </button>
                </Link>
            </section>

        </div>
    );
}
export const metadata = {
    title: 'About Us - Get Me A Chai',
    description: '...',
}
