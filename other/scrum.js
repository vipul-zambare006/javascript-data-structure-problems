const opn = require("open");
(async () => {
  await opn(
    "https://docdocltd.atlassian.net/secure/RapidBoard.jspa?rapidView=4&projectKey=WEB"
  );

  await opn(
    "https://docdocltd.atlassian.net/secure/RapidBoard.jspa?rapidView=2&projectKey=NETSUITE"
  );

  await opn(
    "https://docdocltd.atlassian.net/jira/software/projects/DEVOPS/boards/12"
  );
})();
