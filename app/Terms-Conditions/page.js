export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#0b1120] text-gray-300 px-6 md:px-20 py-10">

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Terms & Conditions
            </h1>

            <p className="mb-4">
                Last updated: March 2026
            </p>

            <p className="mb-6">
                Welcome to <span className="text-white font-semibold">Get Me A Chai</span>.
                By using our website, you agree to the following terms and conditions.
                Get Me A Chai is a crowdfunding platform that allows creators to receive
                financial support from their followers.
            </p>


            {/* Section */}
            <h2 className="text-xl font-semibold text-white mt-6 mb-2">
                1. Use of Service
            </h2>

            <p className="mb-4">
                You agree to use this platform only for legal purposes.
                You must not misuse the service or attempt to hack,
                damage, or disrupt the website.
            </p>


            {/* Section */}
            <h2 className="text-xl font-semibold text-white mt-6 mb-2">
                2. User Accounts
            </h2>

            <p className="mb-4">
                You may sign in using Google OAuth. You are responsible for
                maintaining the security of your account.
            </p>


            {/* Section */}
            <h2 className="text-xl font-semibold text-white mt-6 mb-2">
                3. Payments & Donations
            </h2>

            <p className="mb-4">
                Get Me A Chai allows users to support creators through donations.
                We are not responsible for how creators use the funds.
            </p>


            {/* Section */}
            <h2 className="text-xl font-semibold text-white mt-6 mb-2">
                4. Third-Party Services
            </h2>

            <ul className="list-disc ml-6 space-y-2">
                <li>Google OAuth for login</li>
                <li>Payment gateway providers</li>
                <li>Hosting services</li>
            </ul>


            {/* Section */}
            <h2 className="text-xl font-semibold text-white mt-6 mb-2">
                5. Account Suspension
            </h2>

            <p className="mb-4">
                We may suspend or remove accounts that violate our terms.
            </p>


            {/* Section */}
            <h2 className="text-xl font-semibold text-white mt-6 mb-2">
                6. Changes to Terms
            </h2>

            <p className="mb-4">
                We may update these terms at any time.
                Continued use of the website means you accept the changes.
            </p>


            {/* Section */}
            <h2 className="text-xl font-semibold text-white mt-6 mb-2">
                7. Contact
            </h2>

            <p>
                support@getmeachai.com
            </p>

        </div>
    );
}