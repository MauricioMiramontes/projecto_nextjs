import Link from "next/link";

const Home = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/perfil">
          <a>Mi perfil</a>
        </Link>
      </li>
      <li>
        <Link href="/pruebas_id">
          <a>Pruebas de ids dinamicos</a>
        </Link>
      </li>
    </ul>
  );
}

export default Home
