# honestdayswork
Showcase of my stack knowledege

DRAFT

Selenium Test cases
- Website availability - SportradarWebsiteAvailability.js
    This test opens a browser, navigates to sportradar.com, checks if there are no css errors present.
- Hover over button test - hover-overCssChange.js
    This test opens a browser, navigates to sportradar.com, clicks the "Accept all" button, seraches for the "Betting & Gaming" menu, gets its colour, hovers the mouse over it, gets its colour when the mouse is hovered over it, compares the two colours if they are different.
- Contact us test - submitButtonErrorHandling.js
    This test opens a browser, navigates to sportradar.com, clicks the "Accept all" button, clicks the Submit button, checks if the error message appears.
- Career site filter bar test - careerSearchBar.js
    This test opens a browser, navigates to sportradar.com, clicks the "Accept all" button, clicks the "Remote location" checkbox, checks if the number of entries in the job list has changed, clicks the "Location" button, checks the number of elements in the drop-down list, enters data into the "Filter by title, expertise" field, clicks the "Search" button.

 Postman API tests

 - GetReq
    A get request which includes further checks if the Content-Type is present in the response, if the response code is 200, and the Content-Type header is present, and set to application/json
- PostReq
    A post request where in the body I check how doest the api handles different data-types, if the sent data is matching the response data, and the status code is either 201 or 202.   
- UpdateReq
    A patch request where the test verifes if data have been updated.
- DeleteReq
    A delete request where the test check if the status code is 204
-BadReq
    A request that is sent to a non-existing endpoint to test if the status code is 404
    
Dependencies
- node.js
- selenium webdriver mocha
