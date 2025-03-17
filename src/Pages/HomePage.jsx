import React from 'react'

const HomePage = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/a.png" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block"
                             style={{color: 'rgb(255, 255, 255)', position: 'absolute', top: '230px', left: '50%', transform: 'translateX(-50%)'}}>
                            <h5 style={{fontWeight: 'bold', textShadow: '10px 10px 12px rgba(0, 0, 0, 0.979)', fontSize: '40px'}}>Holistyczne
                                Usługi Zdrowia Małgorzata Salamucha</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/a1.png" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block"
                             style={{color: 'rgb(255, 255, 255)', position: 'absolute', top: '230px', left: '50%', transform: 'translateX(-50%)'}}>
                            <h5 style={{fontWeight: 'bold', textShadow: '10px 10px 12px rgb(5, 2, 38)', fontSize: '40px'}}>Holistyczne
                                Usługi Zdrowia Małgorzata Salamucha</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/carusel11.png" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block"
                             style={{color: 'rgb(255, 255, 255)', position: 'absolute', top: '230px', left: '50%', transform: 'translateX(-50%)'}}>
                            <h5 style={{fontWeight: 'bold', textShadow: '10px 10px 12px rgb(5, 2, 38)', fontSize: '40px'}}>Holistyczne
                                Usługi Zdrowia Małgorzata Salamucha</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/caruselaa.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block"
                             style={{color: 'rgb(255, 255, 255)', position: 'absolute', top: '230px', left: '50%', transform: 'translateX(-50%)'}}>
                            <h5 style={{fontWeight: 'bold', textShadow: '10px 10px 12px rgb(5, 2, 38)', fontSize: '40px'}}>Holistyczne
                                Usługi Zdrowia Małgorzata Salamucha</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/caruselaaa.png" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block"
                             style={{color: 'rgb(255, 255, 255)', position: 'absolute', top: '230px', left: '50%', transform: 'translateX(-50%)'}}>
                            <h5 style={{fontWeight: 'bold', textShadow: '10px 10px 12px rgb(5, 2, 38)', fontSize: '40px'}}>Holistyczne
                                Usługi Zdrowia Małgorzata Salamucha</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/carusellaa.png" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block"
                             style={{color: 'rgb(255, 255, 255)', position: 'absolute', top: '230px', left: '50%', transform: 'translateX(-50%)'}}>
                           
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        <section className="ebook-preview">
            <div className="container">
                <h2>Pobierz darmowego eBooka!</h2>
                <p>Odkryj sekrety zdrowia i popraw swoje samopoczucie dzięki sprawdzonym metodom.</p>
                {/* Przycisk pobrania */}
                {/*<a href="/Menopauza_Ebook.pdf" download className="download-btn">📥 Pobierz eBook/ Menopauza</a><br/>*/}
                <a href="/E-book.pdf" download className="download-btn">📥 Pobierz eBook/ Wypalenie zawodowe</a><br/>
                {/*<a href="/Odporność_Ebook.pdf" download className="download-btn">📥 Pobierz eBook/ Odporność u dzieci</a>*/}
            </div>
        </section>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <section class="container">
    <div class="row align-items-center">
        
        <div class="col-md-7 text-center text-md-start">
            <h2 class="title">Firma Godna Zaufania</h2>
            <p class="description">
                Z ogromną radością i dumą pragnę podzielić się wspaniałą wiadomością – moja firma 
                <strong> Holistyczne Usługi Zdrowia</strong> została uhonorowana prestiżowym wyróżnieniem 
                <strong> "Firma Godna Zaufania"</strong>.
            </p>
            <p class="description">
                Nie byłoby tego wyróżnienia, gdyby nie moi klienci. Dla mnie to nie tylko zaszczyt, 
                ale również potwierdzenie, że jeśli robimy coś z pasją i miłością, inni nas doceniają.
            </p>
            <p class="description">
                Dziękuję za zaufanie, za wszystkie opinie. Doceniam każdy głos, który motywuje i 
                napędza do rozwoju, szukania jeszcze lepszych rozwiązań. 
                Zapraszam do korzystania z szerokiej oferty gabinetu.
            </p>
        </div>

        
        <div class="col-md-5 text-center">
            <img src="/images/FGZ1.jpg" class="img-fluid certificate-img" alt="Certyfikat Firma Godna Zaufania"/>
        </div>
    </div>
