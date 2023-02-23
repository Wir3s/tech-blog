console.log("Hello!");

const updatePostHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-post").value.trim();
  const description = document.querySelector("#content-post").value.trim();
  const id = event.target.getAttribute("data-id");

  console.log(id);
  if (name && description) {
    console.log(name, description);
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name: name, description: description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update post");
    }
  }
};

document
  .querySelector("#updateBtn")
  .addEventListener("click", updatePostHandler);
