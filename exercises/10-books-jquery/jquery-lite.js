window.$ = {
  ajax(options) {
    fetch(options.url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ajax request failed");
        }
        return response.json();
      })
      .then((data) => {
        if (typeof options.success === "function") {
          options.success(data);
        }
      })
      .catch((error) => {
        if (typeof options.error === "function") {
          options.error(error);
        }
      });
  }
};
