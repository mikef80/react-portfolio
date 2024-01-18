import { Octokit } from "@octokit/core";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";

export const octoFetch = async () => {
  const MyOctokit = Octokit.plugin(restEndpointMethods);
  const octokit = new MyOctokit({
    auth: "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",
  });

  const {
    data: { items },
  } = await octokit.rest.search.repos({
    q: "user:mikef80+topic:portfolio-project",
  });

  const mappedArray = await Promise.all(
    items.map(async ({ name, description, html_url: url }) => {
      const { data: languages } = await octokit.rest.repos.listLanguages({
        owner: "mikef80",
        repo: name,
      });

      let langCount = 0;

      for (let key in languages) {
        langCount += languages[key];
      }

      languages.total = langCount;

      return { name, description, url, languages };
    })
  );

  return mappedArray;
};
