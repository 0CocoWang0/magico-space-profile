import DocsLayout from "../components/sections/notion/DocsLayout";

export default function ProjectPage({ params }) {
    const { slug } = params

    // Pass slug down to DocsLayout as a prop
    return <DocsLayout slug={slug} />
}