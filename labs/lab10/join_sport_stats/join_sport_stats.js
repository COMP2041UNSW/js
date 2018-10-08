/*
* Given a list of career statistics for a team of rugby players,
* a list of player names, and a list of team names, in the format below:
*
* players
* {
*     "players": [
*         {
*             "id": 112814,
*             "matches": "123",
*             "tries": "11"
*         }
*     ],
*     "team": {
*         "id": 10,
*         "coach": "John Simmons"
*     }
* }
*
* names
* {
*     "names": [
*         {
*             "id": 112814,
*             "name": "Greg Growden"
*         }
*     ]
* }
*
* teams
* {
*     "teams": [
*         {
*             "id": 10,
*             "team": "NSW Waratahs"
*         }
*     ]
* }
*
* Write a function that returns a 'team sheet' that lists
* the team, coach, players in that order in the following list format.
*
* [
*     "Team Name, coached by CoachName",
*     "1. PlayerName",
*     "2. PlayerName"
*     ....
* ]
*
* Where each element is a string, and the order of the players
* is ordered by the most number of matches played to the least number of matches played.
*
* For example, given the following the 3 arguments:
*
* teamData =
* {
*     "players": [
*         {"id": 1,"matches": "123", "tries": "11"},
*         {"id": 2,"matches": "1",   "tries": "1"},
*         {"id": 3,"matches": "2",   "tries": "5"}
*     ],
*     "team": {
*         "id": 10,
*         "coach": "John Simmons"
*     }
* }
*
* namesData =
* [
*    {"id": 1, "John Fake"},
*    {"id": 2, "Jimmy Alsofake"},
*    {"id": 3, "Jason Fakest"}
* ]
*
* teamsData =
* [
*     {"id": 10, "Greenbay Packers"},
* ]
*
* makeTeamList should return
*
* [
*     "Greenbay Packers, coached by John Simmons",
*     "1. John Fake",
*     "2. Jason Fakest",
*     "3. Jimmy Alsofake"
* ]
*
* test with
* `node test.js team.json names.json teams.json`
*/


function (teamData, namesData, teamsData) {

	// PUT YOUR CODE HERE
    // Take it step by step.

}

module.exports = makeTeamList;
