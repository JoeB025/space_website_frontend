import "./TheMoon.css";
import "./Moons.css";
import "./Links.css";
import { getMoons, getImages } from "../../utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Moons() {
  const [moonList, setMoonList] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMoons().then((response) => {
      setMoonList(response.data.moon);
      setLoading(false);
      console.log(response.data.moon);
    });
  }, []);

  useEffect(() => {
    getImages().then((response) => {
      setImageList(response.data.image);
    });
  }, []);

  if (loading)
  return (
    <>
      <div className="loader-container">
        <p className="loading-text">Loading</p>
        <div className="loader"></div>
      </div>
    </>
  );

  return (
    <>
      <div className="moon-page-container">
        <section className="earth-moon">
          <h1 className="orbiting-earth-title">The Moon</h1>

          <section>
            <ul className="moon-page-main-img">
              {imageList.map((image) => {
                if (image.name === "moon1") {
                  return (
                    <li key={image.id}>
                      <img
                        src={image.img_url}
                        alt={image.title}
                        className="earth-moon-img"
                      />
                    </li>
                  );
                }
              })}
            </ul>
          </section>

          <div className="earth-moon-desc-container">
            <p className="earth-moon-desc">
              The Moon, Earth's only natural satellite, holds a special place in
              human history and exploration. With an average distance of about
              384,400 kilometers from Earth, the Moon has long captivated the
              imagination of humanity, serving as a beacon of wonder and mystery
              in the night sky.
            </p>
            <p className="earth-moon-desc">
              On July 20, 1969, the Apollo 11 mission, led by NASA astronauts
              Neil Armstrong, Buzz Aldrin, and Michael Collins, achieved a
              historic milestone by becoming the first manned mission to land on
              the Moon. Neil Armstrong famously uttered the words "That's one
              small step for [a] man, one giant leap for mankind" as he set foot
              on the lunar surface, marking a pivotal moment in human history.
              Buzz Aldrin joined him shortly after, and together they conducted
              scientific experiments and explored the lunar landscape, while
              Michael Collins orbited the Moon in the command module.
            </p>
            <p className="earth-moon-desc">
              The Apollo 11 mission not only demonstrated the technological
              prowess of humanity but also inspired generations with the spirit
              of exploration and discovery. It represented a triumph of human
              ingenuity and collaboration, showcasing what can be achieved when
              individuals come together to pursue a common goal.
            </p>
            <p className="earth-moon-desc">
              Subsequent Apollo missions furthered our understanding of the
              Moon, with a total of six crewed landings between 1969 and 1972.
              These missions provided valuable scientific data and enabled
              astronauts to conduct experiments, collect samples, and document
              the lunar terrain in unprecedented detail.
            </p>
            <p className="earth-moon-desc">
              While the Apollo program concluded in the early 1970s, the legacy
              of those pioneering missions continues to inspire space
              exploration endeavors to this day. The first steps taken by Neil
              Armstrong and Buzz Aldrin on the lunar surface serve as a
              testament to humanity's boundless curiosity and determination to
              explore the unknown.
            </p>
          </div>

          <ul className="moon-page-astronaut-img">
            {imageList.map((image) => {
              if (image.name === "astronaut4") {
                return (
                  <li key={image.id} className="moon-landing-container">
                    <img
                      src={image.img_url}
                      alt={image.title}
                      className="astronaut-img"
                    />
                    <div>
                      <p className="moon-landing-quote">
                        "That's one small step for man, one giant leap for
                        mankind."
                      </p>
                      <p className="moon-landing-quote">
                        Neil Armstrong - July 20, 1969
                      </p>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </section>

        <section className="moon-page-sections">
          <h1 className="orbiting-mars-title">Mars</h1>
          <div className="orbiting-planet-container">
            <div className="moon-page-des-container">
              <h2 className="moon-page-des-heading">Description</h2>
              <p className="moon-page-description">
                One intriguing aspect of Mars is its moons, Phobos and Deimos,
                which are the only known natural satellites of the planet.
                Phobos and Deimos are irregularly shaped and relatively small
                compared to Earth's moon. Phobos, the larger of the two, has a
                diameter of about 22.2 kilometers (13.8 miles), while Deimos
                measures approximately 12.4 kilometers (7.7 miles) in diameter.
              </p>
              <p className="moon-page-description">
                Both moons are thought to be captured asteroids that were drawn
                into Mars' orbit long ago. Despite their small size, Phobos and
                Deimos hold significant scientific interest. They provide
                valuable insights into the formation and evolution of Mars and
                its surrounding environment. Scientists study these moons to
                better understand the dynamics of planetary satellites and the
                processes that shape celestial bodies throughout the solar
                system.
              </p>
              <p className="moon-page-description">
                While Mars may have only two moons compared to the larger gas
                giants like Jupiter and Saturn, the unique characteristics of
                Phobos and Deimos continue to captivate researchers and space
                enthusiasts alike, offering a glimpse into the fascinating world
                of planetary moons.
              </p>
            </div>

            <div className="moon-page-list-container">
              <div className="name-dist-headings-container">
                <p className="moon-page-name">Name</p>
                <p className="moon-page-dist">Distance from Mars</p>
              </div>

              <ul className="moon-list-container">
                {moonList.map((moon) => {
                  if (moon.orbits === "Mars") {
                    return (
                      <div className="moon-data-container">
                        <p className="moon-name"> {moon.moon_name}</p>
                        <p className="moon-distance">
                          {moon.distance_from_planet} km
                        </p>
                      </div>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className="moon-page-sections">
          <h1 className="orbiting-jupiter-title">Jupiter</h1>
          <div className="orbiting-planet-container">
            <div className="moon-page-des-container">
              <h2 className="moon-page-des-heading">Description</h2>
              <p className="moon-page-description">
                Jupiter, the largest planet in our solar system, boasts an
                impressive array of moons, making it a celestial marvel. With a
                total of 79 known moons as of the latest count, Jupiter's
                diverse satellite system presents a rich tapestry of planetary
                bodies, each with its own unique characteristics and
                significance.
              </p>
              <p className="moon-page-description">
                Among Jupiter's moons, the four largest ones, collectively known
                as the Galilean moons, hold particular prominence. Discovered by
                the famed astronomer Galileo Galilei in 1610, these moons—Io,
                Europa, Ganymede, and Callisto—stand as celestial icons in their
                own right.
              </p>
              <p className="moon-page-description">
                Io, the innermost of the Galilean moons, is a volcanic world
                characterized by its tumultuous surface, marked by countless
                active volcanoes and colorful plumes of sulfur-rich gases.
                Europa, with its smooth icy surface, hides a vast subsurface
                ocean beneath, raising tantalizing possibilities for
                extraterrestrial life.
              </p>
              <p className="moon-page-description">
                Ganymede, the largest moon in the solar system, boasts a complex
                geology and is the only moon known to have its own magnetic
                field. Callisto, with its heavily cratered surface, bears
                witness to countless impacts over eons, offering a glimpse into
                the ancient history of our solar system.
              </p>
              <p className="moon-page-description">
                Beyond the Galilean quartet, Jupiter's diverse moon system
                includes a multitude of smaller moons, each contributing its own
                unique story to the grand narrative of our solar system's
                evolution. From the irregularly shaped Himalia to the retrograde
                orbits of Carme and Ananke, Jupiter's moons continue to inspire
                curiosity and exploration, providing valuable insights into the
                dynamic processes shaping planetary systems throughout the
                cosmos.
              </p>
            </div>

            <div className="moon-page-list-container">
              <div className="name-dist-headings-container">
                <p className="moon-page-name">Name</p>
                <p className="moon-page-dist">Distance from Jupiter</p>
              </div>

              <ul className="moon-list-container1">
                {moonList.map((moon) => {
                  if (
                    moon.orbits === "Jupiter" &&
                    moon.distance_from_planet !== "Data unavailable"
                  ) {
                    return (
                      <div className="moon-data-container">
                        <p className="moon-name"> {moon.moon_name}</p>
                        <p className="moon-distance">
                          {moon.distance_from_planet} km
                        </p>
                      </div>
                    );
                  }
                })}
              </ul>

              <p className="other-moons-title">
                Other notable moons orbiting Jupiter
              </p>
              <ul className="moon-list-container2">
                {moonList.map((moon) => {
                  if (
                    moon.orbits === "Jupiter" &&
                    moon.distance_from_planet === "Data unavailable"
                  ) {
                    return (
                      <div className="moon-array-containers">
                        <p>{moon.moon_name}</p>
                      </div>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className="moon-page-sections">
          <h1 className="orbiting-saturn-title">Saturn</h1>
          <div className="orbiting-planet-container">
            <div className="moon-page-des-container">
              <h2 className="moon-page-des-heading">Description</h2>
              <p className="moon-page-description">
                Saturn, the sixth planet from the Sun and the second-largest in
                our solar system, boasts a diverse and captivating system of
                moons. With a total of 82 known moons as of the latest count,
                Saturn's moon system is one of the most extensive in the solar
                system, surpassed only by Jupiter's.
              </p>
              <p className="moon-page-description">
                Among Saturn's moons, Titan stands out as the largest and most
                intriguing. Titan is the second-largest moon in the solar
                system, surpassed only by Jupiter's Ganymede. It is larger than
                the planet Mercury and is the only moon in the solar system with
                a dense atmosphere, primarily composed of nitrogen with traces
                of methane and other organic compounds.
              </p>
              <p className="moon-page-description">
                Titan's thick atmosphere and surface features, including lakes,
                rivers, and vast plains of sand dunes, make it one of the most
                Earth-like worlds in the solar system. The presence of liquid
                hydrocarbon lakes and seas on Titan's surface, along with its
                complex weather patterns, make it a fascinating target for
                scientific study and exploration.
              </p>
              <p className="moon-page-description">
                In addition to Titan, Saturn's moon system includes a diverse
                array of smaller moons, each with its own unique
                characteristics. Some of these moons, such as Enceladus and
                Mimas, are known for their striking surface features, including
                enormous impact craters and icy geysers erupting from their
                surfaces.
              </p>
              <p className="moon-page-description">
                Enceladus, for example, is renowned for its towering water vapor
                plumes emanating from fractures in its icy crust. These plumes
                suggest the presence of a subsurface ocean beneath Enceladus'
                frozen surface, raising intriguing possibilities for the
                existence of extraterrestrial life.
              </p>
              <p className="moon-page-description">
                Mimas, on the other hand, is known for its distinctive Herschel
                Crater, a massive impact basin that gives the moon its
                resemblance to the Death Star from the Star Wars franchise.
              </p>
              <p className="moon-page-description">
                Overall, Saturn's moons offer a wealth of scientific intrigue
                and exploration opportunities, providing valuable insights into
                the dynamics and evolution of the Saturnian system and the
                broader solar system as a whole.
              </p>
            </div>

            <div className="moon-page-list-container">
              <div className="name-dist-headings-container">
                <p className="moon-page-name">Name</p>
                <p className="moon-page-dist">Distance from Saturn</p>
              </div>

              <ul className="moon-list-container1">
                {moonList.map((moon) => {
                  if (
                    moon.orbits === "Saturn" &&
                    moon.distance_from_planet !== "Data unavailable"
                  ) {
                    return (
                      <div className="moon-data-container">
                        <p className="moon-name"> {moon.moon_name}</p>
                        <p className="moon-distance">
                          {moon.distance_from_planet} km
                        </p>
                      </div>
                    );
                  }
                })}
              </ul>

              <p className="other-moons-title">
                Other notable moons orbiting Saturn
              </p>
              <ul className="moon-list-container2">
                {moonList.map((moon) => {
                  if (
                    moon.orbits === "Saturn" &&
                    moon.distance_from_planet === "Data unavailable"
                  ) {
                    return (
                      <div className="moon-array-containers">
                        <p>{moon.moon_name}</p>
                      </div>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className="moon-page-sections">
          <h1 className="orbiting-uranus-title">Uranus</h1>
          <div className="orbiting-planet-container">
            <div className="moon-page-des-container">
              <h2 className="moon-page-des-heading">Description</h2>
              <p className="moon-page-description">
                Uranus, the seventh planet from the Sun, hosts a fascinating
                array of moons that orbit its icy blue atmosphere. As of the
                latest count, Uranus has 27 known moons, each offering unique
                insights into the planet's composition and history.
              </p>
              <p className="moon-page-description">
                Among Uranus' moons, the largest and most significant is
                Titania. Titania is the eighth-largest moon in the solar system
                and the largest of Uranus' moons. It boasts a diverse surface
                marked by impact craters, rift valleys, and vast plains of icy
                terrain. Titania's surface features suggest a complex geological
                history shaped by impacts and tectonic activity, similar to
                those seen on other icy moons in the outer solar system.
              </p>
              <p className="moon-page-description">
                While Titania is the largest of Uranus' moons, it is closely
                followed by Oberon, the second-largest moon. Oberon's surface
                also bears the scars of ancient impacts, with craters of various
                sizes dotting its icy plains. Like Titania, Oberon's geological
                features provide valuable clues about the moon's past and its
                interactions with other celestial bodies in the Uranian system.
              </p>
              <p className="moon-page-description">
                In addition to Titania and Oberon, Uranus' moon system includes
                a diverse array of smaller moons, each with its own unique
                characteristics. Moons like Miranda, Ariel, and Umbriel exhibit
                a variety of surface features, including cliffs, canyons, and
                cratered plains, hinting at the complex processes that have
                shaped their surfaces over billions of years.
              </p>
              <p className="moon-page-description">
                While much remains to be explored and understood about Uranus'
                moons, ongoing studies and future missions promise to unveil
                further insights into these enigmatic worlds and their role in
                the broader context of the outer solar system.
              </p>
            </div>

            <div className="moon-page-list-container">
              <div className="name-dist-headings-container">
                <p className="moon-page-name">Name</p>
                <p className="moon-page-dist">Distance from Uranus</p>
              </div>

              <ul className="moon-list-container1">
                {moonList.map((moon) => {
                  if (
                    moon.orbits === "Uranus" &&
                    moon.distance_from_planet !== "Data unavailable"
                  ) {
                    return (
                      <div className="moon-data-container">
                        <p className="moon-name"> {moon.moon_name}</p>
                        <p className="moon-distance">
                          {moon.distance_from_planet} km
                        </p>
                      </div>
                    );
                  }
                })}
              </ul>

              <p className="other-moons-title">
                Other notable moons orbiting Uranus
              </p>
              <ul className="moon-list-container2">
                {moonList.map((moon) => {
                  if (
                    moon.orbits === "Uranus" &&
                    moon.distance_from_planet === "Data unavailable"
                  ) {
                    return (
                      <div className="moon-array-containers">
                        <p>{moon.moon_name}</p>
                      </div>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className="moon-page-sections">
          <h1 className="orbiting-neptune-title">Neptune</h1>
          <div className="orbiting-planet-container">
            <div className="moon-page-des-container">
              <h2 className="moon-page-des-heading">Description</h2>
              <p className="moon-page-description">
                Neptune, the eighth and farthest-known planet from the Sun,
                holds a fascinating array of moons within its mysterious domain.
                Among these celestial companions, Triton emerges as the most
                remarkable, both in size and significance.
              </p>
              <p className="moon-page-description">
                Triton, the seventh-largest moon in the solar system, boasts a
                composition of rock and ice, distinguishing it as a unique
                entity in Neptune's realm. What sets Triton apart is its
                retrograde orbit, a rarity among large moons, indicating an
                orbit that opposes the direction of Neptune's rotation. This
                peculiarity adds to Triton's mystique and underscores its
                enigmatic nature.
              </p>
              <p className="moon-page-description">
                The surface of Triton is a canvas of geological wonders,
                featuring vast plains, cratered landscapes, and icy cliffs that
                hint at a dynamic past. Notably, the "cantaloupe terrain" stands
                out—a region of grooved terrain resembling the textured skin of
                a cantaloupe, adding to Triton's allure and intrigue. Moreover,
                Triton is renowned for its geysers, erupting nitrogen gas and
                dust particles from beneath its icy veneer. These geysers carve
                dark streaks across Triton's surface, contributing to its
                captivating appearance and scientific interest.
              </p>
              <p className="moon-page-description">
                The origins of Triton further deepen the mystery surrounding
                Neptune's moons. Believed to be a captured Kuiper Belt object,
                Triton's gravitational capture by Neptune's orbit in the distant
                past has left astronomers pondering its cosmic journey and
                implications for the solar system's evolution.
              </p>
              <p className="moon-page-description">
                Beyond Triton, Neptune hosts a diverse ensemble of moons,
                totaling 14 in number. While Triton reigns as the largest and
                most prominent, other moons such as Proteus, Larissa, and Nereid
                also hold significance in the celestial tapestry surrounding the
                distant ice giant.
              </p>
              <p className="moon-page-description">
                Proteus, the second-largest moon of Neptune, presents a heavily
                cratered surface, hinting at a tumultuous past shaped by cosmic
                impacts. Its irregular shape and composition suggest a complex
                history intertwined with Neptune's formation and evolution.
              </p>
              <p className="moon-page-description">
                The exploration of Neptune's moons has been a fascinating
                endeavor, marked by significant discoveries and technological
                feats. Triton, discovered by British astronomer William Lassell
                just 17 days after Neptune's own revelation in 1846, marked the
                beginning of our exploration of the distant ice giant's moon
                system. Subsequent studies, including those conducted by the
                Voyager 2 spacecraft during its historic flyby of Neptune in
                1989, have provided valuable insights into Triton and its lunar
                companions, enriching our understanding of the outer reaches of
                the solar system.
              </p>
              <p className="moon-page-description">
                In summary, Triton, Neptune's largest moon, stands as a
                testament to the complexity and beauty of the outer solar
                system. Its unique features, coupled with those of its fellow
                moons, offer a glimpse into the dynamic processes that have
                shaped the distant realms of our cosmic neighborhood, inviting
                further exploration and discovery.
              </p>
            </div>

            <div className="moon-page-list-container">
              <div className="name-dist-headings-container">
                <p className="moon-page-name">Name</p>
                <p className="moon-page-dist">Distance from Neptune</p>
              </div>

              <ul className="moon-list-container1">
                {moonList.map((moon) => {
                  if (
                    moon.orbits === "Neptune" &&
                    moon.distance_from_planet !== "Data unavailable"
                  ) {
                    return (
                      <div className="moon-data-container">
                        <p className="moon-name"> {moon.moon_name}</p>
                        <p className="moon-distance">
                          {moon.distance_from_planet} km
                        </p>
                      </div>
                    );
                  }
                })}
              </ul>

              <p className="other-moons-title">
                Other notable moons orbiting Neptune
              </p>
              <ul className="moon-list-container2">
                {moonList.map((moon) => {
                  if (
                    moon.orbits === "Neptune" &&
                    moon.distance_from_planet === "Data unavailable"
                  ) {
                    return (
                      <div className="moon-array-containers">
                        <p>{moon.moon_name}</p>
                      </div>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </section>

        <div className="moons-bottom-links">
          <Link to="/" className="moons-back-home">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
