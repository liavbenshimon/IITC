// question 8
// const getAllPosts = async () => {
//     try {
//       const response = await axios.get('https://api-playground-ten.vercel.app/posts');
//       console.log('All posts:', response.data);
//     } catch (error) {
//       console.error('Error fetching posts:', error.response?.data || error.message);
//     }
//   };
  
//   getAllPosts();

  // question 9

  const getAllPosts = async () => {
    try {
      
      const response = await axios.get('https://api-playground-ten.vercel.app/posts');
      const posts = response.data;
  
      
      const postsList = document.getElementById('posts-list');
      
      
      postsList.innerHTML = '';
  
      
      posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.textContent = post.title; 
        postsList.appendChild(listItem);
      });
  
    } catch (error) {
      console.error('Error fetching posts:', error.response?.data || error.message);
    }
  };
  
  
  getAllPosts();
  
// quwstion 10

const getSingalPosts = async () => {
    try {
        const response = await axios.get('https://api-playground-ten.vercel.app/posts');
        const posts = response.data;

        const postsList = document.getElementById('posts-list');

        postsList.innerHTML = "";
        
    } catch (error) {
        console.error('Error fetching posts:', error.response?.data || error.message);
    }
}











