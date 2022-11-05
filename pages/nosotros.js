import Image from "next/image"
import { Layout } from "../Components/layout"
import styles from '../styles/nosotros.module.css'


function Nosotros () {
    return (
        <Layout
            title={'Nosotros'}
            description={'Sobre nosotros, guitarLA tienda de musica'}
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>
                    <Image alt="imagen de nosotros" src="/img/nosotros.jpg" width={1000} height={800}></Image>

                    <div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis nisl at sapien tempus, eu rutrum libero sagittis. Duis eget diam sed urna commodo tincidunt vel id neque. Mauris turpis augue, bibendum malesuada ante at, dignissim consequat est. Etiam ac purus feugiat, commodo nisi ut, tristique ex. Duis porttitor quis justo at accumsan. 
                        </p>
                        <p>Aliquam leo ante, aliquam a placerat congue, condimentum at turpis. Nam sem libero, tempor quis nunc sed, fringilla laoreet enim. Quisque eu condimentum massa. In sed quam vehicula, placerat dui at, sollicitudin ante. Sed ac nisl vitae augue pellentesque facilisis. Morbi nisi nulla, egestas id lacus eu, viverra hendrerit ipsum. Aliquam imperdiet tempor elit, non mattis dui blandit placerat. Sed odio risus, scelerisque aliquam vestibulum eu, mattis at lectus. </p>
                    </div>
                </div>
            </main>
       
        </Layout>
    )
}

export default Nosotros