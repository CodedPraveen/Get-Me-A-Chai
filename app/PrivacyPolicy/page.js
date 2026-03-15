export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen text-gray-300 px-6 md:px-20 py-10">

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Privacy Policy
            </h1>

            <p className="mb-4">Last updated: March 2026</p>

            <p className="mb-6">
                Welcome to <span className="text-white font-semibold">Get Me A Chai</span>.
                Get Me A Chai is a crowdfunding platform designed for creators to receive
                financial support directly from their fans.
            </p>


            <h2 className="text-xl font-semibold text-white mt-6 mb-2">
                1. Information We Collect
            </h2>

            <ul className="list-disc ml-6 space-y-2">
                <li>Name and email (via Google OAuth)</li>
                <li>User profile info</li>
                <li>Donation / payment data</li>
                <li>Usage data</li>
            </ul>


            <h2 className="text-xl font-semibold text-white mt-6 mb-2">
                2. Google OAuth Login
            </h2>

            <p>
                We use Google OAuth for secure login. We only access your name,
                email and profile image. We never access your password.
            </p>


            <h2 className="text-xl font-semibold text-white mt-6 mb-2">
                3. How We Use Data
            </h2>

            <ul className="list-disc ml-6 space-y-2">
                <li>Account creation</li>
                <li>Processing donations</li>
                <li>Improving the platform</li>
                <li>Security and fraud prevention</li>
            </ul>


            <h2 className="text-xl font-semibold text-white mt-6 mb-2">
                4. Third Party Services
            </h2>

            <ul className="list-disc ml-6 space-y-2">
                <li>Google OAuth</li>
                <li>Payment gateway</li>
                <li>Hosting services</li>
            </ul>


            <h2 className="text-xl font-semibold text-white mt-6 mb-2">
                5. Contact
            </h2>

            <p>support@getmeachai.com</p>

        </div>
    );
}