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
