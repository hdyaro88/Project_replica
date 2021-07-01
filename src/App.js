import "./App.css";
import Header from "./Components/Header/Header";
import CourseIntro from "./Components/Main/Course-Intro";
import React, { useState } from "react";
import AccessModal from "./Components/Main/Access-Modal";
import MainScreen from "./Components/Course/Sections/Main/MainScreen";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showMainScreen, setshowMainScreen] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  const showMainScreenHandler = () => {
    setshowMainScreen(true);
  };
  return (
    <React.Fragment>
      <Header onShow={showModalHandler} />
      {!showMainScreen && <CourseIntro onShow={showModalHandler} />}
      {showModal && (
        <AccessModal
          onAccess={showMainScreenHandler}
          onClose={hideModalHandler}
        />
      )}
      {showMainScreen && <MainScreen />}
    </React.Fragment>
  );
}

export default App;
