/* eslint-disable @typescript-eslint/no-explicit-any */

import { ProfileProps } from "./ProfileList";
import '../styles.css';

const Profile = ({story, setShowStory, setCurrentIndex}: {
    story: any;
    setShowStory: ProfileProps["setShowStory"];
    setCurrentIndex: ProfileProps["setCurrentIndex"];
}) => {
    return (
        <div className='profile-container'>
            <img src={story.url} className='profile-pic' onClick={() => {
                setShowStory(true);
                setCurrentIndex(story.id);
            }}/>
        </div>
    )
};

export default Profile;