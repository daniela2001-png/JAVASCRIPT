# Content Creators Contracting

------------

## Project Overview

------------

In this project, you have been hired by a “professional” company, Content Creators Contracting, to write a function that signs their HTTP requests with the proper content types. Normally this behavior is handled by the browser, but they really mucked things up in thinking they could solve this problem better. Now, none of their files are loading properly.

They have managed to craft the code to get the file extension from a string containing a filename and store it in a variable called ‘extension’

------------
    const extension = filename.match(/.*\.([^\.]*)$/)[1];

------------
## Implementation Details

------------

#### To complete this project, your code will need to contain the following:

A function called getContentType, which will take a string representing a filename and return the proper content-type extension. You will need implement the functionality for determining content types for :

1. **text/html**
1. **text/css**
1. **image/jpeg**
1. **text/plain**

------------

## Testing

------------

To run these tests, first open the root project directory in your terminal. Then run **npm install** to install all necessary testing dependencies (you will only need to do this step once). Finally,  run **npm run test**. You will see a list of tests that ran with information about whether or not each test passed. After this list, you will see more specific output about why each failing test failed.

------------
[WEBPAGE:](https://s3.amazonaws.com/codecademy-content/programs/build-apis/projects/build-apis-project-0-content-creators/index.html)
 
