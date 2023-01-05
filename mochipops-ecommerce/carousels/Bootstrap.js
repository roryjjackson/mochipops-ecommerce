import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'

function BootstrapCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/../public/images/pexels-mochi2.jpg"
          alt="First slide"
          width={200}
          height={200}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/../public/images/pexels-mochi2.jpg"
          alt="Second slide"
          width={200}
          height={200}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/../public/images/pexels-mochi2.jpg"
          alt="Third slide"
          width={200}
          height={200}
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