const newPostHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-post').value.trim();
    const description = document.querySelector('#content-post').value.trim();
    
  
    if (name && description) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };


document
  .querySelector(".post-form")
  .addEventListener('submit', newPostHandler);