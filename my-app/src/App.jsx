import React, { useState, useEffect } from "react";
import "./App.css";

// Import your local images
import landingImage from "./Images/landing.png";
import transportImage from "./Images/transport.png";
import logoImage from "./Images/logo.png";
import aboutImage from "./Images/c5.PNG";
import locationImage from "./Images/local.PNG";
import h4 from "./Images/h4.png";
import h5 from "./Images/h5.jpg";
import h6 from "./Images/h6.png";

import c1 from "./Images/c1.PNG";
import c2 from "./Images/c2.PNG";
import c3 from "./Images/c3.PNG";
import c4 from "./Images/c4.PNG";
import c5 from "./Images/c5.PNG";
import c6 from "./Images/c6.PNG";
import c7 from "./Images/c7.PNG";
import c8 from "./Images/c8.PNG";
import c9 from "./Images/c9.PNG";
import c10 from "./Images/c10.PNG";
import c11 from "./Images/c11.PNG";


// All icons using your existing images
const excellenceIcon = h6;
const creativityIcon = h4;
const valuesIcon = h5;

const App = () => {
  const [language, setLanguage] = useState("french");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      if (window.scrollY > 300) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    french: {
      schoolName: "École Jean-Jacques Rousseau",
      nav: {
        home: "Accueil",
        about: "À Propos",
        services: "Services",
        transport: "Transport",
        contact: "Contact",
      },
      hero: {
        title: "L'Excellence Éducative",
        subtitle: "Former les citoyens de demain avec passion et dévouement",
        button: "Découvrir Notre École",
      },
      about: {
        title: "À Propos de Notre École",
        desc1: "Fondée sur les principes pédagogiques de Jean-Jacques Rousseau, notre école offre un environnement d'apprentissage unique où chaque enfant est encouragé à développer son potentiel naturel.",
        desc2: "Nous croyons en une éducation qui respecte le rythme et la personnalité de chaque élève, tout en cultivant la curiosité, la créativité et l'excellence académique.",
      },
      mission: {
        title: "Notre Mission Éducative",
        desc: "Fondée sur des valeurs d'excellence, de respect et d'innovation, notre école privée s'engage à offrir un environnement éducatif unique où chaque élève peut s'épanouir pleinement. Notre équipe pédagogique qualifiée accompagne les élèves dans leur parcours académique et personnel, en cultivant l'autonomie, la curiosité intellectuelle et l'engagement citoyen. Nous préparons nos élèves à relever les défis du monde moderne tout en préservant les valeurs fondamentales qui font de nos jeunes des adultes responsables et accomplis.",
        cta: "S'inscrire Maintenant",
        pillars: {
          bilingual: {
            icon: "🌍",
            title: "Enseignement Bilingue",
            desc: "Maîtrise parfaite du français et de l'anglais dès le plus jeune âge pour une ouverture internationale optimale."
          },
          pedagogy: {
            icon: "🎯",
            title: "Pédagogie Différenciée",
            desc: "Un accompagnement personnalisé qui s'adapte au rythme et aux besoins spécifiques de chaque élève."
          },
          technology: {
            icon: "💻",
            title: "Innovation Technologique",
            desc: "Des outils numériques modernes intégrés à l'apprentissage pour développer les compétences du 21ème siècle."
          },
          culture: {
            icon: "⚽",
            title: "Sport & Culture",
            desc: "Un programme riche d'activités sportives et artistiques pour l'épanouissement complet de l'enfant."
          }
        }
      },
      features: {
        title: "Pourquoi Choisir Notre École ?",
        excellence: "Excellence Académique",
        excellenceDesc: "Programmes éducatifs innovants et enseignants qualifiés",
        creativity: "Créativité & Innovation",
        creativityDesc: "Ateliers artistiques et projets technologiques",
        values: "Sécurité & Bien-être",
        valuesDesc: "Environnement sécurisé, protocoles stricts et bien-être assuré",
      },
      transport: {
        title: "Service de Transport",
        desc: "Un service de transport scolaire sécurisé et fiable pour tous les quartiers de la ville.",
        features: [
          "Bus climatisés et confortables",
          "Chauffeurs qualifiés et formés",
          "Système de localisation GPS",
          "Trajets optimisés",
        ],
      },
      localization: {
        title: "Notre Localisation",
        desc: "Situé au cœur de la ville, notre campus offre un cadre idéal pour l'apprentissage.",
        address: "Mourouj 6 , Ben arous",
        button: "Voir sur Google Maps",
      },
      gallery: {
        title: "Galerie de Notre École",
        items: [
          { title: "Salle de Classe Moderne", desc: "Un espace d'apprentissage innovant" },
          { title: "Bibliothèque", desc: "Un lieu de découverte et de savoir" },
          { title: "Cours de Sport", desc: "Développement physique et esprit d'équipe" },
          { title: "Atelier d'Art", desc: "Créativité et expression artistique" }
        ]
      },
      cta: {
        title: "Prêt à Rejoindre Notre Famille ?",
        button: "Inscrivez-vous Maintenant",
      },
      footer: {
        rights: "© 2024 École Jean-Jacques Rousseau. Tous droits réservés.",
      },
      whatsapp: {
        message: "Bonjour! Je souhaite obtenir plus d'informations sur l'école."
      }
    },
    arabic: {
      schoolName: "مدرسة جان جاك روسو",
      nav: {
        home: "الرئيسية",
        about: "عن المدرسة",
        services: "الخدمات",
        transport: "النقل",
        contact: "اتصل بنا",
      },
      hero: {
        title: "التميز التربوي",
        subtitle: "نشأة مواطني الغد بشغف وتفان",
        button: "اكتشف مدرستنا",
      },
      about: {
        title: "عن مدرستنا",
        desc1: "تأسست مدرستنا على المبادئ التربوية لجان جاك روسو، وتقدم بيئة تعليمية فريدة حيث يتم تشجيع كل طفل على تطوير إمكاناته الطبيعية.",
        desc2: "نؤمن بتعليم يحترم إيقاع وشخصية كل طالب، مع تنمية الفضول والإبداع والتميز الأكاديمي.",
      },
      mission: {
        title: "مهمتنا التعليمية",
        desc: "تأسست مدرستنا الخاصة على قيم التميز والاحترام والابتكار، وتلتزم بتوفير بيئة تعليمية فريدة حيث يمكن لكل طالب أن يزدهر بشكل كامل. يرافق فريقنا التربوي المؤهل الطلاب في رحلتهم الأكاديمية والشخصية، من خلال تنمية الاستقلالية والفضول الفكري والمواطنة المسؤولة. نعد طلابنا لمواجهة تحديات العالم الحديث مع الحفاظ على القيم الأساسية التي تجعل من شبابنا بالغين مسؤولين وناجحين.",
        cta: "حدد موعداً",
        pillars: {
          bilingual: {
            icon: "🌍",
            title: "التعليم ثنائي اللغة",
            desc: "إتقان تام للفرنسية والإنجليزية منذ سن مبكرة لانفتاح دولي أمثل."
          },
          pedagogy: {
            icon: "🎯",
            title: "التربية الفارقة",
            desc: "مرافقة شخصية تتكيف مع إيقاع واحتياجات كل طالب على حدة."
          },
          technology: {
            icon: "💻",
            title: "الابتكار التكنولوجي",
            desc: "أدوات رقمية حديثة مدمجة في التعلم لتطوير مهارات القرن الحادي والعشرين."
          },
          culture: {
            icon: "⚽",
            title: "الرياضة والثقافة",
            desc: "برنامج غني بالأنشطة الرياضية والفنية لتنمية متكاملة للطفل."
          }
        }
      },
      features: {
        title: "لماذا تختار مدرستنا؟",
        excellence: "التميز الأكاديمي",
        excellenceDesc: "برامج تعليمية مبتكرة ومعلمون مؤهلون",
        creativity: "الإبداع والابتكار",
        creativityDesc: "ورش فنية ومشاريع تكنولوجية",
        values: "الأمن والسلامة",
        valuesDesc: "بيئة آمنة، بروتوكولات صارمة ورعاية مضمونة",
      },
      transport: {
        title: "خدمة النقل",
        desc: "خدمة نقل مدرسي آمنة وموثوقة لجميع أحياء المدينة.",
        features: [
          "حافلات مكيفة ومريحة",
          "سائقون مؤهلون ومدربون",
          "نظام تحديد المواقع GPS",
          "مسارات محسنة",
        ],
      },
      localization: {
        title: "موقعنا",
        desc: "يقع حرمنا الجامعي في قلب المدينة، ويوفر إطارًا مثاليًا للتعلم.",
        address: "123 شارع التربية، وسط المدينة",
        button: "عرض على خرائط جوجل",
      },
      gallery: {
        title: "معرض مدرستنا",
        items: [
          { title: "فصل دراسي حديث", desc: "مساحة تعليمية مبتكرة" },
          { title: "المكتبة", desc: "مكان للاكتشاف والمعرفة" },
          { title: "حصص الرياضة", desc: "تطوير بدني وروح الفريق" },
          { title: "ورشة الفن", desc: "إبداع وتعبير فني" }
        ]
      },
      cta: {
        title: "مستعد للانضمام لعائلتنا؟",
        button: "سجل الآن",
      },
      footer: {
        rights: "جميع الحقوق محفوظة © 2024 مدرسة جان جاك روسو",
      },
      whatsapp: {
        message: "مرحباً! أرغب في الحصول على مزيد من المعلومات عن المدرسة."
      }
    },
  };

  const t = content[language];
  const galleryImages = [c6, c1, c11, c2,  c4, c7, c8, c9 , c10];
  
  const whatsappNumber = "212612345678";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.whatsapp.message)}`;
  
  // Google Maps URL
  const googleMapsUrl = "https://www.google.com/maps/place/Ecole+Primaire+Privee+Jean+Jack+Rousseau/@36.7111368,10.2199968,1226m/data=!3m1!1e3!4m14!1m7!3m6!1s0x12fd37a16ace3639:0xbf1d3012c8028cde!2sEcole+Primaire+Privee+Jean+Jack+Rousseau!8m2!3d36.7111024!4d10.2193745!16s%2Fg%2F11dzt0f3mb!3m5!1s0x12fd37a16ace3639:0xbf1d3012c8028cde!8m2!3d36.7111024!4d10.2193745!16s%2Fg%2F11dzt0f3mb?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="app" dir={language === "arabic" ? "rtl" : "ltr"}>
      {/* Navigation - keep same as your original */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src={logoImage} alt="School Logo" className="logo-image" />
          </div>
          <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <a href="#home">{t.nav.home}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#mission">{t.nav.services}</a>
            <a href="#transport">{t.nav.transport}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <div className="language-switch">
            <button
              className={language === "french" ? "active" : ""}
              onClick={() => setLanguage("french")}
            >
              FR
            </button>
            <button
              className={language === "arabic" ? "active" : ""}
              onClick={() => setLanguage("arabic")}
            >
              AR
            </button>
          </div>
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section - keep same */}
      <section id="home" className="hero" style={{ backgroundImage: `url(${landingImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <button className="hero-button">{t.hero.button}</button>
        </div>
      </section>

      {/* Banner Section - keep same */}
      <section className="banner-section">
        <div className="banner-container">
          <div className="banner-content">
            <div className="banner-text">
              <span className="banner-badge">
                {language === "french" ? "🎯 Annonce Spéciale" : "🎯 إعلان خاص"}
              </span>
              <h2 className="banner-title">
                {language === "french" 
                  ? "📚 Inscriptions Ouvertes pour l'Année Scolaire 2026-2027" 
                  : "📚 التسجيل مفتوح للعام الدراسي 2026-2027"}
              </h2>
              <p className="banner-description">
                {language === "french"
                  ? "Rejoignez notre communauté éducative d'excellence. Places limitées, inscrivez-vous dès maintenant !"
                  : "انضم إلى مجتمعنا التعليمي المتميز. الأماكن محدودة، سجل الآن!"}
              </p>
              <button className="banner-button">
                {language === "french" ? "S'inscrire Maintenant" : "سجل الآن"}
              </button>
            </div>
            <div className="banner-image">
              <img 
                src={logoImage} 
                alt="School banner" 
                className="banner-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section - keep same */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="about-content">
            <div className="about-text">
              <p>{t.about.desc1}</p>
              <p>{t.about.desc2}</p>
            </div>
            <div className="about-image">
              <img
                src={aboutImage || "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=400&fit=crop"}
                alt="Students learning"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - UPDATED with icons */}
      <section id="mission" className="mission-section">
        <div className="container">
          <div className="mission-header">
            <span className="mission-badge">✨ Notre Engagement</span>
            <h2 className="mission-title">Notre Mission Éducative</h2>
            <div className="mission-underline"></div>
          </div>
          
          <div className="mission-text">
            <p>{t.mission.desc}</p>
            <button className="mission-cta">
              <i className="fas fa-calendar-check"></i> {t.mission.cta}
            </button>
          </div>

          <div className="mission-divider">
            <span className="divider-icon"><i className="fas fa-graduation-cap"></i></span>
          </div>

          <div className="mission-grid">
            {Object.values(t.mission.pillars).map((pillar, index) => (
              <div key={index} className="mission-item">
                <div className="mission-item-icon">
                  <span className="mission-icon-emoji">{pillar.icon}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
                <div className="mission-item-hover"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - IMPROVED design */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">{t.features.title}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-image-wrapper">
                <img src={excellenceIcon} alt="Excellence" className="feature-img" />
              </div>
              <h3>{t.features.excellence}</h3>
              <p>{t.features.excellenceDesc}</p>
              <div className="feature-hover-effect"></div>
            </div>

            <div className="feature-card">
              <div className="feature-image-wrapper">
                <img src={creativityIcon} alt="Creativity" className="feature-img" />
              </div>
              <h3>{t.features.creativity}</h3>
              <p>{t.features.creativityDesc}</p>
              <div className="feature-hover-effect"></div>
            </div>

            <div className="feature-card">
              <div className="feature-image-wrapper">
                <img src={valuesIcon} alt="Security" className="feature-img" />
              </div>
              <h3>{t.features.values}</h3>
              <p>{t.features.valuesDesc}</p>
              <div className="feature-hover-effect"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Section - keep same */}
      <section id="transport" className="transport">
        <div className="container">
          <div className="transport-content">
            <div className="transport-text">
              <h2 className="section-title">{t.transport.title}</h2>
              <p>{t.transport.desc}</p>
              <ul>
                {t.transport.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
            </div>
            <div className="transport-image">
              <img src={transportImage} alt="School transport" />
            </div>
          </div>
        </div>
      </section>

      {/* Localization Section - UPDATED with Google Maps button */}
      <section id="localization" className="localization">
        <div className="container">
          <div className="localization-content">
            <div className="localization-image">
              <a                 href={googleMapsUrl}
>
              <img
                src={locationImage || "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=400&fit=crop"}
                alt="School location"
              />
              </a>
            </div>
            <div className="localization-text">
              <h2 className="section-title">{t.localization.title}</h2>
              <p>{t.localization.desc}</p>
              <div className="address">
                📍 {t.localization.address}
              </div>
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="google-maps-btn"
              >
                <i className="fas fa-map-marker-alt"></i>
                {t.localization.button}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - keep same */}
      <section className="gallery">
        <div className="container">
          <h2 className="section-title">{t.gallery.title}</h2>
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={t.gallery.items[index]?.title || `Gallery ${index + 1}`} />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <span className="gallery-overlay-icon">📸</span>
                    <h3 className="gallery-overlay-title">
                      {t.gallery.items[index]?.title || `Image ${index + 1}`}
                    </h3>
                    <p className="gallery-overlay-desc">
                      {t.gallery.items[index]?.desc || ''}
                    </p>
                    <div className="gallery-overlay-line"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - keep same */}
      <section id="contact" className="cta">
        <div className="container">
          <h2>{t.cta.title}</h2>
          <button className="cta-button">{t.cta.button}</button>
        </div>
      </section>

      {/* Footer - keep same */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>{t.schoolName}</h3>
              <p>{t.localization.address}</p>
              <p>📞 +33 1 23 45 67 89</p>
              <p>✉️ contact@jjrousseau.edu</p>
            </div>
            <div className="footer-section">
              <h4>{language === "french" ? "Suivez-nous" : "تابعونا"}</h4>
              <div className="social-links">
                <span>📘 Facebook</span>
                <span>📸 Instagram</span>
                <span>🐦 Twitter</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`whatsapp-float ${showWhatsApp ? 'visible' : ''}`}
        aria-label="Contact us on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="whatsapp-tooltip">
          {language === "french" ? "Contactez-nous" : "اتصل بنا"}
        </span>
      </a>
    </div>
  );
};

export default App;
