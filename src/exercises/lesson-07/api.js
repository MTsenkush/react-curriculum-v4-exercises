const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';

export async function getPosts() {
  console.log('[getPosts]: fetching list of posts');

  const url = POSTS_ENDPOINT + '?_limit=10';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `[getPosts]: failed to fetch posts! status: ${response.status}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error('[getPosts]:', error);
    throw error;
  }
}

export async function getSinglePost(postId) {
  if (!postId) {
    throw new Error('[getSinglePost]: postId parameter is required!');
  }

  console.log('[getSinglePost]: fetching post with id:', postId);

  const url = `${POSTS_ENDPOINT}${postId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `[getSinglePost]: failed to load the post! status: ${response.status}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error('[getSinglePost]:', error);
    throw error;
  }
}
