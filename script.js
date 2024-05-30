document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
  
    const post = document.createElement('div');
    post.classList.add('post');
    
    const postTitle = document.createElement('h3');
    postTitle.textContent = title;
    post.appendChild(postTitle);
  
    const postContent = document.createElement('p');
    postContent.textContent = content;
    post.appendChild(postContent);
  
    document.getElementById('post-list').appendChild(post);
  
    // Limpiar el formulario
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
  });
  
  
  
  