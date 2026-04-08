import Award from "lucide-react/dist/esm/icons/award";
import Brain from "lucide-react/dist/esm/icons/brain";
import Building2 from "lucide-react/dist/esm/icons/building-2";
import Code from "lucide-react/dist/esm/icons/code";
import GraduationCap from "lucide-react/dist/esm/icons/graduation-cap";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { educationList } from "@/data/education";
import { experiences } from "@/data/experience";
import { hobbies } from "@/data/hobbies";
import { skillCategories } from "@/data/skills";

/** Renders the AboutDetail component.
 * @remarks No parameters.
 * @returns The JSX element for the rendered about detail section.
 */
export function AboutDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-24">
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10">
              <Image
                src="/headshot/hero.png"
                alt="Shemayon Soloman"
                fill
                sizes="192px"
                priority
                className="object-cover scale-110 translate-x-4"
              />
            </div>
            <div>
              <h1 className="text-balance text-4xl font-bold md:text-5xl mb-4">Shemayon Soloman</h1>
              <p className="text-xl text-muted-foreground mb-4">
                Machine Learning Engineer & AI/ML Developer
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-primary/10">
                  <Brain className="w-3 h-3 mr-2" aria-hidden="true" /> AI/ML Expert
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Building2 className="w-3 h-3 mr-2" aria-hidden="true" /> Automation Specialist
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Code className="w-3 h-3 mr-2" aria-hidden="true" /> Python Developer
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  <Sparkles className="w-3 h-3 mr-2" aria-hidden="true" /> Generative AI Evangelist
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-balance text-2xl font-semibold mb-4 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />
              Professional Summary
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a Machine Learning Engineer and AI/ML Developer based in the UAE, specializing
                in building production-grade AI systems across generative AI, deep learning, and
                large language models. My work focuses on designing scalable, real-world solutions
                that combine strong modeling with robust backend engineering and cloud-native
                deployment. I bring hands-on expertise in developing end-to-end AI products that are
                efficient, reliable, and optimized for cost and performance.
              </p>
              <p>
                I have led the development of multiple enterprise-grade AI systems, including a
                fully deployed sales forecasting platform on GCP with end-to-end MLOps pipelines,
                real-time inference APIs, and automated data workflows. I also architected advanced
                AI applications such as a BigQuery AI Assistant using multi-agent orchestration for
                automated analytics, and a research platform powered by RAG and multimodal LLMs for
                interactive knowledge extraction. My work consistently focuses on bridging complex
                AI capabilities with practical, user-facing systems that drive real business value.
              </p>
              <p>
                Beyond LLMs, I bring strong expertise in generative vision systems, including Stable
                Diffusion (SDXL), LoRA fine-tuning, and multimodal image and video generation
                pipelines. I have built distributed, event-driven infrastructures for training and
                deploying these models at scale, integrating GPU acceleration, asynchronous
                processing, and real-time telemetry. With a solid foundation in Mathematics and
                Computer Science, I am deeply focused on advancing AI systems that are not only
                intelligent but also scalable, production-ready, and impactful.
              </p>
            </div>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="text-balance text-3xl font-bold mb-8 flex items-center gap-2">
            <Code className="w-8 h-8 text-primary" aria-hidden="true" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card
                key={category.name}
                className="p-6 backdrop-blur-xl bg-card/50 border-primary/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.Icon className={`w-6 h-6 ${category.color}`} aria-hidden="true" />
                  <h3 className="text-balance text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className={`${category.color}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-balance text-3xl font-bold mb-8 flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary" aria-hidden="true" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card
                key={`${exp.title}-${exp.startDate}`}
                className="p-6 backdrop-blur-xl bg-card/50 border-primary/10"
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-balance text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.location}
                      {exp.isRemote ? " (Remote)" : ""}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  {exp.achievements.map((achievement) => (
                    <li key={`${exp.title}-${achievement.text}`} className="flex">
                      <span className="mr-2">•</span>
                      <span className="flex-1">{achievement.text}</span>
                    </li>
                  ))}
                </ul>
                {exp.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={`${exp.title}-${skill.name}`}
                        variant="outline"
                        className="bg-primary/5"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-balance text-3xl font-bold mb-8 flex items-center gap-2">
            <Award className="w-8 h-8 text-primary" aria-hidden="true" />
            Achievements & Awards
          </h2>
          <Card className="p-4 backdrop-blur-xl bg-card/50 border-primary/10 overflow-hidden">
            <div className="relative aspect-video w-full">
              <Image
                src="/awards/award.jpg"
                alt="Achievement Award"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </Card>
        </div>

        <div className="mb-20">
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-balance text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" aria-hidden="true" />
              Education
            </h2>
            <div className="space-y-12">
              {educationList.map((edu, eduIndex) => (
                <div key={`${edu.school}-${edu.degree}`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="text-balance font-semibold text-lg">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                    </div>
                    <div className="text-right mt-1 md:mt-0">
                      <p className="text-sm text-muted-foreground">
                        {edu.startDate} - {edu.endDate}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Activities and Societies:</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                      {edu.activities.map((activity) => (
                        <li key={activity.name}>{activity.name}</li>
                      ))}
                    </ul>
                  </div>
                  {eduIndex < educationList.length - 1 && (
                    <div className="border-t border-primary/10 mt-12" />
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-8 backdrop-blur-xl bg-card/50 border-primary/10">
            <h2 className="text-balance text-2xl font-semibold mb-6 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-primary"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Hobbies & Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby) => (
                <div key={hobby.name} className="space-y-2">
                  <Badge variant="outline" className="bg-primary/5 text-base py-2 px-3">
                    {hobby.emoji} {hobby.name}
                  </Badge>
                  <p className="text-sm text-muted-foreground pl-2">{hobby.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
