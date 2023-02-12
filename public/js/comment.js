const commentHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#comment-body").value.trim();
  console.log(comment);
  if (comment) {
    console.log(comment);
    const response = await fetch(`/api/posts/:id/comment`, {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(comment);
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to create comment");
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentHandler);
