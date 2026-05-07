import Link from "next/link";

import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

import { projects } from "@/data/projects";

const FeaturedProjects = () => {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Blur Effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <Container>

        <SectionTitle
          subtitle="Featured Projects"
          title="Luxury Developments"
        />

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[40px] border border-white/10 h-[550px]"
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2000ms]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              {/* Badge */}
              <div className="absolute top-6 left-6">

                <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-xs uppercase tracking-[3px]">

                  {project.status}

                </div>

              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8">

                <p className="uppercase tracking-[4px] text-gray-300 text-sm mb-3">
                  {project.location}
                </p>

                <h3 className="text-4xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-500"
                >
                  Explore Project
                </Link>

              </div>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
};

export default FeaturedProjects;