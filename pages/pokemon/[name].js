import Link from "next/link";
import Image from "next/image";

export async function getStaticPaths() {
  // Hacer fetch al endpoint que contiene los `posts`
  const res = await fetch("https://orca-api-pokemon.herokuapp.com/");
  const pokemons = await res.json();

  // Obtener poke_rutas a pre-renderizar basado en el `id` de los posts
  const poke_rutas = pokemons.map((pokemon) => `/pokemon/${pokemon.name}`);

  return { paths: poke_rutas, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contiene el `id` del post.
  const res = await fetch(
    `https://orca-api-pokemon.herokuapp.com/name/${params.name}`
  );
  const pokemon = await res.json();
  // Pasar datos del post hacia la página en forma de props
  return { props: { pokemon } };
}

// http://orca-api-pokemon.herokuapp.comhttps://workshop-mongo.herokuapp.com/pokemons/venusaur.jpg

const Post = ({ pokemon }) => {
  const { name, types, evolution, img } = pokemon[0];

  return (
    <>
      <h1>Pokemon: {name}</h1>
      <Image src={img.replace('http://orca-api-pokemon.herokuapp.com', '')} width={200} height={200} alt={name}/>
      <h2>Tipo: </h2>
      <ul>
        {types.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>
      <h2>Evoluciones</h2>
      <ul>
        {evolution.map((evo) => (
          <li key={evo}>
            <Link href={`/pokemon/${evo}`}>
              <a>{evo}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Post;
