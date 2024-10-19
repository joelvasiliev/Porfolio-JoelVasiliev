"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "JetUp",
    description: "Busca de passagem aéreas por milhas",
    image: "/images/projects/1.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    disableGithub: true,
    previewUrl: "https://dev.jetup.travel/",
  },
  {
    id: 2,
    title: "Landing Page Exclusive",
    description: "Landing page para venda de produtos",
    image: "/images/projects/2.png",
    tag: ["Todos", "Web", "Landing Page"],
    gitUrl: "https://github.com/joelvasiliev/landing-page",
    disableGithub: false,
    previewUrl: "https://landing-page-zeta-orpin-88.vercel.app/",
  },
  {
    id: 3,
    title: "Plataforma Estoque e Pedidos",
    description: "[Em desenvolvimento] Plataforma para controle de estoques, pedidos, gráficos de vendas, lucros, relatórios, etc.",
    image: "/images/projects/3.png",
    tag: ["Todos", "Web", "SAAS"],
    gitUrl: "https://github.com/joelvasiliev/estoques",
    disableGithub: false,
    previewUrl: "https://landing-page-zeta-orpin-88.vercel.app/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="mb-10" id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Landing Page"
          isSelected={tag === "Landing Page"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="SAAS"
          isSelected={tag === "SAAS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              disableGithub={project.disableGithub}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
