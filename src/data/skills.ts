import Brain from "lucide-react/dist/esm/icons/brain";
import Cloud from "lucide-react/dist/esm/icons/cloud";
import Code from "lucide-react/dist/esm/icons/code";
import Database from "lucide-react/dist/esm/icons/database";
import Terminal from "lucide-react/dist/esm/icons/terminal";
import type { ElementType } from "react";

export interface SkillCategory {
  name: string;
  Icon: ElementType;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI, Machine Learning & Generative AI",
    Icon: Brain,
    color: "bg-purple-500/10 text-purple-500",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Reinforcement Learning",
      "Neural Networks",
      "Generative AI",
      "Large Language Models (LLMs)",
      "LLM Fine-Tuning",
      "Prompt Engineering",
      "Diffusion Models",
      "Stable Diffusion (SDXL)",
      "LoRA Fine-Tuning",
      "Image Generation",
      "Video Generation",
      "Multimodal AI",
      "Computer Vision (YOLOv8, U-Net)",
      "OCR Pipelines",
      "Neuro-symbolic AI",
      "Causal Inference",
    ],
  },

  {
    name: "LLM Systems & Agentic AI",
    Icon: Code,
    color: "bg-green-500/10 text-green-500",
    skills: [
      "RAG Systems",
      "CRAG (Corrective RAG)",
      "AI Agents",
      "Multi-Agent Systems",
      "LangChain / LangGraph",
      "Model Context Protocol (MCP)",
      "OpenAI Realtime API",
      "Speech-to-Text (STT)",
      "Text-to-Speech (TTS)",
      "Voice AI Integration",
      "AI Automation Systems",
      "Scalable Architectures",
    ],
  },

  {
    name: "Backend & Data Engineering",
    Icon: Terminal,
    color: "bg-orange-500/10 text-orange-500",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "Node.js",
      "TypeScript",
      "REST APIs",
      "System Design",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Celery",
      "RabbitMQ",
      "SQL",
    ],
  },

  {
    name: "Cloud, MLOps & Deployment",
    Icon: Cloud,
    color: "bg-blue-500/10 text-blue-500",
    skills: [
      "AWS (EC2, Lambda, S3, SageMaker, EKS)",
      "Google Cloud Platform (GCP)",
      "Vertex AI",
      "BigQuery ML",
      "Docker",
      "Kubernetes",
      "CI/CD (GitHub Actions)",
      "GPU Acceleration",
      "Model Optimization",
      "MLflow",
      "DVC",
    ],
  },

  {
    name: "Data Science & Analytics",
    Icon: Database,
    color: "bg-red-500/10 text-red-500",
    skills: [
      "Feature Engineering",
      "Statistical Modeling",
      "Clustering",
      "Dimensionality Reduction (PCA)",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Tableau",
      "Power BI",
      "Plotly Dash",
      "Vector Databases (Qdrant, FAISS, pgvector, Pinecone)",
      "Elasticsearch",
    ],
  },
];
