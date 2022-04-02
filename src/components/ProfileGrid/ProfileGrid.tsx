import { FC } from "react";
import { Profile } from "./Profile/Profile";

type ProfileGridProps = {
  profiles: Array<any>;
};

export const ProfileGrid: FC<ProfileGridProps> = ({ profiles }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-6">
      {profiles.map((profile, index) => (
        <Profile key={Date.now() + index} profile={profile} />
      ))}
    </div>
  );
};
