import getSongsByTitle from "@/actions/getSongsByTitle"
import Header from "@/components/header"
import SearchInput from "@/components/search-input"
import SearchContent from "./_components/search-content"

interface SearchProps {
    searchParams: {
        title: string
    }
}

export const revalidate = 0

export default async function Search ({searchParams} : SearchProps) {
    const songs = await getSongsByTitle(searchParams.title)

    return (
        <div className="bg-neutral-900 rounde-lg h-full w-full overflow-hidden overflow-y-auto">
            <Header className="from-bg-neutral-900">
                <div className="mb-3 flex flex-col gap-x-6">
                    
                    <h1 className="text-white text-3xl font-semibold">Search</h1>
              <SearchInput />
            </div>
            </Header>
            <SearchContent songs={songs} />
        </div>
    )
}