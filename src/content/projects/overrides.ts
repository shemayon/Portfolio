/**
 * Per-project override flags for featured status, URLs, and visibility.
 */
export type ProjectOverride = {
  featured?: boolean;
  rank?: number;
  primaryUrlOverride?: string;
  liveUrl?: string;
  docsUrl?: string;
  highlights?: string[];
  categoryOverride?: string;
  hide?: boolean;
};

/** Manual overrides keyed by project id. */
export const projectOverrides: Record<string, ProjectOverride> = {
  "ADIDS-Advanced-Drone-Intrusion-Detection-System-2026": {
    featured: true,
    highlights: [
      "Real-time packet streaming → ML inference pipeline",
      "Explainable AI using SHAP for feature-level reasoning",
      "Validated with low False Positive Rate (1.07%) on 2.9M samples",
      "FastAPI microservice for tactical edge UAV deployment",
      "Adversarial hardening using FGSM against stealth evasions"
    ],
  },
  "Phoenix-Digital-Twin": {
    featured: true,
  },
  "DevPro-Orchestrator": {
    featured: true,
  },
  ScoutifyAI: {
    featured: true,
  },
  "CNN-RNN-A-Unified-Framework-for-Multi-Label-Image-Classification": {
    featured: true,
  },
  "Realtime-Eye-Tracking-and-Gaze-Estimator": {
    featured: true,
  },
  "FLUX-Based-Text-to-Image-Generator-App": {
    featured: true,
  },
};
