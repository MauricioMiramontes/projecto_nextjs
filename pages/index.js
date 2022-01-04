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
        <Link href="/pokemon">
          <a>Lista de pokemon</a>
        </Link>
      </li>
    </ul>
  );
};

export default Home;
