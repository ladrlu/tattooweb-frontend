import Link from "next/link";
import { TattoosQuery } from "../../graphql/tatoos/tattoos";
import client from "../../apollo-client";
import ImageExtended from "../../components/ImageExtended";

export type Tattoo = {
  id: number;
  attributes: {
    title: string;
    description: string;
    previewImage: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
  };
};

export type Props = {
  tattoos: Tattoo[];
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: TattoosQuery,
  });

  return {
    props: {
      tattoos: data.tattoos.data,
    },
  };
}

const Tattoos = ({ tattoos }: Props) => {
  return (
    <div>
      <h1>Tatoos</h1>
      {tattoos.map((tattoo: Tattoo) => (
        <Link href={"/tattoos/" + tattoo.id} key={tattoo.id}>
          <a>
            <ImageExtended
              fallBackSrc={tattoo.attributes.previewImage.data.attributes.url}
              src={tattoo.attributes.previewImage.data.attributes.url}
              alt={
                tattoo.attributes.previewImage.data.attributes.alternativeText
              }
              width="500"
              height="500"
              objectFit="cover"
              className="image__wrapper"
            />
            {tattoo.attributes.title} {tattoo.attributes.description}
            <br />
            <br />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Tattoos;
