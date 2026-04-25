export interface Achievement {
  text: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isRemote?: boolean;
  achievements: Achievement[];
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    title: "Machine Learning Engineer",
    company: "Mindsmap AI Services",
    location: "India",
    startDate: "June 2024",
    endDate: "Present",
    isRemote: true,
    achievements: [
      {
        text: "Orchestrated and deployed a production-grade analytics and forecasting platform on Google Cloud Platform, integrating time-series ML pipelines with a multi-agent BigQuery AI Assistant (LangGraph + Vertex AI), improving forecast accuracy by 42% and handling 500K+ daily queries with 65% lower latency.",
      },
      {
        text: "Designed and implemented a Legal Intelligence platform for Ashmans Solicitors Ltd (UK) using custom Corrective RAG (CRAG) and a hybrid OCR pipeline, processing 50,000+ legal documents at 98% accuracy and reducing manual review effort by 70%.",
      },
      {
        text: "Collaborated cross-functionally with BuiltIn.com to architect a multi-agent AI system leveraging LangGraph, advanced prompt engineering, and Model Context Protocol (MCP) for tool-augmented workflows, achieving consistently high accuracy and low-latency enterprise task execution.",
      },
      {
        text: "Optimized diffusion-based image and video generation pipelines (SDXL + LoRA) for Loomi Sports (Canada), streamlining fine-tuning workflows and reducing training time by 70% for production deployment.",
      },
      {
        text: "Established predictive maintenance pipelines for Gulf Experts, raising prediction accuracy by 28% and reducing unplanned downtime by 22%. Spearheaded multilingual AI solutions for enterprise clients including Genova Research Organisation, Estithmar Holdings, and Awtad, accelerating decision-making by 30% across 1,800+ internal users.",
      },
      {
        text: "Launched real-time voice and chat systems for CowParadise Games using STT/TTS pipelines and fine-tuned LLMs with OpenAI Realtime APIs, delivering sub-300ms latency and markedly improved interaction quality.",
      },
      {
        text: "Created a multimodal AI pipeline for PostPals World combining GPT-4 image generation, YOLO face detection, ESRGAN enhancement, and ControlNet conditioning to generate personalized AI companion visuals from user photos.",
      },
      {
        text: "Provided technical leadership and mentorship to a team of 8 interns and developers while managing client engagements and communicating complex AI solutions to non-technical stakeholders across international projects.",
      },
    ],
    skills: [
      { name: "Machine Learning" },
      { name: "LangGraph" },
      { name: "LangChain" },
      { name: "Large Language Models (LLMs)" },
      { name: "RAG / CRAG Systems" },
      { name: "AI Agents / Multi-Agent Systems" },
      { name: "Diffusion Models (SDXL, LoRA)" },
      { name: "Computer Vision (YOLO, ControlNet)" },
      { name: "OpenAI Realtime API" },
      { name: "STT / TTS" },
      { name: "Multimodal AI" },
      { name: "FastAPI" },
      { name: "Python" },
      { name: "Google Cloud Platform (GCP)" },
      { name: "Vertex AI" },
      { name: "BigQuery ML" },
      { name: "AWS" },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "OCR Pipelines" },
      { name: "Vector Databases" },
      { name: "MCP (Model Context Protocol)" },
    ],
  },
  {
    title: "AI Engineer (Contract)",
    company: "CDAC - Center for Development of Advanced Computing",
    location: "Kerala, India",
    startDate: "March 2024",
    endDate: "December 2024",
    isRemote: false,
    achievements: [
      {
        text: "Led end-to-end deep learning pipelines for histopathological Whole Slide Images (WSI), incorporating preprocessing, U-Net segmentation, and YOLO-based detection models to identify Tumor-Infiltrating Lymphocytes in Triple-Negative Breast Cancer, increasing detection accuracy by 35% and segmentation precision by 28%.",
      },
      {
        text: "Engineered real-time computer vision detection systems using OpenCV and YOLOv8/v5 for medical imaging, enabling faster analysis and improving diagnostic accuracy across multiple cancer detection tasks.",
      },
      {
        text: "Pioneered cervical cancer detection pipelines on WSI data, achieving 92% recall and reducing false negatives by 45% to support earlier clinical diagnosis.",
      },
      {
        text: "Contributed to AI-driven telemedicine screening under the United Nations Inter-Agency Task Force Award-winning 'Digitally Connected Tribal Colonies' initiative, covering cervical cancer, oral cancer, diabetic retinopathy, and other non-communicable diseases in tribal regions.",
      },
      {
        text: "Restructured and launched FastAPI backend services for real-time model inference, supporting LLM-enhanced clinical pipelines and large-scale annotated medical image datasets with low-latency performance.",
      },
    ],
    skills: [
      { name: "Computer Vision" },
      { name: "YOLOv5 / YOLOv8" },
      { name: "U-Net Segmentation" },
      { name: "OpenCV" },
      { name: "Medical Imaging AI" },
      { name: "Transformers" },
      { name: "Multimodal AI" },
      { name: "LLMs" },
      { name: "RAG" },
      { name: "PostgreSQL" },
      { name: "MATLAB" },
      { name: "Label Studio" },
      { name: "Docker" },
      { name: "FastAPI" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Data Analyst",
    company: "MattGloss Advertising",
    location: "Kerala, India",
    startDate: "July 2020",
    endDate: "June 2022",
    isRemote: false,
    achievements: [
      {
        text: "Built interactive Tableau and Power BI dashboards supported by automated Python (Pandas) and SQL data pipelines, reducing manual reporting effort by 35% and saving 120+ hours per month.",
      },
      {
        text: "Analyzed large-scale sales and advertising datasets (tens of thousands of records per month) to evaluate campaign performance, client retention, and ROI, identifying key revenue drivers and high-performing strategies.",
      },
      {
        text: "Conducted comparative analysis of campaign variables including location, pricing, and creatives to optimize effectiveness and increase overall revenue outcomes.",
      },
      {
        text: "Delivered data-driven recommendations to 3–4 senior stakeholders, shaping client prioritization, pricing strategies, and resource allocation for faster business decisions.",
      },
    ],
    skills: [
      { name: "SQL" },
      { name: "Tableau" },
      { name: "Power BI" },
      { name: "Python (Pandas)" },
      { name: "Excel" },
      { name: "Data Analysis" },
      { name: "Data Visualization" },
      { name: "Reporting & Dashboards" },
      { name: "Business Analytics" },
    ],
  },
];
