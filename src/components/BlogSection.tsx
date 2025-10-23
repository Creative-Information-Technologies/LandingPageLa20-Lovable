const BlogSection = () => {
  const navigate = useNavigate();

  const mainArticle = {
    title: "Conocé esta receta de la casa: Currywurst",
    description:
      "Esta receta, Currywurst, es perfecta para compartir entre amigos y marida muy bien con cervezas alemanas.",
    image: blogCurrywurstMain,
  };

  const secondaryArticles = [
    {
      title: "¿Qué es la cerveza artesanal?",
      description: "Mira todo lo que tenemos planificado para la celebración.",
      image: blogCervezaArtesanal,
    },
    {
      title: "Sabores en perspectiva",
      description: "Conocé nuestra nueva línea de sabores de temporada.",
      image: blogSaboresPerspectiva,
    },
    {
      title: "Tour cervecero",
      description:
        "Pensabas que la cerveza solo se abría y se tomaba? En el Tour Cervecero te contamos todo lo que hay antes del ¡salud! Spoiler: vas a terminar amando aún más tu pinta.",
      image: blogTourCervecero,
    },
    {
      title: "Club de cerveceros",
      description: "Destapa grandes oferta, ven y conoce lo que el club La20 trae para ti.",
      image: blogClubPromo,
    },
  ];

  return (
    <section className="w-full overflow-hidden relative">
      {/* Hero Header */}
      <div
        className="relative w-full py-20 px-6 bg-[hsl(var(--blog-orange))] overflow-hidden"
        style={{
          backgroundImage: `url(${wavyPatternBrown})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-2xl" style={{ paddingLeft: "10%" }}>
              <h1
                className="font-oswald font-bold text-white uppercase tracking-[0%]"
                style={{
                  fontSize: "84px",
                  lineHeight: "110%",
                  textShadow: "5px 5px 0px #3d1505",
                }}
              >
                CONOCÉ
                <br />
                LAS ÚLTIMAS NOTICIAS
              </h1>
            </div>

            {/* Assets - Bottle and Glass */}
            <div
              className="hidden lg:block absolute right-0 top-0 bottom-0 pointer-events-none"
              style={{ width: "50%", zIndex: 10 }}
            >
              <img
                src={beerGlassBlog}
                alt="LA20 Beer Glass"
                className="absolute"
                style={{
                  right: "0%",
                  top: "-15px",
                  bottom: "-10px",
                  width: "58%",
                  height: "auto",
                  objectFit: "contain",
                  objectPosition: "bottom",
                  filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
                  transform: "rotate(7deg)",
                  transformOrigin: "bottom center",
                  zIndex: 2,
                }}
              />

              <img
                src={beerBottleBlog}
                alt="La Flaka Gose Beer Bottle"
                className="absolute"
                style={{
                  right: "3%",
                  top: "20px",
                  bottom: "0",
                  width: "98%",
                  height: "auto",
                  objectFit: "contain",
                  objectPosition: "bottom",
                  filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.25))",
                  transform: "rotate(-7deg)",
                  transformOrigin: "bottom center",
                  zIndex: 3,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#974119" }}>
        <div className="max-w-7xl mx-auto" style={{ padding: "40px 20px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div
                className="rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:brightness-105"
                style={{
                  border: "2px solid #F4E1C0",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
                }}
                onClick={() => navigate("/blog/currywurst")}
              >
                <img
                  src={mainArticle.image}
                  alt={mainArticle.title}
                  className="w-full object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
                <div style={{ backgroundColor: "#FFFFFF", padding: "24px" }}>
                  <h3
                    className="font-sans font-bold mb-3"
                    style={{
                      color: "#000000",
                      fontSize: "1.5rem",
                      lineHeight: "1.3",
                    }}
                  >
                    {mainArticle.title}
                  </h3>
                  <p
                    className="font-sans leading-relaxed line-clamp-3"
                    style={{
                      color: "#000000",
                      fontSize: "1rem",
                    }}
                  >
                    {mainArticle.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              {secondaryArticles.map((article, index) => (
                <div
                  key={index}
                  className="flex rounded-xl overflow-hidden"
                  style={{
                    height: "130px",
                    border: "2px solid #F4E1C0",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <div className="w-2/5 flex-shrink-0 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      style={{ borderRadius: "8px 0 0 8px" }}
                    />
                  </div>

                  <div className="w-3/5 p-3 flex flex-col justify-center">
                    <h4
                      className="font-sans font-bold mb-1 leading-tight line-clamp-2"
                      style={{
                        color: "#000000",
                        fontSize: "1rem",
                      }}
                    >
                      {article.title}
                    </h4>
                    <p
                      className="font-sans leading-snug line-clamp-2"
                      style={{
                        color: "#000000",
                        fontSize: "0.9rem",
                      }}
                    >
                      {article.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Club Section */}
      <div className="w-full py-20 px-6 relative overflow-hidden" style={{ backgroundColor: "#974119", zIndex: 5 }}>
        <div className=" mx-auto relative overflow-hidden">
          <div className="relative text-center py-12" style={{ zIndex: 20 }}>
            <h2
              className="text-white uppercase mb-8 font-barlow-condensed"
              style={{
                fontWeight: 900,
                fontSize: "141.75px",
                lineHeight: "102%",
                textAlign: "center",
                textShadow: "5px 5px 0px #3d1505",
              }}
            >
              UNITE AL CLUB LA20 Y
              <br />
              OBTENÉ BENEFICIOS
              <br />
              ESPECIALES
            </h2>
            <Button
              size="lg"
              className="bg-black hover:bg-black/80 text-white font-bold uppercase px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
            >
              UNIRME AL CLUB
            </Button>
          </div>

          {/* Assets */}
          <div className="overflow-hidden">
            <img
              src={beerBottleMetiche}
              alt="La Metiche Belgian Witbier"
              className="absolute"
              style={{
                left: "-40%",
                bottom: "-380px",
                width: "105%",
                height: "auto",
                zIndex: 10,
                filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.35))",
                transform: "rotate(-11deg)",
                transformOrigin: "bottom center",
                pointerEvents: "none",
              }}
            />
          </div>

          <img
            src={beerGlassClub}
            alt="LA20 Beer Glass"
            className="absolute overflow-hidden"
            style={{
              right: "-9.5%",
              bottom: "-600px",
              width: "42%",
              height: "auto",
              zIndex: 10,
              filter: "drop-shadow(0 20px 35px rgba(0,0,0,0.35))",
              transform: "rotate(7deg)",
              transformOrigin: "bottom center",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </section>
  );
};
