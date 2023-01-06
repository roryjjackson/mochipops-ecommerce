import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'
import styles from '../styles/components/Carousel.module.css'


function BootstrapCarousel() {
  return (
    <Carousel>
      <Carousel.Item className={styles.carousel_item}>
          <Image
          className="d-block w-100"
          src="/../public/images/x.jpg"
          alt="First slide"
          width={2000}
          height={350}

          />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <Image
          className="d-block w-100"
          src="/../public/images/x.jpg"
          alt="Second slide"
          width={2000}
          height={350}
          
          />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <Image
          className="d-block w-100"
          src="/../public/images/x.jpg"
          alt="Third slide"
          width={2000}
          height={350}
          
          />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BootstrapCarousel;