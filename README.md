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
