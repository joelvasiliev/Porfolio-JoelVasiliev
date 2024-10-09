"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>NextJS</li>
        <li>NestJS</li>
        <li>TypeScript</li>
        <li>Docker</li>
        <li>Infraestrutura com AWS</li>
        <li>DevOps</li>
        <li>IA</li>
        <li>Chatbots</li>
        <li>PWA</li>
        <li>SQL e NOSQL</li>
        <li>Pipelines CI/CD</li>
        <li>Metodologias Ágeis</li>
      </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="background of a table with coffe, a notebook" src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg">
          Desenvolvedor fullstack com mais de 5 anos de experiência, especializado em Next.js (React), NestJS e integração com AWS, onde já desenvolvi diversas aplicações serverless e gerenciei infraestruturas em ambientes cloud. Com programação desde os 10 anos, adquiri um vasto conhecimento em desenvolvimento web, criação de APIs, automações e integrações com IA, como chatbots e sistemas de interpretação de documentos. Tenho forte atuação tanto no frontend quanto no backend, desenvolvendo interfaces modernas com React/Next.js e APIs robustas com NestJS e TypeScript.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
