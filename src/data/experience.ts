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
        text: "Delivered a production-grade analytics and forecasting platform for a US-based client on Google Cloud Platform, integrating time-series ML pipelines with a multi-agent BigQuery AI Assistant (LangGraph + Vertex AI), improving forecast accuracy by 42% and handling 500K+ queries daily with 65% lower response latency.",
      },
      {
        text: "Deployed a Legal Intelligence system for Ashmans Solicitors Ltd (UK) using custom Corrective RAG (CRAG) and a hybrid OCR pipeline, processing 50,000+ legal documents with 98% accuracy, achieving 94% QA precision, and reducing manual review effort by 70%.",
      },
      {
        text: "Collaborated with BuiltIn.com to develop a multi-agent AI system using LangGraph, integrating prompt engineering and MCP (Claude, LibreChat) for tool-augmented workflows, achieving low-latency responses and consistently high accuracy in enterprise task execution.",
      },
      {
        text: "Implemented diffusion-based image and video generation pipelines (SDXL + LoRA) for Loomi Sports (Canada), optimizing fine-tuning workflows and reducing training time by 70% for production advertisement deployment.",
      },
      {
        text: "Spearheaded the development of multilingual AI solutions for enterprise clients including Genova Healthcare, Estitmar Holdings, and Awtad, improving decision-making speed by 30% and supporting 1,800+ internal users.",
      },
      {
        text: "Implemented predictive maintenance pipelines for Gulf Experts, improving prediction accuracy by 28% and reducing unplanned downtime by 22%.",
      },
      {
        text: "Developed AI-powered voice and chat systems for CowParadise Games, integrating real-time STT/TTS pipelines and LLM-based interactions using OpenAI Realtime APIs and custom fine-tuned models, achieving sub-300ms latency.",
      },
      {
        text: "Developed a multimodal AI pipeline for PostPals World, combining GPT-4 image generation, YOLO face detection, ESRGAN enhancement, and ControlNet-based conditioning to generate personalized AI companion visuals from user images.",
      },
      {
        text: "Led and mentored a team of 8 interns and developers, managing client engagements, communicating technical solutions to stakeholders, and ensuring successful delivery of AI systems across international projects.",
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
    title: "AI Engineer",
    company: "CDAC - Center for Development of Advanced Computing",
    location: "Kerala, India",
    startDate: "March 2024",
    endDate: "December 2024",
    isRemote: false,
    achievements: [
      {
        text: "Built end-to-end deep learning pipelines for histopathological Whole Slide Images (WSI), integrating U-Net-based segmentation and detection models to identify Tumor-Infiltrating Lymphocytes (TIL) in Triple-Negative Breast Cancer (TNBC), improving detection accuracy by 35% and segmentation precision by 28%.",
      },
      {
        text: "Developed computer vision-based detection systems using OpenCV and YOLOv8/v5 for medical imaging, enabling real-time analysis and improving diagnostic accuracy across multiple cancer detection tasks.",
      },
      {
        text: "Implemented cervical cancer detection pipelines on WSI data, achieving 92% recall and reducing false negatives by 45%, enhancing reliability of early-stage diagnosis.",
      },
      {
        text: "Contributed to AI-driven healthcare systems under the UN Inter-Agency Task Force Award-winning 'Digitally Connected Tribal Colonies' initiative, enabling telemedicine-based screening for cervical cancer, oral cancer, diabetic retinopathy, and other NCDs across tribal regions.",
      },
      {
        text: "Designed and deployed FastAPI-based backend services for real-time inference, supporting LLM-powered clinical pipelines and large-scale annotated medical image datasets.",
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
        text: "Designed and deployed interactive dashboards using Tableau and Power BI, along with automated data pipelines in Python (Pandas) and SQL, reducing manual reporting effort by 35% and saving 120+ hours per month.",
      },
      {
        text: "Analyzed large-scale sales and advertising data (tens of thousands of records/month) to evaluate campaign performance, client retention, and ROI, identifying key revenue drivers and high-performing strategies.",
      },
      {
        text: "Performed comparative analysis on campaign variables such as location, pricing, and creatives to optimize campaign effectiveness and improve overall revenue outcomes.",
      },
      {
        text: "Delivered data-driven insights to 3-4 key stakeholders, influencing client prioritization, pricing strategies, and resource allocation, enabling faster and more informed business decision-making.",
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
