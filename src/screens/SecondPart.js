import React, { useEffect } from 'react';
import { useHistory, useParams, useLocation } from "react-router-dom";
import images from '../assets/images';

const SecondPart = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container">
            <div className="row mb-4 mt-4">
                <div className="col-sm-6">
                    <img src={images.hello} alt="" className="img-fluid" />
                </div>
                <div className="col-sm-6">
                    <p> Hola de nuevo, espero se encuentren bien. Esta es la continuación de una pequeña historia, pero que ha sido la mejor que he vivido hasta el momento. Como he mencionado previamente esta habla acerca de cómo conocí a una chica y como es que la he ido conociendo mas poco a poco.</p>

                    <p>Posteriormente a lo que viví con ella en el año 2018, he tenido nuevas experiencias con ella durante todo el tiempo que ha pasado hasta el día de hoy, y he de decir que, a pesar de no tener oportunidad de verla frecuentemente, siento que aun así nos seguimos llevando bien. Con base en esta introducción continuare narrando algunas de las pequeñas, pero increíbles aventuras que he pasado con ella.</p>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-sm-7">En el año 2019 conseguí mi primer trabajo, motivo por el cual me era complicado el poder verla ya que laboraba de lunes a viernes, debido a esto solo podía verla los fines de semana, era un infortunio para mí el no poder verla más que en sus fotos y tener comunicación a través de internet para no perder la amistad que teníamos. Para fortuna mía, se presentó una ocasión en la que podríamos vernos, para ellos nos organizamos en salir al cine. Cuando el día llego, me arregle, me puse bonito, básicamente me bañe para estar presentable para ella.  Aunque he de aclarar el cambio no fue mucho ya que desde que empieza el día, soy bello de hermoso jaja.
                </div>
                <div className="col-sm-5">
                    <img src={images.handsome} alt="" className="img-fluid" />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-sm-4">
                    <img src={images.teddy} alt="" className="img-fluid" />
                </div>
                <div className="col-sm-8">
                    Bueno retomando la historia posteriormente a esto me puse en camino a CUCEI (Centro Universitario de Ciencias Exactas e Ingeniería), recuerdo que fue un sábado ya que ella tenía clases ese día, pero en teoría salía temprano, sino mal recuerdo el profe nunca daba la clase completa a excepción de ese día (¬ ¬) jaja azares del destino xD, pero bueno espere a que saliera de su clase para ir al cine, al ver la cartelera vimos que faltaba tiempo para la misma así que nos quedamos en unas bancas que estaban cerca de la biblioteca ahí estuvimos conversando durante un rato y en ese mismo lapso de tiempo le di un presente que había comprado para ella, era un pequeño oso de peluche, a mi parecer estaba bonito, tarde demasiado en elegirlo y no el modelo, sino el oso ya que quería que fuera perfecto, estuve analizando, generando gráficas, haciendo cuadros comparativos y muchas actividades más para así elegir al mejor. Volviendo al tema, paso el rato y nos dirigimos al cine ese día la película que eligió fue Jefa por accidente. Al finalizar la película nos dirigimos a tomar el camión el cual tenía como destino la central de autobuses llegando ahí ella compro su boleto y fue el momento más triste del día ya que fue hora de despedirnos.
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-sm-8">
                    Posterior a ese día volvimos a la rutina, ella a la escuela, yo al trabajo y si mal no recuerdo, creo que también empezó con sus prácticas profesionales, lo cual volvió a ser otro problema ya que estas consumían parte de su tiempo por lo que el poder vernos se volvió un poco más complicado, la verdad fue una tristeza haber culminado mi servicio social y no porque la pase genial cotorreando con todos, sino porque el verla todos los días, el imaginarme verla sonreír al llegar a la oficina era mi interruptor para tener energía todo el día.
                </div>
                <div className="col-sm-4">
                    <img src={images.smile} alt="" className="img-fluid" />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-sm-4">
                    <img src={images.child} alt="" className="img-fluid" />
                </div>
                <div className="col-sm-8">
                    Y bueno dejando de lado las cosas tristes, pues que creen… así es, hubo otra, otra salida con ella pueden creerlo… a su pinshe mare estaba extasiado, estaba súper emocionado, estaba dando brinquitos de emoción :D, pero no le digan a ella que luego va a pensar que soy muy infantil… Aunque bueno creo que ya lo sabe jaja, pero bueno retomando la noticia, así es volví a tener una nueva oportunidad de verla, de igual manera esta vez fuimos al cine en esta ocasión fuimos a ver la película mentada de padre, muy buena película he de decir.
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-sm-7">
                    <p>
                        Pero como les decía, ese día recuerdo que quedamos de vernos afuera de Forever 21 creo que es una tienda de ropa, recuerdo que llegue a la plaza donde está ubicada esa tienda, mas sin embargo no sabía con exactitud en que parte estaba ubicada dicha tienda, por lo que decidí preguntarle a una demostradora en un módulo y me dijo que estaba subiendo las escaleras, le agradecí y me dirigí hacia allí, pero no la vi, me pareció extraño por lo que le marque y al parecer no acordamos muy bien el lugar ya que ella se refería al letrero que está afuera de la plaza que dice Forever 21 mientras que yo pensé que hablábamos de vernos afuera de esa tienda, no en la entrada de la plaza debajo del letrero que dice el nombre de la tienda jaja.
                        </p>
                    <p>
                        Y bueno posterior a ponernos de acuerdo me dirigí a buscarla y a medio camino nos encontramos, en cuanto la vi lo primero que hicimos fue abrazarnos, fue mágico. También recuerdo que ese día le regale un peluche algo pequeño, algo no muy llamativo, algo que nadie se diera cuenta a simple vista de lo que llevaba xD, bueno luego de vernos y saludarnos nos dirigimos a ver la película y al finalizar la misma llego el momento triste del día, acompañarla a tomar su camión para finalizar una nueva y mágica historia que narrar.
                        </p>
                </div>
                <div className="col-sm-5">
                    <img src={images.sheep} alt="" className="img-fluid" />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-sm-4">
                    <img src={images.virus} alt="" className="img-fluid" />
                </div>
                <div className="col-sm-8">
                    Hasta aquí todo era miel sobre hojuelas, un año normal, tranquilón todo marchaba bien hasta que llego una nueva enfermedad… el maldito COVID-19, si de por si era difícil el poder verla esta madre llego para arruinarlo todo, ya que se inauguraron nuevas reglas de vestimenta, como usar el cubre bocas y/o careta, además de cambiar la forma de saludar ahora todo se hacía con sana distancia, la verdad es una cosa triste ya que siendo sincero es algo que si vino a pegar de manera estrepitosa para todos. La forma de vivir para todos fue un cambio drástico, la forma de relacionarnos, la forma de convivir con los demás, pero bueno esperemos pronto termine este martirio y que la forma de vivir vuelva a ser como era antes de que la enfermedad llegara.
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-sm-8">
                    Continuando con lo que nos truje les voy a contar una nueva anécdota, esta fue la más reciente y que nos tocó vivir con las nuevas normas de convivencia, portar el cubre bocas en todo momento, siendo sincero fue algo triste porque como saben algo que me encanta de ella además de su inteligencia, su forma de ser, de pensar, de actuar, lo que más me encanta de ella es su belleza, el hermoso rostro que tiene esculpido por los mismos dioses del olimpo, sus ojos tan bellos, tan brillantes como la luna, sus labios tan lindos, tan bien definidos, tan… WOW no tengo forma de poder completar el placer que siento al ver su rostro, pero como mencione previamente el uso del cubre bocas era obligatorio, debíamos portarlo en todo momento, por lo que me fue imposible contemplarla como me hubiera gustado hacerlo. Pero bueno lo importante es que logre verla, logre convivir un nuevo día con ella.
                </div>
                <div className="col-sm-4">
                    <img src={images.img4} alt="" className="img-fluid img-thumbnail" />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-sm-5">
                    <img src={images.flowers} alt="" className="img-fluid" />
                </div>
                <div className="col-sm-7">
                    <p>
                        En esta ocasión quedamos de vernos en el centro, el motivo fue comprar o buscar el celular que su hermano quería, uno o dos días antes me dijo que si quería acompañarla, a lo que yo acepte sin pensarlo dos veces, ósea verla por su pollo que, si voy jaja, y bueno quedamos para cierto día, me dijo que nos viéramos afuera de la plaza de la tecnología y ahí llegue, ahora si al punto al que era jeje y pues paso un rato debido a que ese día no recuerdo si hubo escases de camiones por lo mismo del covid, total al rato llego ella y le di un pequeño ramo de flores que le había comprado, por cierto me di cuenta que cuando se trata de comprar algo soy muy quisquilloso trato de cuidar cada pequeño detalle del detalle jaja, posterior a entregárselo nos dirigimos a nuestra misión…
                    </p>
                    <p>
                        Buscar el cel. para su hermano, por infortunio al parecer no había en las tiendas que fuimos por lo tanto decidió que mejor lo encargaría en línea siendo así que nos retiramos a unas bancas que estaban por el centro de la ciudad y ahí pasamos el rato platicando de sus amigos los policías, osease que tiene palancas jaja y que ella es bien manchada con su carnal si hace mucho ruido ella hecha sus compas a diestra y siniestra. Así que extremen sus precauciones que a pesar de parecer toda una angelita en ocasiones se le sale los traviesirijilla jaja, pero indiferentemente de ello, reconozco que es todo un amor de persona ya que cuida o vela mucho por las personas que son importantes para ella, eso es otra cosa que me agrada mucho de ella y que con el paso del tiempo he ido descubriendo poco a poco.
                        </p>
                </div>
            </div>

            <div className="row p-0 m-0 mb-4">
                <div className="col-md-12 col-lg-12 divIntro">
                    Y bueno hasta aquí me reporte Joaquín volvemos al estudio, ha! se crean jaja neee ya poniéndonos serios y para finalizar con esta segunda parte debo de decir que para mi, cada momento que he pasado con ella han sido de lo más bonito, no tengo una forma de expresar completamente la sensación que siento al pasar el rato con ella, pero de lo que si estoy seguro es que cada uno de estos recuerdos siempre los llevare guardados en el corazón ya que son momentos que me han hecho muy feliz. Y realmente le agradezco de todo corazón que me siga soportando, ya que a pesar de que ha habido momentos en los que la he hecho enojar ella sigue presente.
                </div>
            </div>

            <div className="row mb-4 p-0 m-0">
                <div className="col-sm-2 col-md-2 col-lg-2 my-auto ml-auto" style={{ padding: 0 }} />
                <div className="col-sm-3 col-md-3 col-lg-3 my-auto ml-auto" style={{ padding: 0 }}>
                    <img src={images.img6} alt="" className="img-fluid img-thumbnail" />
                </div>

                <div className="col-sm-3 col-md-3 col-lg-3 my-auto ml-auto" style={{ padding: 0 }}>
                    <img src={images.img7} alt="" className="img-fluid img-thumbnail" />
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2 my-auto ml-auto" style={{ padding: 0 }} />
            </div>

            <div className="row m-0 p-0 miTitle">
                {/* <div className="col-sm-2 col-md-2 col-lg-2" /> */}
                <div className="col-sm-12 mx-auto">
                    <h1>Gracias por este 2020!</h1>
                </div>
                {/* <div className="col-sm-2 col-md-2 col-lg-2" /> */}
            </div>

            <div className="row mb-4 mt-4 p-0 m-0" >
                <div className="col-sm-3 col-md-3 col-lg-3 my-auto ml-auto" style={{ padding: 0 }}>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 my-auto" style={{ position: 'relative', textAlign: 'center' }}>
                    <img src={images.marco} className="img-fluid" alt="" />
                    <div className="divNext" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Continuara...</div>
                    {/* <img src={images.arrow} className="img-fluid imgMove" alt="" /> */}
                </div>

                <div className="col-sm-3 col-md-3 col-lg-3 my-auto ml-auto mr-auto" style={{ padding: 0 }}>
                </div>
            </div>

        </div>
    )
}

export default SecondPart;