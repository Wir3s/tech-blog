const commentHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector("#comment-body").value.trim();
  
    if (comment) {
      const response = await fetch(`/api/posts/comment`, {
        method: "POST",
        body: JSON.stringify({ comment }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/homepage");
      } else {
        alert("Failed to create post");
      }
    }
  };
  
  
  
  document.querySelector(".comment-form").addEventListener("submit", commentHandler);