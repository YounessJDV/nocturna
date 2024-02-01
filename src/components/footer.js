import LogoImg from '../img/navbar/nav_logo.png'

function Footer() {
    return (
        <footer class="bg-gradient-to-t from-[#45008B] to-[#63179C] poppins">
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

                <div class="mt-16 flex flex-col justify-center md:flex-row md:justify-between gap-12">
                    <div class="w-full md:w-1/3">
                                <img class="h-12 invert" src={LogoImg} alt="logo"></img>
                                <p class="w-10/12 mt-12 text-sm text-white">
                                Nocturna, votre partenaire de confiance pour
                                la transformation digitale et la croissance de
                                votre entreprise. En tant qu'agence spécialisée,
                                nous sommes dédiés à fournir des solutions
                                innovantes pour propulser votre présence en 
                                ligne et booster vos résultats.
                                </p>
                    </div>

                    <div class="w-full md:w-1/3 sm:text-left">
                        <p class="text-lg font-medium text-white py-2">NOS SERVICES</p>

                        <ul class="mt-12 space-y-4 text-sm">
                            <li><a class="text-white transition hover:text-white/75" href="/">Développement Web</a></li>

                            <li><a class="text-white transition hover:text-white/75" href="/">Création de site web vitrine</a></li>

                            <li><a class="text-white transition hover:text-white/75" href="/">Création d’identité visuellee</a></li>

                            <li><a class="text-white transition hover:text-white/75" href="/">Logo & Flyer</a></li>
                        </ul>
                    </div>

                    <div class="w-full md:w-1/3 sm:text-left">
                        <p class="text-lg font-medium text-white py-2">CONTACTEZ-NOUS</p>

                        <ul class="mt-12 space-y-4 text-sm">
                            <li><a class="text-white transition hover:text-white/75" href="/"> Mail : nocturna@contact.com </a></li>
                            <li><a class="text-white transition hover:text-white/75" href="/">Téléphone : 07 81 90 51 92</a></li>
                        </ul>
                    </div>

                </div>

            </div>

            <div class="container mt-16">
                <div class="mt-16 flex justify-between">
                    <div class="">
                        Zness logo
                    </div>

                    <p class="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
                    Copyright &copy; 2024. Tous droits réservés.
                    </p>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;
