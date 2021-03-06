async function newPostHandler(event) {
  event.preventDefault();

  const title = document
    .querySelector('textarea[name="newPost-title"]')
    .value.trim();

  const content = document
    .querySelector('textarea[name="newPost-content"]')
    .value.trim();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (title) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
        post_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".newPost-form")
  .addEventListener("submit", newPostHandler);
