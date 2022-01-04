import Link from "next/link";

export async function getServerSideProps() {
  // Recopilar datos desde una API externa
  const res = await fetch(`https://orca-api-pokemon.herokuapp.com/`);
  const poke_list = await res.json();

  // Pasar datos hacia la pagina en forma de props
  return { props: { poke_list } };
}

const IdHome = ({ poke_list }) => {
  return (
    <>
      <div>Lista de pokemon</div>
      {console.log(poke_list)}
      {poke_list.map((ruta) => (
        <div key={ruta._id}>
          <Link href={`/pokemon/${ruta.name}`}>
            <a>{ruta.name}</a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default IdHome;
