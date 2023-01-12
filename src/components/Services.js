import Title from './Title.js';
import Service from './Service.js';
import { services } from './data.js';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          return <Service {...service} key={service.id} />;
        })}
      </div>
    </section>
  );
};
export default Services;
