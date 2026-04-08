import { type Profile, ProfileSchema } from "@/lib/schemas/profile";

/** Canonical profile content used across metadata and UI copy. */
export const PROFILE: Profile = ProfileSchema.parse({
  name: "Shemayon Soloman",
  heroTagline:
    "Machine Learning Engineer @ Mindsmap AI | AI/ML Developer | Generative AI (LLMs + Diffusion + Video) Specialist | AI Automation Engineer | Python Backend Developer",

  shortTitle: "Machine Learning Engineer & Generative AI Systems Developer",

  summary:
    "Machine Learning Engineer with 4+ years of experience building and deploying real-world AI systems across generative AI, computer vision, and LLMs. Delivered scalable enterprise solutions for international clients in healthcare, legal, and advertising domains, with expertise in LangGraph, RAG/CRAG, diffusion models, and cloud-native architectures on AWS and GCP.",

  aboutLead:
    "Machine Learning Engineer focused on Generative AI (LLMs, Diffusion, Voice AI), multi-agent systems, and scalable cloud-native solutions for international enterprise clients.",

  aboutBody:
    "Machine Learning Engineer at Mindsmap AI with 4+ years of experience building production-grade AI/ML systems for international clients across healthcare, legal, and enterprise domains. Expert in LLM-powered applications, RAG and CRAG systems, and multi-agent orchestration (LangGraph, MCP). Strong track record in diffusion models (SDXL, LoRA fine-tuning), computer vision (YOLOv8, U-Net), and voice AI with OpenAI Realtime APIs. Led a team of 8 and delivered measurable results -- 42% forecast accuracy improvement, 70% reduction in legal review effort, and sub-300ms voice AI latency -- deployed on AWS and GCP for scalable, real-world performance.",

  websiteSummary:
    "Portfolio of Shemayon Soloman, Machine Learning Engineer specializing in Generative AI (LLMs, Diffusion, Voice AI), multi-agent systems, and scalable cloud-native deployments on AWS and GCP.",

  keywords: [
    "Machine Learning Engineer",
    "AI/ML Developer",
    "AI Engineer",
    "Generative AI",
    "Diffusion Models",
    "Stable Diffusion",
    "SDXL",
    "LoRA Training",
    "Image Generation",
    "Video Generation",
    "Multimodal AI",
    "Computer Vision",
    "AI Automation",
    "Researcher",

    "Machine Learning",
    "Deep Learning",
    "Reinforcement Learning",
    "Neural Networks",
    "Large Language Models",
    "LLM Fine-Tuning",
    "Prompt Engineering",

    "RAG Systems",
    "CRAG",
    "AI Agents",
    "Multi-Agent Systems",
    "Model Context Protocol",
    "MCP",
    "LangChain",
    "LangGraph",

    "TensorFlow",
    "PyTorch",
    "Hugging Face Diffusers",
    "OpenAI Realtime API",
    "Voice AI",
    "Speech-to-Text",
    "Text-to-Speech",

    "MLOps",
    "Data Science",
    "Statistical Modeling",
    "Clustering Algorithms",
    "PCA",
    "Feature Engineering",

    "Python",
    "FastAPI",
    "Backend Development",
    "API Development",
    "TypeScript",
    "Node.js",

    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitHub Actions",

    "AWS",
    "AWS SageMaker",
    "Google Cloud Platform",
    "Vertex AI",
    "BigQuery ML",
    "Cloud Computing",
    "Cloud Architecture",
    "Serverless",

    "Vector Databases",
    "Qdrant",
    "FAISS",
    "pgvector",
    "Pinecone",
    "PostgreSQL",
    "MongoDB",
    "Redis",

    "Scalable Architectures",
    "AI Products",
    "GPU Optimization",
    "Model Acceleration",
    "Innovation",
  ],
  email: "shemayons@gmail.com",
  mobile: "+971502531425",
  whatsapp: "+917356550225",
  github: "https://github.com/shemayon",
  linkedin: "https://linkedin.com/in/shemayon-soloman",
  huggingface: "https://huggingface.co/shemayons",
  medium: "https://medium.com/@shemayons",
  location: "Kerala, India",
  coordinates: "10.8505° N, 76.2711° E",
});
