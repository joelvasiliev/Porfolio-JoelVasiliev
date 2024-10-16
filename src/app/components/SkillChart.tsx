import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "NextJS", level: 90 },
  { name: "NestJS", level: 90 },
  { name: "TypeScript", level: 95 },
  { name: "Docker", level: 80 },
  { name: "Infraestrutura com AWS", level: 75 },
  { name: "DevOps", level: 70 },
  { name: "IA", level: 90 },
  { name: "Chatbots", level: 95 },
  { name: "PWA", level: 70 },
  { name: "SQL e NOSQL", level: 70 },
  { name: "Pipelines CI/CD", level: 70 },
  { name: "Metodologias Ágeis", level: 85 },
]

export default function SkillChart() {
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Minhas Habilidades</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col sm:flex-row sm:items-center">
            <span className="text-sm font-medium text-gray-700 w-full sm:w-1/4 mb-2 sm:mb-0">
              {skill.name}
            </span>
            <div className="w-full sm:w-3/4 flex items-center">
              <Progress value={skill.level} className="w-full" />
              <span className="ml-2 text-sm font-medium text-gray-600">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}