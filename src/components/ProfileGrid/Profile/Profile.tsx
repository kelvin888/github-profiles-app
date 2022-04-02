import { FC } from "react";
import { Avatar } from "../../Avatar/Avatar";
import "./profile.css"

type ProfileProps = {
  profile: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: false;
    score: 1.0;
  };
};
export const Profile: FC<ProfileProps> = ({ profile }) => {
  return (
    <div className="profile text- p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-2xl">
      <Avatar avatar_url={profile?.avatar_url} />
      <p className="text-2xl mt-3">{profile.login}</p>
      <div className="profile-details">
        <p>Score: {profile?.score}</p>
        <a href={profile?.html_url} target="_blank" rel="noreferrer">{profile?.html_url}</a>
      </div>
    </div>
  );
};
