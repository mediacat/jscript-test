# Benjamin Adcock
## Abeja Javascript Test ##

**A javascript survey created using node.js, with a bootrap framworked fronted and MongoDB for storage** 


----------

## How to setup ##

On line 2 of models/models.js there is a connection line to a local instance of mongobd

> mongoose.connect('mongodb://localhost/abejatest');

Please change this to point to your local or online mongodatabase and if you want to change the collection name to something other than abejatest feel free!

## How to use ##

- Please go to the homepage of the site, choose your sex , and how you feel at the moment (Hunger 0-5, Tired 0-5 and Sleepy (0-5)
- Sumbit your survey answers
- You will be presented with the results page

## About the site ##

There are two main pages to the site, The survey page and the results page.

The Survey is located at the root of the site e.g. localhost/
The Survey Results are located at /SurveyResults e.g. localhost/SurveyResults

There is a simple api used to get all results out of the site located /results
API help can be found at /results/help


----------

# What could improve the system (Assuming this is a hotel)#

Statistical analyisis not only by day but by date range.
Including the age of the subject could add to some detailed demographic information
Including the room number into the results again will add to the analytics on offer for example:

Results such as on average when we have a guest aged between 20-30 arriving at our establishment they tend to be hungry more than sleepy, so the kitchen could buy in more /less food on these analytics.

Equally if everybody in room 207 despite their age is not feeling sleepy but they are tired maybe there is a reason such as room lets in too much light or room is in a loud area of the hotel.  




 
