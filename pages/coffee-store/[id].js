import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();

  console.log({ router });
  return (
    <>
      <title>{router.query.id}</title>
      <div>Coffee Store </div>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </>
  );
};

export default CoffeeStore;
