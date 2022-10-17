import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { Tattoo } from "./index";
import {
  SingleTattooQuery,
  TattoosListQuery,
} from "../../graphql/tatoos/tattoos";

export type Props = {
  tattoo: Tattoo;
};

type Params = {
  params: {
    id: string;
  };
};

export async function getStaticPaths() {
  const tattoos = await client
    .query({
      query: TattoosListQuery,
    })
    .then((result) => result.data.tattoos.data);

  const paths = tattoos.map((tattoo: Tattoo) => ({
    params: { id: tattoo.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: Params) {
  const { data } = await client.query({
    query: SingleTattooQuery,
    variables: { id: context.params.id },
  });

  return {
    props: {
      tattoo: data.tattoo.data,
    },
  };
}

const TattooDetail = ({ tattoo }: Props) => {
  return (
    <div>
      <h1>xx {tattoo.attributes.title}</h1>
    </div>
  );
};

export default TattooDetail;
