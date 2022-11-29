import { useRouter } from "next/router";
import { NextPageContext } from "next";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const Detail = ({
  params,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
};

export default Detail;

export const getServerSideProps = (context: NextPageContext) => {
  const {
    query: { params },
  } = context;
  return {
    props: {
      params,
    },
  };
};
