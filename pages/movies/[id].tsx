import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Hello Detail page</h1>
    </div>
  );
};

export default Detail;
