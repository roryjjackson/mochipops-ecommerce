import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function Home({ allProducts }) {
 return (
    <div className="container">
       <div className={styles.banner}>
          <div className={styles.banner_container}>
            <h2 className={styles.slogan}>Crafting intriguingly good, 100% vegan gelato balls that are wrapped in a deliciously chewy mochi dough.</h2>
          </div>
        </div>

       <div className={styles.products_container}>
          {allProducts.map((product) => {
             return (
                <div className={styles.product_card} key={product.id}>
                   <Link href={`products/${product.slug}`}>
                      <div className={styles.product_img}>
                         <img src={product.image.url} alt={product.name} />
                      </div>
                   </Link>
                   <div className={styles.product_content}>
                      <h3>{product.name}</h3>
                      <p>${product.price}</p>
                      <button
                        className="btn snipcart-add-item"
                        data-item-id={product.id}
                        data-item-price={product.price}
                        data-item-url={`products/${product.slug}`}
                        data-item-image={product.image.url}
                        data-item-name={product.name}
                      >
                        Add to cart 🛒
					            </button>
                   </div>
                </div>
             );
          })}
       </div>
       <div className={styles.about_container}>
        hi
       </div>
    </div>
 );
}

export async function getStaticProps() {
  const client = new ApolloClient({
     uri: 'https://api-eu-west-2.hygraph.com/v2/clb7yfj2811f001uk2gh4grin/master',
     cache: new InMemoryCache(),
  });
  const data = await client.query({
     query: gql`
        query ProductsQuery {
           products {
              id
              name
              slug
              price
              image {
                 url
              }
           }
        }
     `,
  });
  const allProducts = data.data.products;
  return {
     props: {
        allProducts,
     },
  };
 }
