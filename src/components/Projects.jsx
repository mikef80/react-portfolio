import axios from "axios";
import { useEffect, useState } from "react";

export const Projects = () => {
  const [repos, setRepos] = useState([
    {
      id: 721078524,
      node_id: "R_kgDOKvrI_A",
      name: "be-nc-news",
      full_name: "mikef80/be-nc-news",
      private: false,
      owner: {
        login: "mikef80",
        id: 9698001,
        node_id: "MDQ6VXNlcjk2OTgwMDE=",
        avatar_url: "https://avatars.githubusercontent.com/u/9698001?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/mikef80",
        html_url: "https://github.com/mikef80",
        followers_url: "https://api.github.com/users/mikef80/followers",
        following_url:
          "https://api.github.com/users/mikef80/following{/other_user}",
        gists_url: "https://api.github.com/users/mikef80/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/mikef80/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/mikef80/subscriptions",
        organizations_url: "https://api.github.com/users/mikef80/orgs",
        repos_url: "https://api.github.com/users/mikef80/repos",
        events_url: "https://api.github.com/users/mikef80/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/mikef80/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/mikef80/be-nc-news",
      description: "Reddit-clone API backend",
      fork: false,
      url: "https://api.github.com/repos/mikef80/be-nc-news",
      forks_url: "https://api.github.com/repos/mikef80/be-nc-news/forks",
      keys_url: "https://api.github.com/repos/mikef80/be-nc-news/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/mikef80/be-nc-news/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/mikef80/be-nc-news/teams",
      hooks_url: "https://api.github.com/repos/mikef80/be-nc-news/hooks",
      issue_events_url:
        "https://api.github.com/repos/mikef80/be-nc-news/issues/events{/number}",
      events_url: "https://api.github.com/repos/mikef80/be-nc-news/events",
      assignees_url:
        "https://api.github.com/repos/mikef80/be-nc-news/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/mikef80/be-nc-news/branches{/branch}",
      tags_url: "https://api.github.com/repos/mikef80/be-nc-news/tags",
      blobs_url:
        "https://api.github.com/repos/mikef80/be-nc-news/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/mikef80/be-nc-news/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/mikef80/be-nc-news/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/mikef80/be-nc-news/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/mikef80/be-nc-news/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/mikef80/be-nc-news/languages",
      stargazers_url:
        "https://api.github.com/repos/mikef80/be-nc-news/stargazers",
      contributors_url:
        "https://api.github.com/repos/mikef80/be-nc-news/contributors",
      subscribers_url:
        "https://api.github.com/repos/mikef80/be-nc-news/subscribers",
      subscription_url:
        "https://api.github.com/repos/mikef80/be-nc-news/subscription",
      commits_url:
        "https://api.github.com/repos/mikef80/be-nc-news/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/mikef80/be-nc-news/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/mikef80/be-nc-news/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/mikef80/be-nc-news/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/mikef80/be-nc-news/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/mikef80/be-nc-news/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/mikef80/be-nc-news/merges",
      archive_url:
        "https://api.github.com/repos/mikef80/be-nc-news/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/mikef80/be-nc-news/downloads",
      issues_url:
        "https://api.github.com/repos/mikef80/be-nc-news/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/mikef80/be-nc-news/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/mikef80/be-nc-news/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/mikef80/be-nc-news/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/mikef80/be-nc-news/labels{/name}",
      releases_url:
        "https://api.github.com/repos/mikef80/be-nc-news/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/mikef80/be-nc-news/deployments",
      created_at: "2023-11-20T10:09:22Z",
      updated_at: "2024-01-17T15:23:20Z",
      pushed_at: "2023-12-15T10:36:42Z",
      git_url: "git://github.com/mikef80/be-nc-news.git",
      ssh_url: "git@github.com:mikef80/be-nc-news.git",
      clone_url: "https://github.com/mikef80/be-nc-news.git",
      svn_url: "https://github.com/mikef80/be-nc-news",
      homepage: "",
      size: 644,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ["portfolio-project"],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 730141497,
      node_id: "R_kgDOK4UTOQ",
      name: "fe-nc-news",
      full_name: "mikef80/fe-nc-news",
      private: false,
      owner: {
        login: "mikef80",
        id: 9698001,
        node_id: "MDQ6VXNlcjk2OTgwMDE=",
        avatar_url: "https://avatars.githubusercontent.com/u/9698001?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/mikef80",
        html_url: "https://github.com/mikef80",
        followers_url: "https://api.github.com/users/mikef80/followers",
        following_url:
          "https://api.github.com/users/mikef80/following{/other_user}",
        gists_url: "https://api.github.com/users/mikef80/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/mikef80/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/mikef80/subscriptions",
        organizations_url: "https://api.github.com/users/mikef80/orgs",
        repos_url: "https://api.github.com/users/mikef80/repos",
        events_url: "https://api.github.com/users/mikef80/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/mikef80/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/mikef80/fe-nc-news",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/mikef80/fe-nc-news",
      forks_url: "https://api.github.com/repos/mikef80/fe-nc-news/forks",
      keys_url: "https://api.github.com/repos/mikef80/fe-nc-news/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/mikef80/fe-nc-news/teams",
      hooks_url: "https://api.github.com/repos/mikef80/fe-nc-news/hooks",
      issue_events_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/issues/events{/number}",
      events_url: "https://api.github.com/repos/mikef80/fe-nc-news/events",
      assignees_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/branches{/branch}",
      tags_url: "https://api.github.com/repos/mikef80/fe-nc-news/tags",
      blobs_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/languages",
      stargazers_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/stargazers",
      contributors_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/contributors",
      subscribers_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/subscribers",
      subscription_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/subscription",
      commits_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/mikef80/fe-nc-news/merges",
      archive_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/downloads",
      issues_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/labels{/name}",
      releases_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/mikef80/fe-nc-news/deployments",
      created_at: "2023-12-11T09:45:57Z",
      updated_at: "2024-01-17T15:59:10Z",
      pushed_at: "2023-12-15T12:07:26Z",
      git_url: "git://github.com/mikef80/fe-nc-news.git",
      ssh_url: "git@github.com:mikef80/fe-nc-news.git",
      clone_url: "https://github.com/mikef80/fe-nc-news.git",
      svn_url: "https://github.com/mikef80/fe-nc-news",
      homepage: "",
      size: 1231,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: ["portfolio-project"],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
  ]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    
    axios
      .get("https://api.github.com/users/mikef80/repos")
      .then(({ data }) => {
        const filteredRepos = data.filter((repo) =>
          repo.topics.includes("portfolio-project")
        );
        return filteredRepos;
      })
      .then((portfolioRepos) => {
        setRepos(portfolioRepos);
      })
      .then(() => {
        setIsloading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className='px-2 pb-2 w-full flex flex-col items-center h-auto grow'>
        <h3 className='text-2xl pb-2'>Projects</h3>
        <p className='pt-5 animate-pulse'>Loading</p>
      </div>
    );
  }

  return (
    <div className='px-2 pb-2'>
      <h3 className='text-2xl pb-2'>Projects</h3>
      <p>Here are a selection of my projects:</p>
      <ul>
        {repos.map((repo) => {
          return (
            <li className='border-2 border-black p-1'>
              <a href={repo.html_url}>
                <h4 className='text-xl font-medium'>{repo.name}</h4>
                <p className='font-light'>{repo.description}</p>
                <p></p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
