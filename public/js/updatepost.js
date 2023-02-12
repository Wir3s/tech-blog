const updatePostHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-post").value.trim();
  const description = document.querySelector("#content-post").value.trim();



  console.log(id);
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({ name, description }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update post");
  }
};

document
  .querySelector("#update-form")
  .addEventListener("submit", updatePostHandler);
