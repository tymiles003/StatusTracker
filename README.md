StatusTracker
=============

An application that tracks the status of the employees

Requirements
------------
1. Employee can register and login
2. Employee can save their day progress in EOD status format.
3. Employee can update his status of a given day.
3. Employee can update his leaves.

Admin role
----------
1. Admin can regiter and update his status.
2. Admin can view the status of all Employees.
3. Admin can export an excel having the status of all Employees for a given day but not a day range.


Web Service to be used
----------------------
restify is a RESTful framework. More can be seen at http://mcavage.me/node-restify/

Hosting of web service
------------
Using NSSM.

Database
--------
MongoDB is being used as NoSQL database. Framework used in node.js to interact with MongoDB is mongoose (mongoosejs.com/docs/index.html)

Writing Excel
-------------
For exporting things in excel(https://npmjs.org/package/msexcel-builder)


