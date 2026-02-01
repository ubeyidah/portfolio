import { getGithubContributions } from "@/lib/github-contributions";
import GithubActivity from "./github-activity";

export default async function Page() {
  const { contributions } = await getGithubContributions();

  return (
    <section>
      <div className="px-4 pt-4 pb-8">
        <GithubActivity data={contributions} />
      </div>
    </section>
  );
}
