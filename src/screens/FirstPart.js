import React, { useEffect } from 'react';
import { useHistory, useParams, useLocation } from "react-router-dom";
import images from '../assets/images';
// import logo from '../assets/images/mail.png';

const About = (props) => {

    const history = useHistory();
    let loc = useLocation();
    // useEffect(() => {
    //     if (!loc || !loc.state || !loc.state.isContinue) {
    //         history.replace('/')
    //     }
    // })

    const goTo = () => {
        history.push('/secondPart', { isContinue: true })
    }

    return (
        <div className="container">
            <div className="row mb-4 mt-4">
                <div className="col-sm-8">
                    Todo empezó como un día normal por la mañana en el Servicio Social al llegar lo primero que vi fue a una chica de la cual solo sabía su nombre, en si era una completa desconocida para mí en ese momento, al querer iniciar mis actividades requería de cierto conocimiento acerca del status del cuartito de la perdición, gracias a esto aproveche la gran oportunidad de hablar con ella, no sabía cómo llegar, mis nervios estaban al 1000 pero me atreví a hacerlo, en ese momento rompí el hielo con un “Hola Gaby” posteriormente le expuse mi situación le pregunte por el joven Arturo y otros datos más que yo requería, en eso ella le marco al joven, al terminar la llamada me dijo que si iba a ir, pero que llegaba a cierta hora por lo tanto empecé a ayudarla con sus actividades designadas en ese día, entre ellas, el envío de correos y fue así como empezamos a entablar una conversación donde poco a poco la fui conociendo.
            </div>
                <div className="col-sm-4">
                    <img src={images.mail} alt="" className="img-fluid" />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-sm-4 col-md-3 col-lg-3">
                    <img src={images.wats} alt="" className="img-fluid" />
                </div>
                <div className="col-sm-8 col-md-9 col-lg-6">
                    Ese mismo día conseguí su Facebook de manera discreta y sutil, le pregunté “Oye tienes Facebook” a lo cual me respondió que sí y me lo paso. Yo estaba alegre, en ese momento dentro de mi dije “genial podre conocerla un poco más cada día fuera de aquí” posteriormente cuando acepto mi solicitud y como forma de agradecimiento quería saludarla, pero ahora por Facebook le dije “WhatsApp” (literal) para mí era un saludo, pero la forma en que lo escribí no era la correcta por tal motivo, pero!! sin querer queriendo me paso su WhatsApp y fue así de Wow!! No sabía que esta estrategia fuera a funcionar, pero si, el día continuo de misma forma hasta que terminó o al menos hasta que llegó la hora de salida del servicio.
            </div>
                <div className="col-lg-3 hideImg">
                    <img src={images.face} alt="" className="img-fluid" />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-lg-3 hideImg">
                    <img src={images.baby} alt="" className="img-fluid" />
                </div>
                <div className="col-sm-8 col-md-9 col-lg-6">
                    Yo quería seguir hablando con ella y así fue, hablamos por Messenger, por WhatsApp y en algún momento hasta por Instagram, gracias a ello la fui conociendo poco a poco, siendo así que llegó el punto en que me dijo que tenía un bebé. Yo estaba en modo de negación, no le creía, mi mente decía neee no le creas las matemáticas no mienten, pero algo mencionó sobre unas fotos en Facebook y al investigar encontré una foto donde realmente parecía la mamá de una niña, mi mente entro en un modo de crasheo donde estaba entre sí era verdad o mentira?? al caer la noche, por necesidad nos despedimos.
                </div>
                <div className="col-sm-4 col-md-3 col-lg-3">
                    <img src={images.img2} alt="" className="img-fluid img-thumbnail" />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-sm-4">
                    <img src={images.heartbeat} alt="" className="img-fluid" />
                </div>
                <div className="col-sm-8">
                    Tiempo después la volví a ver en el Servicio Social, todos estábamos conversando y riendo como locos, pero llego el momento indicado en que pregunte... ”Enserio tienes una niña??“ Su respuesta fue si, la respuesta de sus amigos fue si, y por flojera de no preguntar a picazo, en mi mente dije “créelo tiene una niña” fue así como de Rayos!! al parecer un sentimiento por ella estaba naciendo en mí y a pesar de ese Rayos dije “no hay problema me gusta y quiero conocerla”. Posteriormente a ello, todos habíamos quedado en salir a algún lugar a cotorrear y así crear o fortalecer la amistad que teníamos, el día quedo acordado para el viernes y el destino fue las hamburguesas. Finalmente, la hora de labores volvió a llegar a su fin y nos despedimos.
                </div>
            </div>

            <div className="row m-0 p-0 mb-4">
                <div className="col-sm-8 col-md-10 col-lg-10 my-auto">
                    El viernes llegó, yo fui al servicio como normalmente lo hacía y empecé con las actividades del día, al llegar me percaté de que ella no estaba y su amigo llego después, le pregunte por ella y al parecer tenía pendientes que hacer, sin más, le mande un mensaje para saber si íbamos a ir pero para ello yo ya sabía que los demás al final no iban a poder ir y se lo comente, ella decidida quería ir y al final fuimos, mis nervios estaban al rojo vivo era la primera vez que salía con una chica de a solas, no sabía si algo iba a salir mal o no, tenía miedo pero me arme de valor y fui a por ella, cuando finalmente estábamos juntos fuimos a las hamburguesas, hablamos durante buen rato y en algún punto de la conversación se me confesó, me dijo "jajaja no tengo hija" en ese momento fue como el crash del crash del crasheo estaba que se moría de la risa, en parte se reía conmigo y en parte de mí o al menos de la expresión que tenía en el rostro (¬ ¬), pero fue un excelente día ver tan inigualable sonrisa fue el mejor pago que me pudo otorgar, me encanto! a partir de ello me di cuenta que realmente me gustaba y que el sentimiento que sentía por ella era puro... Lastimosamente ese día término u.u
                </div>
                <div className="col-sm-4 col-md-2 col-lg-2 my-auto">
                    <img src={images.laughing} alt="" className="img-fluid" />
                </div>
            </div>

            <div className="row m-0 p-0 mb-4 ">
                <div className="col-sm-6 col-md-3 col-lg-3 my-auto">
                    <img src={images.img3} alt="" className="img-fluid img-thumbnail" />
                </div>
                <div className="col-sm-6 col-md-9 my-auto" style={{ padding: 0 }}>
                    <div className="row">
                        <div className="col-md-12 col-lg-12 pt-3">
                            <p>Las conversaciones por redes sociales continuaban siendo interminables, quizá llego al punto en que se enfadó de tanto que hablaba o en este caso escribía, pero a pesar de ello me seguía respondiendo, de un momento a otro me anime a pedirle una foto de ella, quería tenerla en mi celular y poder verla cada vez que yo quisiera, pensé que se negaría y así fue, me costó mucho rogar hasta que finalmente la convencí, eso o de plano la arte y dijo ten!! Ya cállate jajaja</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <p>Los días seguían pasando, las conversaciones fluyendo, me sentía en las nubes era la primera vez que hablaba con una chica tan hermosa y que a pesar de todo ella seguía mis conversaciones, mis cotorreos, mis chistes ella era única, estaba decidido a tener algo más que solo una amistad con ella de tal forma que en algún momento elabore un regalo que al principio dije “esta fácil”, pero a partir de esa experiencia aprendí que la cartulina y la papiroflexia no se llevan muy bien o de plano necesitas basta paciencia, eso sí, el resultado esperado fue el deseado porque al parecer si le gusto :D y eso me alegro mucho. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row m-0 p-0 mb-4">
                <div className="col-sm-3 col-md-2 col-lg-2 my-auto" >
                    <img id="sadImage" src={images.crying} alt="" className="img-fluid" />
                </div>
                <div className="col-sm-6 col-md-8 col-lg-8 my-auto">
                    Desafortunadamente, ya no iba a poder ir al Servicio tan continuamente debido a que entre a un curso, desde ahí el poder verla se fue complicando un poco, mi única manera de poder estar en contacto con ella era por las redes sociales mediante su chat, en ocasiones cuando tenía oportunidad de ir, iba con la esperanza de poder verla, pero quería que fuese una sorpresa, por ello, nunca le avise cuando iba, quizá, si lo hubiese hecho otra cosa habría sido.
                    </div>
                <div className="col-sm-3 col-md-2 col-lg-2 my-auto" >
                    <img src={images.emoThink} alt="" className="img-fluid" />
                </div>
            </div>

            <div className="row m-0 p-0 mb-4">
                <div className="col-sm-6 col-md-8 col-lg-8  my-auto">
                    <p>A finales del año tenía que acudir al servicio social a solucionar ciertos problemas con el sistema que se había desarrollado, cuando llegue ella no estaba, mis ánimos no eran muy animados que digamos, pero en algún punto del día logre escuchar su hermosa voz, estaba hiper recontra mega super feliz!!, hacía mucho que no la veía, realmente fue una fortuna para mí el verla de nuevo, posteriormente arreglamos los problemas que teníamos con el sistema y al final de la jornada nos retiramos.</p>

                    <p>Yo iba hacia mi casa y ellos hacia sus clases, al final los acompañe durante cierto tramo, pero lo mejor de ese día fue gracias a la sorpresa que me lleve, recibí un abrazo si!!!, recibí un abrazo de su parte, para mí fue excelente, sentía que podía tocar el cielo, escuchaba a los ángeles cantar, era increíble, estaba de "tan alegre lo que le sigue", estaba contento, estaba feliz, estaba emocionado, llevaba una sonrisa tan marcada en el rostro que el guasón se quedaba corto.</p>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4 my-auto" style={{ padding: '5px' }}>
                    <img id="sadImage" src={images.hug} alt="" className="img-fluid" />
                </div>
            </div>

            <div className="row p-0 m-0 mb-4">
                <div className="col-md-12 col-lg-12 divIntro">
                    Hoy en día, ella aún me sigue gustando, el solo ver sus ojos tan bellos llenos de serenidad y seguridad hacen que mis dudas sean despejadas, el ver su sonrisa tan linda, tan bella, tan sincera,  hace que mi felicidad incremente sin importar la situación en la que me encuentre, el solo ver su silueta hace que sienta miles de emociones dentro de mí y tengo que aceptarlo ella es lo mejor que me ha pasado este 2018.
                </div>
            </div>

            <div className="row mb-4 p-0 m-0">
                <div className="col-sm-3 col-md-3 col-lg-3 my-auto ml-auto" style={{ padding: 0 }}>
                    <img src={images.img4} alt="" className="img-fluid img-thumbnail" />
                </div>

                <div className="col-sm-3 col-md-3 col-lg-3 my-auto ml-auto" style={{ padding: 0 }}>
                    <img src={images.img1} alt="" className="img-fluid img-thumbnail" />
                </div>

                <div className="col-sm-3 col-md-3 col-lg-3 my-auto ml-auto mr-auto" style={{ padding: 0 }}>
                    <img src={images.img5} alt="" className="img-fluid img-thumbnail" />
                </div>
            </div>

            <div className="row m-0 p-0 miTitle">
                {/* <div className="col-sm-2 col-md-2 col-lg-2" /> */}
                <div className="col-sm-12 mx-auto">
                    <h1>Gracias por este 2018!</h1>
                </div>
                {/* <div className="col-sm-2 col-md-2 col-lg-2" /> */}
            </div>

            <div className="row mb-4 mt-4 p-0 m-0" onClick={goTo}>
                <div className="col-sm-3 col-md-3 col-lg-3 my-auto ml-auto" style={{ padding: 0 }}>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 my-auto" style={{ position: 'relative', textAlign: 'center' }}>
                    <img src={images.marco} className="img-fluid" alt="" />
                    <div className="divNext" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Segunda Parte</div>
                    <img src={images.arrow} className="img-fluid imgMove" alt="" />
                </div>

                <div className="col-sm-3 col-md-3 col-lg-3 my-auto ml-auto mr-auto" style={{ padding: 0 }}>
                </div>
            </div>

        </div>
    )
}

export default About;