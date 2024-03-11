import { Layout } from "@/components/layouts"


const PokemonPage = ({ pokemon }) => {

    console.log('pokemon', pokemon)
    return (
        <Layout title='xyz'>
            <div>{pokemon.name}</div>
        </Layout>
    )
}


export const getStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((index, value) => `${index + 1}`)

    return {
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {

    const { id } = params

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const { results } = await res.json();
    console.log('results', results)


    return {
        props: {
            pokemon: results
        }
    }
}


export default PokemonPage