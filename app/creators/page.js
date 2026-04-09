import Link from "next/link"
import { fetchCreators } from "@/actions/useractions"
import CreatorsSearchForm from "@/components/CreatorsSearchForm"

const CreatorsPage = async ({ searchParams }) => {
    const resolvedSearchParams = await searchParams
    const rawQuery =
        typeof resolvedSearchParams?.get === "function"
            ? resolvedSearchParams.get("q")
            : resolvedSearchParams?.q

    const query = Array.isArray(rawQuery) ? (rawQuery[0] || "") : (rawQuery || "")
    const creators = await fetchCreators(query)

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center mb-6">Find Creators</h1>

            <CreatorsSearchForm initialQuery={query} />

            {creators.length === 0 && (
                <p className="text-center text-slate-300">No creators found for this search.</p>
            )}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {creators.map((creator) => (
                    <Link key={creator.username} href={`/${creator.username}`} className="rounded-xl bg-slate-900 border border-slate-800 p-4 hover:border-blue-500 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                            <img
                                src={creator.profilepic}
                                alt={creator.name}
                                className="size-12 rounded-full object-cover border border-slate-700"
                            />
                            <div>
                                <p className="font-semibold">{creator.name}</p>
                                <p className="text-sm text-slate-400">@{creator.username}</p>
                            </div>
                        </div>
                        <div className="text-sm text-slate-300">
                            <p>Total raised: <span className="font-bold text-white">₹{creator.totalRaised}</span></p>
                            <p>Supporters: <span className="font-bold text-white">{creator.supporters}</span></p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CreatorsPage
