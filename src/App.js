import React, { useEffect, useCallback } from "react";
import { Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./store/counterSlice";
import { logIn, logOut } from "./store/authSlice";

function App() {
  const globalState = useSelector((store) => store);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(increase(51));
  }, [dispatch]);

  return (
    <Container>
      {" "}
      <div className="app mt-5 text-center">
        <h1>Redux basic counter </h1>
        {globalState.auth.visible && (
          <>
            <p> counter : {globalState.counter.value} </p>
            <Button
              variant="outline-secondary"
              onClick={() => {
                dispatch(increase(2));
              }}
            >
              {" "}
              increase
            </Button>{" "}
            <Button
              variant="outline-secondary"
              onClick={() => {
                dispatch(decrease(1));
              }}
            >
              decrease
            </Button>{" "}
          </>
        )}
        <Button
          variant="outline-secondary"
          className="d-block  text-center mt-3 mx-auto "
          onClick={() => {
            globalState.auth.visible ? dispatch(logOut()) : dispatch(logIn());
          }}
        >
          {globalState.auth.visible ? "logOut" : "login"}
        </Button>{" "}
      </div>{" "}
    </Container>
  );
}

export default App;
