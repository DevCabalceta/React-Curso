import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"

import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"


export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

            {/* Search */}
            <SearchBar placeholder="Busca lo que quieras" />

            {/* Busquedas previas */}
            <PreviousSearches />

            {/* Gifs */}
            <GifList />

        </>
    )
}

