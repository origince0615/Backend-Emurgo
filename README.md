# Explain about the Project
  This project is built using NodeJs and Express. It provides a server that listens for GET requests and uses the GNews API to fetch articles based on different parameters. The GNews API requires an API key, which is read from the `.env` file using the `dotenv` library.

The following endpoints are available for fetching articles: 

- `/fetch-articles` - Fetches articles based on a keyword and category. The number of articles to fetch is passed as a query parameter.
    like "http://localhost:3000/fetch-articles?keyword=technology&num=15&category=world"
    Parameters:
      - `num`: Number of articles to be returned in the response.
      - `category`: Category to search articles. Can be **breaking-news**, **world**, **nation**, **business**, **technology**, **entertainment**, **sports**, **science**, and **health**.

- `/find-by-author` - Fetches articles based on the author of an article. The number of articles to fetch is passed as a query parameter. 
    like "http://localhost:3000/find-by-author?author=Charles&num=2"
     Parameters:
    - `author`: Author to search articles
    - `num`: Number of articles to fetch
- `/find-by-title` - Fetches articles based on a title of an article. The number of articles to fetch is passed as a query parameter. 
    like "http://localhost:3000/find-by-title?title=Google&num=3"
    Parameters:
    - `title`: Title to search articles
    - `num`: Number of articles to fetch
- `/search-by-keyword` - Fetches articles based on a keyword. The number of articles to fetch is passed as a query parameter.
    like "http://localhost:3000/search-by-keyword?keyword=React&num=3"
    Parameters:
    - `keyword`: Keyword to search articles
    - `num`: Number of articles to fetch

The code will return the data in a JSON format containing the articles details that match the given keyword/title/author.

# How to run the project
 To run the project, clone the repository, navigate to the project directory, install the necessary dependencies(**npm install**), just change the **GNEWS_API_KEY** file in the **.env** file And also if you want to change the **PORT**, also create the **PORT** in the **.env** file If you not, the default **PORT** will be **3000**. After that start the server suing this command **npm start**.