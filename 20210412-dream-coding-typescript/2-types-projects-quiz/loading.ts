{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(incoming: ResourceLoadState): void {
    if (incoming.state === "loading") {
      console.log("👀 loading...");
    } else if (incoming.state === "success") {
      console.log("😃", incoming.response.body);
    } else if (incoming.state === "fail") {
      console.log("😱", incoming.reason);
    } else {
      throw new Error("State not permitted:" + incoming);
    }
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
