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
        <div className={styles.products}>
          <h2 className={styles.product_title}>Our products</h2>
          <div className={styles.products_container}>
              {allProducts.map((product) => {
                return (
                  <div className={styles.product_card} key={product.id}>
                      <Link href={`products/${product.slug}`}>
                          <div className={styles.product_img}>
                          {/* <Image
                            className={styles.avatar}
                            src="product.image.url"
                            alt="product.name"
                            height={250}
                            width={250}
                          /> */}
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
                            Add to cart
                          </button>
                      </div>
                    </div>
                );
                })}
          </div>
        </div>
          <div className={styles.about_container}>
            <h2>About us</h2>
            <p>Whilst studying abroad in Barcelona, Mochipops co-founder Charlotte first encountered intriguingly good, chewy mochi gelato balls and from then on she was hooked... </p>
            <div className={styles.avatar_container}>
              <Image
                className={styles.avatar}
                src="/../public/images/yogagirl.png"
                alt=""
                height={250}
                width={250}
                />
            </div>
            <p>After spending a summer working as a professional chef in Italy, learning how to make gelato using recipes that were hundred of years old she was spurred on to follow her dream and Mochipops was born. After a year of testing the recipe in her personal kitchen, as well as recruiting a lovely co-founder Tom, Charlotte and Tom are both pleased to announce the launch of their amazing mochi products.</p>
            <div className={styles.avatar_container}>
              <Image
                className={styles.avatar}
                src="/../public/images/pexels-mochi2.jpg"
                alt=""
                height={250}
                width={250}
              />
            </div>
            <p>
            Ensuring that as well as tasting intriguingly good, Mochipops ARE GOOD all of our products are vegan, gluten-free, dairy free, refined sugar free, soy and palm oil free! In addition, we are trying to ensure we make as sustainable choices as possible when it comes to packaging.
            </p>
          </div>
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner">
              <div class="item active">
                <Image src="/../public/images/IMG_4252.jpg" alt="Los Angeles" width={200} height={200}></Image>
              </div>

              <div class="item">
                <Image src="/../public/images/IMG_4252.jpg" alt="Chicago" width={200} height={200}></Image>
              </div>

              <div class="item">
                <Image src="/../public/images/IMG_4252.jpg" alt="New York" width={200} height={200}></Image>
              </div>
            </div>

            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
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