</section>

            <section className="orly-medycyny">
    <h2>Orły Medycyny</h2>
    <p className="orly-description">
        Holistyczne Usługi Zdrowia zostały uhonorowane prestiżową nagrodą <strong>"Orły Medycyny 2024"</strong>.
        To wyróżnienie potwierdza jakość świadczonych usług i zaufanie klientów.<br/><br/>
        Orły to wyjątkowa nagroda, którą mogą pochwalić się tylko najlepsze firmy, które cechują się profesjonalizmem
        i zapewniają najwyższą jakość usług. Dołączenie do programu to doskonały sposób na zakomunikowanie innym,
        że firma jest na najwyższym poziomie. Tutaj najważniejsze są głosy klientów, którzy rekomendują 
        uczestników w Internecie. To oni są siłą napędową tego programu i jedynym w swoim rodzaju jury,
        który ocenia konkretną firmę.
    </p>
    <div className="orly-container">
        <div className="orly-item">
            <img src="/images/orly1.jpg" alt="Orły Medycyny 1" />
        </div>
        <div className="orly-item">
            <img src="/images/orly2.jpg" alt="Orły Medycyny 2" />
        </div>
    </div>
</section>
<section class="consultation-section">
    <div class="consultation-box">

        <p>Napisz mi, co chcesz osiągnąć – porozmawiamy o tym, co mogę Ci zaproponować</p>

        <div class="profile-section">
            <img src="/images/profil.jpg" alt="Naturopata Małgorzata Salamucha" class="profile-img"/>
            <h5>Naturopata Małgorzata Salamucha</h5>
        </div>

        <div class="contact-buttons">
    
    <a href="https://m.me/holistyczneuslugizdrowia" class="btn messenger">Napisz przez Messenger</a>

    
    <a href="mailto:praktycznasalcia@wp.pl?subject=Zapytanie%20o%20konsultację&body=Dzień%20dobry,%0AChciałbym%20umówić%20się%20na%20konsultację."
       class="btn email">Napisz e-mail</a>
</div>


        <p class="note">Na wiadomości odpisuję codziennie – a więc pisz śmiało</p>
    </div>
