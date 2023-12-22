import { tours } from "../data";
import Title from "./Title";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title_1="featured" title_2="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, title, image, location, duration, date, price, info } =
            tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt={title} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{`${duration} days`}</p>
                  <p>{`from $${price}`}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
