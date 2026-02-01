
import { unstable_cache } from "next/cache";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

export const getGithubContributions = unstable_cache(
  async () => {
    const username = "ubeyidah";
    const url = new URL(
      `/v4/${username}`,
      "https://github-contributions-api.jogruber.de"
    );
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    let data: any;
    try {
      const res = await fetch(url, { signal: controller.signal });
      if (!res.ok) {
        throw new Error(`GitHub contributions API error: ${res.status}`);
      }
      data = await res.json();
    } catch {
      return {
        contributions: [],
        total: 0,
      };
    } finally {
      clearTimeout(timeoutId);
    }

    const now = new Date();
    const startDate = new Date(now);
    startDate.setDate(startDate.getDate() - 365);

    const filteredContributions = data.contributions.filter(
      (contribution: Contribution) => {
        const date = new Date(contribution.date);
        return date >= startDate && date <= now;
      }
    );

    return {
      contributions: filteredContributions,
      total: filteredContributions.reduce(
        (sum: number, contribution: Contribution) => sum + contribution.count,
        0
      ),
    };
  },
  ["github-contributions-ubeyidah"],
  { revalidate: 60 * 60 * 24 } // refresh daily
);