</section>
            <br/>
            <section id="about-5" className="about-section pt-100 pb-100">
    <div className="container">
        <div className="row d-flex align-items-center">
            {/* TEKST */}
            <div className="col-lg-6">
                <div className="txt-block wow fadeInUp about-me-text" data-wow-delay="0.4s">
                    <span className="section-id blue-color">O mnie</span>
                    <h3 className="h3-md steelblue-color">O mnie</h3>
                    
                    <p>
                        <strong>Małgorzata Salamucha</strong> – jestem naturopatą, holistycznym doradcą żywieniowym,
                        doradcą suplementacji, doradcą konopnym w ujęciu CBD oraz doradcą hydroterapii w obszarze
                        "żywej wody". Kod zawodu uzyskałam w Polskim Centrum Szkoleniowym w Rybniku.
                    </p>
                    <p>
                        Specjalizację doradcy konopnego w ujęciu CBD ukończyłam w Instytucie Rozwoju i Nauki WST.S.A.
                        Ustawicznie poszerzam swoją wiedzę poprzez kursy i szkolenia, m.in. organizowane przez Mauricz Training Center.
                    </p>
                    <p>
                        Moja ścieżka zawodowa rozpoczęła się od studiowania analityki medycznej. Poszukując rozwiązań zdrowotnych dla
                        siebie i swojej rodziny, doceniłam medycynę niekonwencjonalną, którą zgłębiam do dziś.
                    </p>
                    <p className="motto">
                        <strong>„Dobrem należy się dzielić”</strong> – kiedyś otrzymałam pomoc, której potrzebowałam. Teraz ja pomagam innym.
                    </p>

                    {/* Kompetencje */}
                    <h4 className="competencies-title">Moje kompetencje:</h4>
                    <ul className="competencies-list">
                        <li><i className="fas fa-check-circle"></i> Zawodowy Naturopata z informodiagnostyką i informoterapią</li>
                        <li><i className="fas fa-check-circle"></i> Holistyczny doradca żywieniowy i dietetyczny</li>
                        <li><i className="fas fa-check-circle"></i> Doradca konopny (CBD) oraz hydroterapii – "żywa woda"</li>
                        <li><i className="fas fa-check-circle"></i> Prowadzę warsztaty zdrowia i urody</li>
                    </ul>
                </div>
            </div>

            {/* ZDJĘCIE */}
            <div className="col-lg-6 text-center">
                <div className="about-img wow fadeInUp" data-wow-delay="0.6s">
                    <img className="img-fluid about-image" src="/images/o mnie.jpg" alt="O mnie"/>
                </div>
            </div>
        </div>
    </div>
