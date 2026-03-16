"use client"
import { useEffect } from "react"

export default function RemoveHash() {

    useEffect(() => {
        if (window.location.hash === "#_=_") {
            history.replaceState(
                "",
                document.title,
                window.location.pathname + window.location.search
            )
        }
    }, [])

    return null
}