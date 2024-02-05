
import imgSection_one from '../img/section_one/img_section.png'

function Section_one() {
  return (
    <>
        <div class="container my-16 xl:min-h-[calc(100vh-20vh)] flex flex-col justify-center mx-auto items-center xl:w-3/4 mx-auto bg-white dark:bg-gray-800 poppins">
            <div class="">
                <div class="xl:grid xl:grid-flow-row-dense xl:grid-cols-2 lg:gap-8 lg:items-center">
                    <div class="text-left md:text-left ml-auto1 lg:max-w-2xl">
                        <p class="text-base font-semibold leading-6 text-indigo-500 uppercase">
                            Qualité de travail
                        </p>
                        <h4 class="text-3xl mt-2 text-2xl font-extrabold text-gray-900 dark:text-white sm:leading-tight sm:text-5xl">
                            Design & Developpement par des <span class="bg-gradient-to-r from-[#45008B] to-[#9953F3] inline-block text-transparent bg-clip-text">Professionnels</span>.
                        </h4>
                        <p class="text-md md:text-lg my-6 leading-7 text-gray-500 dark:text-gray-300">
                            Une équipe de professionnels dédiés au design et au développement de sites web d'exception. Chaque ligne de code et chaque élément visuel sont méticuleusement créés pour offrir des solutions sur mesure, alliant esthétique et fonctionnalité. Confiez-nous votre vision, et laissez-nous transformer vos idées en une expérience utilisateur inoubliable.
                        </p>

                    </div>

                    <div lass="lg:max-w-2xl">
                        <img src={imgSection_one} alt='Illustration section one' class="border-2 rounded-lg shadow-lg"></img>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Section_one;