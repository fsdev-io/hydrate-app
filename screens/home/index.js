import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import HomeComponent from './Home';
import PushNotification from 'react-native-push-notification';

const Home = () => {
  const [progress, setProgress] = useState(new Date().getHours() / 24);

  const handleLogout = () => {
    auth().signOut();
  };

  const handleHydrate = () => {
    // remind to hydrate 2 hours after last hydration
    PushNotification.localNotificationSchedule({
      message: 'pls stay hydrated 🙌',
      channelId: 'main',
      date: new Date(Date.now() + 2 * 60 * 60 * 1000),
    });
    setProgress(progress + 2 / 24);
  };

  const props = {handleLogout, progress, handleHydrate};

  return <HomeComponent {...props} />;
};

export default Home;
