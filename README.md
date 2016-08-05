<h1 align="center"> UofT-Course-API </h1>
<p align="center">
  <a href="https://www.npmjs.com/package/uoft-course-api"><img src="https://badge.fury.io/js/uoft-course-api.svg" alt="npm version"></a>
  <a href="https://travis-ci.org/jessecordeiro/UofT-Course-API"><img src="https://travis-ci.org/jessecordeiro/UofT-Course-API.svg?branch=master" alt="build status"></a>
</p>

An API wrapper written in Node.js that enables developers to easily interact with the University of Toronto's API to display course information.

<h2>Usage</h2>
<h3>URL</h3>
```
https://uoft-course-api.herokuapp.com/
```
<h3>Parameters</h3>
At least one parameter is required in order to retrieve a valid response.

<h4>Department(s)</h4>
`
org
`

Example: Select Anthropology or type at least the first 3 characters. You can select up to 3 departments (ex. org=csc,ece)
<h4>Course Code</h4>
`
code
`

Example: Select Anthropology or type at least the first 3 characters.
<h4>Session(s)</h4>
`
section
`

Example: F (Fall), S (Winter),Y (both sessions) which refer to term.
<h4>Course Level(s)</h4>
`
studyyear
`

Courses will be shown based on year(s) selected
<h4>Instructor's Last Name</h4>
`
prof
`

Enter any part of the last name. Please be aware that Instructor(s) details may change
<h4>Time(s)</h4>
`
daytime
`

Filter time of day: AM, PM, EVE
<h4>Day(s) of Week</h4>
`
weekday
`

Filter by specific day(s) of the week: MO,TU,WE,TH,FR
<h4>Breadth Requirement(s)</h4>
`
breadth
`

Filter by degree breadth requirements: 1,2,3,4,5
<h4>Only Online Courses</h4>
`
online
`

Retrieve online courses only: t
<h4>Only Courses with Wait List Option</h4>
`
waitlist
`

Retrieve only the courses that have a wait list option available if the course becomes full: t
<h4>Only Meeting Sections with Space</h4>
`
available
`

Retrieve meeting sections that have space available for enrolment: t
<h4>Course Title</h4>
`
title
`

Enter any part of the course title or subtitle

<h3>Example Request</h3>
```
https://uoft-course-api.herokuapp.com/courses?org=csc&studyyear=3&breadth=3&weekday=WE
```


<h2>Response Format</h2>
```
{
    String: {
        "courseId": String,
        "org": String,
        "orgName": String,
        "courseTitle": String,
        "code": String,
        "courseDescription": String,
        "prerequisite": String,
        "corequisite": String,
        "exclusion": String,
        "recommendedPreparation": String,
        "section": String,
        "session": String,
        "webTimetableInstructions": String,
        "breadthCategories": String,
        "distributionCategories": String,
        "meetings": {
            String: {
                "schedule": {
                    String: {
                        "meetingDay": String,
                        "meetingStartTime": String,
                        "meetingEndTime": String,
                        "meetingScheduleId": String,
                        "assignedRoom1": String,
                        "assignedRoom2": String
                    }
                },
                "instructors": {
                  String: {
                        "instructorId": String,
                        "firstName": String,
                        "lastName": String
                    }
                  },
                "meetingId": String,
                "teachingMethod": String,
                "sectionNumber": String,
                "subtitle": String,
                "cancel": String,
                "waitlist": String,
                "online": String,
                "enrollmentCapacity": String,
                "actualEnrolment": String,
                "actualWaitlist": String,
                "enrollmentIndicator": String,
                "meetingStatusNotes": String,
                "enrollmentControls": [
                    {
                        "postId": String,
                        "postCode": String,
                        "postName": String,
                        "subjectId": String,
                        "subjectCode": String,
                        "subjectName": String,
                        "designationId": String,
                        "designationCode": String,
                        "designationName": String,
                        "yearOfStudy": String,
                        "typeOfProgramId": String,
                        "typeOfProgramCode": String,
                        "typeOfProgramName": String,
                        "primaryOrgId": String,
                        "primaryOrgCode": String,
                        "primaryOrgName": String,
                        "secondaryOrgId": String,
                        "secondaryOrgCode": String,
                        "secondaryOrgName": String,
                        "assocOrgId": String,
                        "assocOrgCode": String,
                        "assocOrgName": String,
                        "adminOrgId": String,
                        "adminOrgCode": String,
                        "adminOrgName": String
                    }
                ]
            }
        }
    }
}
```