</section>


            {/*Sekcja Galerii*/}
            <section id="gallery" className="pt-100 pb-100 gallery-section division" style={{backgroundColor: '#f5f5f5'}}>
                <div className="container">
                    {/*Nagłówek Sekcji*/}
                    <div className="section-header text-center">
                        <h2 className="h2-md">Certyfikaty</h2>
                        <br/>
                    </div>

                    {/*Zdjęcia*/}
                    <div className="row gallery-row position-relative" style={{overflowX: 'hidden', whiteSpace: 'nowrap'}}>
                        <div className="col-md-1 d-flex align-items-center justify-content-center"></div>

                        {/*Zdjęcia*/}
                        <div className="col-md-10">
                            <div className="row justify-content-center">
                                {/*Zdjęcie 1*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c1.jpg" data-lightbox="gallery" data-title="Zdjęcie 1">
                                            <img className="img-fluid gallery-image" src="/images/c1.jpg"
                                                 alt="Zdjęcie 1"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 2*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c2.jpg" data-lightbox="gallery" data-title="Zdjęcie 2">
                                            <img className="img-fluid gallery-image" src="/images/c2.jpg"
                                                 alt="Zdjęcie 2"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 3*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c3.jpg" data-lightbox="gallery" data-title="Zdjęcie 3">
                                            <img className="img-fluid gallery-image" src="/images/c3.jpg"
                                                 alt="Zdjęcie 3"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 4*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c4.jpg" data-lightbox="gallery" data-title="Zdjęcie 4">
                                            <img className="img-fluid gallery-image" src="/images/c4.jpg"
                                                 alt="Zdjęcie 4"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 5*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c5.jpg" data-lightbox="gallery" data-title="Zdjęcie 5">
                                            <img className="img-fluid gallery-image" src="/images/c5.jpg"
                                                 alt="Zdjęcie 5"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 6*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c6.jpg" data-lightbox="gallery" data-title="Zdjęcie 6">
                                            <img className="img-fluid gallery-image" src="/images/c6.jpg"
                                                 alt="Zdjęcie 6"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 7*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c7.jpg" data-lightbox="gallery" data-title="Zdjęcie 7">
                                            <img className="img-fluid gallery-image" src="/images/c7.jpg"
                                                 alt="Zdjęcie 7"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 8*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c8.jpg" data-lightbox="gallery" data-title="Zdjęcie 8">
                                            <img className="img-fluid gallery-image" src="/images/c8.jpg"
                                                 alt="Zdjęcie 8"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 9*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c9.jpg" data-lightbox="gallery" data-title="Zdjęcie 9">
                                            <img className="img-fluid gallery-image" src="/images/c9.jpg"
                                                 alt="Zdjęcie 9"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 10*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c10.jpg" data-lightbox="gallery" data-title="Zdjęcie 10">
                                            <img className="img-fluid gallery-image" src="/images/c10.jpg"
                                                 alt="Zdjęcie 10"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 11*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c11.jpg" data-lightbox="gallery" data-title="Zdjęcie 11">
                                            <img className="img-fluid gallery-image" src="/images/c11.jpg"
                                                 alt="Zdjęcie 11"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 12*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c12.jpg" data-lightbox="gallery" data-title="Zdjęcie 12">
                                            <img className="img-fluid gallery-image" src="/images/c12.jpg"
                                                 alt="Zdjęcie 12"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 13*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c13.jpg" data-lightbox="gallery" data-title="Zdjęcie 13">
                                            <img className="img-fluid gallery-image" src="/images/c13.jpg"
                                                 alt="Zdjęcie 13"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 14*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c14.jpg" data-lightbox="gallery" data-title="Zdjęcie 14">
                                            <img className="img-fluid gallery-image" src="/images/c14.jpg"
                                                 alt="Zdjęcie 14"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 15*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c15.jpg" data-lightbox="gallery" data-title="Zdjęcie 15">
                                            <img className="img-fluid gallery-image" src="/images/c15.jpg"
                                                 alt="Zdjęcie 15"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 16*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c16.jpg" data-lightbox="gallery" data-title="Zdjęcie 16">
                                            <img className="img-fluid gallery-image" src="/images/c16.jpg"
                                                 alt="Zdjęcie 16"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 17*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c17.jpg" data-lightbox="gallery" data-title="Zdjęcie 17">
                                            <img className="img-fluid gallery-image" src="/images/c17.jpg"
                                                 alt="Zdjęcie 17"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 18*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c18.jpg" data-lightbox="gallery" data-title="Zdjęcie 18">
                                            <img className="img-fluid gallery-image" src="/images/c18.jpg"
                                                 alt="Zdjęcie 18"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 19*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c19.jpg" data-lightbox="gallery" data-title="Zdjęcie 19">
                                            <img className="img-fluid gallery-image" src="/images/c19.jpg"
                                                 alt="Zdjęcie 19"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 20*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c20.jpg" data-lightbox="gallery" data-title="Zdjęcie 20">
                                            <img className="img-fluid gallery-image" src="/images/c20.jpg"
                                                 alt="Zdjęcie 20"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 21*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c21.jpg" data-lightbox="gallery" data-title="Zdjęcie 21">
                                            <img className="img-fluid gallery-image" src="/images/c21.jpg"
                                                 alt="Zdjęcie 21"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 22*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c22.jpg" data-lightbox="gallery" data-title="Zdjęcie 22">
                                            <img className="img-fluid gallery-image" src="/images/c22.jpg"
                                                 alt="Zdjęcie 22"/>
                                        </a>
                                    </div>
                                </div>
                                {/*Zdjęcie 23*/}
                                <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c23.jpg" data-lightbox="gallery" data-title="Zdjęcie 23">
                                            <img className="img-fluid gallery-image" src="/images/c23.jpg"
                                                 alt="Zdjęcie 23"/>
                                        </a>
                                    </div>
                                </div>
                                 {/*Zdjęcie 24*/}
                                 <div className="col-md-4">
                                    <div className="gallery-item">
                                        <a href="/images/c24.jpg" data-lightbox="gallery" data-title="Zdjęcie 24">
                                            <img className="img-fluid gallery-image" src="/images/c24.jpg"
                                                 alt="Zdjęcie 24"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="decoration">
                            <div className="circle-1"></div>
                            <div className="circle-2"></div>
                            <div className="circle-3"></div>
                            <div className="circle-4"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
)
}

export default HomePage