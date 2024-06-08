import Profile from "./Profile";
import '../styles.css';

export interface ProfileProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stories: any[];
  setShowStory: (showStory: boolean) => void;
  setCurrentIndex: (currentIndex: number) => void;
}

const ProfileList = ({
  stories,
  setShowStory,
  setCurrentIndex,
}: ProfileProps) => {

  return (
    <div className="profile-list">
      {stories.map((story) => {
        return (
          <Profile
            key={story.id}
            story={story}
            setCurrentIndex={setCurrentIndex}
            setShowStory={setShowStory}
          />
        );
      })}
    </div>
  );
};

export default ProfileList;
