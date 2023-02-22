const commentHandler = async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector("#comment-body").value.trim();

  console.log(comment_text);
  
  if (comment_text) {
    console.log(comment_text);
    const response = await fetch(`/api/posts/:id/comment`, {
      method: "POST",
      body: JSON.stringify({ comment_text }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(comment_text);
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
