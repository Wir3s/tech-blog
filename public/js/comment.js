const commentHandler = async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector("#comment-body").value.trim();
  const id = event.target.getAttribute("data-id");

  console.log(comment_text);

  if (comment_text) {
    console.log(comment_text);
    const response = await fetch(`/api/posts/${id}/comment`, {
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

function unHide() {
  document.getElementById("hideCom").style.visibility = "visible";
}

document.querySelector("#commentBtn").addEventListener("click", commentHandler);

document.querySelector("#unHide").addEventListener("click", unHide);
