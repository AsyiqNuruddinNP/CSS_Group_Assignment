# CSS Group Project
## Assignment Objectives
To assess a student's ability to implement a web application built using a modern front-end
framework, integrating with JavaScript's rich ecosystem of libraries.
## Assignment Description
In this assignment, students are to apply the web development concepts taught over the first 13
weeks of the module to create a website with multiple pages.
Students are expected to demonstrate an understanding of how vanilla JavaScript and
JavaScript libraries can be integrated to form an application, and not just create static web
pages.
## Scope
This assignment is to be completed in groups of 3-4 students.
While this is a group assignment, students will be graded individually on the pages that they
create, and the shared layouts will be graded as group marks.
Students are also required to submit a reflection which will be graded individually.
## Project Guideline
Each team is to come up with a theme of their own. When selecting a theme, please be mindful
that all members in the team must be agreeable to it.
Students are tasked with the individual creation of their own pages, whose functionality and
content should be related to the group's chosen theme.
A list of sample themes and a breakdown of possible features in a page has been listed in the
subsequent sections towards the end.
Each group is to nominate a leader, who will need to inform the tutor of the grouping and theme.
The leader will also be responsible for making the submissions for the assignment, as well as
coordinate consultation with the tutor if necessary.
Page 2 of 9 Last Update: 2023-12-30
## Collaboration and Version Control
Students are encouraged to use some form of version control such as git to maintain their
project. A platform such as GitHub should be used to maintain a remote repository of the
codebase for each member to work collaboratively.
Do take the time to explore how to use git and GitHub to work simultaneously as a group over
the course of the assignment.
## Usage of libraries
Usage of libraries is highly encouraged but not mandated. Students are expected to exercise
their own judgment when deciding whether to integrate a library or write a feature on their own
in vanilla JavaScript.
When adding a library, please ensure that students are to indicate why they have chosen a
particular library and what purpose it fulfills.
It is entirely up to the student which libraries they may want to integrate within their applications,
as long as they are appropriately used. Do note that integrating more libraries does not translate
to showing an aptitude at being able to work with the JavaScript ecosystem.
Since React itself is a JavaScript library that students are integrating into the web application
they are building, this is the bare minimum that they should be able to work with. However, the
module only covers a very limited subset of functionality and features that the React library
offers (to name a few: useContext, server components, memoization).
As we're working with the Next.js framework, this is another library where students are also
encouraged to utilize more features that it offers than those already taught in class, to
accomplish additional features.
Page 3 of 9 Last Update: 2023-12-30
## Interactive features
Students are to make their pages interactive, such that users can interact with it.
Students are strongly encouraged to have input fields and buttons on the page as elements that
the users can interact with. This is not a mandatory requirement, since it is possible for the page
to receive user interaction even without the use of page elements.
## Non-interactive features
Students are also encouraged to explore the following non-interactive features:
● Component or UI libraries
● Data fetching from external APIs
● Browser storage API
● Pages that work offline (on subsequent visits)
## Code Ownership
When creating or editing a page or component, students are to indicate their name and the
changes they have made as a comment at the top of the file.
On top of that, students are to list out the code files they have created within the reflection. Files
not listed will not be taken into consideration for grading.
## Reflection
Please be aware that there is no page or word limit.
The purpose of the reflection is to have students explain their design decisions, such as why a
certain JavaScript library was chosen to be integrated (perhaps it helps fulfill a particular feature
much more easily).
Any decisions taken that are not appropriate to be left within the source code files itself should
be written here, as well as a walkthrough on how to use the features on the page.
Students can also choose to talk about any difficulties faced while embarking on the project, and
if they worked together with any other member for a feature.
Any references made should also be listed here. No particular citation format is mandated, but
please ensure that it is neat, tidy, and easy to read.
## Deductions
Non-adherence to any of the listed criteria in the aforementioned sections may result in a
deduction of marks from the individual and/or group component.
Here is an additional list (non-exhaustive) of basic coding practices that students should ensure
are followed:
● Information included in the webpages should be relevant
Page 5 of 9 Last Update: 2023-12-30
● Deprecated HTML elements should not be used
○ MDN documentation will indicate if it has been deprecated
● Files are well organized
○ Media files should be kept within the public folder (unless there is a good reason
not to, e.g. restricting public access)
● Unused code should be removed from the submission
○ Any files with code that is not called by others
○ Libraries that no one is using should not be listed in package.json
Students may additionally refer to a style guide from reputable organizations for good coding
practices. Some of these will have been covered in class, but do take the chance to explore
others, as well as discuss them within the group to discuss common adoption. Some possible
style guides have been listed below.
https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_sty
le_guide/JavaScript
https://google.github.io/styleguide/jsguide.html
https://github.com/airbnb/javascript
## Submission Criteria
A zip file should be submitted with the following naming convention:
TUTORIALGROUP_LEADERSFULLNAME_LEADERSSTUDENTID.zip
Please note that only one submission should be made per group.
## Project theme samples
Please be reminded that these are just a few samples to show how a group may frame their
pages to match a common theme.
### Theme: Browser based games
Student A: Game written with JS framework
Student B: Interactive game guide
Student C: Static page about the history of games
Student D: Game written with JS framework, changes to user settings are saved locally and
retrieved on page load
Page 6 of 9 Last Update: 2023-12-30
### Theme: Covid
Student A: Live data displayed with charts and graphs on Covid infections
Student B: Interactive heatmap of Covid infections
Student C: Interactive chart and graph of Covid infections within Singapore, with time based
filters
Student D: Static page on what covid is and what are the prevalent strains over time
### Theme: Food
Student A: Interactive map to search predefined list of food places
Student B: Recipe page with calculators to convert between different units of measurement
Student C: Gallery of different cuisines' dishes, images viewed through a carousel that has been
implemented from scratch
### Theme: Transport
Student A: Interactive map to find parking spaces
Student B: Page to view bus arrival information
Student C: Realtime Singapore-Malaysia causeway traffic situation through pictures
Page 7 of 9 Last Update: 2023-12-30
## Fetching data from external sources
Students are strongly encouraged to explore the functionality of data fetching, to work with
making API calls from external sources.
A possible resource for data is the Singapore Government's data.gov.sg website, which has a
collection of real-time APIs that students may call for metrics such as the PSI or weather
forecast. There's also geospatial data (locations) that can be used to plot out an interactive map
or searching system. Another resource is the historical data sets in the form of csv files, where
an interactive dashboard could be made to search this data, which could be filtered by
parameters such as date and locations.
The LTA Datamall is another possible source for real-time APIs, though a free account is
required for an API key.
## Sharing of API keys
Students are to submit API keys for any API calls the app makes, that require one.
If students are not comfortable with sharing such keys within the team, please send them to the
tutor directly.
Do note that it is still possible to revoke or regenerate (get a new API key). Make sure to only do
so after the submission has been graded.
Please do not misuse the API keys of another student shared for the purposes of the
assignment.
Page 8 of 9 Last Update: 2023-12-30
Acknowledgement of pictures/videos
Students are to give credit to the author of any non-Creative Commons media, such as pictures
or videos, utilized in the project. Students are encouraged to utilize Creative Commons media
whenever possible.
## Plagiarism and Copyright Issues
Ngee Ann Polytechnic (NP) develops students to uphold good academic practices, academic
integrity and respect for the works of others. These practices are guided by the NP Plagiarism
Policy which mandates that students assume full responsibility for the content and integrity of
the academic work they submit.
Plagiarism means, "copying any part of a source, and then submitting it, claiming that it is your
own work."
Please ensure that all the works submitted by you are not copied from other sources. Any
attempt to plagiarize will be dealt with severely, and it may result in your failing the module. If
you have made any references to certain materials, make sure you cite the sources by
acknowledging and providing the information necessary to find the source (e.g. Title and author
of book, Internet links, etc.)
If a student is found to have submitted work not done by him/her, he/she will not be awarded
any marks for this assignment. Disciplinary action may also be taken.
Similar action will be taken for the student who allows other student(s) to copy his/her work.
Please refer to the following URL for more details:
https://www1.np.edu.sg/clte/antiplagiarism/index.html

## Authors

- [@Asyiq Nuruddin](https://www.github.com/AsyiqNuruddinNP)
- [@Jia Xiang](https://github.com/khoojiaxiang)
- [@Sudarshan](https://github.com/S10256990)
- [@AKeith](https://github.com/HellR4iser69)
