import StoryblokClient from 'storyblok-js-client';

const client = new StoryblokClient({
  accessToken: import.meta.env.PUBLIC_API_KEY,
});

export const defaultRequestConfig = {
  version: 'draft',
};

export default client;
