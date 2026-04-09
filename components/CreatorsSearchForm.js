"use client"

import { memo, useCallback, useMemo, useState } from "react"
import { useRouter } from "next/navigation"

const CreatorsSearchForm = ({ initialQuery = "" }) => {
    const [query, setQuery] = useState(initialQuery)
    const router = useRouter()

    const trimmedQuery = useMemo(() => query.trim(), [query])
    const showClearButton = useMemo(() => query.length > 0, [query])

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        if (!trimmedQuery) {
            router.push("/creators")
            return
        }
        router.push(`/creators?q=${encodeURIComponent(trimmedQuery)}`)
    }, [router, trimmedQuery])

    const handleClear = useCallback(() => {
        setQuery("")
        router.push("/creators")
    }, [router])

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-8 flex gap-2">
            <div className="relative w-full flex justify-between items-center">
                <input
                    type="text"
                    name="q"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by creator name or username"
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 p-3 pr-10 text-sm"
                />
                {showClearButton && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white text-lg leading-none"
                        aria-label="Clear search"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>

            <button
                type="submit"
                className="rounded-lg bg-blue-600 hover:bg-blue-700 px-5 py-3 text-sm font-semibold"
            >
                Search
            </button>
        </form>
    )
}

export default memo(CreatorsSearchForm)
