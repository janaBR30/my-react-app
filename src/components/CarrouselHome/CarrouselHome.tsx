import { Carousel } from "react-bootstrap"

const CarrouselHome = () => {
    return (
        <Carousel>

            <Carousel.Item>
                <img
                    className='d-block w-100'
                    style={{ maxHeight: "500px", objectFit: 'cover' }}
                    src="https://img.freepik.com/fotos-gratis/rack-de-roupas-na-loja_23-2148929537.jpg?w=1380&t=st=1698272805~exp=1698273405~hmac=b511b897ae8411c889d7b761f615b9a3b8ae7ded6870b1be92376b69708eb47b"
                    alt="Slide1"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className='d-block w-100'
                    style={{ maxHeight: "500px", objectFit: 'cover' }}
                    src="https://img.freepik.com/fotos-gratis/roupas-da-moda-em-uma-loja-de-boutique_1150-14701.jpg?w=1380&t=st=1698272824~exp=1698273424~hmac=6c43d783fcfa12ac2b1db6e05762d40453328333ad2794cd8483c690df4c0d23"
                    alt="Slide2"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className='d-block w-100'
                    style={{ maxHeight: "500px", objectFit: 'cover' }}
                    src="https://img.freepik.com/fotos-gratis/vista-frontal-de-uma-linda-garota-japonesa-no-shopping_23-2148665348.jpg?w=1380&t=st=1698272880~exp=1698273480~hmac=00a553a901671cb24b0354a26f08c9431f26df5646f3fb0c4e1f7d248a015d1e"
                    alt="Slide3"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default CarrouselHome

