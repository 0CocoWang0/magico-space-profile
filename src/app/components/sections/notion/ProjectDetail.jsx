import dynamic from "next/dynamic"
import { useMemo } from "react"

export default function ProjectDetail({ slug }) {
    const Content = useMemo(() => {
        try {
            return dynamic(() => import(`/data/projects/${slug}.mdx`))
        } catch (e) {
            return () => <div>Not Found</div>
        }
    }, [slug])

    return (
        <div className="prose prose-invert">
            <Content />
        </div>
    )
}
