

'use server'
  
  undefined // Set a variable that contains all the fields needed for articles when a fetch for
  // content is performed
  import PropTypes from "prop-types";

  const PROGRAMMES_GRAPHQL_FIELDS = `
    sys{
      id
    }
      title
      priceInfo
      details {
        json
      }
  `;
  const PROGRAMMES_MINI_GRAPHQL_FIELDS =`
    sys{
      id
    }
    cardImage {
            title
            url
            width
            height}
    cardTitle
    details
  
  `
  const HERO_GRAPHQL_FIELDS = `
    sys{
          id
        }
    title
    imagesCollection{
      items{
        sys{
          id
        }
        title
        url
        width
        height
      }
    }
  `
  const ABOUT_GRAPHQL_FIELDS = `
    image{
      title
      url
      height
      width
    }
    sys{
      id
    }
    title
    discription
  `
  const STUDY_ABROAD_GRAPHQL_FIELDS=`
    sys{
      id
    }
    title
    priceInfo
    first{
      json
    }
    second{
      json
    }
  `
  async function fetchGraphQL(query, preview = false) {
    try {
      const response = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              preview
                ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                : process.env.CONTENTFUL_ACCESS_TOKEN
            }`,
          },
          body: JSON.stringify({ query }),
          next: { tags: ["programeCard","programMiniCard"], revalidate: 30 }, // Cache for 30sec 
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
      }
  
      const json = await response.json();
  
      if (json.errors) {
        throw new Error(`GraphQL error: ${JSON.stringify(json.errors)}`);
      }
  
      return json;
    } catch (error) {
      console.error("Error fetching data from Contentful:", error.message);
      return null;
    }
  }
  

  
  // Generic function to extract entries from a collection
function extractEntries(fetchResponse, collectionName) {
  return fetchResponse?.data?.[collectionName]?.items[0] || [];
}

// Generic function to construct and execute GraphQL queries
async function fetchCollection(id, isDraftMode, collectionName, fields) {
  if (typeof id !== "string" || id.trim() === "") {
    throw new Error("The 'ID' parameter must be a non-empty string.");
  }

  const query = `
    query {
      ${collectionName}(where: { sys: { id: "${id}" } }, limit: 1) {
        items {
          ${fields}
        }
      }
    }
  `;
  
  const response = await fetchGraphQL(query, isDraftMode);
  return extractEntries(response, collectionName);
}

// Specialized utility functions for each collection
export async function getAllProgrammes(limit = 3, isDraftMode = false) {
  if (typeof limit !== "number" || limit <= 0) {
    throw new Error("The 'limit' parameter must be a positive number.");
  }

  const query = `
    query {
      programeCardCollection(limit: ${limit}) {
        items {
          ${PROGRAMMES_GRAPHQL_FIELDS}
        }
      }
    }
  `;
  const response = await fetchGraphQL(query, isDraftMode);
  return extractEntries(response, "programeCardCollection");
}

export async function getProgramme(id, isDraftMode = false) {
  return fetchCollection(id, isDraftMode, "programeCardCollection", PROGRAMMES_GRAPHQL_FIELDS);
}

export async function getMiniCard(id, isDraftMode = false) {
  return fetchCollection(id, isDraftMode, "programMiniCardCollection", PROGRAMMES_MINI_GRAPHQL_FIELDS);
}

export async function getHero(id, isDraftMode = false) {
  return fetchCollection(id, isDraftMode, "heroCollection", HERO_GRAPHQL_FIELDS);
}

export async function getAbout(id, isDraftMode = false) {
  return fetchCollection(id, isDraftMode, "aboutCollection", ABOUT_GRAPHQL_FIELDS);
}

export async function getStudyAbroad(id, isDraftMode = false) {
  return fetchCollection(id, isDraftMode, "studyAbroadCollection", STUDY_ABROAD_GRAPHQL_FIELDS);
}

  // PropTypes for parameter validation

  const commonPropTypes = {
    id: PropTypes.string.isRequired,
    isDraftMode: PropTypes.bool,
  };

  getAllProgrammes.propTypes = {
    limit: PropTypes.number,
    isDraftMode: PropTypes.bool,
  };
  
  getProgramme.propTypes = commonPropTypes
  getMiniCard.propTypes = commonPropTypes
  getHero.propTypes = commonPropTypes
  getAbout.propTypes = commonPropTypes
  getStudyAbroad.propTypes = commonPropTypes
  


 