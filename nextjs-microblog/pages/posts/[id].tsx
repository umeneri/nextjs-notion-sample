import Head from "next/head";
import Link from "next/link";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyles from "styles/utils.module.css";
import Layout from "../../components/Layout";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

interface PostData {[key:string]: any}

type PostProperty = {
  postData: PostData;
};

interface Props {
  postData: PostData;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const postData = await getPostData(params!.id);

  console.log(postData);

  return {
    props: {
      postData,
    },
  };
};

export default function Post({ postData }: PostProperty) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
      </article>
    </Layout>
  );
}
