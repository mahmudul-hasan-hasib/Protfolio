interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly [key: string]: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/**
 * BASE URL (safe + no trailing slash)
 */
const BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");

/**
 * Generic GET
 */
async function fetchData<T>(endpoint: string): Promise<T | null> {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API error on ${endpoint}:`, error);
    return null;
  }
}

/**
 * Generic POST
 */
async function postData<TBody, TResponse>(
  endpoint: string,
  body: TBody
): Promise<TResponse | null> {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`POST failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`POST API error on ${endpoint}:`, error);
    return null;
  }
}

/* =========================
   TYPES
========================= */

export type ProfileApi = {
  id: number;
  full_name: string;
  headline: string;
  short_intro: string;
  profile_image: string | null;
  availability_status: string;
  footer_text: string;
  contact_cta_text: string;
  email: string;
  location: string;
};

export type ProjectApi = {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  image: string | null;
  tech_stack: string[];
  github_link: string;
  live_link: string;
  featured: boolean;
  category: string;
  ordering: number;
  created_at: string;
  updated_at: string;
};

export type SkillCategoryApi = {
  id: number;
  title: string;
  icon_name: string;
  skills: string[];
  ordering: number;
};

export type TimelineItemApi = {
  id: number;
  period: string;
  title: string;
  description: string;
  item_type: "project" | "learning" | "experience";
  ordering: number;
  created_at: string;
  updated_at: string;
};

export type CaseStudyApi = {
  id: number;
  badge: string;
  title: string;
  description: string;
  image: string | null;
  metrics: Record<string, string>;
  sections: Record<string, string>;
  tech_stack: string[];
  result: string;
  live_link: string;
  github_link: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type SocialLinkApi = {
  id: number;
  name: string;
  platform: string;
  url: string;
  is_active: boolean;
  ordering: number;
};

export type ResumeApi = {
  id: number;
  title: string;
  file: string | null;
  is_active: boolean;
  download_count: number;
  updated_at: string;
};

export type TopRepositoryApi = {
  id: number;
  name: string;
  url: string;
  description: string;
  stars: number;
  tech_stack: string[];
  ordering: number;
};

export type GithubStatsApi = {
  id: number;
  contributions_count: number;
  repositories_count: number;
  stars_count: number;
  top_repositories: TopRepositoryApi[];
  updated_at: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactResponse = {
  message: string;
};

/* =========================
   API CALLS
========================= */

export const getProfile = () => fetchData<ProfileApi>("/profile/");

export const getProjects = () =>
  fetchData<ProjectApi[]>("/projects/");

export const getFeaturedProjects = () =>
  fetchData<ProjectApi[]>("/projects/featured/");

export const getSkills = () =>
  fetchData<SkillCategoryApi[]>("/skills/");

export const getTimeline = () =>
  fetchData<TimelineItemApi[]>("/timeline/");

export const getCaseStudy = () =>
  fetchData<CaseStudyApi>("/case-study/");

export const getSocialLinks = () =>
  fetchData<SocialLinkApi[]>("/social-links/");

export const getResume = () =>
  fetchData<ResumeApi>("/resume/");

export const getGithubStats = () =>
  fetchData<GithubStatsApi>("/github/");

export const sendContactMessage = (payload: ContactPayload) =>
  postData<ContactPayload, ContactResponse>("/contact/", payload);