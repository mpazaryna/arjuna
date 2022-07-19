import { gql } from '@apollo/client';

export const PAGES = gql`
  query MyQuery {
    pages {
      id
      publishedAt
      slug
      subtitle
      tags
      title
    }
  }
`;

export const RESOURCES = gql`
  query MyQuery {
    resources {
      id
      title
      url
      content {
        html
        text
      }
    }
  }
`;

export const PAGE_BY_ID = gql`
  query MyQuery($id: ID!) {
    page(where: { id: $id }) {
      id
      title
      content {
        html
        text
      }
    }
  }
`;

export const ASANAS = gql`
  query {
    asanas {
      id
      english
      sanskrit
      excerpt
      description {
        text
      }
    }
  }
`;

/** Specific Post gql query */
export const ASANA = gql`
  query getAsana($id: ID!) {
    asanas(where: { id: $id }) {
      id
      english
      sanskrit
      slug
      image {
        url
      }
      description {
        text
        html
      }
    }
  }
`;

export const AUTHOR = gql`
  query MyQuery($id: ID!) {
    author(where: { id: $id }) {
      name
      biography
      fullBio {
        html
      }
      picture {
        id
        locale
        url
      }
      posts {
        title
        slug
        id
      }
    }
  }
`;

export const AUTHORS = gql`
  query MyQuery {
    authors {
      id
      name
      title
      posts {
        id
        title
      }
    }
  }
`;

export const POSTS = gql`
  query {
    posts {
      id
      title
      slug
      createdAt
      excerpt
    }
  }
`;

/** Specific Post gql query */
export const BLOG_POST = gql`
  query getPost($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      slug
      createdAt
      content {
        html
      }
      author {
        name
      }
    }
  }
`;
