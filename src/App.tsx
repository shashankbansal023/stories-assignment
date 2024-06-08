import { useState, useEffect } from "react";
import fetchStories from "./helpers";
import ProfileList from "./components/ProfileList";
import Story from "./components/Story";
import "./styles.css";

function App() {
  const [stories, setStories] = useState([]);
  const [showStory, setShowStory] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const fetchStoriesData = async () => {
      const storiesData = await fetchStories();
      setStories(storiesData);
    };

    fetchStoriesData();
  }, []);

  console.log("current index" , currentIndex , showStory);
  return (
    <div className="container">
      {!showStory ? (
        <ProfileList
          stories={stories}
          setShowStory={setShowStory}
          setCurrentIndex={setCurrentIndex}
        />
      ) : null}
      {showStory ? (
        <Story
          stories={stories}
          currentIndex={currentIndex}
          showStory={showStory}
          setShowStory={setShowStory}
          setCurrentIndex={setCurrentIndex}
        />
      ) : null}
    </div>
  );
}

export default App;
